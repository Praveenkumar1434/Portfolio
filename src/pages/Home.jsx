import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";
import profile from "../assets/profile.jpg"

function Home() {
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-indigo-50 to-white dark:from-slate-900 dark:to-slate-950"
    >
      {/* animated background blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.2 }}
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient( circle at 30% 30%, rgba(99,102,241,0.8), transparent 60% ), radial-gradient( circle at 70% 60%, rgba(217,70,239,0.6), transparent 55% )",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-[38rem] h-[38rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient( circle at 60% 40%, rgba(34,197,94,0.5), transparent 60% ), radial-gradient( circle at 30% 70%, rgba(56,189,248,0.5), transparent 55% )",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <span className="block">Hi — I'm</span>
            <motion.span
              initial={{ backgroundPositionX: 0 }}
              animate={{ backgroundPositionX: 200 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="block whitespace-nowrap bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              Praveen Kumar M
            </motion.span>
            <span className="block whitespace-nowrap text-indigo-500 text-3xl md:text-4xl mt-1">MERN Stack Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-gray-700 dark:text-gray-300"
          >
            I craft interactive, full-stack apps with MongoDB, Express, React
            and Node, combining performance, animations, and user-first design.
          </motion.p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/projects")}
              className="px-6 py-3 rounded-md bg-indigo-600 text-white shadow-md"
            >
              See projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/contact")}
              className="px-6 py-3 rounded-md border"
            >
              Contact me
            </motion.button>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700 dark:text-gray-300">
            <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-800 shadow-sm">
              <div className="font-semibold mb-1">Tech Stack</div>
              <div>React, Node.js, Express, MongoDB, Tailwind, Framer Motion</div>
            </div>
            <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-800 shadow-sm">
              <div className="font-semibold mb-1">Focus</div>
              <div>Accessible UI, performance, clean code, delightful micro‑interactions</div>
            </div>
            <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-800 shadow-sm">
              <div className="font-semibold mb-1">Experience</div>
              <div>Built full‑stack apps, deployed to Vercel/Render, integrated external APIs</div>
            </div>
            <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-800 shadow-sm">
              <div className="font-semibold mb-1">Open to</div>
              <div>Internships, freelance projects, and collaboration opportunities</div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-6">
            {[
              <FaReact size={40} className="text-sky-500" />,
              <FaNodeJs size={40} className="text-green-600" />,
              <SiExpress size={40} className="text-gray-600" />,
              <SiMongodb size={40} className="text-green-700" />,
              <SiTailwindcss size={40} className="text-cyan-500" />,
              <SiJavascript size={40} className="text-yellow-500" />,
              <FaPython size={40} className="text-blue-400" />,
              <FaJava size={40} className="text-red-500" />,
              <FaDatabase size={40} className="text-indigo-400" />,
            ].map((icon, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * i }}
                whileHover={{ y: -10, scale: 1.2 }}
                className="flex justify-center"
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
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

export default Home;
