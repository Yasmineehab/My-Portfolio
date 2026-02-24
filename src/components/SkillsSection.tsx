import { motion } from "framer-motion";
import { Network, Cpu, Wrench } from "lucide-react";

/**
 * Skills Section Component - Neural Network Edition
 * Design: Categorized skills with circuit pathways, glowing nodes, and updated skill lists
 */

const skillCategories = [
  {
    title: "Data Science",
    color: "from-cyan-500 to-blue-500",
    icon: Network,
    skills: [
      { name: "Pandas", level: "Advanced" },
      { name: "Matplotlib", level: "Advanced" },
      { name: "Seaborn", level: "Advanced" },
      { name: "Plotly", level: "Intermediate" },
      { name: "NumPy", level: "Advanced" },
      { name: "SQL", level: "Intermediate" },
      { name: "Python", level: "Advanced" },
    ],
  },
  {
    title: "Engineering",
    color: "from-purple-500 to-pink-500",
    icon: Cpu,
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "C++", level: "Advanced" },
      { name: "OOP", level: "Advanced" },
      { name: "Data Structures", level: "Intermediate" },
      { name: "Logic Design", level: "Intermediate" },
      { name: "Arduino", level: "Advanced" },
    ],
  },
  {
    title: "Tools & Technologies",
    color: "from-orange-500 to-red-500",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: "Advanced" },
      { name: "Jupyter Notebooks", level: "Advanced" },
      { name: "Canva", level: "Advanced" },
      { name: "Figma", level: "Beginner" },
    ],
  },
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "text-green-400";
      case "Intermediate":
        return "text-yellow-400";
      case "Beginner":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg font-inter">
            Proficient in data science, engineering, and modern development tools
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            
            return (
              <motion.div key={idx} variants={itemVariants} className="flex flex-col">
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-card/60 backdrop-blur-xl border border-gray-700/50 flex items-center justify-center relative overflow-hidden flex-shrink-0 group`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    <Icon className="w-7 h-7 text-gray-200 relative z-10" />
                  </div>
                  <h3 className={`text-2xl font-bold font-sora bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills Circuit Container */}
                <div className="relative space-y-4 flex-grow">
                  
                  {/* Vertical Neural Spine */}
                  <div className={`absolute top-6 bottom-6 left-[19px] w-[2px] bg-gradient-to-b ${category.color} opacity-20`} />

                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      whileHover={{ x: 6 }}
                      className="relative flex items-center gap-4 group"
                    >
                      {/* Pulsating Neural Node */}
                      <div className="relative w-10 flex justify-center items-center flex-shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-500 group-hover:bg-white transition-colors duration-300 relative z-10" />
                        <div className={`absolute w-3 h-3 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 group-hover:animate-ping`} />
                      </div>

                      {/* Skill Card */}
                      <div className="flex-grow bg-card/40 backdrop-blur-xl border border-gray-700/30 rounded-xl p-3.5 hover:border-gray-500/50 transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-lg">
                        <span className="text-gray-200 font-inter font-medium">{skill.name}</span>
                        <span className={`text-sm font-semibold font-jetbrains ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}