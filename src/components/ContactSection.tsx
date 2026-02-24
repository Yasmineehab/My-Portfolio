import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

/**
 * Contact Section Component
 * Design: CTA with social links and contact information
 * Features: Email, GitHub, LinkedIn links
 */

export default function ContactSection() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "yasmineehab.769@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Yasmineehab",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yasmine-ehabb",
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg font-inter">
            I'm always interested in hearing about new projects and opportunities
          </p>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative group mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300" />
          <div className="relative bg-card/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold font-sora text-white mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-gray-300 text-lg font-inter mb-8">
              Whether you have a project in mind or just want to chat about data science and engineering, I'd love to hear from you.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:yasmine@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Send me an email
            </motion.a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 font-inter mb-6">Or connect with me on:</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={idx}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />
                  <div className={`relative bg-gradient-to-r ${link.color} rounded-xl p-4 flex items-center justify-center hover:shadow-lg transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-400 text-xs font-inter mt-2">{link.label}</p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-purple-500/20 text-center"
        >
          <p className="text-gray-500 font-inter text-sm">
            © 2026 Yasmine Ehab. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
