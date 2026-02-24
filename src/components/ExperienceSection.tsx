import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Terminal, Cpu, Award, Rocket, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Experience Section - 3D Holographic Carousel (Original Theme Edition)
 * Design: 3D perspective cards, maintaining the original bg-card/40 theme, 
 * with individual glowing colored frames for the active card.
 */

const experiences = [
  {
    id: 1,
    title: "Data Engineer",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "2025 - Present",
    description: "Architecting and implementing scalable Data Engineering pipelines, focusing on ETL/ELT workflows, data warehousing, and building robust infrastructure for big data processing.",
    highlights: ["AI & Data Science", "Data Pipelines", "ETL Processes"],
    icon: Database,
    colorThemes: {
      activeBorder: "border-cyan-500/60",
      activeShadow: "shadow-[0_0_30px_rgba(6,182,212,0.2)]",
      iconStyle: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
      badgeStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
      titleColor: "text-cyan-300"
    }
  },
  {
    id: 2,
    title: "Python Instructor",
    organization: "Al-Khawarizmi Camp (IEEE Al-Azhar)",
    period: "Feb 2026",
    description: "Taught Python programming fundamentals to 10+ children. Developed engaging curriculum and hands-on exercises to foster learning and creativity.",
    highlights: ["Python", "Student Mentoring", "Engaging Teaching"],
    icon: Terminal,
    colorThemes: {
      activeBorder: "border-orange-500/60",
      activeShadow: "shadow-[0_0_30px_rgba(249,115,22,0.2)]",
      iconStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40",
      badgeStyle: "bg-orange-500/10 border-orange-500/20 text-orange-300",
      titleColor: "text-orange-300"
    }
  },
  {
    id: 3,
    title: "AI & ML Developer",
    organization: "Institute of Information Technology (ITI)",
    period: "Sep 2025",
    description: "Participating in a specialized AI & ML internship, focusing on Supervised/Unsupervised learning, neural networks, and data visualization. Applied machine learning workflows to real-world datasets.",
    highlights: ["Machine Learning", "Data Processing", "Model Building"],
    icon: Cpu,
    colorThemes: {
      activeBorder: "border-emerald-500/60",
      activeShadow: "shadow-[0_0_30px_rgba(16,185,129,0.2)]",
      iconStyle: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
      badgeStyle: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
      titleColor: "text-emerald-300"
    }
  },
  {
    id: 4,
    title: "Vice Head of Python",
    organization: "IEEE Al-Azhar",
    period: "2025 - Present",
    description: "Leading the Python Committee at IEEE Al-Azhar, mentoring students in programming and data science. Organizing workshops and coding challenges.",
    highlights: ["Team Leadership", "Workshop Organization", "Mentoring"],
    icon: Award,
    colorThemes: {
      activeBorder: "border-purple-500/60",
      activeShadow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      iconStyle: "bg-purple-500/20 text-purple-400 border-purple-500/40",
      badgeStyle: "bg-purple-500/10 border-purple-500/20 text-purple-300",
      titleColor: "text-purple-300"
    }
  },
  {
    id: 5,
    title: "NASA Space Apps Participant",
    organization: "NASA Space Apps Challenge",
    period: "Oct 2025",
    description: "Participated in global hackathon solving space-related challenges. Developed innovative solutions using data analysis and web development.",
    highlights: ["Innovation", "Global Competition", "Problem Solving", "Web Development"],
    icon: Rocket,
    colorThemes: {
      activeBorder: "border-yellow-500/60",
      activeShadow: "shadow-[0_0_30px_rgba(234,179,8,0.2)]",
      iconStyle: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
      badgeStyle: "bg-yellow-500/10 border-yellow-500/20 text-yellow-300",
      titleColor: "text-yellow-300"
    }
  },
];

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Original Header Maintained */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-white text-lg font-inter">
            My journey in technology, leadership, and continuous learning
          </p>
        </motion.div>

        {/* 3D Holographic Deck */}
        <div className="relative w-full h-[550px] md:h-[480px] flex items-center justify-center [perspective:1200px]">
          {experiences.map((exp, index) => {
            let offset = index - activeIndex;
            // Handle wrap-around for smooth infinite looping
            if (offset < -2) offset += experiences.length;
            if (offset > 2) offset -= experiences.length;

            const isActive = offset === 0;
            const absOffset = Math.abs(offset);
            const direction = Math.sign(offset);

            // Hide cards that are out of sight to optimize rendering
            if (absOffset > 2) return null;

            const Icon = exp.icon;

            return (
              <motion.div
                key={exp.id}
                onClick={() => setActiveIndex(index)}
                animate={{
                  x: `${direction * absOffset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 70)}%`,
                  scale: 1 - absOffset * 0.15,
                  rotateY: direction * -25, // 3D Tilt effect
                  zIndex: 10 - absOffset,
                  opacity: isActive ? 1 : Math.max(0, 0.4 - absOffset * 0.1),
                  filter: isActive ? "blur(0px)" : `blur(${absOffset * 2}px)`,
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} // Smooth spring animation
                className={`absolute w-full max-w-[340px] md:max-w-[480px] h-[450px] rounded-2xl cursor-pointer group origin-center flex flex-col p-6 md:p-8 transition-colors duration-500
                  bg-card/40 backdrop-blur-xl border 
                  ${isActive 
                    ? `${exp.colorThemes.activeBorder} ${exp.colorThemes.activeShadow}` 
                    : "border-purple-500/20 shadow-none hover:border-purple-500/40"
                  }
                `}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Header (Icon & Date) */}
                <div className="flex justify-between items-start mb-6 w-full">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 border
                    ${isActive 
                      ? exp.colorThemes.iconStyle 
                      : "bg-purple-500/10 border-purple-500/20 text-gray-400 group-hover:text-purple-300"
                    }
                  `}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-jetbrains border transition-all duration-500
                    ${isActive 
                      ? exp.colorThemes.badgeStyle 
                      : "bg-purple-500/5 border-purple-500/10 text-gray-500"
                    }
                  `}>
                    {exp.period}
                  </div>
                </div>

                {/* Titles */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-sora text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className={`font-inter text-sm md:text-base font-medium transition-colors duration-500
                    ${isActive ? exp.colorThemes.titleColor : "text-purple-300"}
                  `}>
                    {exp.organization}
                  </p>
                </div>

                {/* Content Details (Only visible when card is active to keep UI clean) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex-grow flex flex-col justify-between"
                    >
                      <p className="text-gray-300 font-inter text-sm md:text-base leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {exp.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 rounded-lg text-xs font-jetbrains border ${exp.colorThemes.badgeStyle}`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-8 relative z-20">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-purple-500/20 bg-card/40 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/20 transition-all active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Progress Indicators */}
          <div className="flex gap-2">
            {experiences.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-500 rounded-full
                  ${activeIndex === idx ? "w-8 h-2 bg-purple-400" : "w-2 h-2 bg-purple-500/30 hover:bg-purple-500/60"}
                `}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-purple-500/20 bg-card/40 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/20 transition-all active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}