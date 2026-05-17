import React, { createContext, useContext, ReactNode } from "react";
import { music } from "~/configs";
interface AudioContextType {
  audio: HTMLAudioElement;
  audioState: any;
  controls: {
    play: () => Promise<void> | void;
    pause: () => Promise<void> | void;
    toggle: () => Promise<void> | void;
    volume: (value: number) => void;
  };
  audioRef: React.RefObject<HTMLAudioElement>;
}

// Create the context with an initial undefined value
const AudioContext = createContext<AudioContextType | undefined>(undefined);

// Create a provider component
export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [audio, audioState, controls, audioRef] = useAudio({
    src: music.audio, 
    autoReplay: true
  });

  const value = useMemo(
    () => ({ audio, audioState, controls, audioRef }),
    [audio, audioState, controls, audioRef]
  );

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};

// Custom hook to use the audio context
export const useAudioContext = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudioContext must be used within an AudioProvider");
  }
  return context;
};
