import React from 'react';

const Hero = () => {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 text-white flex flex-col items-center justify-center text-center space-y-6 sm:space-y-10 px-4">
      <div className="absolute inset-0 overflow-hidden -z-10 animate-pulse">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-30 animate-float"
            style={{
              fontSize: `${Math.random() * 2 + 1.5}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
      <h1 className="text-4xl sm:text-7xl font-extrabold drop-shadow-lg leading-tight animate-pulse">
        H💖manshi, <br /> 
        <span className="text-2xl sm:text-4xl">Some stories are written in the stars, and ours is just beginning... ✨</span>
      </h1>
      <p className="text-lg sm:text-2xl font-medium max-w-xl">
        "Every moment with you feels like a beautiful chapter in a book I never want to end. 💫💕"
      </p>
      <button
        onClick={scrollToSection}
        className="relative group px-8 sm:px-12 py-3 sm:py-4 bg-white text-purple-600 rounded-full shadow-lg transition duration-300 hover:bg-pink-100"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 opacity-75 blur-md rounded-full transition duration-300 group-hover:blur-lg"></span>
        <span className="relative">Scroll to Discover Something Special 💕</span>
      </button>
    </section>
  );
};

export default Hero;
