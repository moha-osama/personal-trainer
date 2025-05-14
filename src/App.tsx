import "./App.css";

import { useState } from "react";
import reactLogo from "./assets/react.svg";

import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import Plans from "./components/Plans/Plans";
import Experience from "./components/Experience/Experience";
import Faq from "./components/FAQ/Faq";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Plans />
      <Experience />
      <Faq />
      <Contact />
    </>
  );
}

export default App;
