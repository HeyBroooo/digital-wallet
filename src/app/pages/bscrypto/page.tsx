import React from "react";
import {
  Shield,
  Globe,
  BarChart,
  Wallet,
  ArrowUpDown,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CryptoWallet() {
  const features = [
    {
      title: "Bank-Grade Security",
      description:
        "Multi-factor authentication and advanced encryption to protect your digital assets",
      icon: Shield,
    },
    {
      title: "Global Transactions",
      description:
        "Send and receive crypto worldwide with minimal fees and instant processing",
      icon: Globe,
    },
    {
      title: "Real-Time Analytics",
      description:
        "Track your portfolio performance with advanced charting and insights",
      icon: BarChart,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pt-[150px]">
      {/* Hero Section */}
      <section className="text-gray-200 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="Crypto Wallet"
            src="https://imgs.search.brave.com/JD1U-nv2o1Dpd5uWPw6TJlWk7rj0W4GlVCuZBbVPeFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9yZW5kZXJl/ZC9zZWFyY2gvcG9z/dGVyLzgvNi9icmVh/ay9pbWFnZXMtbWVk/aXVtLTUvcGlsZS1v/Zi1zaGlueS1uZXct/Z29sZC1iaXRjb2lu/cy1pa29uLWlrb24t/aW1hZ2VzLmpwZw"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="text-5xl font-bold text-white mb-6">
              Fiat-Crypto Solution
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Convert your fiat into cryptocurrency with DigitWallet’s solution,
              designed for both businesses and individuals. Whether you need
              liquidity or long-term financial planning, our crypto-fiat
              solution has you covered
            </p>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-24"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center items-center mt-6">
          Buy and Sell Crypto with Your Fiat
        </h2>
        {/* Feature 1: Text Left, Image Right */}
        <div className="md:flex md:items-center md:gap-12">
          <div className="space-y-6 md:w-1/2">
            <h3 className="text-2xl font-semibold text-purple-400">
              Crypto Payment Solutions For Your Business
            </h3>
            <p className="text-gray-300">
              Our Solution allows you to convert your traditional fiat currency
              (like GBP, EUR, USD, and more) into cryptocurrency, and vice versa
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                We support high transaction volumes
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Receive crypto directly into your wallet
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Enjoy the convenience of a Named IBAN
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
      </motion.div>

     

      {/* Security Features */}
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mt-10 text-center">
      How it Works
            </h1>


            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mt-6 text-center">
            After creating an account with DigitWallet and completing KYC (Know your Customer) verification, you are ready and set to go.


            </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Shield className="sm:w-16 sm:h-16 w-10 h-10" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-white text-lg title-font font-medium mb-2">
              Deposit Fiat
              </h2>
              <p className="leading-relaxed text-base">
              Deposit fiat you’d like to convert into your DigitWallet account. Our platform supports a wide range of fiat currency, including GBP, USD, EUR and more.  
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-white text-lg title-font font-medium mb-2">
              Choose Cryptocurrency

</h2>
              <p className="leading-relaxed text-base">
              Select the cryptocurrency you’d like to receive (BTC, ETH, USDT, etc.).   
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <Globe className="sm:w-16 sm:h-16 w-10 h-10" />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <BarChart className="sm:w-16 sm:h-16 w-10 h-10" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-white text-lg title-font font-medium mb-2">
              Receive Crypto

</h2>
              <p className="leading-relaxed text-base">
              Your cryptocurrency is then transferred directly to your designated wallet.
              </p>
            </div>
          </div>
        </div>
      </section>


       {/* Features Grid */}
       <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Ready to Make Your Crypto Work for You?

            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <ArrowUpDown className="w-5 h-5" />

                  </div>
                  <h2 className="text-black text-lg title-font font-medium">
                  Speed

                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                  Our solution processes transactions without delay
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <Wallet className="w-5 h-5" />
                  </div>
                  <h2 className="text-black text-lg title-font font-medium">
                  Multi-Currency
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                  Conversions to and from a wide range of fiat currencies, including GBP, EUR and USD
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h2 className="text-black text-lg title-font font-medium">
                  24/7 Support
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                  Complete transactions outside of traditional banking hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
