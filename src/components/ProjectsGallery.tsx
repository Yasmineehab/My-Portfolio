import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

/**
 * Projects Gallery Component
 * Design: Filterable project cards with category tags
 * Features: Smart Parking, Data Engineering, Fashion Design projects
 */

const projects = [
    {
    id: 1,
    title: "Smart Parking System",
    category: "Embedded Systems",
    description: "Real-time parking occupancy monitoring with IR sensors. Automated entry/exit detection using Arduino and C++.",
    tech: ["C++", "Arduino", "Logic Design", "IoT"],
    link: "#",
    github: "https://github.com/Yasmineehab/Smart-Parking-System",
    image: "/smart-parking.jpg",
  },
    {
    id: 2,
    title: "UrbanEco-Vision",
    category: "Web Development",
    description: "A sustainability focused project combining a modern web app with data science notebooks to analyze and forecast key environmental and economic indicators. It supports data driven decision making across energy, water, and urban landscape domains.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://urban-eco-vision-u46c.vercel.app/",
    github: "https://github.com/Yasmineehab/UrbanEco-Vision",
    image: "/URBAN.jpg",
  },
  {
    id: 3,
    title: "Predictive Analytics Dashboard",
    category: "Data Engineering",
    description: "This project was developed to analyze 90k+ shopping orders. The goal was to build a robust data pipeline to merge multiple relational datasets and extract actionable business insights.",
    tech: ["Python", "Plotly", "Pandas", "Jupyter Notebooks"],
    link: "#",
    github: "https://github.com/Yasmineehab/Ecommerce-Data-Analysis",
    image: "/Ecommerce-Data-Analysis.png",
  },
];

const categories = ["All", "Embedded Systems","Data Engineering", "Web Development"];

export default function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-white text-lg font-inter">
            Showcasing my work across embedded systems, data science, and design
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-inter text-sm transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-card/40 backdrop-blur-xl border border-purple-500/20 text-gray-300 hover:border-purple-500/40"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-card/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
{/* Icon or Image */}
<div className="mb-4 h-48 w-full rounded-lg overflow-hidden border border-purple-500/20 bg-purple-900/10 flex items-center justify-center">
  {project.image.startsWith("/") || project.image.startsWith("http") ? (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  ) : (
    <span className="text-6xl">{project.image}</span>
  )}
</div>
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs font-jetbrains text-purple-300">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-sora text-white mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm font-inter mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs font-jetbrains text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-purple-500/20">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 rounded-lg text-purple-300 hover:text-purple-200 transition-all duration-300 text-sm font-inter"
                  >
                    <ExternalLink size={16} />
                    View
                  </motion.a>
                  {project.github !== "#" && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-pink-600/20 hover:bg-pink-600/40 border border-pink-500/30 rounded-lg text-pink-300 hover:text-pink-200 transition-all duration-300 text-sm font-inter"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
