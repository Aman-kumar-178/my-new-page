'use client';

import { motion, Variants } from 'framer-motion';
import { Building2, TrendingUp, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Property Buy',
    description: 'Verified properties with secure and transparent deals.',
    gradient: 'from-emerald-500/20 to-emerald-600/20',
    color: 'text-emerald-600',
  },
  {
    icon: TrendingUp,
    title: 'Property Sell',
    description: 'Sell properties faster with high-visibility listings.',
    gradient: 'from-green-500/20 to-green-600/20',
    color: 'text-green-600',
  },
  {
    icon: Users,
    title: 'Investment Committees',
    description: 'Join investment groups and grow together.',
    gradient: 'from-teal-500/20 to-teal-600/20',
    color: 'text-teal-600',
  },
  {
    icon: Zap,
    title: 'Smart Growth',
    description: 'Track opportunities and manage investments easily.',
    gradient: 'from-emerald-400/20 to-emerald-500/20',
    color: 'text-emerald-700',
  },
];

export function FeaturesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto">

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
            PREMIUM FEATURES
          </motion.span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Advanced Investment Tools
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to make smarter property investment decisions
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div
                  className={`glass-green p-8 h-full hover:border-emerald-300 transition-all duration-300 overflow-hidden relative shadow-md hover:shadow-xl`}
                >

                  {/* Gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  <div className="relative z-10">

                    {/* Icon */}
                    <motion.div
                      className="mb-6 inline-block"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={`p-3 bg-gradient-to-br ${feature.gradient} rounded-xl`}
                      >
                        <Icon className={`w-8 h-8 ${feature.color}`} />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/70 text-base leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative line */}
                    <motion.div
                      className="mt-6 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500/0 rounded-full w-0 group-hover:w-16 transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}