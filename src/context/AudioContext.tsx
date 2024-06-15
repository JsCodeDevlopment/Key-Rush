"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { Howl, Howler } from "howler";

type AudioContextType = {
  isSoundEnabled: boolean;
  isEffectsEnabled: boolean;
  volume: number;
  toggleSound: () => void;
  toggleEffects: () => void;
  setVolume: (volume: number) => void;
  playCorrectSound: () => void;
  playWrongSound: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const backgroundMusic = new Howl({
  src: ["/music.mp3"],
  loop: true,
});

const correctSound = new Howl({
  src: ["/pluck.mp3"],
});

const wrongSound = new Howl({
  src: ["/wrong.mp3"],
});

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isEffectsEnabled, setIsEffectsEnabled] = useState(true);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    Howler.volume(volume);
    if (isSoundEnabled) {
      backgroundMusic.play();
    } else {
      backgroundMusic.stop();
    }
  }, [isSoundEnabled, volume]);

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  const toggleEffects = () => {
    setIsEffectsEnabled(!isEffectsEnabled);
  };

  const handleSetVolume = (newVolume: number) => {
    setVolume(newVolume / 100); // Convert percentage to decimal
  };

  const playCorrectSound = () => {
    if (isEffectsEnabled) {
      correctSound.play();
    }
  };

  const playWrongSound = () => {
    if (isEffectsEnabled) {
      wrongSound.play();
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isSoundEnabled,
        isEffectsEnabled,
        volume,
        toggleSound,
        toggleEffects,
        setVolume: handleSetVolume,
        playCorrectSound,
        playWrongSound,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
