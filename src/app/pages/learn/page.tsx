"use client";

import { motion } from "framer-motion";
import { Book, Video, MessageSquare } from "lucide-react";

export default function LearnPage() {
  const resources = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of digital asset management",
      icon: Book,
      category: "Beginner",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step guides for using DigitWallet",
      icon: Video,
      category: "Intermediate",
    },
    {
      title: "Community Forums",
      description: "Connect with other users and share experiences",
      icon: MessageSquare,
      category: "All Levels",
    },
  ];

  const articles = [
    {
      title: "Understanding Blockchain Technology",
      category: "Technology",
      readTime: "5 min read",
      date: "Jan 15, 2024",
      image: "/images/blockchain.jpg",
    },
    {
      title: "Digital Asset Security Best Practices",
      category: "Security",
      readTime: "7 min read",
      date: "Jan 12, 2024",
      image: "/images/security.jpg",
    },
    {
      title: "The Future of DeFi",
      category: "Finance",
      readTime: "6 min read",
      date: "Jan 10, 2024",
      image: "/images/defi.jpg",
    },
    {
      title: "Getting Started with Crypto Trading",
      category: "Trading",
      readTime: "8 min read",
      date: "Jan 8, 2024",
      image: "/images/trading.jpg",
    },
    {
      title: "Navigating Market Volatility",
      category: "Finance",
      readTime: "6 min read",
      date: "Jan 18, 2024",
      image: "/images/market-volatility.jpg",
    },
    {
      title: "The Role of AI in Crypto",
      category: "Technology",
      readTime: "7 min read",
      date: "Jan 20, 2024",
      image: "/images/ai-crypto.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pt-[150px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6">Learn & Grow</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore our educational resources and enhance your understanding of
          digital assets and financial technology.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
          >
            <div className="bg-purple-500/20 p-3 rounded-full w-fit mb-4">
              <resource.icon className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-xs font-semibold text-purple-400 mb-2 block">
              {resource.category}
            </span>
            <h3 className="text-xl font-semibold text-white mb-2">
              {resource.title}
            </h3>
            <p className="text-gray-300">{resource.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-24"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
            >
              <img
                src={
                  "https://imgs.search.brave.com/JD1U-nv2o1Dpd5uWPw6TJlWk7rj0W4GlVCuZBbVPeFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9yZW5kZXJl/ZC9zZWFyY2gvcG9z/dGVyLzgvNi9icmVh/ay9pbWFnZXMtbWVk/aXVtLTUvcGlsZS1v/Zi1zaGlueS1uZXct/Z29sZC1iaXRjb2lu/cy1pa29uLWlrb24t/aW1hZ2VzLmpwZw"
                }
                alt={article.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="text-sm text-purple-400 mb-2">
                {article.category}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {article.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{article.readTime}</span>
                <span>{article.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-24"
      >
        <h2 className="text-3xl font-bold text-white mb-8">
          Upcoming Webinars
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Introduction to Digital Assets",
              date: "January 25, 2024",
              time: "2:00 PM UTC",
            },
            {
              title: "Advanced Trading Strategies",
              date: "January 27, 2024",
              time: "3:00 PM UTC",
            },
            {
              title: "Security in Digital Finance",
              date: "January 30, 2024",
              time: "4:00 PM UTC",
            },
          ].map((webinar, index) => (
            <motion.div
              key={webinar.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {webinar.title}
              </h3>
              <div className="text-gray-300 mb-2">{webinar.date}</div>
              <div className="text-gray-400 mb-6">{webinar.time}</div>
              <button className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-600/30 transition-colors">
                Register Now
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mt-24 bg-white/5 rounded-lg backdrop-blur-sm p-8"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Certified
            </h2>
            <p className="text-gray-300 mb-6">
              Enhance your knowledge and credibility with our certification
              programs. Learn from industry experts and earn recognized
              credentials.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Explore Certifications
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Blockchain Fundamentals",
              "Digital Asset Management",
              "Crypto Trading",
              "DeFi Expertise",
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                className="bg-white/10 p-4 rounded-lg text-center text-white"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
