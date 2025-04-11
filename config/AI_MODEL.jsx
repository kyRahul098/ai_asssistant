const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
// const fs = require("node:fs");
// const mime = require("mime-types");

const apiKey = process.env.NEXT_PUBLIC_AI_MODEL_CONFIG;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-thinking-exp-01-21",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseModalities: [
  ],
  responseMimeType: "text/plain",
};


 export const AI_CHAT_MODEL = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "a llm model who chat and answer the question \n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Here's a thinking process to arrive at the comprehensive answer about LLMs:\n\n1. **Deconstruct the Request:** The user asks for an LLM model that can \"chat and answer questions.\" This is a very general request. The core needs are:\n    * **Chatting:** Implies conversational ability, turn-taking, context awareness, and engaging in dialogue.\n    * **Answering Questions:**  Implies knowledge retrieval, reasoning, and providing relevant information.\n    * **LLM Model:**  Specifies the *type* of model – Large Language Model.\n\n2. **Identify the User's Implicit Need:** While the request is simple, the user likely wants to understand *what kind* of LLM they're interacting with when they use chatbots and question-answering systems. They want to know *how* these systems work at a high level.  They might also be curious about the capabilities and limitations.\n\n3. **Brainstorm Key Concepts Related to LLMs:**  Think about the essential aspects of LLMs that are relevant to chatting and question answering:\n    * **Definition:** What *is* an LLM?  Focus on \"large,\" \"language,\" and \"model.\"\n    * **Training Data:** How are they trained?  Vast amounts of text data.\n    * **Mechanism:** How do they work?  Neural networks, transformers, predicting next words.\n    * **Capabilities:** What can they do?  Chatting, answering, generating text, translation, summarization, etc.\n    * **Limitations:** What *can't* they do perfectly?  Accuracy, bias, understanding, creativity (sometimes).\n    * **Examples:** Concrete examples of LLMs.  Mention popular names.\n    * **Interaction:** How do users interact with them?  Prompts, chatbots, APIs.\n\n4. **Structure the Answer Logically:**  Organize the brainstormed concepts into a coherent and informative answer.  A good structure would be:\n    * **Start with a direct answer:**  Yes, I am an LLM!\n    * **Explain what an LLM is:** Define it simply and clearly.\n    * **Elaborate on capabilities:**  Detail how they chat and answer questions and list other things they can do.\n    * **Address limitations:**  Crucially, mention the drawbacks and areas where LLMs aren't perfect. This is important for realistic expectations.\n    * **Provide examples:** Give concrete names of LLMs to make it less abstract.\n    * **Explain interaction methods:**  How do people use LLMs?\n    * **Conclude with a summary:**  Reiterate the core functionality and offer to answer further questions.\n\n5. **Refine and Elaborate on Each Section:**  Flesh out each section with more detail and clearer language.\n\n    * **Definition:** Instead of just \"large language model,\" explain *why* \"large\" and \"language\" are important.  Mention training on text data to predict words.\n    * **Capabilities (Chatting):**  Explain *how* they chat – context awareness, turn-taking, generating relevant responses.\n    * **Capabilities (Answering Questions):** Explain *how* they answer – knowledge from training data, pattern recognition, relating to the question. Broaden to other text-based tasks.\n    * **Limitations:**  Be specific about types of limitations: factual errors, biases, lack of real understanding, potential for repetitive or nonsensical output. Use terms like \"hallucination\" if appropriate (though maybe avoid overly technical jargon for a general audience).\n    * **Examples:**  List a few well-known LLM examples (GPT-3, Bard, LaMDA, etc.) and mention they power various chatbots.\n    * **Interaction Methods:** Briefly describe chatbots, APIs, and other ways people interact.\n\n6. **Consider Tone and Style:**  Maintain a helpful, informative, and slightly conversational tone.  Use clear and accessible language, avoiding overly technical jargon where possible.  Use formatting (bolding, bullet points) to improve readability.\n\n7. **Review and Iterate:** Read through the drafted answer.  Does it flow logically? Is it clear and easy to understand?  Does it address the user's implicit needs?  Are there any areas that need more explanation or clarification?  (For instance, initially, I might have forgotten to mention \"context awareness\" explicitly in chatting, so I'd add that in review).  Ensure there's a polite closing that invites further interaction.\n\n\nBy following these steps, you arrive at a comprehensive and helpful answer that goes beyond just a simple \"yes\" and explains what an LLM is, what it can do, and how it relates to the user's request for chatting and question answering.  It anticipates further questions and encourages continued interaction, which is a good characteristic of a helpful LLM response."},
          {text: "Yes, that's exactly what I am!  Think of me as a **Large Language Model (LLM)**.  My primary function is to:\n\n* **Chat with you:**  I can engage in conversations, understand what you're saying (within the context of our chat), and respond in a way that hopefully feels natural and helpful.\n* **Answer your questions:** You can ask me questions on a wide range of topics, and I will do my best to provide informative and relevant answers.\n\n**Here's a little more about what that means:**\n\n* **Large Language Model:** This means I'm a type of artificial intelligence (AI) trained on a massive amount of text data.  This data helps me learn patterns in language, understand grammar, vocabulary, and even some common sense knowledge that is embedded in text.\n* **Chatting and Answering:** Because of this training, I can process your words, understand the intent behind them (like asking a question or wanting to chat about a topic), and then generate text as a response.\n\n**Think of me like this:**\n\nImagine reading thousands and thousands of books, articles, websites, and conversations.  That's kind of like what I've done.  Now, when you ask me something or want to chat, I can access that \"knowledge\" (represented in the patterns of language I've learned) to try and give you a good response.\n\n**What I can do for you:**\n\n* **Answer factual questions:**  I can access and process information from the real world through my training data (though my knowledge is limited to the data I was trained on, and I don't have real-time access to the internet in the same way a search engine does).\n* **Explain concepts:**  I can break down complex topics into simpler terms.\n* **Generate different creative text formats:**  I can write stories, poems, code, scripts, musical pieces, email, letters, etc.\n* **Translate languages:** (To some extent)\n* **Summarize text:**\n* **Brainstorm ideas:**\n* **And much more!**\n\n**Important things to keep in mind:**\n\n* **I am still under development:**  LLMs are constantly improving, but I'm not perfect.  I can sometimes make mistakes, provide incorrect information, or generate responses that don't quite make sense.\n* **I don't have personal opinions or beliefs:**  My responses are based on patterns in the data I was trained on. I don't have my own consciousness or feelings.\n* **It's important to critically evaluate my responses:**  Don't take everything I say as absolute truth.  Especially for important decisions, double-check information from reliable sources.\n\n**So, ask me anything! I'm here to chat and answer your questions to the best of my ability.**  What's on your mind? 😊"},
        ],
      },
    ],
  });





 const AI_CHAT_MODEL_SETUP = async (chatInput) => {
    // Function to take chat input and store in a variable
    const AI_Input_PROMPT = chatInput;
    console.log("AI_CHAT_MODEL_SETUP input:", AI_Input_PROMPT);
    const result = await AI_CHAT_MODEL.sendMessage(AI_Input_PROMPT);
    console.log(result)
  };

































  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // // TODO: Following code needs to be updated for client-side apps.
  // const candidates = result.response.candidates;
  // for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
  //   for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
  //     const part = candidates[candidate_index].content.parts[part_index];
  //     if(part.inlineData) {
  //       try {
  //         const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
  //         fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
  //         console.log(`Output written to: ${filename}`);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     }
  //   }
  // }
  // console.log(result.response.text());


