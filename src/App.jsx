// import { useState } from "react";

import Hero from "./Sections/Hero.jsx";
import Navbar from "./Sections/Navbar.jsx";

function App() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
