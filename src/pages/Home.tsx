import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Education from '@/components/Education';

/**
 * Yasmine's Full Personal Portfolio
 * Design: Dark Gradient Futurism with smooth one-page scrolling
 * Sections: Hero, About, Skills, Projects, Experience, Contact
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a0f3a] to-[#0a0e27] text-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Navigation */}
      <Navigation />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20 overflow-hidden">
{/* Container for all background effects */}
<div className="absolute inset-0 overflow-hidden bg-[#0a0e27]">
  
  {/* --- الطبقة الأولى: تأثير الهالات الملونة (Aurora Effect) - زي ما هي --- */}
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      x: [0, 50, 0],
      y: [0, 30, 0],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
    className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/20 blur-[100px]"
  />
  <motion.div
    animate={{
      scale: [1, 1.5, 1],
      x: [0, -60, 0],
      y: [0, -40, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
    className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[100px]"
  />

  {/* --- الطبقة الثانية: شبكة الـ Plexus / Neural Network (التعديل هنا) --- */}
  <motion.div
    // حركة بطيئة جداً للخلفية عشان تدي إحساس بالعمق والحياة
    animate={{
      scale: [1, 1.3, 1],
      x: [0, -30, 0],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 25, // مدة طويلة جداً لحركة ناعمة وغير محسوسة تقريباً
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    }}
    // استخدمنا صوره جاهزة للـ Plexus واديناها شفافية ودمج لوني
    className="absolute inset-[-10%] w-[120%] h-[120%] bg-cover bg-center opacity-75 mix-blend-overlay"
    style={{
      // ده لينك لصورة شبكة بنفس الستايل الغامق المطلوب
backgroundImage: `url('/GG.png')`,      
    }}
  />
  
  {/* طبقة تدرج إضافية خفيفة عشان تدمج كل حاجة مع بعض وتغمق الأطراف */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/40 to-[#0a0e27]/80" />
</div>
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-6"
            >
<h1 className="font-bold font-sora leading-tight mb-4">
  {/* الجملة الأولى: حجم أصغر ولون أبيض */}
  <span className="text-2xl sm:text-3xl lg:text-4xl text-white block mb-2">
    Hello there, I'm
  </span>
  
  {/* الاسم: حجم أكبر وتأثير الألوان (Gradient) */}
  <span className="text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    Yasmine Ehab
  </span>
</h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 font-inter max-w-2xl mx-auto leading-relaxed"
            >
              Data Engineer | AI & Data Science Enthusiast
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 font-inter max-w-2xl mx-auto leading-relaxed"
            >
              I combine a data-driven mindset with a meticulous eye for detail and professional time management, allowing me to transform complex data into perfect, high-quality results delivered exactly on schedule
            </motion.p>

            {/* CTA Button */}
            <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  /* شيلنا whileHover و whileTap من هنا عشان ميكبرش الصندوق كله */
  className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
>
  {/* الزرار الأول */}
  <a
    href="/Yasmine_CV.pdf"
    download="Yasmine_CV.pdf"
    /* اللمسة الهندسية: ضفنا hover:scale-105 و active:scale-95 لكل زرار لوحده */
    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
  >
    Download My CV
    <ArrowRight
      size={20}
      className="rotate-90 group-hover:translate-y-1 transition-transform"
    />
  </a>
  
  {/* الزرار التاني */}
  <button
    onClick={() => {
      const element = document.querySelector("#projects"); 
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }}
    /* وضفنا نفس الكلاسات هنا عشان يكبر لوحده لما تقفي عليه */
    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
  >
    Explore My Work
    <ArrowRight
      size={20}
      className="group-hover:translate-x-1 transition-transform"
    />
  </button>
</motion.div>

            
          </div>
        </section>

        {/* About Section */}
        <AboutSection />
  
        <Education />
        {/* Experience Section */}
        <ExperienceSection />


        {/* Projects Gallery */}
        <ProjectsGallery />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
}
