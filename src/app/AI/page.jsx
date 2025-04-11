"use client"
import React, { useRef, useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mic, Trash2, Menu, X } from "lucide-react";
import { AI_CHAT_MODEL } from "../../../config/AI_MODEL";


export default function InterviewMockup() {
  const chatRef = useRef(null);
  const inputRef = useRef(null);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const savedChat = localStorage.getItem("chatHistory");
    if (savedChat) {
      setVisibleMessages(JSON.parse(savedChat));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(visibleMessages));
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  const speak = (message) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-US";
    utterance.voice = synth.getVoices().find((voice) => voice.name.includes("Female") || voice.name.includes("Samantha") || voice.gender === "female");
    synth.speak(utterance);
  };

  const AI_CHAT_MODEL_SETUP = async (chatInput) => {
    const AI_Input_PROMPT = chatInput;
    console.log("AI_CHAT_MODEL_SETUP input:", AI_Input_PROMPT);

    const response = await AI_CHAT_MODEL.sendMessage(AI_Input_PROMPT);
    const formatted = typeof response === "string" ? JSON.stringify(response, null, 2) : response;
    console.log(formatted);

    const resultText =
      response?.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response text found.";

    const aiMessage = { text: resultText, sender: "ai" };
    setVisibleMessages((prev) => [...prev, aiMessage]);
    speak(resultText);
  };

  const handleUserMessage = async (userText) => {
    const userMessage = { text: userText, sender: "user" };
    setVisibleMessages((prev) => [...prev, userMessage]);
    await AI_CHAT_MODEL_SETUP(userText);
  };

  const initializeSpeechRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support Speech Recognition.");
      return null;
    }

    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = async (event) => {
      let finalTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      await handleUserMessage(finalTranscript.trim());
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    return recognition;
  };

  const voiceAssistant = {
    connect: async () => {
      const recognition = initializeSpeechRecognition();
      if (!recognition) return;

      recognition.start();
      recognitionRef.current = recognition;
      setIsRecording(true);
      setIsConnected(true);
      speak("Voice assistant connected");
    },
    disconnect: () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current = null;
        setIsRecording(false);
        setIsConnected(false);
        speak("Voice assistant disconnected");
      }
    },
  };

  const handleConnectToggle = () => {
    if (isConnected) {
      voiceAssistant.disconnect();
    } else {
      voiceAssistant.connect();
    }
  };

  const handleManualSend = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      handleUserMessage(value);
      inputRef.current.value = "";
    }
  };

  const handleClearChat = () => {
    setVisibleMessages([]);
    localStorage.removeItem("chatHistory");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/bg_AI.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-10 flex flex-col h-full w-full bg-black/30 backdrop-blur-sm p-2">
        {/* Top Bar with Hamburger (always visible) */}
        <div className="flex justify-between items-center bg-white/10 rounded-xl p-3 mb-2">
          <Button variant="ghost" onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
            <Menu size={20} />
          </Button>
          <p className="text-white font-medium">AI Assistant</p>
        </div>

        {/* Sidebar for Interview Section */}
        {sidebarOpen && (
          <div className="fixed top-0 left-0 w-[80%] md:w-[250px] h-full bg-white/10 p-4 z-20 rounded-r-xl border-r border-white/20 backdrop-blur-md overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <p className="font-medium text-white">Sallie</p>
              <Button variant="ghost" size="icon" className="text-white" onClick={() => setSidebarOpen(false)}>
                <X size={20} />
              </Button>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <Button onClick={handleConnectToggle} className={`w-full bg-black hover:bg-transparent border border-white text-white`}>
                {isConnected ? "Disconnect" : "Connect"}
              </Button>
              <Button onClick={() => voiceAssistant.disconnect()} className="w-full bg-black hover:bg-transparent border border-white text-white">
                Stop Voice
              </Button>
            </div>
          </div>
        )}

        {/* Main Chat Section */}
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-stretch gap-4 w-full h-full">
          {/* Chat Box */}
          <Card className="w-full max-w-4xl mx-auto flex flex-col rounded-2xl shadow-md bg-white/10 backdrop-blur-md border border-white/20 mt-1 mb-[8px] lg:mb-0 fixed bottom-[8px] left-1/2 -translate-x-1/2 sm:static sm:translate-x-0" style={{ minHeight: "calc(100vh - 100px)", maxHeight: "calc(100vh - 16px)", zIndex: 10 }}>
            <div className="p-4 border-b border-white/20 font-semibold text-white flex justify-between items-center">
              Chat Section
              <Button variant="ghost" size="icon" onClick={handleClearChat} className="text-white hover:text-red-500">
                <Trash2 size={18} />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-2 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent" ref={chatRef}>
              <div className="flex flex-col gap-2">
                {visibleMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded max-w-[75%] text-sm ${
                      msg.sender === "user"
                        ? "bg-blue-400/30 text-white self-end"
                        : "bg-gray-400/30 text-white self-start"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-white/20 flex gap-2 items-center">
              <Input ref={inputRef} placeholder="Type a message..." className="bg-white/20 text-white placeholder-white/70 flex-1" />
              <Button onClick={handleManualSend}>Send</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
