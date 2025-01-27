import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import Button from "../components/Button";
import wallet from "../public/images/wallet.svg";
import proWallet from "../public/images/wallet.svg";
import enterpriseWallet from "../public/images/wallet.svg";
import basicIcon from "../public/images/magic.svg"; 
import enterpriseIcon from "../public/images/magic.svg";


const walletPlans = [
  {
    id: 1,
    title: "Basic",
    logo: wallet, // Wallet icon for Basic plan
    priceMonthly: 0,
    priceYearly: 0,
    caption: "Perfect for crypto beginners",
    features: [
      "Store ETH & Popular Tokens",
      "Basic Transaction History",
      "Connect to 3 DApps",
      "Hardware Wallet Support",
      "24/7 Community Support"
    ],
    icon: basicIcon, // Basic plan icon
    cryptoLimit: "Up to $10,000 in transactions"
  },
  {
    id: 2,
    title: "Pro Trader",
    logo: proWallet, // Wallet icon for Pro Trader plan
    priceMonthly: 15,
    priceYearly: 149,
    caption: "For active traders & DeFi users",
    features: [
      "Unlimited Tokens & NFTs",
      "Advanced Portfolio Analytics",
      "Priority Gas Fees",
      "Multi-Signature Support",
      "DeFi Yield Tracking",
      "Premium 24/7 Support"
    ],
    icon: enterpriseIcon, // Pro Trader plan icon
    cryptoLimit: "Unlimited transactions"
  },
  {
    id: 3,
    title: "Enterprise",
    logo: enterpriseWallet, // Wallet icon for Enterprise plan
    priceMonthly: 49,
    priceYearly: 499,
    caption: "For institutions & large portfolios",
    features: [
      "Custom Security Rules",
      "Multi-User Access Control",
      "API Integration",
      "Advanced Tax Reporting",
      "Dedicated Account Manager",
      "Custom Smart Contracts",
      "Institutional Support"
    ],
    icon: enterpriseIcon, // Enterprise plan icon
    cryptoLimit: "Institutional grade security"
  }
];


const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState<'USD' | 'ETH' | 'BTC'>('USD');

  const cryptoRates: { [key in 'USD' | 'ETH' | 'BTC']: number } = {
    USD: 1,
    ETH: 0.00039,
    BTC: 0.000023,
  };

  return (
    <section className="bg-gradient-to-b from-s1 to-s1/50">
      <Element name="pricing">
        <div className="container px-4 mx-auto">
          <div className="max-w-960 relative mx-auto pb-20 pt-16">
            <h3 className="h3 text-center text-p4 mb-10">
              Secure Your Digital Assets
            </h3>

            <div className="flex flex-col items-center gap-6 mb-10">
              <div className="relative flex w-full max-w-xs rounded-3xl border border-s4/25 bg-s1/50 p-2 backdrop-blur-md">
                <button
                  className={clsx("pricing-head_btn flex-1", monthly && "text-p4")}
                  onClick={() => setMonthly(true)}
                >
                  Monthly
                </button>
                <button
                  className={clsx("pricing-head_btn flex-1", !monthly && "text-p4")}
                  onClick={() => setMonthly(false)}
                >
                  Annual
                </button>
                <div
                  className={clsx(
                    "g4 rounded-14 absolute h-[calc(100%-16px)] w-[calc(50%-8px)] bg-gradient-to-r from-p3 to-p4 transition-transform duration-500",
                    !monthly && "translate-x-full"
                  )}
                />
              </div>

              <select
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value as 'USD' | 'ETH' | 'BTC')}
                className="bg-s1 border border-s4/25 rounded-lg px-4 py-2 w-full max-w-xs text-center"
              >
                <option value="USD">USD</option>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {walletPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={clsx(
                    "pricing-plan flex flex-col justify-between rounded-3xl border-2 p-6 bg-gradient-to-b from-s1 to-s1/50 shadow-md hover:shadow-lg",
                    index === 1 && "transform transition duration-300 hover:scale-105"
                  )}
                >
                  <div>
                    <div className={clsx(
                      "text-center rounded-20 mb-4 px-4 py-2 uppercase",
                      index === 1 ? "bg-gradient-to-r from-p3 to-p4 text-white" : "bg-gray-100 text-gray-700"
                    )}>
                      {plan.title}
                    </div>

                    <div className="text-center mb-6">
                      <span className="text-2xl">{selectedCrypto}</span>
                      <span className="text-3xl font-bold mx-1">
                        <CountUp
                          start={plan.priceMonthly * cryptoRates[selectedCrypto]}
                          end={monthly ? plan.priceMonthly * cryptoRates[selectedCrypto] : plan.priceYearly * cryptoRates[selectedCrypto]}
                          decimals={selectedCrypto !== 'USD' ? 6 : 2}
                          duration={0.4}
                          preserveValue
                        />
                      </span>
                      <span className="text-sm text-gray-500">/ mo</span>
                    </div>

                    <p className="text-center text-sm text-gray-600 mb-4">{plan.cryptoLimit}</p>
                  </div>

                  <div className="border-t border-gray-200 my-4" />

                  <ul className="space-y-2 mb-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <svg className="w-5 h-5 text-p3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    icon={plan.icon}
                    className={clsx(
                      "w-full py-2 rounded-lg text-white",
                      index === 1 ? "bg-gradient-to-r from-p3 to-p4" : "bg-gray-700 hover:bg-gray-800"
                    )}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
