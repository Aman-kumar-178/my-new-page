'use client';

import { motion, Variants } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

export function FinalCTA() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-4xl mx-auto relative">

        {/* Background elements */}
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-300/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />

        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />

        <motion.div
          className="glass-green p-12 sm:p-16 rounded-3xl text-center relative z-10 border-emerald-300/50 hover:border-emerald-400 transition-all duration-300 shadow-xl hover:shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              Ready to Build Your{' '}
              <span className="gradient-text">Future?</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Download the WIPO App and access smarter property investment opportunities today.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="https://files.catbox.moe/fh1nuh.apk"
              download
              className="glow-button px-10 py-4 rounded-xl font-bold text-lg text-white flex items-center gap-3 shadow-lg group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Download Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.a>

            <motion.a
              href="#"
              className="px-10 py-4 rounded-xl font-bold text-lg text-emerald-700 border-2 border-emerald-400 hover:border-emerald-600 hover:text-emerald-900 transition-all duration-300"
              whileHover={{
                scale: 1.08,
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}