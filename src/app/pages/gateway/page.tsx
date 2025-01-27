"use client";

import { motion } from "framer-motion";

export default function Gateway() {
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
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Crypto Gateway</h2>
        <motion.p className="text-gray-300 text-base sm:text-lg">
        Accept crypto payments from customers or business partners with a payment link and pay your business invoices with cryptocurrencies
        </motion.p>
   
      </motion.div>




      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="mt-24"
>
  <h2 className="text-3xl font-bold text-white mb-8 text-center items-center mt-6">
  Pay Business Invoices Using Cryptocurrencies
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
            Settle fiat invoices with BTC, ETH, USDT and other cryptocurrencies
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Send funds to business partners, contractors, or suppliers in crypto while they receive fiat into their bank account


          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Payouts are processed with a Named IBAN under your business name


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
    <div className="md:flex md:items-center md:gap-12 md:flex-row-reverse mt-12">
      <div className="space-y-6 md:w-1/2">
        <h3 className="text-2xl font-semibold text-purple-400">
        Crypto Payment Gateway        </h3>
        <p className="text-gray-300">
          We understand the importance of security in the digital asset space.
          Our platform is built with enterprise-grade security features and
          maintains compliance with global regulations.
        </p>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Accept Crypto Payments with a Payment Link. No integration required. Your customers pay in crypto, and your business receives fiat directly in your bank account

</li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Accept Crypto Payments & Process Withdrawals via API. For businesses with custom needs - utilize our API solutions to securely handle customer deposits and process withdrawals.          </li>
         
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



<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-white mb-1 text-xl">Sign up</h2>
          <p className="leading-relaxed">Register with DigitWallet and complete our business onboarding process</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-white mb-1 text-xl">Get payment link
          </h2>
          <p className="leading-relaxed">Apply for a payment link and once completed, share it with your customers.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-white mb-1 text-xl">Receive payments
          </h2>
          <p className="leading-relaxed">Your clients pay in crypto while you receive the exact fiat amount in your business bank account


.</p>
        </div>
      </div>
    </div>

  </div>
</section>


<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Take Your Business To The Next Level</h2>
        <motion.p className="text-gray-300 text-base sm:text-lg">
        Contact us today to create your crypto payment link or explore our API solution for customer deposits and withdrawals

Disclaimer: Before engaging with DigitWalet's services, all new customers must complete a four-step onboarding prcoess to ensure compliance with our policies and regulations. This includes identity verification, risk assessment, acknowledgment of our terms and conditions, and meeting eligibility requirements for our services. Access to our services will only be granted after successfully completing these steps. For more details on our onboarding process, please refer to our Terms of Use or contact our support team. 
        </motion.p>
   
      </motion.div>
      
    </div>
  );
}
