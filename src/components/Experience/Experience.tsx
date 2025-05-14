import React, { useCallback, useState } from "react";
import SectionHeader from "../Section/SectionHeader";
import Section from "../Section/Section";
import ResultsCarousel from "./ResultsCarousel";
import nextArrowIcon from "/icon/arrow-next.svg";
import prevArrowIcon from "/icon/arrow-prev.svg";

const results = [
  {
    id: 1,
    image: "/transformation/1.jpeg",
    title: "How to Get Fit Fast",
    description:
      "Discover essential tips to maximize your workout results and reach your fitness goals faster.",
  },
  {
    id: 2,
    image: "/transformation/2.jpeg",
    title: "How to Get Fit Fast1",
    description:
      "Discover essential tips to maximize your workout results and reach your fitness goals faster.",
  },
  {
    id: 3,
    image: "/transformation/3.jpeg",
    title: "How to Get Fit Fast2",
    description:
      "Discover essential tips to maximize your workout results and reach your fitness goals faster.",
  },
  {
    id: 4,
    image: "/transformation/4.jpeg",
    title: "How to Get Fit Fast3",
    description:
      "Discover essential tips to maximize your workout results and reach your fitness goals faster.",
  },
  {
    id: 5,
    image: "/transformation/5.jpeg",
    title: "How to Get Fit Fast4",
    description:
      "Discover essential tips to maximize your workout results and reach your fitness goals faster.",
  },
  {
    id: 6,
    image: "/transformation/6.jpeg",
    title: "How to Get Fit Fast4",
    description:
      "Discover essential tips to maximize your workout results and reach your fitness goals faster.",
  },
];

const Experience = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;

      setDirection(index > activeIndex ? "next" : "prev");
      setIsAnimating(true);

      setTimeout(() => {
        const newIndex = (index + results.length) % results.length;
        setActiveIndex(newIndex);

        setTimeout(() => {
          setIsAnimating(false);
        }, 400);
      }, 50);
    },
    [activeIndex, isAnimating, results.length]
  );

  const nextSlide = useCallback(() => {
    setDirection("next");
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    setDirection("prev");
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  const carouselAction = (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-4">
        <button
          onClick={prevSlide}
          className="border border-white rounded-xl p-2 hover:cursor-pointer hover:bg-opacity-10 transition duration-300 ease-in-out"
        >
          <img src={prevArrowIcon} alt="next arrow" className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="border border-white rounded-xl p-2 hover:cursor-pointer hover:bg-opacity-10 transition duration-300 ease-in-out"
        >
          <img src={nextArrowIcon} alt="next arrow" className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {results.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => goToSlide(index)}
            className={`h-3 w-5 rounded-lg transition-all duration-500 transform hover:cursor-pointer 
              ${
                index === activeIndex
                  ? "bg-[#D90A14] scale-110 w-7"
                  : "bg-[#262626] hover:bg-gray-400"
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <Section className="flex items-center justify-center">
      <div className="w-fit mx-0">
        <SectionHeader
          title="Fitmaker Blog Posts"
          description="Discover essential tips to maximize your workout results and reach your fitness goals faster."
          action={carouselAction}
        />
        <ResultsCarousel
          data={results}
          goToSlide={goToSlide}
          activeIndex={activeIndex}
          direction={direction}
          setDirection={setDirection}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
    </Section>
  );
};

export default Experience;
