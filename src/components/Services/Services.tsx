import React from "react";
import ServicesCard from "./ServicesCard";
import bgEllipse from "/ui/Ellipse 5.svg";
import SectionHeader from "../Section/SectionHeader";
import Section from "../Section/Section";

const Services = () => {
  return (
    <Section>
      <div className="absolute -top-60 left-0 w-full h-full -z-10">
        <img src={bgEllipse} alt="bg ellipse" className="w-full object-cover" />
      </div>

      <div className="relative z-10">
        <SectionHeader
          title="Our Services"
          description="At This Part You Can Easily access all of our servises. take a look
            at them and chose wich ever you want."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
    </Section>
  );
};

export default Services;
