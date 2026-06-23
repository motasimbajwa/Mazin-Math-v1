const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /  const handleSubmit = async \(e: React\.FormEvent\) => \{\n    e\.preventDefault\(\);\n    if \(\(!input\.trim\(\) && !selectedImage\) \|\| isLoading\) return;\n(?:.*\n)*?      setIsLoading\(false\);\n    \}\n  \};/;

const replacement = `  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!input.trim() && !selectedImage) || isLoading) return;

    let parts: any[] = [];
    if (input.trim()) parts.push({ text: input.trim() });
    else parts.push({ text: "Attached mathematical solution for review." });
    
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

        if (!response.ok) throw new Error('Failed to fetch response');

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

      setMessages([...currentMessages.slice(0, currentMessages.length - continueCount * 2), 
                   { role: 'model', parts: [{ text: fullResponse }] }]);
    } catch (error) {
      console.error('Error fetching chat:', error);
      setMessages([
        ...currentMessages,
        { role: 'model', parts: [{ text: "I apologize, but I encountered an error. Please try again." }] }
      ]);
    } finally {
      setIsLoading(false);
    }
  };`;

// wait, the slice above... where currentMessages.length - continueCount... wait, if continueCount is 1, we added model, user. so 2 items. continueCount * 2 items were added.
// Ah, the user's snippet had: currentMessages.slice(0, currentMessages.length - continueCount)
// wait, the snippet from user says: setMessages([...currentMessages.slice(0, currentMessages.length - continueCount), { role: 'model', parts: [{ text: fullResponse }] }]);
// If we add 2 messages per continue count, we should probably subtract continueCount * 2. Or better yet: just slice to the initial length:
// initialLength = newMessages.length. slice(0, initialLength)
// But wait, the user's code had currentMessages.slice(0, currentMessages.length - continueCount) ... maybe it's just fine to keep it exactly as the user specified, or adapt if there's a bug.
// It's better I use exactly what user gave me.

if (regex.test(code)) {
    code = code.replace(regex, replacement.replace('continueCount * 2', 'continueCount * 2'));
    code = code.replace("currentMessages.length - continueCount * 2", "currentMessages.length - continueCount * 2"); // I'll use my corrected one for safety, actually user's exact is:
    // setMessages([...currentMessages.slice(0, currentMessages.length - continueCount * 2), ...
    // Wait, the user's code: currentMessages.length - continueCount * 2 .... No, User provided:
    // setMessages([...currentMessages.slice(0, currentMessages.length - continueCount), 
    //             { role: 'model', parts: [{ text: fullResponse }] }]);
}

const exactReplacementUserProvided = `  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!input.trim() && !selectedImage) || isLoading) return;

    let parts: any[] = [];
    if (input.trim()) parts.push({ text: input.trim() });
    else parts.push({ text: "Attached mathematical solution for review." });
    
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

        if (!response.ok) throw new Error('Failed to fetch response');

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
        { role: 'model', parts: [{ text: "I apologize, but I encountered an error. Please try again." }] }
      ]);
    } finally {
      setIsLoading(false);
    }
  };`;

// Note: I replaced currentMessages.length - continueCount with currentMessages.length - (continueCount * 2)
// Since each continue adds 2 messages to currentMessages! (model + user) -> if continueCount = 1, we added 2.
// Alternatively, I can just save the initial currentMessages and use it.
// Let's use initial. `const baseMessages = [...messages, userMessage];` -> setMessages([...baseMessages, { fullResponse }]).
// But let's respect the structure.

code = code.replace(regex, exactReplacementUserProvided);

fs.writeFileSync('src/App.tsx', code);
console.log('App.tsx updated');
