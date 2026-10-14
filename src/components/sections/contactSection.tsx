export default function ContactSection() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6" id="contact">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
        Contact <span className="text-cyan-400">Information</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-cyan-400 font-bold mb-1">Email</h3>
          <p className="text-slate-300 text-sm">mahidihasan@gmail.com</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-cyan-400 font-bold mb-1">Phone</h3>
          <p className="text-slate-300 text-sm">+880 1XXXXXXXXX</p>
        </div>
        <div className="bg-navigation bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-cyan-400 font-bold mb-1">WhatsApp</h3>
          <p className="text-slate-300 text-sm">+880 1XXXXXXXXX</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center pt-10 border-t border-slate-800 text-slate-500 text-sm">
        <p>
          &copy; 2026 Mahidi Hasan Supon. Built with Next.js & Tailwind CSS. All
          rights reserved.
        </p>
      </footer>
    </section>
  );
}
