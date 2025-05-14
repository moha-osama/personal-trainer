import React from "react";

import Section from "../Section/Section";
import SectionHeader from "../Section/SectionHeader";
import PriceCard from "./PriceCard";

import bgEllipse1 from "/ui/Ellipse 8.svg";
import bgEllipse2 from "/ui/Ellipse 9.svg";

const Plans = () => {
  return (
    <Section>
      <SectionHeader
        title="Our  Plans"
        description="Select the plan that suits your fitness goals and let our expert coaches guide you every step of the way."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center justify-items-center">
        <PriceCard imgSrc={bgEllipse1} mainColor="#CD4E17" />
        <PriceCard imgSrc={bgEllipse2} mainColor="#D90A14" />
        <PriceCard imgSrc={bgEllipse1} mainColor="#CD4E17" />
      </div>
    </Section>
  );
};

export default Plans;
