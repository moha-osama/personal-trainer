import React, { useEffect } from "react";
import style from "./Hero.module.css";

import rightEllipse from "/ui/Ellipse 1.svg";
import leftEllipse from "/ui/Ellipse 2.svg";
import floatingEllipse from "/ui/Ellipse 3.svg";
import floatingEllipse2 from "/ui/Ellipse 4.svg";
import heroBgPicEllipse from "/ui/Ellipse 7.svg";
import vector from "/man.png";

const Hero = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const getDetails = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/hero-section/");
      const data = await response.json();
      console.log(data);
      setTitle(data.data.hero_title);
      setDescription(data.data.hero_description);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDetails();
  });

  return (
    <section className="">
      <div className="relative z-10">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 grid-cols-12">
          <div className="mr-auto flex flex-col gap-9 items-center justify-center w-full h-full col-span-6 md:col-span-7">
            <h1 className="text-center max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-11 sm:leading-none md:text-5xl xl:text-6xl text-white">
              {title}
            </h1>
            <div className="hidden sm:flex flex-col gap-4 w-full h-full">
              <div>
                <p className="justify-center max-w-2xl mb-6 font-normal text-white text-base md:text-md lg:text-base">
                  {description}
                </p>
              </div>
              <div className="flex flex-row gap-6 w-full">
                <button
                  data-coler="Red"
                  data-icon="No Icon"
                  data-size="Large"
                  data-state="Default"
                  data-type="Fill"
                  className="w-full hover:cursor-pointer hover:bg-red-900 transition cursor-auto self-stretch bg-red-600 rounded-xl inline-flex justify-center items-center text-white font-['Vazirmatn'] py-2 text-sm md:text-base"
                >
                  Start Your Journey
                </button>
                <button
                  data-coler="Red"
                  data-icon="No Icon"
                  data-size="Large"
                  data-state="Default"
                  data-type="Fill"
                  className="w-full hover:bg-[#CD4E17] hover:text-white hover:border-[#CD4E17] transition hover:cursor-pointer cursor-auto self-stretch border botder-[#CD4E17] rounded-xl inline-flex justify-center items-center text-[#CD4E17] font-['Vazirmatn'] py-2 text-sm md:text-base"
                >
                  Explore Programs
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:mt-0 col-span-6 md:col-span-5">
            <div className="relative w-full h-full">
              <div className="absolute top-0 right-0 w-full h-full">
                <img
                  src={vector}
                  alt="mockup"
                  className="object-contain w-full h-full"
                />
              </div>
              <img
                src={heroBgPicEllipse}
                className="object-contain w-full h-full"
              />
              <img
                src={floatingEllipse}
                className="hidden md:block absolute -top-16 left-0"
              />
              <img
                src={floatingEllipse2}
                className="hidden md:block absolute -bottom-7 right-0"
              />
            </div>
          </div>
        </div>
        <div className="flex sm:hidden px-6 flex-col gap-4 w-full h-full">
          <div>
            <p className="max-w-2xl mb-6 md:text-md lg:text-base text-start justify-start text-white text-xs font-normal font-['Vazirmatn'] capitalize">
              Join the Fitmaker community and transform your fitness journey.
              Our expert coaches and personalized programs are designed to help
              you achieve your goals and exceed your expectations. Ready to make
              a change?
            </p>
          </div>
          <div className="flex flex-row gap-2 w-full">
            <button
              data-coler="Red"
              data-icon="No Icon"
              data-size="Large"
              data-state="Default"
              data-type="Fill"
              className="w-full cursor-auto self-stretch bg-red-600 rounded-xl inline-flex justify-center items-center text-white font-['Vazirmatn'] py-2 text-sm md:text-base"
            >
              Start Your Journey
            </button>
            <button
              data-coler="Red"
              data-icon="No Icon"
              data-size="Large"
              data-state="Default"
              data-type="Fill"
              className="w-full cursor-auto self-stretch border botder-[#CD4E17] rounded-xl inline-flex justify-center items-center text-[#CD4E17] font-['Vazirmatn'] py-2 text-sm md:text-base"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </div>
      {/* left and right background shimmer ellipse */}
      <div className="absolute top-0 right-0 h-full">
        <img className="w-full h-full" src={rightEllipse} alt="ellipse" />
      </div>
      <div className="absolute top-0 left-0 h-full">
        <img className="w-full h-full" src={leftEllipse} alt="ellipse" />
      </div>
    </section>
  );
};

export default Hero;
