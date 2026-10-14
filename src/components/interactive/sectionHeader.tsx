"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center my-8"
    >
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 mt-2 text-sm md:text-base">{subtitle}</p>
      )}
    </motion.div>
  );
}
