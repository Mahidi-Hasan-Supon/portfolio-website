
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaReact, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiStripe,
} from "react-icons/si";

type Technology = {
  name: string;
  icon?: React.ReactNode;
};

type Project = {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: Technology[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "GearUp",
    subtitle: "Sports & Outdoor Gear Rental",
    description:
      "A sports and outdoor equipment rental platform where customers can discover and rent gear while providers manage their rental offerings.",
    image: "/gearup.PNG",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Stripe", icon: <SiStripe /> },
    ],
    githubUrl: "https://github.com/Mahidi-Hasan-Supon/gearUp-",
    liveUrl: "https://gearup-frontend-phi.vercel.app/",
  },
  {
    id: 2,
    number: "02",
    title: "WarmPaws",
    subtitle: "Pet Care & Adoption Platform",
    description:
      "A pet care platform designed to help users explore pets, discover adoption opportunities, and access pet-related services.",
    image: "/warmpaws.PNG",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
    ],
    githubUrl: "https://github.com/Mahidi-Hasan-Supon/WarmPaws-Cat",
    liveUrl: "https://famous-treacle-2ea7c3.netlify.app/",
  },
  {
    id: 3,
    number: "03",
    title: "Student Scholarship",
    subtitle: "Programming Hero — Level 1",
    description:
      "A student scholarship management project developed as part of Programming Hero Level 1.",
    image: "/scholarship.PNG",
    technologies: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <FaReact /> },
    ],
    githubUrl:
      "https://github.com/Mahidi-Hasan-Supon/scholarship-management-server",
    liveUrl: "https://scholarship-management-platform-cli.vercel.app/",
  },
];

export default function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#070b14] px-5 py-20 text-white sm:px-8 md:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            My Recent Work
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Here are some projects I have worked on, showcasing my skills in
            frontend development, backend development, and full-stack
            application development.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.12,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -7 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c1220]/90 transition-colors duration-300 hover:border-cyan-400/40"
            >
              {/* Project screenshot */}
              <div className="relative h-52 overflow-hidden border-b border-white/10 bg-[#111827] sm:h-56">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/80 via-transparent to-transparent" />

                {/* Featured label */}
                <div className="absolute left-4 top-4 rounded-full border border-cyan-300/30 bg-[#070b14]/75 px-3 py-1 text-xs font-medium text-cyan-200 backdrop-blur-md">
                  Featured Project
                </div>

                {/* Project number */}
                <span className="absolute bottom-3 right-4 text-sm font-semibold tracking-widest text-white/80 drop-shadow-md">
                  PROJECT {project.number}
                </span>
              </div>

              {/* Project content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                    {project.subtitle}
                  </p>

                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                    {project.title}
                  </h3>
                </div>

                <p className="mb-6 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technology badges */}
                <div className="mb-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology.name}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-200"
                    >
                      {technology.icon && (
                        <span className="text-sm text-cyan-400">
                          {technology.icon}
                        </span>
                      )}
                      {technology.name}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live website`}
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-300"
                  >
                    Live Website
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub profile */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Mahidi-Hasan-Supon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 px-6 py-3 font-medium text-cyan-300 transition-all hover:bg-cyan-400/10"
          >
            <FaGithub size={20} />
            Explore My GitHub
            <FaExternalLinkAlt size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
