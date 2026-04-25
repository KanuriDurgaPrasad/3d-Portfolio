"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, Trophy, Play, HeartPulse, Edit3 } from "lucide-react";

export default function SkillsBento() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-32 px-4 md:px-24 bg-[#121212] text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
            Arsenal & <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Achievements</span>
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]"
        >
          {/* Main Full Stack Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 glass rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-end"
          >
            {/* Animated Border Beam */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#60a5fa_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute inset-[1px] bg-[#121212] rounded-[23px] z-0" />
            <div className="absolute inset-[1px] bg-white/[0.02] rounded-[23px] z-0" />

            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 z-10">
              <Database className="w-40 h-40 text-blue-400" />
            </div>
            
            <div className="z-10 mt-auto">
              <h4 className="text-4xl font-bold mb-4 text-white">XR & 3D <br/> Development</h4>
              <p className="text-white/50 max-w-sm font-light leading-relaxed">
                Extensive experience in building interactive 3D applications using Three.js and integrating Google Media APIs into existing XR projects.
              </p>
            </div>
          </motion.div>

          {/* Hackathon Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 glass rounded-3xl p-8 flex items-center gap-6 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-4 bg-emerald-500/10 rounded-2xl shrink-0 z-10 border border-emerald-500/20 group-hover:border-emerald-400/50 transition-colors">
              <Trophy className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="z-10">
              <h4 className="text-xl font-bold mb-2">Smart India Hackathon 2022</h4>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                Successfully contributed to a Level-2 project focused on VR Medical Education.
              </p>
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div 
            variants={itemVariants}
            className="glass rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Terminal className="w-8 h-8 text-purple-400 mb-4 z-10" />
            <div className="z-10 mt-auto">
              <h4 className="text-lg font-bold mb-2">Prompt Engineering</h4>
              <p className="text-sm text-white/50 font-light">
                Developed a Google Canvas clone generating full 3D websites dynamically using advanced AI prompting.
              </p>
            </div>
          </motion.div>

          {/* Karate Card */}
          <motion.div 
            variants={itemVariants}
            className="glass rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Trophy className="w-8 h-8 text-amber-400 mb-4 z-10" />
            <div className="z-10 mt-auto">
              <h4 className="text-lg font-bold mb-2">Karate Gold Medal</h4>
              <p className="text-sm text-white/50 font-light">
                National Winner at 10th National Goju-Ryu Karate Championship.
              </p>
            </div>
          </motion.div>

          {/* YouTube Card */}
          <motion.div 
            variants={itemVariants}
            className="glass rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Play className="w-8 h-8 text-red-400 mb-4 z-10" />
            <div className="z-10 mt-auto">
              <h4 className="text-lg font-bold mb-2">@unique.cineai</h4>
              <p className="text-sm text-white/50 font-light">
                Running a highly successful animation AI channel on YouTube and Instagram with 4M+ views.
              </p>
            </div>
          </motion.div>

          {/* Video Editing Card */}
          <motion.div 
            variants={itemVariants}
            className="glass rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Edit3 className="w-8 h-8 text-blue-400 mb-4 z-10" />
            <div className="z-10 mt-auto">
              <h4 className="text-lg font-bold mb-2">Animation Ads</h4>
              <p className="text-sm text-white/50 font-light">
                Producing high-quality AI animation ads for brands to accelerate their business growth.
              </p>
            </div>
          </motion.div>

           {/* First Aid Card */}
           <motion.div 
            variants={itemVariants}
            className="md:col-span-2 glass rounded-3xl p-8 flex items-center gap-6 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-rose-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-4 bg-rose-500/10 rounded-2xl shrink-0 z-10 border border-rose-500/20 group-hover:border-rose-400/50 transition-colors">
              <HeartPulse className="w-8 h-8 text-rose-400" />
            </div>
            <div className="z-10">
              <h4 className="text-xl font-bold mb-2">Level-1 First Aid</h4>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                Certified by Indian Red Cross Society in emergency response practices. Passionate about fitness.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
