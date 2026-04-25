"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI 3D Canvas Clone",
    tech: ["Three.js", "AI Prompts", "React", "WebGL"],
    description: "Engineered a Google Canvas clone that empowers users to generate complete 3D websites dynamically using natural language prompts. Showcases deep expertise in AI prompt engineering and 3D rendering.",
    image: "/projects/epharmacy.png",
    color: "from-emerald-500/20 to-blue-500/20",
    accent: "text-emerald-400"
  },
  {
    title: "XR Media Integration",
    tech: ["Three.js", "XR Framework", "Google Media API"],
    description: "Developed a seamless Google Media integration into an existing XR project. Bridged the gap between 3D object manipulation and external media libraries for immersive web experiences.",
    image: "/projects/nxtwatch.png",
    color: "from-purple-500/20 to-magenta-500/20",
    accent: "text-purple-400"
  },
  {
    title: "Brand Animation Ads",
    tech: ["AI Animation", "Video Production", "Prompting"],
    description: "Produced high-converting animation advertisements for brands under @unique.cineai. Leveraged AI content generation to achieve over 4M views on Instagram and drive business growth.",
    image: "/projects/nxttrendz.png",
    color: "from-orange-500/20 to-yellow-500/20",
    accent: "text-orange-400"
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the 3D effect
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of card (-0.5 to 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="perspective-[1000px] h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-3xl glass p-1 group cursor-pointer"
      >
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)`
          }}
        />

        <div className="relative w-full h-full rounded-[23px] bg-[#121212]/80 backdrop-blur-md overflow-hidden flex flex-col pointer-events-none" style={{ transform: "translateZ(30px)" }}>
          
          {/* Image Container */}
          <div className="relative w-full h-64 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-50 z-10 mix-blend-overlay`} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212] z-10" />
            
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-grow">
            <h4 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${project.accent}`}>
              {project.title}
            </h4>
            
            <p className="text-white/60 mb-8 flex-grow leading-relaxed font-light">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech: string, i: number) => (
                <span key={i} className="text-xs font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-32 px-4 md:px-24 bg-[#121212] text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6"
        >
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
            Selected <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Works</span>
          </h3>
          <p className="text-white/50 max-w-sm font-light leading-relaxed">
            A showcase of my recent XR projects, AI-driven 3D applications, and highly successful animation content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
