import React, { useEffect } from "react";

const events = [
  {
    title: "First Time I Saw You",
    date: "December 27, 2024",
    description:
      "The first time I saw you, everything felt magical. That moment will forever be etched in my heart 💖.",
  },
  {
    title: "You Replied to My IG Story",
    date: "February 2, 2025",
    description:
      "When you replied to my IG story, it sparked our conversation and our journey together began! 💌",
  },
  {
    title: "Our First Meeting",
    date: "July 19, 2025",
    description:
      "On this day, we will finally meet in person, and I can't wait to create new memories together! 💞",
  },
];

const Timeline = () => {
  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".timeline-item");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add(
            "opacity-100",
            "transform",
            "translate-y-0",
            "transition-all",
            "duration-700"
          );
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-gradient-to-r from-pink-100 via-purple-50 to-blue-100 py-10 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-purple-700 mb-8 sm:mb-14">
        Our Journey Together
      </h2>
      <div className="space-y-12 sm:space-y-16 max-w-3xl mx-auto px-4 sm:px-6">
        {events.map((event, index) => (
          <div key={index} className="timeline-item opacity-0 translate-y-10">
            <h3 className="text-xl sm:text-2xl font-bold text-pink-600 mb-3 sm:mb-4">
              {event.date}
            </h3>
            <p className="text-base sm:text-lg text-gray-800 italic">
              {event.description}
            </p>
            {index !== events.length - 1 && (
              <div className="flex justify-center my-6 sm:my-8">
                <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-pink-500 text-white shadow-lg animate-bounce">
                  ❤️
                </div>
                <div className="w-px h-12 sm:h-20 bg-purple-300 mx-3 sm:mx-4"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;