"use client";
import React from "react";
import { motion } from "framer-motion";
import { details, features } from "../constants/index"; // Assuming these are typed correctly in the constants file
import Button from "../components/Button";

// Define types for the data structure of features and details
interface Feature {
  id: string;
  icon: string;
  caption: string;
  title: string;
  text: string;
  button: {
    icon: string;
    title: string;
  };
}

interface Detail {
  id: string;
  icon: string;
  title: string;
}

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const detailsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3"
        >
          {/* Features Cards */}
          {features.map(({ id, icon, caption, title, text, button }: Feature) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
            >
              {/* Icon Section */}
              <div className="w-full flex justify-start items-start">
                <motion.div 
                  className="-ml-3 mb-12 flex items-center justify-center flex-col"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-0.5 h-16 bg-s3" />
                  <motion.img
                    src={icon}
                    className="size-28 object-contain"
                    alt={title}
                    whileHover={{ rotate: 5 }}
                  />
                </motion.div>
              </div>

              {/* Content Section */}
              <motion.p 
                variants={itemVariants}
                className="caption mb-5 max-md:mb-6"
              >
                {caption}
              </motion.p>
              <motion.h2 
                variants={itemVariants}
                className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5"
              >
                {title}
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="mb-11 body-1 max-md:mb-8 max-md:body-3"
              >
                {text}
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  icon={button.icon} 
                >
                  {button.title}
                </Button>
              </motion.div>
            </motion.div>
          ))}

          {/* Details List - Hidden on Mobile */}
          <motion.ul
            variants={detailsVariants}
            className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden"
          >
            {/* Horizontal Line */}
            <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

            {/* Detail Items */}
            {details.map(({ id, icon, title }: Detail) => (
              <motion.li
                key={id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative pt-16 px-4 pb-14"
              >
                {/* Vertical Line */}
                <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                {/* Icon Container */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20"
                >
                  <motion.img
                    src={icon}
                    alt={title}
                    className="size-17/20 object-contain z-20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                {/* Title */}
                <motion.h3 
                  variants={itemVariants}
                  className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase"
                >
                  {title}
                </motion.h3>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;
