import { useEffect, useRef, useState, useCallback } from "react";
import { useAudioContext } from "~/context/AudioContext";
import { handleOfflineIntent } from "~/utils/publicApis";
import { formatGeminiUserError, generateGeminiSpoken, hasGeminiKey, buildSiriAgentPrompt } from "~/utils/gemini";

// Types for Speech Recognition
interface SpeechRecognitionResult {
  transcript: string;
  confidence: number;
}
interface SpeechRecognitionResultList extends Array<SpeechRecognitionResult> {
  [index: number]: SpeechRecognitionResult;
}
interface SpeechRecognitionEvent {
  results: {
    [index: number]: SpeechRecognitionResultList;
  };
}

export default function Siri() {
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const { controls } = useAudioContext();
  const recognitionRef = useRef<any>(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const current = event.results[0][0].transcript;
        setTranscript(current);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const speak = useCallback((text: string) => {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);

    // Find a female voice
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(v => v.name.includes("Female") || v.name.includes("Google US English") || v.name.includes("Samantha"));
    if (femaleVoice) utterance.voice = femaleVoice;

    utterance.pitch = 1.1;
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }, []);

  const processCommand = async (text: string) => {
    const lowerText = text.toLowerCase();

    // 1. Check for system commands
    if (lowerText.includes("play") && (lowerText.includes("song") || lowerText.includes("music"))) {
      controls.play();
      const msg = "Sure, playing your music now.";
      setResponse(msg);
      speak(msg);
      return;
    }
    if (lowerText.includes("pause") || lowerText.includes("stop")) {
      controls.pause();
      const msg = "Music paused.";
      setResponse(msg);
      speak(msg);
      return;
    }

    setIsThinking(true);
    try {
      const offline = await handleOfflineIntent(text);
      if (offline) {
        setResponse(offline);
        speak(offline);
        setIsThinking(false);
        return;
      }

      if (!hasGeminiKey) {
        const msg =
          "I can share weather, GitHub stats, or exchange rates without an API key. Ask about those, or open AI Chat.";
        setResponse(msg);
        speak(msg);
        setIsThinking(false);
        return;
      }

      const aiResponse = await generateGeminiSpoken(buildSiriAgentPrompt(text));
      setResponse(aiResponse);
      speak(aiResponse);
    } catch (error: unknown) {
      console.error(error);
      const errorMsg = formatGeminiUserError(error);
      setResponse(errorMsg);
      speak(errorMsg);
    } finally {
      setIsThinking(false);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setTranscript("");
      setResponse("");
      setIsListening(true);
      recognitionRef.current?.start();
    }
  };

  // Auto-process when transcript settles
  useEffect(() => {
    if (!isListening && transcript && !response && !isThinking) {
      processCommand(transcript);
    }
  }, [isListening, transcript, response, isThinking]);

  return (
    <div className="size-full bg-gradient-to-b from-[#180C3F] to-[#0a051d] flex flex-col justify-center items-center text-white p-6 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

      <SiriVisualizer isPlaying={isListening || isThinking} onClick={toggleListening} />

      <div className="h-24 flex flex-col items-center mt-8 text-center max-w-lg z-10 font-avenir">
        {isListening ? (
          <div className="text-xl font-medium animate-pulse text-blue-300">
            {transcript || "Listening..."}
          </div>
        ) : isThinking ? (
          <div className="text-xl font-medium opacity-60 italic">Thinking...</div>
        ) : (
          <div className="text-lg font-light opacity-80 leading-relaxed px-4">
            {response || 'Ask me anything about Hamza or say "Play some music"'}
          </div>
        )}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 max-w-md w-full z-10">
        <ExampleCard text="Who is Hamza?" onClick={() => processCommand("Who is Hamza?")} />
        <ExampleCard text="DevOps experience" onClick={() => processCommand("Tell me about his DevOps experience")} />
        <ExampleCard text="What's the weather?" onClick={() => processCommand("What's the weather?")} />
        <ExampleCard text="Play music" onClick={() => processCommand("Play music")} />
      </div>

      {/* Mic access warning */}
      {!(window as any).webkitSpeechRecognition && (
        <div className="mt-8 text-[10px] text-red-400 opacity-60">
          * Speech recognition requires Chrome / Edge
        </div>
      )}
    </div>
  );
}

function SiriVisualizer({ isPlaying, onClick }: { isPlaying: boolean; onClick: () => void }) {
  return (
    <div
      className="relative cursor-pointer group"
      onClick={onClick}
    >
      <div className={`absolute inset-0 rounded-full bg-blue-400/30 blur-2xl transition-all duration-500 ${isPlaying ? 'scale-150 opacity-100' : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50'}`} />
      <img
        src={isPlaying ? "/img/ui/siri-motion.gif" : "/img/ui/siri-still.jpeg"}
        className={`w-40 h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl transition-transform duration-300 active:scale-90 ${isPlaying ? 'brightness-110 shadow-blue-500/50' : 'grayscale-[20%] brightness-75'}`}
        alt="Siri"
      />
    </div>
  );
}

function ExampleCard({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-3 text-sm text-left transition-all hover:scale-[1.02] active:scale-95"
    >
      <span className="opacity-50 mr-2">Ask:</span>
      <span className="font-medium">{text}</span>
    </button>
  );
}
