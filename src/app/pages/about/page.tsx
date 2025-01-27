"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const stats = [
    { label: "Active Users", value: "1M+" },
    { label: "Countries", value: "150+" },
    { label: "Transactions", value: "$10B+" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pt-[100px] sm:pt-[150px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          About DigitWallet
        </h1>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg mb-6"
            >
              At DigitWallet, we believe the future of finance is decentralized,
              transparent, and accessible to everyone. As a pioneering financial
              service provider,
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg"
            >
              we merge the worlds of traditional finance with cutting-edge
              cryptocurrency technologies, creating secure, scalable, and
              innovative solutions for corporations, institutions, and investors
              worldwide. With a foundation built on trust, transparency, and
              forward-thinking, we strive to be your go-to partner for managing
              digital assets.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-12 lg:mt-[120px]"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Our Story
        </h1>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg mb-6"
            >
              At DigitWallet, we believe the future of finance is decentralized,
              transparent, and accessible to everyone.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg"
            >
              We merge the worlds of traditional finance with cutting-edge
              cryptocurrency technologies, creating secure, scalable, and
              innovative solutions for corporations, institutions, and investors
              worldwide.
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 lg:mt-24"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Our Mission
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              year: "1",
              title: "Mission",
              desc: "At DigitWallet, our mission is clear: To empower businesses and investors with secure, innovative, and reliable cryptocurrency solutions.",
            },
            {
              year: "2",
              title: "Vision",
              desc: "Our vision is to become a global leader in the cryptocurrency and DeFi space, shaping the future of finance for corporations and institutions.",
            },
            {
              year: "3",
              title: "Promise",
              desc: "At DigitWallet, we promise to always prioritize security, transparency, and client success.",
            },
          ].map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2 }}
              className="relative"
            >
              <div className="text-5xl font-bold text-purple-400/20 mb-4">
                {milestone.year}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {milestone.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {milestone.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-12 lg:mt-24"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Licensed & Offices
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { role: "CEO & Founder", location: "San Francisco" },
            { role: "CTO", location: "London" },
            { role: "Head of Security", location: "Singapore" },
            { role: "Lead Developer", location: "Berlin" },
          ].map((member, index) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1 }}
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm text-center"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-400/20 rounded-full mx-auto mb-4" />
              <div className="text-base sm:text-lg font-semibold text-white mb-1">
                {member.role}
              </div>
              <div className="text-gray-400 text-sm sm:text-base">
                {member.location}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Digit Wallet</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          DigitWallet is more than just a service provider—we’re a partner in
          your financial journey. Whether you’re a business looking to optimize
          your treasury, an institution seeking secure crypto custody, or an
          investor aiming to unlock liquidity from your assets, DigitWallet is
          here to help you achieve your goals. Let’s work together to create a
          more open, decentralized, and secure financial future. ​ Get in Touch
          to learn more about how DigitWallet can transform your business.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
          Contact Us
        </button>
      </motion.div>

      
    </div>
  );
}
