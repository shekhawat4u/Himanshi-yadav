import React, { useState } from 'react';
import Confetti from 'react-confetti';

const Proposal = () => {
  const [response, setResponse] = useState('');
  const handleCoffeeDate = () => setResponse('Coffee Date');
  const handleShopping = () => setResponse('Coffee Date');

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 text-center text-white">
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-10">How about a date? ☕🛍️</h2>
      <div className="space-x-4 sm:space-x-6 flex flex-col sm:flex-row items-center justify-center">
        <button 
          onClick={handleCoffeeDate} 
          className="bg-yellow-400 px-6 py-3 rounded-lg text-lg sm:text-xl hover:bg-yellow-500 mb-4 sm:mb-0"
        >
          Coffee Date
        </button>
        <button 
          onClick={handleShopping} 
          className="bg-pink-400 px-6 py-3 rounded-lg text-lg sm:text-xl hover:bg-pink-500"
        >
          Shopping
        </button>
      </div>
      {response && (
        <>
          {response === 'Coffee Date' && <Confetti />}
          <p className="mt-8 text-xl sm:text-3xl">
            {response === 'Coffee Date' 
              ? "A cozy coffee date sounds perfect! Let's make it happen. ☕❤️" 
              : "Let's go shopping and make it a fun day! 🛍️💖"}
          </p>
        </>
      )}
    </section>
  );
};

export default Proposal;
