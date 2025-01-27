"use client";

import { motion } from "framer-motion";

export default function Custody() {
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
        transition={{ delay: 1.8 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Custody
        </h2>
        <motion.p className="text-gray-300 text-base sm:text-lg mb-6">
          Your digital assets deserve the highest level of security and care.
          With DigitWallet's custody services, your crypto is stored with with
          your security in mind, and always accessible when you need it
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" mt-36"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Our Custody
        </h1>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg mb-6"
            >
              At DigitWallet, we understand that safeguarding your
              cryptocurrency assets is paramount. That's why we offer a custody
              solution leveraging Ledger hardware wallets, renowned globally for
              their industry-leading security and reliability.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg"
            >
       Designed for
              individuals and businesses alike, our custody services combine
              technology, security measures and expertise to protect your
              digital wealth.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-rows-1 sm:grid-rows gap-6"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-base sm:text-lg mb-6"
              >
                At DigitWallet, we believe the future of finance is
                decentralized, transparent, and accessible to everyone.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-base sm:text-lg"
              >
                We merge the worlds of traditional finance with cutting-edge
                cryptocurrency technologies, creating secure, scalable, and
                innovative solutions for corporations, institutions, and
                investors worldwide.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="mt-12 lg:mt-24"
>
  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
    Features & Benefits
  </h2>
  <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        year: "Cold Storage",
        desc: "Your assets are stored offline, in cold storage solutions, protecting them from cyberattacks",
      },
      {
        year: "Multi-Signature Authentication",
        desc: "Ensure that only authorized personnel have access to your holdings through multi-signature protocols",
      },
      {
        year: "24/7 Monitoring & Access",
        desc: "Our custody service includes round-the-clock monitoring of your assets, with access when needed.",
      },
      {
        year: "Full Transparency",
        desc: "Receive detailed reports and audits on asset storage and movement, ensuring complete transparency over your holdings.",
      },
      {
        year: "Custom Withdrawal Policies",
        desc: "Set withdrawal thresholds and timeframes based on your needs, adding an extra layer of security to your account.",
      },
      {
        year: "Comprehensive Reporting",
        desc: "Stay informed with regular statements and real-time asset tracking, allowing you to manage your portfolio with confidence.",
      },
    ].map((milestone, index) => (
      <motion.div
        key={milestone.year}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 + index * 0.2 }}
        className="relative bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:shadow-lg transition-shadow"
      >
        <div className="text-3xl sm:text-4xl font-bold text-purple-400/20 mb-4">
          {milestone.year}
        </div>
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
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
        Who Is This Service For?

        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
           {
            title: "Individuals",
            description: "For those seeking maximum security for their cryptocurrency holdings."
          },
          {
            title: "Businesses",
            description: "Safeguard operational crypto reserves without compromising accessibility."
          },
          {
            title: "High-Net-Worth Investors",
            description: "Protect significant digital wealth with advanced solutions."
          },
          {
            title: "Individuals",
            description: "For those seeking maximum security for their cryptocurrency holdings."
          }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + index * 0.1 }}
              className="bg-white/5 p-6 rounded-lg h-[400px] backdrop-blur-sm text-center"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-400/20 rounded-full mx-auto mb-4" />
              <div className="text-base sm:text-lg font-semibold text-white mb-1">
                {member.title}
              </div>
              <div className="text-base sm:text-lg font-semibold text-white mb-1">
                {member.description}
              </div>

            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
