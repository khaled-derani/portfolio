// import { useState } from "react";

import ReactLenis from "lenis/react";
import Hero from "./Sections/Hero.jsx";
import Navbar from "./Sections/Navbar.jsx";
import Services from "./Sections/Services.jsx";
import ServiceSummary from "./Sections/ServiceSummary.jsx";
import About from "./Sections/About.jsx";

function App() {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <section className="h-screen"></section>
      <section className="h-screen"></section>
      <section className="h-screen"></section>
      <section className="h-screen"></section>
      <section className="h-screen"></section>
    </ReactLenis>
  );
}

export default App;
