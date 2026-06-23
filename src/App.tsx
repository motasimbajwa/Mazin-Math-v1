/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, BookOpenText, MessageSquare, Menu, Book, Paperclip, X, Printer, CheckCircle2, Brain } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { courseContent } from './data';
import { InteractivePlot } from './InteractivePlot';
import { ProblemSolvingFlow } from './ProblemSolvingFlow';
import { ActiveRecallArea } from './ActiveRecallArea';

import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to preprocess LaTeX returned by Gemini to be compatible with react-katex
export function preprocessLaTeX(text: string) {
  if (!text) return text;
  return text
    .replace(/\\\[([\s\S]*?)\\\]/g, (_, match) => `$$$${match}$$$`)
    .replace(/\\\(([\s\S]*?)\\\)/g, (_, match) => `$$${match}$$`)
    .replace(/∫_0\^\{x\^2\} sqrt\(t\^4 \+ t\^3\) dt/g, '$\\int_0^{x^2} \\sqrt{t^4 + t^3} d t$')
    .replace(/∫_a\^\{g\(x\)\} f\(t\) dt/g, '$\\int_a^{g(x)} f(t) d t$')
    .replace(/g\(x\) = x\^2/g, '$g(x) = x^2$')
    .replace(/g'\(x\) = 2x/g, "$g'(x) = 2x$")
    .replace(/f\(t\) = sqrt\(t\^4 \+ t\^3\)/g, '$f(t) = \\sqrt{t^4 + t^3}$')
    .replace(/f\(g\(x\)\) = sqrt\(\(x\^2\)\^4 \+ \(x\^2\)\^3\) = sqrt\(x\^8 \+ x\^6\)/g, '$f(g(x)) = \\sqrt{(x^2)^4 + (x^2)^3} = \\sqrt{x^8 + x^6}$')
    .replace(/2x \* sqrt\(x\^8 \+ x\^6\)/g, '$2x \\sqrt{x^8 + x^6}$')
    .replace(/2x sqrt\(x\^8 \+ x\^6\)/g, '$2x \\sqrt{x^8 + x^6}$')
    .replace(/d\/dx\(x\^2\)/g, '$\\frac{d}{dx}(x^2)$');
}

type Message = {
  role: 'user' | 'model';
  parts: Array<{ text: string } | { inlineData: { mimeType: string; data: string } }>;
};

const QuizQuestion = ({ question, children }: { question: string, children: React.ReactNode }) => {
  const [selectedFile, setSelectedFile] = useState<{ url: string; data: string; mimeType: string } | null>(null);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string; mistakes?: string[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        const b64Data = result.split(',')[1];
        setSelectedFile({
          url: URL.createObjectURL(file),
          data: b64Data,
          mimeType: file.type
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim() && !selectedFile) return;
    
    setLoading(true);
    setFeedback(null);
    
    // We construct a specific payload for the grading API logic on the server
    const parts: any[] = [];
    parts.push({ text: `Please grade the following answer for the question: "${question}".\nUser's text answer: ${answer || "None provided"}`});
    if (selectedFile) {
      parts.push({ inlineData: { mimeType: selectedFile.mimeType, data: selectedFile.data } });
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', parts }] }),
      });
      
      if (!response.ok) throw new Error("Failed to evaluate");
      const data = await response.json();
      const text = data.text as string;
      
      const isCorrect = text.toUpperCase().includes('CORRECT') && !text.toUpperCase().includes('INCORRECT');
      
      setFeedback({
        correct: isCorrect,
        message: text,
      });
    } catch(err) {
      setFeedback({ correct: false, message: "Failed to connect to grading server."});
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
      <div className="text-slate-800 font-medium mb-4">
        {children}
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label className="text-sm font-semibold text-slate-600">Your Answer or Derivation</label>
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <input 
            type="text" 
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="flex-1 bg-white border border-slate-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500/50 outline-none"
            placeholder="Type your final answer here..."
            disabled={loading}
          />
          
          <div className="flex gap-2">
            <input 
              type="file"
              accept="image/*,.pdf"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
              className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-100 flex items-center gap-2 transition-colors focus:ring-2 focus:ring-slate-400/50 outline-none"
            >
              <Paperclip className="w-4 h-4" />
              Upload Image
            </button>
            <button
              type="submit"
              disabled={loading || (!answer.trim() && !selectedFile)}
              className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 flex items-center gap-2 transition-colors disabled:bg-slate-400 shadow-sm"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              Submit
            </button>
          </div>
        </div>
        
        {selectedFile && (
           <div className="relative inline-block mt-2">
             <div className="text-xs text-slate-500 mb-1">Attached Solution:</div>
             <img src={selectedFile.url} className="h-24 w-auto object-cover rounded border border-slate-200 shadow-sm" alt="Upload preview" />
             <button
               type="button"
               onClick={() => {
                 URL.revokeObjectURL(selectedFile.url);
                 setSelectedFile(null);
                 if (fileInputRef.current) fileInputRef.current.value = "";
               }}
               className="absolute top-5 -right-3 bg-red-500 text-white p-1 rounded-full opacity-0 hover:opacity-100 hover:-translate-y-1 group-hover:opacity-100 transition-all shadow-md"
             >
               <X className="w-3 h-3" />
             </button>
           </div>
        )}
      </form>
      
      {feedback && (
        <div className={cn(
          "mt-5 p-4 rounded-lg flex flex-col gap-3 animate-in fade-in slide-in-from-top-2",
          feedback.correct ? "bg-emerald-50 border border-emerald-200" : "bg-indigo-50 border border-indigo-200"
        )}>
          <div className="flex items-center gap-2 font-bold text-sm">
             {feedback.correct ? (
               <span className="text-emerald-700">✅ Correct Formulation</span>
             ) : (
               <span className="text-indigo-700">Detailed Reinforcement</span>
             )}
          </div>
          <div className={cn(
            "prose prose-sm max-w-none prose-p:leading-relaxed", 
            feedback.correct ? "prose-emerald text-emerald-800" : "prose-indigo text-indigo-900"
          )}>
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>
              {preprocessLaTeX(feedback.message)}
            </ReactMarkdown>
          </div>
          {!feedback.correct && (
            <button 
              onClick={() => { setFeedback(null); setSelectedFile(null); setAnswer(""); }}
              className="mt-2 self-start px-4 py-1.5 bg-white border border-indigo-300 text-indigo-600 text-sm font-medium rounded-md hover:bg-indigo-50 transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const ReinforcementArea = () => {
  const [weakAreas] = useState([
    {
      concept: "Limits of Multivariable Functions (Two-Path Test)",
      mistake: "Assumed limit exists because path x=0 and path y=0 yielded the same result.",
      explanation: "Even if approaching along the coordinate axes yields the same limit, approaching along a different path (like $y=mx$ or $y=x^2$) might yield a different result. If any two paths give different limits, the limit does not exist.",
      exercises: [
        "Find the limit or show it does not exist: $\\lim_{(x,y) \\to (0,0)} \\frac{xy}{x^2+y^2}$",
        "Evaluate $\\lim_{(x,y) \\to (0,0)} \\frac{x^2y}{x^4+y^2}$ along the path $y=x^2$."
      ]
    }
  ]);

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-6 shadow-sm mb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
      <h2 className="text-xl font-bold text-indigo-900 mb-2 flex items-center gap-2">
        <BookOpenText className="w-5 h-5" />
        Reinforcement Area: Weak Concepts Tracker
      </h2>
      <p className="text-slate-600 mb-6 text-sm">
        This area tracks your weak concepts and common mistakes detected during your learning and exercises. Review the concepts below and practice the exercises to strengthen your understanding. All notations are strictly rigorously formatted.
      </p>

      {weakAreas.map((area, idx) => (
        <div key={idx} className="bg-white border border-indigo-100 rounded-xl p-5 mb-4 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
          <h3 className="font-bold text-lg text-slate-800 mb-2">{area.concept}</h3>
          
          <div className="mb-4 bg-red-50 text-red-800 border border-red-100 p-3 rounded-lg text-sm">
            <span className="font-bold">Common Mistake:</span> {area.mistake}
          </div>
          
          <div className="mb-6 prose prose-sm max-w-none text-slate-700">
            <strong>Rigorous Explanation:</strong> 
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>
              {preprocessLaTeX(area.explanation)}
            </ReactMarkdown>
          </div>
          
          <div className="border-t border-slate-100 pt-4 mt-4">
            <h4 className="font-bold text-sm text-slate-800 mb-3">Targeted Exercises</h4>
            {area.exercises.map((ex, exIdx) => (
              <QuizQuestion key={exIdx} question={ex}>
                <div className="text-slate-700 text-sm">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>
                    {preprocessLaTeX(`**Exercise ${exIdx + 1}:** ${ex}`)}
                  </ReactMarkdown>
                </div>
              </QuizQuestion>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const GuidedTour = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(1);
  
  if (step === 1) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/40 flex items-center justify-start pointer-events-none">
        {/* Pulsing indicator on the target menu */}
        <div className="absolute left-64 top-24 w-6 h-6 bg-indigo-500 rounded-full animate-ping opacity-75 hidden lg:block"></div>
        <div className="absolute left-64 top-24 w-6 h-6 bg-indigo-600 rounded-full shadow-lg border-2 border-white hidden lg:block"></div>
        
        <div className="ml-4 lg:ml-72 w-80 bg-white p-6 rounded-xl shadow-2xl relative pointer-events-auto mt-20 animate-in fade-in zoom-in-95 duration-200">
          <svg className="absolute -left-12 top-6 w-12 h-12 text-white hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          <h3 className="font-bold text-lg text-indigo-900 mb-2">1. Course Index</h3>
          <p className="text-sm text-slate-600 mb-4">Navigate through all chapters here. Each chapter has its own progress bar to keep you on track.</p>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-400">Step 1 of 3</span>
            <button onClick={() => setStep(2)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition shadow-md">Next</button>
          </div>
        </div>
      </div>
    );
  } else if (step === 2) {
    return (
       <div className="fixed inset-0 z-50 bg-slate-900/40 flex items-center justify-center pointer-events-none p-4">
        <div className="max-w-sm bg-white p-6 rounded-xl shadow-2xl relative pointer-events-auto animate-in fade-in zoom-in-95 duration-200 mt-20">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
             <div className="w-6 h-6 bg-indigo-600 rounded-full shadow-lg border-2 border-white animate-pulse"></div>
             <div className="h-6 w-1 bg-white"></div>
          </div>
          <h3 className="font-bold text-lg text-indigo-900 mb-2">2. Learning & Reinforcement</h3>
          <p className="text-sm text-slate-600 mb-4">Read the rigorous textbook content in the center. At the top, the <span className="font-semibold text-indigo-700">Reinforcement Area</span> tracks your weak concepts and checks them via targeted exercises based on your specific mistakes.</p>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-400">Step 2 of 3</span>
            <button onClick={() => setStep(3)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition shadow-md">Next</button>
          </div>
        </div>
      </div>
    );
  } else if (step === 3) {
    return (
       <div className="fixed inset-0 z-50 bg-slate-900/40 flex items-center justify-end pointer-events-none p-4">
        {/* Pulsing indicator on the target menu */}
        <div className="absolute right-96 top-24 w-6 h-6 bg-indigo-500 rounded-full animate-ping opacity-75 hidden lg:block"></div>
        <div className="absolute right-96 top-24 w-6 h-6 bg-indigo-600 rounded-full shadow-lg border-2 border-white hidden lg:block"></div>
        
        <div className="mr-0 lg:mr-[26rem] w-80 bg-white p-6 rounded-xl shadow-2xl relative pointer-events-auto mt-20 animate-in fade-in zoom-in-95 duration-200">
           <svg className="absolute -right-12 top-6 w-12 h-12 text-white hidden lg:block transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          <h3 className="font-bold text-lg text-indigo-900 mb-2">3. Tutor Chat</h3>
          <p className="text-sm text-slate-600 mb-4">Discuss topics, upload handwritten solutions for grading, and ask questions here. Mistakes here will feed mathematically rigorous feedback into your Reinforcement Area.</p>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-400">Step 3 of 3</span>
            <button onClick={onComplete} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition shadow-md">Finish Tour</button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState<string>(courseContent[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'reading' | 'reinforcement' | 'active-recall'>('reading');

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      parts: [
        {
          text: "Welcome. I am your Multivariable Calculus Self-Study Tutor. We will proceed with the 'Calculus Made Easy' philosophy: rigorous, step-by-step, and accessible. The course content is loaded on your left. Whenever you are ready, ask me questions, or upload an image of your solution using the attachment button for instant grading.",
        },
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [tourCompleted, setTourCompleted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ url: string; data: string; mimeType: string } | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result as string;
        const b64Data = result.split(',')[1];
        setSelectedImage({
          url: URL.createObjectURL(file),
          data: b64Data,
          mimeType: file.type
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const removeSelectedImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage.url);
      setSelectedImage(null);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showChat]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        // Optionally open chat
        setShowChat(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!input.trim() && !selectedImage) || isLoading) return;

    let parts: any[] = [];
    if (input.trim()) {
      parts.push({ text: input.trim() });
    } else {
      parts.push({ text: "Attached mathematical solution for review." });
    }
    
    if (selectedImage) {
      parts.push({
        inlineData: {
          mimeType: selectedImage.mimeType,
          data: selectedImage.data
        }
      });
    }

    const userMessage: Message = { role: 'user', parts };
    let currentMessages = [...messages, userMessage];
    
    setMessages(currentMessages);
    setInput('');
    removeSelectedImage();
    setIsLoading(true);

    try {
      let fullResponse = '';
      let continueCount = 0;
      const MAX_CONTINUATIONS = 5;

      while (continueCount < MAX_CONTINUATIONS) {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: currentMessages }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch response');
        }

        const data = await response.json();
        const chunk = data.text;
        fullResponse += chunk;

        // Stop if the chapter is complete or we've reached max continuations
        if (chunk.includes('[END_OF_CHAPTER]') || continueCount === MAX_CONTINUATIONS - 1) {
          break;
        }

        // Otherwise, ask the model to continue
        currentMessages = [
          ...currentMessages,
          { role: 'model', parts: [{ text: chunk }] },
          { role: 'user', parts: [{ text: 'CONTINUE. Generate the next section exactly where you left off. Do not repeat previous content.' }] }
        ];
        continueCount++;
      }

      setMessages([...currentMessages.slice(0, currentMessages.length - (continueCount * 2)), 
                   { role: 'model', parts: [{ text: fullResponse }] }]);
    } catch (error) {
      console.error('Error fetching chat:', error);
      setMessages([
        ...currentMessages,
        { role: 'model', parts: [{ text: "I apologize, but I encountered an error connecting to my neural core. Please assure your API key is configured correctly and try again." }] }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToSection = (chapterId: string, subId?: string) => {
    setActiveChapterId(chapterId);
    setActiveTab('reading');
    setShowMobileSidebar(false);
    
    if (subId) {
      setTimeout(() => {
        const el = document.getElementById(subId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setTimeout(() => {
        const el = document.getElementById(chapterId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const activeChapter = courseContent.find(c => c.id === activeChapterId) || courseContent[0];

  return (
    <div className="flex flex-col h-screen bg-white font-sans overflow-hidden print:h-auto print:overflow-visible">
      {!tourCompleted && <GuidedTour onComplete={() => setTourCompleted(true)} />}
      
      {/* Header */}
      <header className="flex-shrink-0 bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between text-white shadow-md z-30 print:hidden">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
            className="p-2 lg:hidden rounded-md hover:bg-slate-800 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="bg-indigo-500 p-1.5 rounded-lg text-white">
            <BookOpenText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">Multivariable Calculus Tutor</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.print()}
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2 text-sm font-medium print:hidden"
            title="Print or save as PDF"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Export PDF</span>
          </button>
          <button 
            onClick={() => setShowChat(!showChat)}
            className="p-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-2 text-sm font-medium print:hidden"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">Tutor Chat</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative print:overflow-visible">
        {/* Left Sidebar - Index */}
        <aside className={cn(
          "absolute lg:static inset-y-0 left-0 w-72 bg-slate-50 border-r border-slate-200 transform transition-transform duration-300 z-20 flex flex-col overflow-y-auto print:hidden",
          showMobileSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
          <div className="p-5">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Course Index</h2>
            <nav className="space-y-6">
              {courseContent.map(chapter => (
                <div key={chapter.id} className="mb-4 text-left">
                  <div className="mb-3">
                    <button 
                      onClick={() => scrollToSection(chapter.id)}
                      className={cn("flex items-center w-full text-left font-semibold transition-colors mb-1.5 text-sm gap-2 break-words", activeChapterId === chapter.id && activeTab === 'reading' ? "text-indigo-700" : "text-slate-800 hover:text-indigo-600")}
                    >
                      <Book className={cn("w-4 h-4 shrink-0", activeChapterId === chapter.id && activeTab === 'reading' ? "text-indigo-600" : "text-indigo-400")} />
                      <span className="leading-snug">{chapter.title}</span>
                    </button>
                  </div>
                  {activeChapterId === chapter.id && activeTab === 'reading' && (
                    <ul className="pl-6 space-y-2 border-l-2 border-indigo-100 ml-2 py-1">
                      {chapter.subheadings.map(sub => (
                        <li key={sub.id}>
                          <button 
                            onClick={() => scrollToSection(chapter.id, sub.id)}
                            className="text-sm text-slate-600 hover:text-indigo-600 transition-colors text-left"
                          >
                            {sub.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {showMobileSidebar && (
          <div 
            className="absolute inset-0 bg-slate-900/20 z-10 lg:hidden"
            onClick={() => setShowMobileSidebar(false)}
          />
        )}

        {/* Center Content - Reading Area */}
        <main className="flex-1 overflow-y-auto bg-white scroll-smooth print:overflow-visible print:p-0">
          
          {/* Tabs header */}
          <div className="border-b border-slate-200 bg-white sticky top-0 z-10 pt-4 px-6 md:px-10 lg:px-12 flex space-x-6">
              <button 
                onClick={() => setActiveTab('reading')}
                className={cn("pb-3 text-sm font-semibold transition-colors border-b-2 relative", activeTab === 'reading' ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300")}
              >
                Course Book
              </button>
              <button 
                onClick={() => setActiveTab('reinforcement')}
                className={cn("pb-3 flex items-center gap-2 text-sm font-semibold transition-colors border-b-2 relative", activeTab === 'reinforcement' ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300")}
              >
                <CheckCircle2 className="w-4 h-4" />
                Reinforcement Area
              </button>
              <button 
                onClick={() => setActiveTab('active-recall')}
                className={cn("pb-3 flex items-center gap-2 text-sm font-semibold transition-colors border-b-2 relative", activeTab === 'active-recall' ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300")}
              >
                <Brain className="w-4 h-4" />
                Active Recall
              </button>
          </div>

          <div className="p-6 md:p-10 lg:p-12 max-w-3xl mx-auto pb-20 print:max-w-full print:w-full">
            {activeTab === 'reinforcement' && <ReinforcementArea />}
            {activeTab === 'active-recall' && <ActiveRecallArea activeChapterId={activeChapterId} />}
            
            {activeTab === 'reading' && (
              <article className="prose prose-slate max-w-none animate-in fade-in zoom-in-95 duration-200">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <div className="w-full mb-6">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-1">
                      <span>Chapter Progress</span>
                      <span>{activeChapter.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden" title={`Progress: ${activeChapter.progress}%`}>
                      <div 
                        className="h-full bg-emerald-500 transition-all duration-500 rounded-full" 
                        style={{ width: `${activeChapter.progress}%` }} 
                      />
                    </div>
                  </div>
                  <h1 id={activeChapter.id} className="text-3xl font-bold tracking-tight text-slate-900">
                    {activeChapter.title}
                  </h1>
                </div>
                <div className="text-slate-700 leading-relaxed space-y-6">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex, rehypeRaw]}
                    components={{
                      table: ({node, ...props}) => <div className="overflow-x-auto w-full my-6"><table className="w-full text-left border-collapse" {...props} /></div>,
                      thead: ({node, ...props}) => <thead className="border-b-2 border-slate-800 text-slate-800" {...props} />,
                      tbody: ({node, ...props}) => <tbody className="divide-y divide-slate-200" {...props} />,
                      th: ({node, ...props}) => <th className="py-3 pr-4 font-bold align-bottom" {...props} />,
                      td: ({node, ...props}) => <td className="py-3 pr-4 text-slate-800 align-top" {...props} />,
                      h2: ({node, ...props}) => {
                        // Attempt to match the H2 title to our known subheading IDs to insert anchors
                        const text = String(props.children);
                        const match = activeChapter.subheadings.find(s => s.title === text);
                        return <h2 id={match ? match.id : undefined} className="text-2xl font-bold text-slate-800 mt-10 mb-4" {...props} />
                      },
                      details: ({node, children, ...props}: any) => {
                        return (
                          <details className="group border border-slate-200 rounded-lg bg-white my-4 shadow-sm [&>*:not(summary)]:px-4 [&>*:not(summary)]:pb-4 [&>*:not(summary):first-of-type]:pt-4" {...props}>
                             {children}
                          </details>
                        );
                      },
                      summary: ({node, children, ...props}: any) => {
                        return (
                          <summary className="cursor-pointer font-semibold bg-slate-50 p-4 text-slate-800 rounded-t-lg group-open:border-b group-open:border-slate-200" {...props}>
                            {children}
                          </summary>
                        );
                      },
                      ul: ({node, ...props}) => <ul className="space-y-2" {...props} />,
                      li: ({node, ...props}) => <li className="pl-1" {...props} />,
                      div: ({node, className, 'class': htmlClass, 'data-plot-id': plotId, 'data-question': question, 'data-flow': flowType, children, ...props}: any) => {
                        const finalClassName = className || htmlClass;
                        if (finalClassName && finalClassName.includes('plot-interactive')) {
                          return <InteractivePlot plotId={plotId} />;
                        }
                        if (finalClassName && finalClassName.includes('algorithmic-flow')) {
                          return <ProblemSolvingFlow flowType={flowType} />;
                        }
                        if (finalClassName && finalClassName.includes('user-quiz')) {
                          return (
                            <QuizQuestion question={question}>
                              <div className="font-semibold text-lg text-slate-800 break-words mb-2">
                                {question}
                              </div>
                            </QuizQuestion>
                          );
                        }
                        return <div className={finalClassName} {...props}>{children}</div>;
                      },
                      blockquote: ({node, children, ...props}: any) => {
                        // We check if the blockquote is a QUIZ or EXAMPLE_WALKTHROUGH
                        // children is typically a list of React elements, like [<p><strong>QUIZ:</strong> question</p>, ...]
                        let isQuiz = false;
                        let isExample = false;
                        
                        // Let's do a simple check on the raw text content of the node
                        const rawText = node.children.map((c: any) => c.type === 'element' ? c.children?.map((inner: any) => inner.value).join('') : c.value).join('');
                        
                        // We can also extract text broadly
                        const getRawText = (node: any): string => {
                          if (node.type === 'text') return node.value;
                          if (node.children) return node.children.map(getRawText).join('');
                          return '';
                        };
                        const fullText = getRawText(node);
                        
                        if (fullText.includes('QUIZ:')) {
                            // Extract question string approximately
                            const qMatch = fullText.match(/QUIZ:\s*(.*)/);
                            const questionText = qMatch ? qMatch[1] : "Quiz";
                            return <QuizQuestion question={questionText}>{children}</QuizQuestion>;
                        }
                        
                        if (fullText.includes('EXAMPLE_WALKTHROUGH')) {
                            return (
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm text-sm self-center my-6 relative overflow-hidden">
                                  <div className="absolute top-0 left-0 w-1 h-full bg-slate-400"></div>
                                  <h4 className="font-bold text-lg text-slate-800 mb-4 border-b pb-2">Example Walkthrough</h4>
                                  <div className="space-y-3 relative z-10">
                                      {children}
                                  </div>
                                </div>
                            );
                        }
                        
                        return <blockquote className="border-l-4 border-slate-200 pl-4 italic text-slate-600 my-4" {...props}>{children}</blockquote>;
                      },
                    }}
                  >
                    {preprocessLaTeX(activeChapter.markdown)}
                  </ReactMarkdown>
                </div>
              </article>
            )}
          </div>
        </main>

        {/* Right Sidebar - Chat Area */}
        <aside className={cn(
          "fixed lg:static inset-y-0 right-0 w-full md:w-[400px] bg-white border-l border-slate-200 transform transition-transform duration-300 z-40 flex flex-col shadow-2xl lg:shadow-sm print:hidden",
          showChat ? "translate-x-0" : "translate-x-full lg:hidden"
        )}>
          {/* Mobile close button for chat */}
          <div className="p-3 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <span className="font-semibold text-slate-800 text-sm">Tutor Chat</span>
            <button 
              onClick={() => setShowChat(false)}
              className="text-sm font-semibold text-slate-500 hover:text-slate-800"
            >
              Close
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300",
                  m.role === 'user' ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div 
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm ring-2 ring-white",
                    m.role === 'user' ? "bg-indigo-500" : "bg-slate-800"
                  )}
                >
                  {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                
                <div className="flex flex-col gap-2 max-w-[85%]">
                  {m.parts.map((part, pIdx) => (
                    <div key={pIdx}>
                      {'text' in part && part.text && (
                        <div
                          className={cn(
                            "rounded-2xl px-4 py-3 leading-relaxed text-[15px]",
                            m.role === 'user' 
                              ? "bg-indigo-600 text-white shadow-sm rounded-tr-sm" 
                              : "bg-white border border-slate-200 text-slate-800 shadow-sm rounded-tl-sm"
                          )}
                        >
                          <div className={cn(
                            "prose prose-sm max-w-none",
                            m.role === 'user' 
                              ? "prose-invert" 
                              : "prose-slate prose-headings:font-semibold prose-a:text-indigo-600"
                          )}>
                            <ReactMarkdown
                              remarkPlugins={[remarkMath]}
                              rehypePlugins={[rehypeKatex, rehypeRaw]}
                            >
                              {preprocessLaTeX(part.text)}
                            </ReactMarkdown>
                          </div>
                        </div>
                      )}
                      
                      {'inlineData' in part && part.inlineData && (
                        <img 
                          src={`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`} 
                          alt="Uploaded by user" 
                          className="mt-2 rounded-xl max-w-full h-auto border border-slate-200 shadow-sm"
                          style={{ maxHeight: '200px' }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white bg-slate-800 shadow-sm ring-2 ring-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center">
                  <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
                  <span className="ml-2 text-slate-500 text-sm font-medium">Checking derivations...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} className="h-1" />
          </div>

          <div className="flex-shrink-0 p-4 bg-white border-t border-slate-100 flex flex-col gap-2">
            {selectedImage && (
              <div className="relative inline-block w-20 h-20 rounded-md border border-slate-200 overflow-hidden shadow-sm bg-slate-50">
                <img src={selectedImage.url} alt="To upload" className="w-full h-full object-cover" />
                <button
                  onClick={removeSelectedImage}
                  className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full hover:bg-black/80 transition"
                  title="Remove image"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            <form onSubmit={handleSubmit} className="relative flex items-end gap-2">
              <input 
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageChange}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                className="absolute left-1.5 bottom-1.5 p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-full transition-colors disabled:cursor-not-allowed"
                title="Attach solution image"
              >
                <Paperclip className="w-5 h-5" />
              </button>
              
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask your tutor... (Cmd/Ctrl + K)"
                className="w-full bg-slate-100 placeholder:text-slate-400 border border-slate-200 text-slate-800 text-sm rounded-3xl pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 focus:bg-white transition-all shadow-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={(!input.trim() && !selectedImage) || isLoading}
                className="absolute right-1.5 bottom-1.5 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-300 disabled:shadow-none disabled:cursor-not-allowed transition-all duration-200"
                title="Send message"
              >
                <Send className="w-4 h-4 ml-px" />
              </button>
            </form>
          </div>
        </aside>

      </div>
    </div>
  );
}
