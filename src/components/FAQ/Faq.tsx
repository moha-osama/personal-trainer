import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevron from "/icon/chevron.svg";
import Section from "../Section/Section";
import SectionHeader from "../Section/SectionHeader";
import bgEllipse from "/ui/Ellipse 20.svg";
import type { FAQ } from "../../types/faq";

interface AccordionItemProps {
  header: string;
  children: React.ReactNode;
  [key: string]: any;
}

const Faq = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/faqs");
        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }
        const data = await response.json();
        console.log(data.data);
        setFaqs(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch FAQs");
        console.error("Error fetching FAQs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const AccordionItem = ({ header, ...rest }: AccordionItemProps) => (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          {header}
          <img
            className={`ml-auto transition-transform duration-200 ease-out ${
              isEnter && "rotate-180"
            }`}
            src={chevron}
            alt="Chevron"
          />
        </>
      )}
      className="border-b"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full p-4 text-left bg-[#262626] hover:cursor-pointer text-lg md:text-xl font-semibold capitalize text-white rounded-lg border-2 ${
            isEnter
              ? "border-[#D90A14] rounded-b-none border-b-0"
              : "border-[#CD4E17]"
          }`,
      }}
      contentProps={{
        className:
          "transition-height duration-200 ease-out text-[#888] text-sm md:text-base text-['Vazirmatn']",
      }}
      panelProps={{
        className:
          "p-4 border-2 border-t-0 border-[#D90A14] rounded-lg rounded-t-none",
      }}
    />
  );

  if (loading) {
    return (
      <Section>
        <SectionHeader title="FAQ" />
        <div className="text-white text-center">Loading FAQs...</div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section>
        <SectionHeader title="FAQ" />
        <div className="text-red-500 text-center">{error}</div>
      </Section>
    );
  }

  return (
    <Section>
      <SectionHeader title="FAQ" />
      <Accordion
        transition
        transitionTimeout={250}
        className="flex flex-col gap-6 2xl:px-24"
      >
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} header={faq.question}>
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
      <div className="absolute left-1/12 top-1/12 -z-10">
        <img src={bgEllipse} alt="bg ellipse" />
      </div>
    </Section>
  );
};

export default Faq;
