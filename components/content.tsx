'use client';

import { motion, Variants } from 'framer-motion';
import {
  Building2,
  Landmark,
  Gem,
  TrendingUp,
  Coins,
  BadgeDollarSign,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const investmentOptions = [
  {
    title: 'Property Buy & Sell',
    description:
      'Invest in premium residential and commercial properties with high appreciation potential.',
    roi: '25% - 50% ROI',
    icon: Building2,
    color: 'from-emerald-500 to-green-400',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Gold Investment',
    description:
      'Secure your future with digital and physical gold investment opportunities.',
    roi: '20% Yearly ROI',
    icon: Gem,
    color: 'from-yellow-400 to-amber-500',
    image:
      'https://images.unsplash.com/photo-1615551043360-33de8b5f410c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Stock Market',
    description:
      'Grow your wealth through diversified stock investments and smart strategies.',
    roi: '20% Yearly ROI',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-400',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Coal Investment',
    description:
      'Invest in coal and industrial sectors with stable long-term growth opportunities.',
    roi: '20% Yearly ROI',
    icon: Landmark,
    color: 'from-gray-500 to-gray-400',
    image:
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function InvestmentSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-green-50 to-emerald-100">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/50 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white border border-emerald-200 text-emerald-700 text-sm font-semibold tracking-wide mb-5 shadow-md">
            INVESTMENT OPPORTUNITIES
          </span>

          <h2 className="text-4xl sm:text-6xl font-bold text-emerald-900 mb-6 leading-tight">
            Invest Smart <br />
            Build Your Future
          </h2>

          <p className="text-lg text-emerald-800/70 max-w-3xl mx-auto">
            Buy, sell, and invest in multiple high-return sectors with trusted
            investment plans and guaranteed growth opportunities.
          </p>
        </motion.div>

        {/* Investment Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {investmentOptions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
              >

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Light Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/50 to-transparent" />

                  {/* Icon */}
                  <div
                    className={`absolute top-5 left-5 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">

                  <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-emerald-800/70 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* ROI */}
                  <div className="flex items-center gap-3 mb-6">
                    <BadgeDollarSign className="w-5 h-5 text-emerald-500" />

                    <span className="text-emerald-600 font-bold text-lg">
                      {item.roi}
                    </span>
                  </div>

                  {/* Button */}
                  <button className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-500 transition-all">
                    Explore More

                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Loan Section */}
        <motion.div
          className="mt-24 relative rounded-3xl border border-emerald-100 bg-white shadow-2xl p-10 lg:p-14 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100/60 blur-3xl rounded-full" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold mb-6">
                <ShieldCheck className="w-4 h-4" />
                Loan Benefits
              </div>

              <h3 className="text-4xl font-bold text-emerald-900 mb-6 leading-tight">
                Become Eligible For <br />
                ₹1 Lakh - ₹15 Lakh Loan
              </h3>

              <p className="text-emerald-800/70 text-lg leading-relaxed mb-8">
                After completing 6 months with active investments and account
                verification, users become eligible for instant loan approvals
                ranging from ₹1 lakh to ₹15 lakh.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4">

                <div className="px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-sm">
                  ✔ Fast Approval
                </div>

                <div className="px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-sm">
                  ✔ Low Interest
                </div>

                <div className="px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-sm">
                  ✔ Secure Process
                </div>

              </div>
            </div>

            {/* Right Loan Card */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >

              <div className="rounded-3xl bg-gradient-to-br from-emerald-400 to-green-500 p-[2px] shadow-2xl">

                <div className="rounded-3xl bg-white p-10 text-center">

                  <div className="w-24 h-24 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <Coins className="w-12 h-12 text-emerald-500" />
                  </div>

                  <h4 className="text-5xl font-bold text-emerald-900 mb-4">
                    ₹15L
                  </h4>

                  <p className="text-emerald-600 text-lg mb-6">
                    Maximum Loan Eligibility
                  </p>

                  {/* Progress Bar */}
                  <div className="h-2 rounded-full bg-emerald-100 overflow-hidden">

                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-400 to-green-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      transition={{ duration: 1.5 }}
                    />

                  </div>

                  <p className="text-sm text-emerald-700/70 mt-4">
                    Eligibility after 6 months active investment
                  </p>

                </div>
              </div>

            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}