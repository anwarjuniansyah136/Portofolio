import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-10 w-full bg-gradient-to-t from-[#0a0a0a] to-[#1f1f1f] backdrop-blur-sm text-white border-t border-white/10 shadow-inner">
      <div className="container mx-auto px-6 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">    
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-indigo-300">Anwar Juniansyah</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/anwarjuniansyah136"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center hover:text-indigo-400 transition"
          >
            <FaGithub size={22} />
            <span className="absolute bottom-[-1.8rem] scale-0 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/anwar-juniansyah-b8a4132a8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center hover:text-indigo-400 transition"
          >
            <FaLinkedin size={22} />
            <span className="absolute bottom-[-1.8rem] scale-0 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
              LinkedIn
            </span>
          </a>
          <a
            href="mailto:juniansyahanwar@email.com"
            className="group relative flex items-center justify-center hover:text-indigo-400 transition"
          >
            <FaEnvelope size={22} />
            <span className="absolute bottom-[-1.8rem] scale-0 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
              Email
            </span>
          </a>
          <a
            href="https://wa.me/6285830260363"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center hover:text-green-400 transition"
          >
            <FaWhatsapp size={22} />
            <span className="absolute bottom-[-1.8rem] scale-0 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
              WhatsApp
            </span>
          </a>
        </div>
        <div className="hidden md:block">
          <a
            href="#home"
            className="text-sm text-gray-400 hover:text-indigo-400 transition"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
