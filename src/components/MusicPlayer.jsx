import React, { useState, useEffect, useMemo } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useMemo(() => new Audio("./himanshi.mp3"), []);

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0; // Reset the audio when paused
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying); // Toggle the play/pause state
  };

  return (
    <div className="fixed bottom-5 right-5 flex items-center z-50">
      <button
        onClick={toggleMusic}
        className="bg-pink-500 text-white p-2 sm:p-3 rounded-full shadow-lg transition hover:scale-105"
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
