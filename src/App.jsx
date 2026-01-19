// import { useState } from "react";

import Navbar from "./Sections/Navbar.jsx";

function App() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <section id="home" className="min-h-screen bg-red-400"></section>
      <section id="services" className="min-h-screen bg-stone-500"></section>
    </div>
  );
}

export default App;
