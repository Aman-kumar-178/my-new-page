'use client';

import { motion, Variants } from 'framer-motion';
import { CheckCircle2, Download, MessageCircle } from 'lucide-react';

export function HeroSection() {
  // Container Variants
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Item Variants
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
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
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative overflow-hidden gradient-bg">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"
          animate={{
            y: [0, 60, 0],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl"
          animate={{
            y: [0, -60, 0],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-200/10 rounded-full blur-3xl"
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
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <motion.div
            className="glass-green px-6 py-3 rounded-full shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-sm font-semibold text-emerald-700">
              ✓ 10K+ Trusted Investors
            </p>
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight text-foreground"
        >
          <span className="block mb-3">
            Invest Smarter.
          </span>

          <span className="gradient-text text-5xl sm:text-6xl lg:text-7xl">
            Own Bigger.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-foreground/70 text-center mb-8 max-w-2xl mx-auto"
        >
          WIPO Group brings modern property investment and secure
          real estate opportunities together in one powerful platform.
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto"
        >
          {[
            'Secure Platform',
            'Fast Property Deals',
            'Trusted Investment Network',
          ].map((indicator, idx) => (
            <motion.div
              key={indicator}
              className="glass-green px-4 py-3 rounded-lg flex items-center gap-2 border-emerald-300/40 hover:border-emerald-400/60 transition-all"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(16, 185, 129, 0.05)',
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: idx * 0.1,
              }}
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />

              <p className="text-sm font-medium text-emerald-900">
                {indicator}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >

          {/* Download Button */}
          <motion.a
            href="https://files.catbox.moe/fh1nuh.apk"
            download
            className="glow-button px-8 py-4 rounded-xl font-bold text-lg text-white flex items-center gap-2 shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />

            Download WIPO App
          </motion.a>

          {/* Contact Button */}
          <motion.a
            href="https://wa.me/918057199719"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-green px-8 py-4 rounded-xl font-bold text-lg text-emerald-700 hover:border-emerald-400 transition-all duration-300 flex items-center gap-2"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />

            Contact Us
          </motion.a>

        </motion.div>
      </motion.div>
    </section>
  );
}