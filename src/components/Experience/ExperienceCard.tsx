import React from "react";

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  isMain?: boolean;
}

const ExperienceCard = ({
  title,
  description,
  image,
  isMain,
}: ExperienceCardProps) => {
  return (
    <div className="relative h-full">
      <div className="h-full">
        <img
          src={image}
          alt={title}
          className="object-fill rounded-lg h-full w-full"
          style={{ opacity: isMain ? 1 : 0.5 }}
        />
      </div>
      <div className="absolute p-4 h-fit bottom-0 text-white font-['Vazirmatn'] left-0 w-full z-20">
        <h1
          className={`font-bold capitalize ${
            isMain ? "text-2xl " : "text-base"
          }`}
        >
          {title}
        </h1>
        <p className={`${isMain ? "text-base" : "text-xs"}`}>{description}</p>
      </div>
      <div
        style={{ height: isMain ? "50%" : "100%" }}
        className={`absolute bottom-0 z-10 left-0 rounded w-full bg-gradient-to-t from-black to-transparent`}
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default ExperienceCard;
