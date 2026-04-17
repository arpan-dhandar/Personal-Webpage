import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
  {
    title: "Celestial Dashboard",
    category: "Web Architecture",
    description: "A high-performance data visualization engine with real-time stream processing.",
    tags: ["React", "Tailwind", "D3.js"],
    link: "#"
  },
  {
    title: "Void OS",
    category: "System Design",
    description: "An experimental terminal-based portfolio interface mimicking a retro-futuristic OS.",
    tags: ["Next.js", "TypeScript", "GSAP"],
    link: "#"
  },
  {
    title: "Lumina Gallery",
    category: "UI/UX Research",
    description: "A concept store for digital assets featuring immersive CSS-based lighting effects.",
    tags: ["Three.js", "Framer Motion"],
    link: "#"
  }
];

const MuseumSection = () => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="group relative bg-[#0a0a0c] border border-gray-800 rounded-2xl p-8 transition-all duration-500 hover:border-[#AD46FF]/50 hover:-translate-y-2 shadow-2xl overflow-hidden"
        >
          {/* Subtle Background Glow on Hover */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#AD46FF]/5 blur-[50px] group-hover:bg-[#AD46FF]/20 transition-all duration-500 rounded-full" />

          {/* Icon/Category Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-black border border-gray-800 rounded-lg group-hover:border-[#AD46FF]/50 transition-colors">
              <Layers className="text-[#AD46FF] w-6 h-6" />
            </div>
            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
              <ExternalLink className="w-5 h-5 text-gray-500 hover:text-[#AD46FF] cursor-pointer" />
            </div>
          </div>

          {/* Project Details */}
          <h4 className="text-[#AD46FF] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            {project.category}
          </h4>
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="text-[10px] font-mono px-2 py-1 bg-black border border-gray-800 rounded text-gray-500 group-hover:border-[#AD46FF]/30 group-hover:text-[#AD46FF]/80 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-1 h-0 bg-[#AD46FF] group-hover:h-full transition-all duration-500" />
        </div>
      ))}
    </div>
  );
};

export default MuseumSection;