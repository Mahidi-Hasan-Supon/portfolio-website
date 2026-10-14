"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiBookOpen, FiUsers, FiArrowUpRight } from "react-icons/fi";

const aboutLines = [
  "I’m a passionate Full-Stack Web Developer from Bangladesh who enjoys building modern web applications.",
  "I work with React, Next.js, TypeScript, Node.js, and modern database technologies.",
  "I love solving problems, writing clean code, and creating user-friendly experiences.",
  "I’m continuously learning new technologies and improving my development skills.",
  "My goal is to build impactful software and grow as a professional Software Engineer.",
];

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 size-72 rounded-full bg-cyan-500/[0.06] blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get to know me
          </p>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400" />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Introduction */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="rounded-3xl border border-white/[0.08] bg-slate-900/70 p-6 backdrop-blur-xl transition-colors hover:border-cyan-400/30 sm:p-8"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                <FiBookOpen size={22} />
              </div>

              <h3 className="text-2xl font-bold text-white">My Journey</h3>
            </div>

            <div className="space-y-4">
              {aboutLines.map((line, index) => (
                <motion.p
                  key={line}
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.08 }}
                  className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {line}
                </motion.p>
              ))}
            </div>

            <a
              href="#skills"
              className="mt-8 inline-flex items-center gap-2 border-t border-white/[0.08] pt-5 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
            >
              Explore my skills
              <FiArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* Education and volunteering */}
          <div className="grid gap-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="rounded-3xl border border-white/[0.08] bg-slate-900/70 p-6 transition-colors hover:border-blue-400/30 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-3 text-blue-300">
                  <FiBookOpen size={23} />
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Education
                  </p>
                  <h3 className="text-xl font-bold text-white">
                    Narsingdi Polytechnic Institute
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Diploma in Engineering — currently pursuing my studies and
                    strengthening my technical foundation.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="rounded-3xl border border-white/[0.08] bg-slate-900/70 p-6 transition-colors hover:border-emerald-400/30 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                  <FiUsers size={23} />
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    Community
                  </p>
                  <h3 className="text-xl font-bold text-white">
                    Narsingdi ICT Club
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Involvement in ICT-related activities, skill competitions,
                    and community initiatives.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
