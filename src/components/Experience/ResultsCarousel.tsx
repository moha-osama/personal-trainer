import React, { useState, useEffect, useCallback } from "react";
import ExperienceCard from "./ExperienceCard";

interface ResultsCarouselProps {
  data: { id: number; image: string; title: string; description: string }[];
  goToSlide: (index: number) => void;
  activeIndex: number;
  direction: "next" | "prev";
  setDirection: (direction: "next" | "prev") => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

const ResultsCarousel = ({
  data: results,
  goToSlide,
  activeIndex,
  direction,
  setDirection,
  nextSlide,
  prevSlide,
}: ResultsCarouselProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let intervalId: number;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setDirection("next");
        nextSlide();
      }, 4000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, nextSlide]);

  const getVisibleIndices = () => {
    const indices = [];

    for (let i = 0; i <= 4; i++) {
      indices.push((activeIndex + i) % results.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div
      className="relative w-full max-w-6xl mx-auto px-0 sm:px-4 pb-8 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel grid */}
      <div className="grid grid-cols-2 grid-row-4 md:grid-cols-4 gap-4 overflow-hidden p-2">
        {visibleIndices.map((itemIndex, displayIndex) => {
          const item = results[itemIndex];
          const isMainCard = displayIndex === 0;

          return (
            <div
              key={`${item.id}-${displayIndex}`}
              className={`
                transform transition-all duration-500 ease-in-out cursor-pointer
                ${
                  isAnimating && isMainCard
                    ? direction === "next"
                      ? "animate-slideIn"
                      : "animate-slideOut"
                    : ""
                }
                ${isMainCard ? "col-span-2 row-span-2" : "col-span-1"}
                ${isMainCard ? "hover:scale-102" : "hover:scale-105"}
                ${isMainCard ? "shadow-lg" : "shadow"}
                ${isAnimating ? "opacity-90" : "opacity-100"}
              `}
              onClick={() => goToSlide(itemIndex)}
              style={{
                transformOrigin: "center",
                animationFillMode: "forwards",
                animationDuration: "0.5s",
              }}
            >
              <div
                className={`w-full overflow-hidden transition-transform duration-500
                ${isAnimating ? (direction === "next" ? "" : "") : ""} ${
                  isMainCard ? "h-[20rem] md:h-full" : "h-44 md:h-64"
                }
              `}
              >
                <ExperienceCard
                  image={item.image}
                  title={item.title}
                  isMain={isMainCard}
                  description={isMainCard ? item.description : ""}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Inject CSS animations */}
      <style jsx>{`
        @keyframes slideFromRight {
          from {
            /* transform: translateX(10%); */
            opacity: 0;
          }
          to {
            /* transform: translateX(0); */
            opacity: 1;
          }
        }

        @keyframes slideFromLeft {
          from {
            /* transform: translateX(-10%); */
            opacity: 0;
          }
          to {
            /* transform: translateX(0); */
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-slideIn {
          animation: slideFromRight 0.5s ease-out;
        }

        .animate-slideOut {
          animation: slideFromLeft 0.5s ease-out;
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
          transition-duration: 0.3s;
        }

        .hover\:scale-105:hover {
          transform: scale(1.05);
          transition-duration: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default ResultsCarousel;
