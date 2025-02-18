import React from 'react';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import Timeline from './components/Timeline';
import LoveLetter from './components/LoveLetter';
import Proposal from './components/Proposal';
import MusicPlayer from './components/MusicPlayer';
import CountDown from './components/CountDown';
import LoveMap from './components/LoveMap';
import './index.css';

function App() {
  return (
    <div className="bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 text-white">
      {/* Hero Section */}
      <Hero />

        {/* Photo Gallery */}
        <PhotoGallery />

      {/* Countdown Timer */}
      <CountDown targetDate="2024-12-05T00:00:00" />

      {/* Timeline */}
      <Timeline />

      {/* Love Letter */}
      <LoveLetter />

      {/* Love Map */}
      <LoveMap />

      {/* Proposal Section */}
      <Proposal />

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
}

export default App;
