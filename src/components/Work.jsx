
import MuseumSection from "./MuseumSection";

const Work = () => {
  return (
    <div className="bg-black text-white h-screen w-screen p-[10vh]">
      <div className="flex-clos justify-start">
        <h2 className="uppercase text-[rgb(173,70,255)] font-bold mb-5 text-xl">
          Portfolio
        </h2>
        <h1 className="font-extrabold text-5xl mb-10">My Projects</h1>
        <p className="text-[rgb(144,161,185)]">
          Here are some projects I've built while learning and practicing my
          development skills
        </p>
      </div>
      <MuseumSection />
    </div>
  );
};

export default Work;
