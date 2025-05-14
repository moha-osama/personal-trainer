import React, { useState } from "react";
import Section from "../Section/Section";
import SectionHeader from "../Section/SectionHeader";
import bgEllipse from "/ui/Ellipse 20.svg";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Section>
      <SectionHeader title="Contact Us" />
      <div className="2xl:px-24">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="flex-1 p-4 text-left bg-[#262626] text-white rounded-lg border-2 border-[#CD4E17] hover:border-[#D90A14] focus:border-[#D90A14] outline-none text-lg md:text-xl"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="flex-1 p-4 text-left bg-[#262626] text-white rounded-lg border-2 border-[#CD4E17] hover:border-[#D90A14] focus:border-[#D90A14] outline-none text-lg md:text-xl"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className="w-full p-4 text-left bg-[#262626] text-white rounded-lg border-2 border-[#CD4E17] hover:border-[#D90A14] focus:border-[#D90A14] outline-none text-lg md:text-xl resize-none"
            required
          />
          <button
            type="submit"
            className="self-start px-8 py-4 bg-[#D90A14] text-white rounded-lg text-lg md:text-xl font-semibold hover:bg-[#CD4E17] transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="absolute right-1/12 bottom-1/12 -z-10">
        <img src={bgEllipse} alt="bg ellipse" />
      </div>
    </Section>
  );
};

export default Contact; 