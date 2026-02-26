import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 font-sans overflow-hidden bg-black ">
      {/* --- Background Gradient Circles --- */}

      {/* Dark Purple Circle - Tucked into Upper Left Side */}
      <div
        className="absolute left-[8%] top-[5%] w-[400px] h-[400px] rounded-full blur-[90px] pointer-events-none opacity-90"
        style={{ backgroundColor: "rgb(46, 5, 74)" }}
      ></div>
      {/* Dark Blue Circle - Tucked into Lower Right Side */}
      <div
        className="absolute right-[8%] bottom-[5%] w-[400px] h-[400px] rounded-full blur-[90px] pointer-events-none opacity-90"
        style={{ backgroundColor: "rgb(27, 54, 86)" }}
      ></div>

      {/* --- Content --- */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Availability Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 bg-black/60 backdrop-blur-md text-gray-300 text-sm mt-15 mb-10 ">
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.9)]"></span>
          Open to opportunities
        </div>

        {/* Hero Title */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-200 to-cyan-300">
            Arpan Dhandar
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-6 tracking-wide">
          Computer Engineering Student
        </h2>

        <p className="max-w-2xl text-gray-400 text-lg leading-relaxed mb-12">
          Passionate about learning and building. Exploring the world of web
          development and software engineering while creating projects that
          solve real problems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mb-20">
          <button className="px-10 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all active:scale-95">
            View My Projects
          </button>
          <button className="px-10 py-3.5 bg-transparent border border-gray-700 text-white font-semibold rounded-full hover:bg-white/10 transition-all active:scale-95">
            Get In Touch
          </button>
        </div>

        {/* Social Icons & Bottom Arrow */}
        <div className="flex flex-col items-center gap-6 text-gray-400">
          <div className="flex gap-8">
            {/* GitHub Link */}
            <a 
              href="https://github.com/arpan-dhandar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-all transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>

            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/in/arpan-dhandar-a073b3372/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-all transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            {/* Twitter Link */}
            <a 
              href="https://x.com/TEAMxAPPU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-all transform hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>

            {/* Email Link (Opens Mail App) */}
            <a 
              href="mailto:arpandhandar.77@email.com" 
              className="hover:text-white transition-all transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
