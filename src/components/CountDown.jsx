import React, { useState, useEffect } from "react";

// Move calculateTimeLeft outside the component
function calculateTimeLeft(targetDate) {
  const difference = new Date(targetDate) - new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
}

const Countdown = () => {
  const targetDate = "2025-07-19T00:00:00"; // Her Birthday (July 19th)
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // Dependency is just targetDate

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <span key={interval} className="text-lg font-bold">
      {timeLeft[interval]} {interval}{" "}
    </span>
  ));

  return (
    <div className="text-center py-10 bg-gradient-to-r from-pink-100 via-purple-50 to-blue-100">
      <h2 className="text-3xl font-bold text-red-500 mb-4">
        Countdown to meet you! 🎉
      </h2>
      {timerComponents.length ? (
        <div className="text-xl text-gray-700 space-x-2">{timerComponents}</div>
      ) : (
        <p className="text-xl text-green-500">The wait is over! Happy Birthday! 🎂</p>
      )}
    </div>
  );
};

export default Countdown;
