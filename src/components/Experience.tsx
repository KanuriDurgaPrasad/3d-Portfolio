"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timelineData = [
  {
    type: "work",
    role: "XR & 3D Developer",
    company: "Infosys",
    date: "2025 - Present",
    description: "Developing immersive 3D web applications using Three.js. Successfully integrated Google Media into an existing XR project and engineered a Google Canvas clone to dynamically generate 3D websites using advanced AI prompting.",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    type: "work",
    role: "AI Animation Creator",
    company: "@unique.cineai",
    date: "2025 - Present",
    description: "Running a highly successful social media presence with over 4 Million views on Instagram. Specializing in AI animation content and producing engaging animation ads to help brands accelerate their business growth.",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    type: "work",
    role: "Software Developer",
    company: "Infosys",
    date: "2024 Nov - Present",
    description: "Transitioning software engineering skills into innovative solutions, bringing a strong foundation in full-stack architecture to modern web development and 3D application design.",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    type: "edu",
    role: "B.Tech in Electronics & Communication",
    company: "Pragati Engineering College",
    date: "2020 - 2024",
    description: "Graduated with a focus on core electronics while developing a deep passion for 3D web development, AI content creation, and software engineering.",
    icon: <GraduationCap className="w-5 h-5" />
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-24 bg-[#121212] text-white relative">
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-24 tracking-tight flex items-center gap-4">
            Journey
          </h3>
        </motion.div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />
          
          {/* Animated Fill Line */}
          <motion.div 
            className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-blue-400 via-emerald-400 to-purple-400 origin-top shadow-[0_0_10px_rgba(96,165,250,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-24">
            {timelineData.map((item, index) => {
              return (
                <div key={index} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center group">
                  
                  {/* Left Side (Empty on odd, Content on even) */}
                  <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${index % 2 !== 0 ? 'md:order-3' : 'md:text-right'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`glass p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-500 relative overflow-hidden group-hover:-translate-y-1 ${index % 2 !== 0 ? 'hover:shadow-[-10px_10px_30px_rgba(52,211,153,0.1)]' : 'hover:shadow-[10px_10px_30px_rgba(96,165,250,0.1)]'}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        <span className={`text-sm font-mono px-3 py-1 rounded-full whitespace-nowrap inline-block ${item.type === 'work' ? 'text-blue-400 bg-blue-400/10' : 'text-purple-400 bg-purple-400/10'}`}>
                          {item.date}
                        </span>
                        <h4 className="text-2xl font-bold text-white mt-2">{item.role}</h4>
                      </div>
                      <h5 className="text-lg text-white/80 mb-4 font-light">{item.company}</h5>
                      <p className="text-white/50 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center md:order-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", bounce: 0.5, delay: 0.4 }}
                      className="w-10 h-10 rounded-full border-4 border-[#121212] bg-[#121212] z-10 flex items-center justify-center group-hover:border-white transition-colors duration-500 relative"
                    >
                      <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.type === 'work' ? 'bg-blue-400' : 'bg-purple-400'}`} />
                      <div className={`relative z-20 text-white/50 group-hover:text-white transition-colors duration-500`}>
                        {item.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Right Side for layout */}
                  <div className="hidden md:block w-[45%] md:order-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
