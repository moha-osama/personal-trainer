import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={`container relative mx-auto px-4 py-9 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
