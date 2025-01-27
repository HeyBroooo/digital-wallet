"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, BarChart } from "lucide-react";

export default function BusinessesPage() {
  const features = [
    {
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and multi-signature security for your digital assets",
      icon: Shield,
    },
    {
      title: "Global Payments",
      description: "Send and receive payments worldwide with minimal fees",
      icon: Globe,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time insights into your business transactions and asset performance",
      icon: BarChart,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pt-[150px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          Enterprise Solutions
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
          Empower your business with our comprehensive digital asset management
          platform. Scale globally while maintaining security and compliance.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
          >
            <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-24"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center items-center">
          Powering Financial Freedom
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-400 ">
              Crypto Payment Solutions For Your Business
            </h3>
            <p className="text-gray-300">
              Our enterprise solutions can be tailored to your specific needs.
              We offer custom API integration, dedicated support teams, and
              specialized security protocols to ensure your business operates
              smoothly.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Buy and Sell Crypto as a Business Provide your business with an
                asset you can use for cross-border payments globally
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Accept Crypto, Get Fiat Accept Bitcoin, Ethereum, USDT and
                receive GBP, EUR or USD to your business bank account
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Safeguard Your Crypto in Cold Wallets Leverage Ledger hardware
                wallets for security and reliability
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-400">
              Buy, Sell, and Swap Crypto for Your Business
            </h3>
            <p className="text-gray-300">
              We understand the importance of security in the digital asset
              space. Our platform is built with enterprise-grade security
              features and maintains compliance with global regulations.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Buy crypto using your business bank account
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Withdraw crypto to fiat in your business bank account
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Pay your global invoices with cryptocurrency
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                All transactions are processed under named accounts in your
                business' name
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-400">
              Start Accepting Crypto Payments and Receive Fiat In bank account
            </h3>
            <p className="text-gray-300">
              We understand the importance of security in the digital asset
              space. Our platform is built with enterprise-grade security
              features and maintains compliance with global regulations.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Sign up and get a DigitWallet payment link to begin accepting
                cryptocurrency payments
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Grow your revenue by accessing a growing market of global users
                who are ready to pay with crypto
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Service new clients without having to deal with the volatility
                of cryptocurrencies
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-400">
              Keep Your Company Assets Safe
            </h3>
            <p className="text-gray-300">
              We understand the importance of security in the digital asset
              space. Our platform is built with enterprise-grade security
              features and maintains compliance with global regulations.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                We leverage Ledger's hardware wallet technology
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Your crypto is stored offline
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                We use multi-signature (multi-sig) setup, which reduces the risk
                of unauthorised access or loss
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Our recovery protocol ensures you can regain control of your
                assets
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-24"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Starter</h3>
            <div className="text-4xl font-bold text-purple-400 mb-4">
              $499<span className="text-lg text-gray-400">/mo</span>
            </div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li>Up to 1,000 transactions/month</li>
              <li>Basic API access</li>
              <li>Email support</li>
            </ul>
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-purple-400">
            <h3 className="text-xl font-semibold text-white mb-4">
              Professional
            </h3>
            <div className="text-4xl font-bold text-purple-400 mb-4">
              $999<span className="text-lg text-gray-400">/mo</span>
            </div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li>Up to 5,000 transactions/month</li>
              <li>Advanced API access</li>
              <li>Priority support</li>
              <li>Custom integrations</li>
            </ul>
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">
              Enterprise
            </h3>
            <div className="text-4xl font-bold text-purple-400 mb-4">
              Custom
            </div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li>Unlimited transactions</li>
              <li>Custom API solutions</li>
              <li>24/7 dedicated support</li>
              <li>Custom security features</li>
              <li>Compliance assistance</li>
            </ul>
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
        >
          Contact Sales
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
}
