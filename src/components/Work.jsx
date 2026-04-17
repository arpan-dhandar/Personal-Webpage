import MuseumSection from "./MuseumSection";

const Work = () => {
  return (
    // Changed h-screen to min-h-screen
    <div className="bg-black text-white min-h-screen w-full p-[10vh]">
      <div className="max-w-6xl mx-auto flex flex-col justify-start">
        <h2 className="uppercase text-[rgb(173,70,255)] font-bold mb-5 text-xl tracking-widest">
          Portfolio
        </h2>
        <h1 className="font-extrabold text-5xl mb-10">My Projects</h1>
        <p className="text-[rgb(144,161,185)] max-w-2xl">
          Here are some projects I've built while learning and practicing my
          development skills.
        </p>
        <MuseumSection />
      </div>
    </div>
  );
};

export default Work;