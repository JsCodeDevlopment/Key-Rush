"use client";

import React from "react";
import { useAudio } from "@/context/AudioContext";

export default function SettingsPage() {
  const {
    isSoundEnabled,
    isEffectsEnabled,
    volume,
    toggleSound,
    toggleEffects,
    setVolume,
  } = useAudio();


  return (
    <div className="bg-zinc-800 w-full py-8 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-[#ff3434] text-center">
          Configurações
        </h1>
        <h1 className="text-lg text-white text-center">
          Configurações dos sons do jogo
        </h1>
        <div className="flex items-center justify-between mt-6 space-y-6">
          <div className="bg-zinc-950 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#ff3434]">Sound</h2>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={isSoundEnabled}
                onChange={toggleSound}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-lg text-zinc-500">Enable Sound</span>
            </label>
          </div>

          <div className="bg-zinc-950 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#ff3434]">Sound Effects</h2>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={isEffectsEnabled}
                onChange={toggleEffects}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-lg text-zinc-500">
                Enable Sound Effects
              </span>
            </label>
          </div>

          <div className="bg-zinc-950 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#ff3434]">Volume</h2>
            <input
              type="range"
              min="0"
              max="100"
              value={volume * 100}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="mt-2 w-full"
            />
            <span className="text-lg text-zinc-500">{volume * 100}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