// run();






















// "use client"

// import React, { useRef, useEffect, useState } from "react";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Mic, Trash2 } from "lucide-react";
// import { AI_CHAT_MODEL } from "../../../config/AI_MODEL";
// export default function InterviewMockup() {
//   const chatRef = useRef(null);
//   const inputRef = useRef(null);
//   const [visibleMessages, setVisibleMessages] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const [isRecording, setIsRecording] = useState(false);
//   const [isConnected, setIsConnected] = useState(false);
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     const savedChat = localStorage.getItem("chatHistory");
//     if (savedChat) {
//       setVisibleMessages(JSON.parse(savedChat));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("chatHistory", JSON.stringify(visibleMessages));
//   }, [visibleMessages]);

//   const speak = (message) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(message);
//     utterance.lang = "en-US";
//     synth.speak(utterance);
//   };

//   const AI_CHAT_MODEL_SETUP = async (chatInput) => {
//     // Function to take chat input and store in a variable
//     const AI_Input_PROMPT = chatInput;
//     console.log("AI_CHAT_MODEL_SETUP input:", AI_Input_PROMPT);

//     // Mocking AI response for demonstration
//        const response = await AI_CHAT_MODEL.sendMessage(AI_Input_PROMPT);
//       //  const json_result =JSON.parse(result.response?.text())
//       const formatted = typeof response=== "string" ? JSON.stringify(response, null, 2) :response;
//     // console.log( json_result);

