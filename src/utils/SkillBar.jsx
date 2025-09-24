import React from "react";
import { motion } from "framer-motion";

export default function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full mt-1 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          className="h-2 bg-indigo-500"
        />
      </div>
    </div>
  );
}
