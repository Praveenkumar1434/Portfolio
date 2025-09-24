import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Mingmos (MERN e‑commerce)",
    desc: "Full-stack Momo food e-commerce with product listing, cart and checkout.",
    tech: ["React", "Express", "Node", "MongoDB"],
    url: "https://mingmos-frontend.onrender.com/",
  },
  {
    title: "Weatherly",
    desc: "Responsive React weather app with city search and local storage auth.",
    tech: ["React", "Tailwind", "APIs"],
    url: "https://weather-app-olive-theta-90.vercel.app/",
  },
  {
    title: "SurpriseHub",
    desc: "Full-stack authentication demo with React frontend and Express backend.",
    tech: ["React", "Express", "Tailwind"],
    url: "https://surprise-hub-j51c.vercel.app/",
  },
];

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold"
        >
          Projects
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((p, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.05 }}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg border dark:border-slate-700 block"
            >
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 bg-indigo-50 dark:bg-slate-800 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-indigo-600 text-sm">Open live ↗</div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
export default Projects;
