'use client';

import { motion, Variants } from 'framer-motion';
import { Download, UserPlus, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Download App',
    description: 'Get the WIPO app on your mobile device',
    icon: Download,
  },
  {
    number: '02',
    title: 'Create Account',
    description: 'Sign up with your details and verify your identity',
    icon: UserPlus,
  },
  {
    number: '03',
    title: 'Start Investing',
    description: 'Browse deals and begin your investment journey',
    icon: Zap,
  },
];

export function HowItWorks() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // fixed easing
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-emerald-600 font-semibold text-sm mb-3 px-4 py-2 bg-emerald-50 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            QUICK START
          </motion.span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Simple Setup Process
          </h2>

          <p className="text-lg text-foreground/70">
            Get started in 3 simple steps
          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Connecting line */}
          <motion.div
            className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300/0 via-emerald-500 to-emerald-300/0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ y: -10 }}
                >
                  <div className="flex flex-col items-center text-center">

                    {/* Step Number Circle */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="glass-green p-6 rounded-full w-28 h-28 flex items-center justify-center relative group-hover:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(16, 185, 129, 0.2)',
                            '0 0 30px rgba(16, 185, 129, 0.4)',
                            '0 0 20px rgba(16, 185, 129, 0.2)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 to-emerald-100/10 rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                        />

                        <div className="relative flex flex-col items-center">
                          <span className="text-4xl font-bold text-emerald-600">
                            {step.number}
                          </span>
                        </div>
                      </motion.div>

                      {/* Icon inside circle */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </motion.div>

                    {/* Step Info */}
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>

                    <p className="text-foreground/70 text-base">
                      {step.description}
                    </p>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}