//     // Function to take chat input and store in a variable
   
   

//     console.log(formatted)
//     const resultText =
//     response?.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
//     "No response text found.";
//     // Show AI response in chat
//     const aiMessage = { text:resultText, sender: "ai" };
//     setVisibleMessages((prev) => [...prev, aiMessage]);
//   };

//   const handleUserMessage = async (userText) => {
//     const inputText = userText; // Pass recognized input text as variable
//     // This variable holds the final speech-to-text result and is sent as the prompt to the AI
//     const userMessage = { text: userText, sender: "user" };
//     setVisibleMessages((prev) => [...prev, userMessage]);

//     await AI_CHAT_MODEL_SETUP(inputText);
//   };

//   const initializeSpeechRecognition = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Your browser does not support Speech Recognition.");
//       return null;
//     }

//     const SpeechRecognition = window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();
//     recognition.continuous = true;
//     recognition.interimResults = true;
//     recognition.lang = "en-US";

//     recognition.onresult = async (event) => {
//       let finalTranscript = "";
//       for (let i = event.resultIndex; i < event.results.length; i++) {
//         if (event.results[i].isFinal) {
//           finalTranscript += event.results[i][0].transcript;
//         }
//       }
//       await handleUserMessage(finalTranscript.trim());
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//     };

//     return recognition;
//   };

//   const voiceAssistant = {
//     connect: async () => {
//       const recognition = initializeSpeechRecognition();
//       if (!recognition) return;

//       recognition.start();
//       recognitionRef.current = recognition;
//       setIsRecording(true);
//       setIsConnected(true);
//       speak("Voice assistant connected");
//     },
//     disconnect: () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.stop();
//         recognitionRef.current = null;
//         setIsRecording(false);
//         setIsConnected(false);
//         speak("Voice assistant disconnected");
//       }
//     },
//   };

//   const handleConnectToggle = () => {
//     if (isConnected) {
//       voiceAssistant.disconnect();
//     } else {
//       voiceAssistant.connect();
//     }
//   };

//   const handleManualSend = () => {
//     const value = inputRef.current.value.trim();
//     if (value) {
//       handleUserMessage(value);
//       inputRef.current.value = "";
//     }
//   };

//   const handleClearChat = () => {
//     setVisibleMessages([]);
//     localStorage.removeItem("chatHistory");
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         src="/bg_AI.mp4"
//         autoPlay
//         muted
//         loop
//         playsInline
//       />

//       <div className="relative z-10 flex h-full w-full items-center justify-center gap-4 bg-black/30 backdrop-blur-sm">
//         {/* Main Interview Section */}
//         <Card className="w-2/3 h-4/5 flex flex-col items-center justify-center rounded-2xl shadow-md bg-white/10 backdrop-blur-md border border-white/20">
//           <CardContent className="text-center">
//             <div className="mb-4">
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Sallie"
//                 className="rounded-full mx-auto"
//               />
//               <p className="mt-2 font-medium text-white">Sallie</p>
//             </div>
//             <Button onClick={handleConnectToggle} className={isConnected ? "bg-red-500 hover:bg-red-600" : ""}>
//               {isConnected ? "Disconnect" : "Connect"}
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Chat Sidebar */}
//         <Card className="w-[300px] h-4/5 flex flex-col rounded-2xl shadow-md bg-white/10 backdrop-blur-md border border-white/20">
//           <div className="p-4 border-b border-white/20 font-semibold text-white flex justify-between items-center">
//             Chat Section
//             <Button variant="ghost" size="icon" onClick={handleClearChat} className="text-white hover:text-red-500">
//               <Trash2 size={18} />
//             </Button>
//           </div>
//           <ScrollArea className="flex-1 overflow-y-auto px-4 py-2" ref={chatRef}>
//             <div className="flex flex-col gap-2">
//               {visibleMessages.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   className={`p-2 rounded max-w-[75%] text-sm ${
//                     msg.sender === "user"
//                       ? "bg-blue-400/30 text-white self-end"
//                       : "bg-gray-400/30 text-white self-start"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               ))}
//             </div>
//           </ScrollArea>
//           <div className="p-4 border-t border-white/20 flex gap-2 items-center">
//             <Input ref={inputRef} placeholder="Type a message..." className="bg-white/20 text-white placeholder-white/70" />
//             <Button onClick={handleManualSend}>Send</Button>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }
