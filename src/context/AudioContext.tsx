"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { Howl } from "howler";

type AudioContextType = {
  isEffectsEnabled: boolean;
  volume: number;
  toggleEffects: () => void;
  setVolume: (volume: number) => void;
  playCorrectSound: () => void;
  playWrongSound: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const correctSound = new Howl({
  src: ["/pluck.mp3"],
});

const wrongSound = new Howl({
  src: ["/wrong.mp3"],
});

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isEffectsEnabled, setIsEffectsEnabled] = useState(true);
  const [volume, setVolume] = useState(1);

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
        isEffectsEnabled,
        volume,
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
