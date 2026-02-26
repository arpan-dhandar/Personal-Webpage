import React from 'react'

const Skill = () => {

const skills = [
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 75 },
  { name: "Node.js & Express", level: 70 },
  { name: "MongoDB", level: 70 },
  { name: "Python", level: 75 },
];

const categories = [
  { title: "Frontend", items: "HTML, CSS, JavaScript, React.js" },
  { title: "Backend & Database", items: "Node.js, Express.js, MongoDB" },
  { title: "Programming Languages", items: "Python, Java, C, C++" },
  { title: "Tools & Platforms", items: "Git, GitHub, VS Code, Figma" },
  { title: "Currently Learning", items: "Advanced React Patterns, TypeScript, System Design" },
];


  return (
    <div className=' flex-cols p-5 mt-30'>
      <div className='flex items-center justify-center'>
   <div>
     <h2 className='uppercase text-[rgb(173,70,255)] font-bold my-4 flex items-center justify-center text-xl'>Skills</h2>
    <h1 className='font-extrabold text-5xl mb-10'>Technologies I Work With</h1>
    <p className='text-[rgb(144,161,185)]'>Continuously expanding my skill set through coursework, online learning, and hands-on projects</p>
   </div>
      </div>
     <div className="min-h-screen bg-[#050510] text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section: Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span>{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl bg-[#0f1120] border border-gray-800 hover:border-purple-500/50 transition-colors
                `}
            >
              <h3 className="text-lg font-bold mb-3">{cat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cat.items}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  
    </div>
  )
}

export default Skill