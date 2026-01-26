import { useRef } from "react";
import AnimatedHeaderSection from "../Components/AnimatedHeaderSection";
import AnimatedTextLines from "../Components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function About() {
  const imgRef = useRef(null);
  const aboutText = `Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel.
  When I’m not shipping:
  ⚡️ Experimenting with React tricks and GSAP magic (making pixels dance)
  🧩 Solving full-stack puzzles while sipping coffee (brain gains mode)
  🧗 Rock climbing (problem-solving with real stakes)
🎸 Strumming chords while pixels fall into place (creative flow unlocked)`;
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });
    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTriger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} />
      </div>
    </section>
  );
}

export default About;
