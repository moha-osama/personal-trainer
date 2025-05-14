import React from "react";

import heroStyle from "../Hero/Hero.module.css";
import man from "/man.png";

const ServicesCard = () => {
  return (
    <div className="h-72 max-w-[30rem] bg-radial-[at_25%_75%] from-[#d20c13a4] to-75% to-[#1d1d1d] rounded-xl shadow-[#d9141e1f] px-4 relative overflow-hidden">
      <div className="py-9 relative z-10 grid grid-cols-3">
        <div className="col-span-2 flex flex-col items-start justify-center gap-4">
          <div className="flex flex-col items-start justify-center gap-4 ">
            <h1 className={`${heroStyle.texturedText} text-3xl`}>
              Losing Weight
            </h1>
            <p className="text-center justify-start text-white text-xs sm:text-sm font-normal font-['Vazirmatn'] capitalize">
              Click To Join Our Losing Weight Plans
            </p>
            <p className="text-start justify-start text-white/75 text-xs sm:text-sm font-normal font-['Vazirmatn'] capitalize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              modi repellendus provident temporibus? Adipisci optio neque cumque
              natus blanditiis similique ipsum, laudantium unde alias odio ullam
              sunt numquam? Obcaecati, non!
            </p>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <img src={man} alt="" className="w-full object-cover" />
        </div>
      </div>
      <div className="absolute bottom-0 z-50 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default ServicesCard;
