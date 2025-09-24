import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="py-6 border-t border-gray-200 dark:border-slate-800 mt-10"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          © {new Date().getFullYear()} Praveen Kumar • MERN Stack Developer
        </div>
        <div className="flex gap-4 text-xl">
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Praveenkumar1434"><FaGithub /></motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/praveen-kumar-m-prahithra"><FaLinkedin /></motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="mailto:mpraveen1432004@gmail.com"><FaEnvelope /></motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
