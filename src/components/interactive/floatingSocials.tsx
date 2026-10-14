"use client";

import { motion } from "framer-motion";
import { Code, Globe, Mail } from "lucide-react"; // 👈 শতভাগ নিশ্চিত এবং পরীক্ষিত আইকন

const socials = [
  { icon: Code, href: "https://github.com", label: "GitHub" },
  { icon: Globe, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:your-email@gmail.com", label: "Email" },
];

export default function FloatingSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed left-6 bottom-1/2 translate-y-1/2 flex flex-col gap-4 z-50 hidden md:flex"
    >
      {socials.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.a
            key={Number(index)}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, x: 5 }}
            className="p-3 bg-slate-900/80 border border-slate-800 rounded-full text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 backdrop-blur-md transition-colors"
          >
            <Icon size={20} />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
