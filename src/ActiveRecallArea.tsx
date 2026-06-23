import { useState, useEffect } from 'react';
import { Brain, Search, Plus, CheckCircle2, XCircle, Clock, ChevronRight, RotateCcw } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { courseContent } from './data';
import { preprocessLaTeX } from './App';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simple Spaced Repetition (SM-2 simplified)
interface Flashcard {
  id: string;
  chapterId: string;
  front: string;
  back: string;
  interval: number; // in days
  repetition: number;
  efactor: number;
  nextReview: number; // timestamp
}

// Generates some default flashcards to begin with
const defaultFlashcards: Flashcard[] = [
  ...courseContent.flatMap(ch => {
    // Generate basic flashcards from subheadings/glossary if possible
    return [
      {
        id: `fc-${ch.id}-1`,
        chapterId: ch.id,
        front: `What is the core concept of **${ch.title.split(':')[1]?.trim() || ch.title}**?`,
        back: `Review the introductory definitions inside the Course Book sections.`,
        interval: 0,
        repetition: 0,
        efactor: 2.5,
        nextReview: Date.now() - 1000 // due now
      }
    ];
  })
];

export const ActiveRecallArea = ({ activeChapterId }: { activeChapterId: string }) => {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [newFront, setNewFront] = useState('');
  const [newBack, setNewBack] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [studyMode, setStudyMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  
  useEffect(() => {
    const saved = localStorage.getItem('flashcards');
    if (saved) {
      setCards(JSON.parse(saved));
    } else {
      setCards(defaultFlashcards);
      localStorage.setItem('flashcards', JSON.stringify(defaultFlashcards));
    }
  }, []);

  const saveCards = (newCards: Flashcard[]) => {
    setCards(newCards);
    localStorage.setItem('flashcards', JSON.stringify(newCards));
  };

  const chapterCards = cards.filter(c => c.chapterId === activeChapterId);
  const dueCards = chapterCards.filter(c => c.nextReview <= Date.now());

  const addCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFront.trim() || !newBack.trim()) return;

    const newCard: Flashcard = {
      id: `fc-${Date.now()}`,
      chapterId: activeChapterId,
      front: newFront,
      back: newBack,
      interval: 0,
      repetition: 0,
      efactor: 2.5,
      nextReview: Date.now()
    };
    saveCards([...cards, newCard]);
    setNewFront('');
    setNewBack('');
  };

  const generateAI = async () => {
    setIsGenerating(true);
    try {
      const currentChapter = courseContent.find(c => c.id === activeChapterId);
      const textToExtract = currentChapter?.title || "Multivariable Calculus";
      
      const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: [
              { role: 'user', parts: [{ text: `Generate 3 important flashcards for a student learning: ${textToExtract}. Return JSON ONLY: [{"front": "Question markdown", "back": "Answer markdown"}]` }] }
          ] }),
      });
      const data = await response.json();
      let text = data.text as string;
      text = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(text);
      
      const newItems: Flashcard[] = parsed.map((item: any) => ({
          id: `fc-ai-${Date.now()}-${Math.random()}`,
          chapterId: activeChapterId,
          front: item.front,
          back: item.back,
          interval: 0,
          repetition: 0,
          efactor: 2.5,
          nextReview: Date.now()
      }));
      saveCards([...cards, ...newItems]);
    } catch(err) {
      console.error('Failed to generate cards:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const startStudy = () => {
    if (dueCards.length > 0) {
      setStudyMode(true);
      setCurrentCardIndex(0);
      setShowAnswer(false);
    }
  };

  // SM-2 algorithm step
  const rateCard = (quality: number) => {
    // quality: 0-5 (0 = blackout, 5 = perfect response)
    const card = dueCards[currentCardIndex];
    let { interval, repetition, efactor } = card;

    if (quality >= 3) {
      if (repetition === 0) {
        interval = 1;
      } else if (repetition === 1) {
        interval = 6;
      } else {
        interval = Math.round(interval * efactor);
      }
      repetition += 1;
    } else {
      repetition = 0;
      interval = 1;
    }

    efactor = efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (efactor < 1.3) efactor = 1.3;

    const updatedCard = {
      ...card,
      interval,
      repetition,
      efactor,
      nextReview: Date.now() + interval * 24 * 60 * 60 * 1000
    };

    const newCards = cards.map(c => c.id === card.id ? updatedCard : c);
    saveCards(newCards);

    if (currentCardIndex + 1 < dueCards.length) {
      setCurrentCardIndex(prev => prev + 1);
      setShowAnswer(false);
    } else {
      setStudyMode(false);
    }
  };

  if (studyMode && dueCards.length > 0) {
    const card = dueCards[currentCardIndex];
    return (
      <div className="bg-white border text-center border-indigo-100 rounded-2xl p-6 shadow-md max-w-2xl mx-auto my-12 animate-in fade-in zoom-in-95">
        <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">
            <span>Card {currentCardIndex + 1} of {dueCards.length}</span>
            <button onClick={() => setStudyMode(false)} className="hover:text-slate-800 transition">Exit Study</button>
        </div>
        
        <div className="min-h-[200px] flex flex-col justify-center gap-6">
            <div className="prose prose-lg mx-auto text-slate-800">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>
                    {preprocessLaTeX(card.front)}
                </ReactMarkdown>
            </div>
            
            {showAnswer ? (
                <div className="pt-6 border-t border-slate-100 prose prose-indigo mx-auto mt-4 animate-in fade-in slide-in-from-top-4">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>
                        {preprocessLaTeX(card.back)}
                    </ReactMarkdown>
                </div>
            ) : (
                <button
                    onClick={() => setShowAnswer(true)}
                    className="mx-auto mt-8 px-6 py-3 bg-indigo-50 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 transition shadow-sm"
                >
                    Show Answer
                </button>
            )}
        </div>

        {showAnswer && (
            <div className="mt-12 grid grid-cols-3 gap-3 animate-in fade-in zoom-in-95">
                <button 
                  onClick={() => rateCard(1)}
                  className="py-3 px-2 flex flex-col items-center bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition shadow-sm"
                >
                  <span className="font-bold">Again</span>
                  <span className="text-xs opacity-75">&lt; 1 min</span>
                </button>
                <button 
                  onClick={() => rateCard(3)}
                  className="py-3 px-2 flex flex-col items-center bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition shadow-sm"
                >
                  <span className="font-bold">Hard</span>
                  <span className="text-xs opacity-75">1 day</span>
                </button>
                <button 
                  onClick={() => rateCard(5)}
                  className="py-3 px-2 flex flex-col items-center bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition shadow-sm"
                >
                  <span className="font-bold">Easy</span>
                  <span className="text-xs opacity-75">4 days</span>
                </button>
            </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 rounded-2xl p-6 shadow-sm mb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-violet-500"></div>
      
      <div className="flex justify-between items-start mb-6">
          <div>
              <h2 className="text-xl font-bold text-violet-900 mb-2 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Active Recall & Settings
              </h2>
              <p className="text-slate-600 text-sm max-w-lg">
                Master definitions, formulas, and theorems using spaced repetition algorithms. Generate conceptual flashcards for this specific chapter.
              </p>
          </div>
          <div className="flex flex-col items-end">
              <span className="text-sm font-bold text-violet-700 bg-violet-100 px-3 py-1 rounded-full shadow-sm mb-2 text-center">
                  {dueCards.length} Cards Due
              </span>
              <button 
                onClick={startStudy}
                disabled={dueCards.length === 0}
                className="px-5 py-2 bg-violet-600 text-white text-sm font-bold rounded-lg shadow-md hover:bg-violet-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                  Start Review
              </button>
          </div>
      </div>

      <div className="bg-white border border-violet-100 rounded-xl p-5 mb-8 shadow-sm">
          <h3 className="font-bold text-slate-800 text-sm mb-3">Add Flashcard</h3>
          <form onSubmit={addCard} className="flex flex-col gap-3">
              <input 
                  type="text" 
                  value={newFront}
                  onChange={(e) => setNewFront(e.target.value)}
                  placeholder="Front: Concept or Question (Supports LaTeX e.g., $\nabla f$)" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-violet-500/50 outline-none"
              />
              <textarea 
                  value={newBack}
                  onChange={(e) => setNewBack(e.target.value)}
                  placeholder="Back: Answer or Theorem..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-violet-500/50 outline-none resize-none"
                  rows={2}
              ></textarea>
              <div className="flex justify-between items-center mt-2">
                  <button 
                      type="button" 
                      onClick={generateAI}
                      disabled={isGenerating}
                      className="text-violet-600 text-sm font-semibold flex items-center gap-1 hover:text-violet-800 disabled:opacity-50"
                  >
                      {isGenerating ? <Clock className="w-4 h-4 animate-spin" /> : <Brain className="w-4 h-4" />}
                      {isGenerating ? "Generating..." : "Auto-Generate AI Cards"}
                  </button>
                  <button type="submit" disabled={!newFront.trim() || !newBack.trim()} className="bg-slate-800 text-white px-4 py-2 text-sm font-semibold rounded-md shadow-sm hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed">
                      <Plus className="w-4 h-4 inline mr-1 -mt-0.5" />
                      Add Card
                  </button>
              </div>
          </form>
      </div>

      <div className="space-y-3">
          <h3 className="font-bold text-slate-800 text-sm border-b border-violet-200 pb-2 mb-4">Chapter Cards Library ({chapterCards.length})</h3>
          {chapterCards.map(card => (
              <div key={card.id} className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center shadow-sm">
                  <div className="max-w-[70%]">
                      <span className="text-xs font-bold text-slate-400 block mb-1">FRONT</span>
                      <div className="text-sm font-medium text-slate-800 mb-2 truncate">
                          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>
                              {preprocessLaTeX(card.front)}
                          </ReactMarkdown>
                      </div>
                      <span className="text-xs font-bold text-slate-400 block mb-1">BACK</span>
                      <div className="text-sm text-slate-600 truncate opacity-80">
                          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]}>
                              {preprocessLaTeX(card.back)}
                          </ReactMarkdown>
                      </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                      <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md mb-2">
                          Interval: {card.interval}d
                      </div>
                      <button 
                          onClick={() => {
                              saveCards(cards.filter(c => c.id !== card.id));
                          }}
                          className="text-red-500 hover:text-red-700 text-xs font-bold uppercase transition"
                      >
                          Delete
                      </button>
                  </div>
              </div>
          ))}
          {chapterCards.length === 0 && (
              <div className="text-center text-sm text-slate-500 py-8 bg-white/50 rounded-lg border border-dashed border-violet-200">
                  No cards in this chapter yet. Add one above or Auto-Generate.
              </div>
          )}
      </div>

    </div>
  );
};
