import FloatingSocials from "@/components/interactive/floatingSocials";
import MagneticButton from "@/components/interactive/magneticButton";
import Tech3DCard from "@/components/interactive/tech3DCard";
import TextReveal from "@/components/interactive/textReveal";
import Navbar from "@/components/layout.tsx/navbar";
import AboutSection from "@/components/sections/aboutSection";
import CertificatesSection from "@/components/sections/certificationSection";
import ContactSection from "@/components/sections/contactSection";
import HeroSection from "@/components/sections/heroSection";
import ProjectsSection from "@/components/sections/projectsSection";
import SkillsSection from "@/components/sections/skillsSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection/>
      <CertificatesSection/>
      <AboutSection />
      <ContactSection />
    </main>
    // <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center overflow-x-hidden">
    //   {/* Floating Side Icons */}
    //   <FloatingSocials />

    //   {/* Hero Section */}
    //   <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-12">
    //     <TextReveal text="Full-Stack Web Developer" />
    //     <p className="text-slate-400 max-w-2xl mt-6 text-lg leading-relaxed">
    //       Crafting high-performance, animated web applications using Next.js,
    //       Express, Prisma, and PostgreSQL.
    //     </p>

    //     <div className="mt-8 flex gap-4">
    //       <MagneticButton>
    //         <a
    //           href="#projects"
    //           className="px-8 py-4 rounded-full bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-all inline-block"
    //         >
    //           View Work
    //         </a>
    //       </MagneticButton>
    //       <MagneticButton>
    //         <a
    //           href="#contact"
    //           className="px-8 py-4 rounded-full border border-slate-800 bg-slate-900/60 text-white font-bold hover:border-cyan-500/50 transition-all inline-block"
    //         >
    //           Contact Me
    //         </a>
    //       </MagneticButton>
    //     </div>
    //   </section>

    //   {/* Projects Section */}
    //   <ProjectsSection />

    //   {/* Skills Section */}
    //   <SkillsSection />

    //   {/* Contact Form Section */}
    //   <ContactSection />
    // </main>
  );
}
