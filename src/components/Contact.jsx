import React from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    // Changed bg color to black to match the theme flow
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 font-sans border-t border-gray-900">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Info & Socials */}
        <div className="space-y-8">
          <div>
            <h3 className="text-[#AD46FF] uppercase tracking-widest text-sm font-bold mb-4">Contact</h3>
            <h1 className="text-5xl font-bold mb-6">Let's Connect</h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              I'm always excited to connect with fellow developers, work on 
              interesting projects, or discuss opportunities.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-[#1a1125] rounded-full flex items-center justify-center border border-[#AD46FF]/30 group-hover:border-[#AD46FF] transition-all">
                <Mail className="text-[#AD46FF] w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-medium hover:text-[#AD46FF] cursor-pointer transition-colors">youremail@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-[#1a1125] rounded-full flex items-center justify-center border border-[#AD46FF]/30 group-hover:border-[#AD46FF] transition-all">
                <Github className="text-[#AD46FF] w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <p className="font-medium hover:text-[#AD46FF] cursor-pointer transition-colors">github.com/yourusername</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <p className="text-sm font-semibold mb-4 text-gray-500 uppercase tracking-widest">Connect With Me</p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-[#0f0f12] border border-gray-800 rounded-full flex items-center justify-center hover:border-[#AD46FF] hover:text-[#AD46FF] transition-all text-gray-400">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="bg-[#0f0f12] border border-gray-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Subtle Glow Effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#AD46FF]/10 blur-[100px]"></div>
          
          <form className="space-y-6 relative z-10">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#AD46FF] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#AD46FF] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
              <textarea 
                rows="4" 
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#AD46FF] transition-colors resize-none"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-[#AD46FF] hover:bg-[#9333ea] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#AD46FF]/20">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;