// import { useState } from "react";

import Hero from "./Sections/Hero.jsx";
import Navbar from "./Sections/Navbar.jsx";
import ServiceSummary from "./Sections/ServiceSummary.jsx";

function App() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <section className="min-h-screen"></section>
    </div>
  );
}

export default App;
