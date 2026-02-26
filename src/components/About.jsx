import { Briefcase, Users, Award, Coffee } from "lucide-react";
import Skill from "./Skill";

const About = () => {
  const stats = [
    { icon: <Briefcase size={28} />, label: "10+", sub: "Projects Build" },
    { icon: <Users size={28} />, label: "5+", sub: "Technologies" },
    { icon: <Award size={28} />, label: "3+", sub: "Certifications" },
    { icon: <Coffee size={28} />, label: "∞", sub: "Cups of Coffee" },
  ];

  return (
    <div className="bg-black text-white h-auto">
      <div className=" p-15 flex flex-col md:flex-row gap-15">
        <div>
          <h2 className="uppercase text-[rgb(173,70,255)] font-bold my-4">
            About Me
          </h2>
          <h1 className="font-extrabold text-6xl mb-10">
            Learning & Growing Every Day
          </h1>
          <div className="text-[rgb(144,161,185)]">
            <p>
              I'm a computer science student with a deep passion for technology
              and problem-solving. My journey into programming started with
              curiosity, and it has evolved into a commitment to build
              meaningful applications that make a difference.
            </p>
            <br />
            <p>
              While I'm still early in my career, I'm dedicated to continuous
              learning and hands-on practice. I believe in learning by doing,
              which is why I focus on building real projects that challenge me
              to apply what I've learned and discover new solutions.
            </p>
          </div>
        </div>
        <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-xl">
  <img
    src="/photos/myPhoto.jpeg"
    alt="Photo of the developer."
    className="w-full h-full object-cover"
  />
</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10 justify-items-center">
        {stats.map((item, index) => (
           <div key={index} className="flex flex-col items-center group">
            
            <div
              className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl 
                            bg-[rgb(173,70,255)]/10 border border-[rgb(173,70,255)]/20 
                            text-[rgb(173,70,255)] transition-all duration-300 
                            group-hover:bg-[rgb(173,70,255)]/20 group-hover:scale-110"
            >
              {item.icon}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
              {item.label}
            </div>
            <div className="text-[rgb(144,161,185)] text-sm font-medium uppercase tracking-wide">
              {item.sub}
            </div>
          </div>
        ))}
      </div>

      <Skill />
    </div>
  );
};

export default About;
