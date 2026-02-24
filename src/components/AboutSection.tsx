import { motion } from "framer-motion";

/**
 * About Section Component
 * Design: Professional bio with gradient text and animated elements
 * Features: Identity, role, and background information
 */

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2
                className="text-4xl sm:text-5xl font-bold font-sora mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>
              <motion.p className="text-xl text-purple-300 font-inter">
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-white text-lg font-inter leading-relaxed">
There is a hidden rhythm in chaos, and I’ve always been driven by the desire to find it. I am Yasmine Ehab, and I don't just process data; I sculpt it.              </p>

              <p className="text-white text-lg font-inter leading-relaxed">
For me, data engineering and artificial intelligence are more than just writing Python code or building complex pipelines they are about uncovering the truths hidden within numbers. Whether I am architecting a system from scratch or untangling massive datasets, I treat every project with a meticulous eye for detail. Perfectionism isn't just a word to me; it is the baseline standard I apply to every model I train and every solution I design.</p>

              <p className="text-white text-lg font-inter leading-relaxed">
But building great technical solutions isn't just about coding expertise; it's also about mastering time. Balancing intricate logical challenges with strict deadlines is where I truly thrive, ensuring that precision never comes at the cost of efficiency. My ultimate goal is always the same: to transform raw, unfiltered information into clear, actionable intelligence that makes a real impact.              </p>
            </motion.div>
          </motion.div>
          
          {/* Right: Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 hidden lg:flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl" />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-80 lg:w-96 h-auto mx-auto bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl border border-purple-500/30 backdrop-blur-xl flex items-center justify-center overflow-hidden"
            >
              <img src="/Yasmine.jpg" alt="Yasmine - AI & Data Science" className="w-full h-auto"/>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
