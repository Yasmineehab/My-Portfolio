import { motion } from "framer-motion";
import { GraduationCap, Database, Award } from "lucide-react";

/**
 * Bento Box Style Education Section
 * Design: Large, premium cards with giant watermark icons, grade badge, and subtle hover glow.
 */

const educationData = [
  {
    id: "degree",
    title: "B.Sc. in Systems & Computers Engineering",
    organization: "Al-Azhar University",
    period: "Academic Degree",
    grade: "Grade: Excellent", // ضيفي التقدير هنا
    description: "Focusing on advanced system architecture, software engineering principles, data structures, and complex algorithms established a robust engineering foundation.",
    highlights: ["System Architecture", "Algorithms", "C++ / OOP"],
    icon: GraduationCap,
    gradient: "from-blue-500 to-indigo-600",
    shadowColor: "shadow-blue-500/20",
  },
  {
    id: "depi",
    title: "AI & Data Science Track",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Professional Program",
    grade: null, // مفيش تقدير هنا فمش هيظهر الـ Badge
    description: "Intensive technical pipeline designed for building scalable data engineering workflows, handling large datasets, and deploying machine learning models in production.",
    highlights: ["Data Engineering", "ETL Pipelines", "Data processing"],
    icon: Database,
    gradient: "from-purple-500 to-pink-600",
    shadowColor: "shadow-purple-500/20",
  }
];

// Component for a single Bento Card
const BentoCard = ({ data }) => {
  const Icon = data.icon;
  
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative group rounded-[2rem] border border-white/10 bg-gray-900/30 backdrop-blur-xl p-8 sm:p-10 overflow-hidden h-full flex flex-col justify-between transition-all duration-500 hover:border-white/20 hover:shadow-2xl ${data.shadowColor}`}
    >
       {/* The Giant Watermark Icon in Background */}
      <Icon className="absolute -right-16 -bottom-16 w-80 h-80 text-white/5 -rotate-12 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6" />

      {/* Hover Internal Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 -z-10 pointer-events-none`} />

      {/* Content Layer (z-10 to sit above watermark) */}
      <div className="relative z-10">
        {/* Header: Icon & Title */}
        <div className="mb-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${data.gradient} flex items-center justify-center mb-6 shadow-lg relative overflow-hidden`}>
             <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
            <Icon className="w-7 h-7 text-white relative z-10" />
          </div>
          
          <h3 className="text-3xl font-bold font-sora text-white mb-3 leading-tight">
            {data.title}
          </h3>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
             <p className={`text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r ${data.gradient}`}>
              {data.organization}
            </p>
             <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-700"></span>
            <span className="text-gray-500 font-jetbrains text-sm border border-gray-800 rounded-full px-3 py-0.5 w-fit">
              {data.period}
            </span>
          </div>

          {/* Grade Badge (يظهر فقط لو في تقدير) */}
          {data.grade && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-white/90 shadow-sm backdrop-blur-md">
              <Award className="w-4 h-4 text-yellow-400" />
              {data.grade}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 font-inter text-base leading-relaxed mb-8 mt-2">
          {data.description}
        </p>
      </div>

      {/* Footer: Tags (relative z-10) */}
      <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
        {data.highlights.map((highlight, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-jetbrains text-gray-300 transition-colors group-hover:border-white/20 group-hover:bg-white/10"
          >
            {highlight}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function EducationSection() {
  return (
    <section id="education" className="min-h-[80vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-900/20 rounded-full filter blur-[128px] opacity-30 -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-900/20 rounded-full filter blur-[128px] opacity-30 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Education & Expertise
          </h2>
          <p className="text-gray-400 text-lg font-inter max-w-2xl mx-auto">
            My academic roots and professional specialization tracks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {educationData.map((data) => (
            <motion.div
               key={data.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: data.id === 'depi' ? 0.2 : 0 }}
               viewport={{ once: true }}
               className="h-full"
            >
              <BentoCard data={data} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}