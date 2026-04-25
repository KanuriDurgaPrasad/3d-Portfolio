"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const title = "Kanuri Durga Prasad";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 Opacity and Y translation (0% to 20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);

  // Section 2 Opacity and Y translation (20% to 45%)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.45], [150, -150]);

  // Section 3 Opacity and Y translation (50% to 75%)
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.75], [150, -150]);

  // Split text animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0 }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-10">
      
      {/* SECTION 1: CENTER */}
      <motion.div 
        style={{ opacity: opacity1, scale: scale1 }}
        className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-4 mix-blend-difference"
      >
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0px" }}
          animate={{ opacity: 1, letterSpacing: "8px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-xs md:text-sm text-white/70 uppercase mb-6 font-mono"
        >
          XR & AI Developer
        </motion.p>
        
        <div className="flex overflow-hidden perspective-[1000px]">
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
                delay: index * 0.05
              }}
              className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white inline-block origin-bottom"
              style={{ paddingRight: char === " " ? "1rem" : "0" }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[4px] text-white/50">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* SECTION 2: LEFT ALIGNED */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="sticky top-0 h-screen flex flex-col items-start justify-center px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-7xl font-bold text-white max-w-4xl leading-[1.1] tracking-tight">
          I engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">immersive 3D</span> <br/>
          & XR experiences.
        </h2>
        <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-xl font-light">
          Three.js expert & AI Prompt Engineer crafting next-generation digital architectures and AI animations.
        </p>
      </motion.div>

      {/* SECTION 3: RIGHT ALIGNED */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="sticky top-0 h-screen flex flex-col items-end justify-center text-right px-8 md:px-24"
      >
        <h2 className="text-4xl md:text-7xl font-bold text-white max-w-4xl leading-[1.1] tracking-tight">
          Bridging the gap between <br/> <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">design & engineering.</span>
        </h2>
        <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-xl font-light">
          From 3D web rendering to AI-driven animation with millions of views.
        </p>
      </motion.div>

    </div>
  );
}
