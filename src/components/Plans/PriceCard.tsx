import React from "react";

interface PriceCardProps {
  className?: string;
  imgSrc?: string;
  mainColor?: string;
}

const PriceCard = ({ className, imgSrc, mainColor }: PriceCardProps) => {
  return (
    <div
      className={`${className} border-2 relative rounded-lg w-fit`}
      style={{ borderColor: mainColor }}
    >
      <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3xl">
        {imgSrc && (
          <img
            src={imgSrc}
            alt="bg ellipse"
            className="object-contain w-full h-full"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center gap-3">
            <p
              className={`text-[${mainColor}] capitalize text-base font-['Vazirmatn']`}
            >
              Package
            </p>
            <h1 className="text-2xl sm:text-4xl font-['Gagalin'] text-white capitalize">
              Pro Plan
            </h1>
            <p
              className={`text-[${mainColor}] capitalize text-xs font-['Vazirmatn']`}
            >
              Description
            </p>
          </div>
          <div className="max-w-xs">
            <p className="text-white justify-center capitalize text-xs sm:text-base font-['Vazirmatn']">
              Our Pro Plan offers advanced workouts and personalized nutrition
              coaching to help you reach your goals faster. Sign Up Right Now!
            </p>
          </div>
          <p
            className={`text-[${mainColor}] capitalize text-xs font-['Vazirmatn']`}
          >
            Features
          </p>
          <ul className="flex flex-col gap-2 pl-4 self-start list-disc text-white font-['Vazirmatn'] text-xs sm:text-sm">
            <li>Access to All Of Our Exercise Videos</li>
            <li>Progress Tracking</li>
            <li>Supportive Online Community</li>
            <li>Advanced, Personalized Workout Plans</li>
            <li>Comprehensive Nutrition Coaching</li>
            <li>Access to Advanced Workout Programs</li>
            <li>Body Composition Analysis</li>
          </ul>
        </div>
        <div className="text-center justify-start py-4">
          <span className="text-white text-xl sm:text-3xl font-bold font-['Vazirmatn']">
            99$
          </span>
          <span className="text-zinc-500 text-xs sm:text-sm font-normal font-['Vazirmatn'] capitalize">
            /USDT
          </span>
        </div>
        <div className="flex items-center justify-center">
          <button
            style={{ background: mainColor }}
            className={`text-center hover:cursor-pointer hover: duration-75 px-9 py-2 rounded-[20px] text-white text-base sm:text-lg font-medium font-['Vazirmatn'] capitalize`}
          >
            Choose This Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
