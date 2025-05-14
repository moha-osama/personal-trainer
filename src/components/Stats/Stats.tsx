import React, { useEffect, useState } from "react";

type StatItem = {
  value: string;
  title: string;
  description: string;
};

const Stats = () => {
  const statsData = [
    {
      value: "96%",
      title: "Client Satisfaction",
      description: "Our Members Love Their Results And Experience",
    },
    {
      value: "+5",
      title: "Years Of Experience",
      description: "Trust In Our Proven Track Record Of Transforming",
    },
    {
      value: "+800",
      title: "Active Members",
      description: "Join Our Thriving Fitness Community",
    },
    {
      value: "24/7",
      title: "Support Available",
      description: "Expert Assistance Whenever You Need It",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-9">
      <div className="flex flex-col sm:flex-row justify-around gap-4 2xl:px-24">
        {statsData.map((item, index) => (
          <>
            <div
              key={index}
              className="rounded text-center flex flex-col items-center justify-center"
            >
              <div className="flex flex-row items-center gap-2">
                <h1
                  className={`${
                    index % 2 === 0 ? "text-[#D90A14]" : "text-[#CD4E17]"
                  } text-2xl sm:text-4xl font-bold capitalize font-['Vazirmatn']`}
                >
                  {item.value}
                </h1>
                <h3 className="font-semibold text-white text-base">
                  {item.title}
                </h3>
              </div>
              <div>
                <p className="text-[#888] text-xs font-normal capitalize">
                  {item.description}
                </p>
              </div>
            </div>
            {index !== statsData.length - 1 && (
              <div
                className="self-center border-t-0 h-[0.1875rem] sm:min-h-20 w-2/3 sm:w-[0.1875rem] rounded-4xl"
                style={{
                  background:
                    "linear-gradient(90deg, #D90A14 0%, #CD4E17 100%)",
                }}
              />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Stats;
