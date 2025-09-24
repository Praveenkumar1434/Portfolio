import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="mx-2 px-3 py-2 rounded-md hover:bg-indigo-100 dark:hover:bg-slate-800 transition"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-sm sticky top-0 z-40 bg-white/70 dark:bg-slate-900/70 border-b border-gray-200 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="font-bold text-2xl">Praveen Kumar M</div>
        <div className="hidden md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden">☰</button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      )}
    </motion.nav>
  );
}
