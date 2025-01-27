'use client'

import { motion } from 'framer-motion'
import { Wallet, ArrowUpDown, Sparkles } from 'lucide-react'




export default function IndividualsPage() {

    function ExchangeRateItem({ name, value }: { name: string; value: string }) {
        return (
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="flex justify-between items-center bg-white/5 rounded-lg p-3 transition-colors hover:bg-white/10"
          >
            <span>{name}</span>
            <span className="font-semibold">{value}</span>
          </motion.li>
        )
      }


  const benefits = [
    {
      title: 'Easy Asset Management',
      description: 'Store and manage all your digital assets in one secure place',
      icon: Wallet,
    },
    {
      title: 'Instant Exchanges',
      description: 'Swap between different cryptocurrencies with competitive rates',
      icon: ArrowUpDown,
    },
    {
      title: 'Smart Features',
      description: 'Automated portfolio tracking and investment suggestions',
      icon: Sparkles,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 pt-[150px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6">Your Digital Finance Partner</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Take control of your digital assets with our user-friendly platform.
          Start your journey into the future of finance today.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 p-8 rounded-xl backdrop-blur-sm text-center"
          >
            <benefit.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
            <p className="text-gray-300">{benefit.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-24"
      >
        <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Top 10', desc: 'Cryptocurrencies supported' },
            { step: '02', title: 'Multiple Countries', desc: 'Supported for payments in GBP, EUR & USD' },
            { step: '03', title: 'Buy Crypto In Your Name', desc: 'With a named IBAN' },
            { step: '04', title: 'EU-Licensed', desc: '21437301' },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2 }}
              className="relative"
            >
              <div className="text-5xl font-bold text-purple-400/20 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="mt-24"
>
  <h2 className="text-3xl font-bold text-white mb-8 text-center items-center">
    Powering Financial Freedom
  </h2>
  <div className="grid gap-12">
    {/* Feature 1: Text Left, Image Right */}
    <div className="md:flex md:items-center md:gap-12">
      <div className="space-y-6 md:w-1/2">
        <h3 className="text-2xl font-semibold text-purple-400">
          Crypto Payment Solutions For Your Business
        </h3>
        <p className="text-gray-300">
          Our enterprise solutions can be tailored to your specific needs. We
          offer custom API integration, dedicated support teams, and specialized
          security protocols to ensure your business operates smoothly.
        </p>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Buy and Sell Crypto as a Business Provide your business with an
            asset you can use for cross-border payments globally
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Accept Crypto, Get Fiat Accept Bitcoin, Ethereum, USDT and receive
            GBP, EUR or USD to your business bank account
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Safeguard Your Crypto in Cold Wallets Leverage Ledger hardware
            wallets for security and reliability
          </li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://imgs.search.brave.com/JD1U-nv2o1Dpd5uWPw6TJlWk7rj0W4GlVCuZBbVPeFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9yZW5kZXJl/ZC9zZWFyY2gvcG9z/dGVyLzgvNi9icmVh/ay9pbWFnZXMtbWVk/aXVtLTUvcGlsZS1v/Zi1zaGlueS1uZXct/Z29sZC1iaXRjb2lu/cy1pa29uLWlrb24t/aW1hZ2VzLmpwZw"
          alt="Crypto Payment Solutions"
          className="w-full h-auto"
        />
      </div>
    </div>

    {/* Feature 2: Image Left, Text Right */}
    <div className="md:flex md:items-center md:gap-12 md:flex-row-reverse">
      <div className="space-y-6 md:w-1/2">
        <h3 className="text-2xl font-semibold text-purple-400">
          Buy, Sell, and Swap Crypto for Your Business
        </h3>
        <p className="text-gray-300">
          We understand the importance of security in the digital asset space.
          Our platform is built with enterprise-grade security features and
          maintains compliance with global regulations.
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
      <div className="md:w-1/2">
        <img
          src="https://imgs.search.brave.com/JD1U-nv2o1Dpd5uWPw6TJlWk7rj0W4GlVCuZBbVPeFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9yZW5kZXJl/ZC9zZWFyY2gvcG9z/dGVyLzgvNi9icmVh/ay9pbWFnZXMtbWVk/aXVtLTUvcGlsZS1v/Zi1zaGlueS1uZXct/Z29sZC1iaXRjb2lu/cy1pa29uLWlrb24t/aW1hZ2VzLmpwZw"
          alt="Buy, Sell, and Swap Crypto"
          className="w-full h-auto"
        />
      </div>
    </div>

  </div>


  
  <div className="grid gap-12 mt-4">
    {/* Feature 1: Text Left, Image Right */}
    <div className="md:flex md:items-center md:gap-12">
      <div className="space-y-6 md:w-1/2">
        <h3 className="text-2xl font-semibold text-purple-400">
          Crypto Payment Solutions For Your Business
        </h3>
        <p className="text-gray-300">
          Our enterprise solutions can be tailored to your specific needs. We
          offer custom API integration, dedicated support teams, and specialized
          security protocols to ensure your business operates smoothly.
        </p>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Buy and Sell Crypto as a Business Provide your business with an
            asset you can use for cross-border payments globally
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Accept Crypto, Get Fiat Accept Bitcoin, Ethereum, USDT and receive
            GBP, EUR or USD to your business bank account
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Safeguard Your Crypto in Cold Wallets Leverage Ledger hardware
            wallets for security and reliability
          </li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://imgs.search.brave.com/JD1U-nv2o1Dpd5uWPw6TJlWk7rj0W4GlVCuZBbVPeFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9yZW5kZXJl/ZC9zZWFyY2gvcG9z/dGVyLzgvNi9icmVh/ay9pbWFnZXMtbWVk/aXVtLTUvcGlsZS1v/Zi1zaGlueS1uZXct/Z29sZC1iaXRjb2lu/cy1pa29uLWlrb24t/aW1hZ2VzLmpwZw"
          alt="Crypto Payment Solutions"
          className="w-full h-auto"
        />
      </div>
    </div>

    {/* Feature 2: Image Left, Text Right */}
    <div className="md:flex md:items-center md:gap-12 md:flex-row-reverse">
      <div className="space-y-6 md:w-1/2">
        <h3 className="text-2xl font-semibold text-purple-400">
          Buy, Sell, and Swap Crypto for Your Business
        </h3>
        <p className="text-gray-300">
          We understand the importance of security in the digital asset space.
          Our platform is built with enterprise-grade security features and
          maintains compliance with global regulations.
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
      <div className="md:w-1/2">
        <img
          src="https://imgs.search.brave.com/JD1U-nv2o1Dpd5uWPw6TJlWk7rj0W4GlVCuZBbVPeFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9yZW5kZXJl/ZC9zZWFyY2gvcG9z/dGVyLzgvNi9icmVh/ay9pbWFnZXMtbWVk/aXVtLTUvcGlsZS1v/Zi1zaGlueS1uZXct/Z29sZC1iaXRjb2lu/cy1pa29uLWlrb24t/aW1hZ2VzLmpwZw"
          alt="Buy, Sell, and Swap Crypto"
          className="w-full h-auto"
        />
      </div>
    </div>

  </div>

</motion.div>


<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2 }}
  className="mt-24 bg-white/5 rounded-lg backdrop-blur-sm p-8"
>
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Left Section */}
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">Live Crypto Exchange Rates</h2>
      <p className="text-gray-300 mb-6">
        Stay updated with real-time cryptocurrency exchange rates. Compare rates for your favorite coins instantly.
      </p>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Enter currency (e.g., BTC, ETH)"
          className="bg-white/10 text-white px-4 py-2 rounded-lg flex-1"
        />
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Check Rate
        </button>
      </div>
    </div>

    {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-3xl w-full"
      >
        <div className="bg-[#0e1434] p-6 rounded-3xl w-full sm:w-80">
          <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">Live Exchange Rates</h3>
          <ul className="text-gray-300 space-y-4">
            <ExchangeRateItem name="BTC/USD" value="$32,000" />
            <ExchangeRateItem name="ETH/USD" value="$2,200" />
            <ExchangeRateItem name="BNB/USD" value="$300" />
            <ExchangeRateItem name="USDT/USD" value="$1.00" />
          </ul>
        </div>
      </motion.div>
  </div>
</motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
          Get Started Now
        </button>
      </motion.div>
    </div>
  )
}

