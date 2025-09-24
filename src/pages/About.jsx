import React from "react";
import { motion } from "framer-motion";
import SkillBar from "../utils/SkillBar";
import profile from "../assets/profile.jpg"

function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-16"
    >
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <p className="text-gray-700 dark:text-gray-300">
            I'm an enthusiastic MERN Stack Developer with strong fundamentals in
            Java, Python, and SQL. I love building responsive, user-friendly
            apps and learning new technologies.
          </p>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Skills</h3>
            <SkillBar name="React & Frontend" level={95} />
            <SkillBar name="Node.js & Express" level={92} />
            <SkillBar name="MongoDB" level={90} />
            <SkillBar name="JavaScript (ES6+)" level={96} />
            <SkillBar name="Python & Java" level={88} />
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg bg-gray-200 dark:bg-slate-800 flex items-center justify-center">
            <img src={profile} alt="Praveen Kumar M" className="w-full h-full object-cover object-center" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
export default About;
