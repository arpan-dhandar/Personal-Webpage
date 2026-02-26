import React from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Info & Socials */}
        <div className="space-y-8">
          <div>
            <h3 className="text-[#a855f7] uppercase tracking-widest text-sm font-bold mb-4">Contact</h3>
            <h1 className="text-5xl font-bold mb-6">Let's Connect</h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              I'm always excited to connect with fellow developers, work on 
              interesting projects, or discuss opportunities. Feel free to reach out!
            </p>
          </div>

          {/* Contact Items */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-full flex items-center justify-center border border-[#3730a3]">
                <Mail className="text-[#a855f7] w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-medium">youremail@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-full flex items-center justify-center border border-[#3730a3]">
                <Github className="text-[#60a5fa] w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <p className="font-medium">github.com/yourusername</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-4">
            <p className="text-sm font-semibold mb-4">Connect With Me</p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-[#111827] border border-gray-800 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <Icon size={18} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="bg-[#0f172a]/50 border border-gray-800 p-8 rounded-3xl shadow-2xl backdrop-blur-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#a855f7] transition-colors placeholder:text-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#a855f7] transition-colors placeholder:text-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea 
                rows="5" 
                placeholder="Tell me about your project or just say hi..." 
                className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#a855f7] transition-colors placeholder:text-gray-600 resize-none"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
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