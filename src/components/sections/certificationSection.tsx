"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiAward, FiImage, FiExternalLink } from "react-icons/fi";

const certificates = [
  {
    id: 1,
    title: "Volunteering",
    category: "Volunteering",
    description:
      "Certificates recognizing participation in volunteering, event organization, and community activities.",
    image: "/volunteering.jpg",
  },
  {
    id: 2,
    title: "Skill Competition",
    category: "Skill Competition",
    description:
      "Certificates and achievements related to ICT competitions, technical skills, and learning activities.",
    image: "/ict-competition.jpg",
  },
];
export default function CertificatesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="certificates"
      className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My achievements
          </p>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Certificates <span className="text-cyan-400">& Awards</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A collection of my volunteering experiences, organizational
            activities, and ICT-related achievements.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400" />
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.id}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : index * 0.12,
              }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-900/70 transition-colors hover:border-cyan-400/30"
            >
              {/* Certificate image or placeholder */}
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/[0.08] bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950/40">
                {certificate.image ? (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                    className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex flex-col items-center px-6 text-center">
                    <div className="mb-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110">
                      <FiImage size={34} />
                    </div>

                    <p className="text-lg font-bold text-white">
                      Certificate Preview
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      Your certificate photo will appear here
                    </p>
                  </div>
                )}

                <div className="absolute left-4 top-4 rounded-full border border-cyan-400/20 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur">
                  {certificate.category}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <FiAward size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {certificate.title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-slate-400">
                  {certificate.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <FiExternalLink size={15} />
                  Certificate details can be added with the photo
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
