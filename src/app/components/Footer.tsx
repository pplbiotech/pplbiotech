"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <footer className="w-full mt-10">
      {/* Gradient Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-primary/40 via-accent to-primary/40 relative overflow-hidden">
        <motion.span
          className="absolute inset-0 block bg-gradient-to-r from-accent via-primary to-accent"
          animate={{
            x: ["0%", "100%"],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <motion.div 
        className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto md:mx-0 w-full max-w-xs"
          >
            <motion.h3 
              className="text-xl font-bold mb-4 text-primary"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Us
            </motion.h3>
            <div className="text-primary/80">
              <p>Email: <motion.a 
                whileHover={{ x: 3 }} 
                href="mailto:pplbiotechdev@gmail.com" 
                className="underline hover:text-accent transition-colors"
              >
                pplbiotechdev@gmail.com
              </motion.a></p>
              <p className="mt-2">Phone: <a href="tel:+919560325360" className="hover:text-accent transition-colors">+91 95603 25360</a></p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto md:mx-0 w-full max-w-xs"
          >
            <motion.h3 
              className="text-xl font-bold mb-4 text-primary"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Quick Links
            </motion.h3>
            <ul className="text-primary/80">
              {['Products', 'About Us', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={index > 0 ? "mt-2" : ""}
                >
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-accent transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mx-auto md:mx-0 w-full max-w-xs"
          >
            <motion.h3 
              className="text-xl font-bold mb-4 text-primary"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Legal
            </motion.h3>
            <div className="text-primary/80">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                &copy; {new Date().getFullYear()} PPL Biotech.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-2"
              >
                All rights reserved.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
