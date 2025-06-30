'use client';

import { Github, Linkedin, Mail } from "lucide-react";
import Banner from "./Banner";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-10 px-4 mt-12">
      <div className="w-full max-w-2xl rounded-2xl bg-gradient-to-br from-[#171d33]/80 to-[#262a3d]/60 border border-blue-900/40 shadow-2xl py-6 px-8 flex flex-col items-center backdrop-blur">
        <div className="flex gap-4 mb-2">
          <a
            href="#"
            aria-label="GitHub"
            className="text-cyan-300 hover:text-purple-300 transition transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={28} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-cyan-300 hover:text-purple-300 transition transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:youremail@example.com"
            aria-label="Email"
            className="text-cyan-300 hover:text-purple-300 transition transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
        <div>
            <Banner />
        </div>
        <div className="mt-3 text-cyan-200/70 font-mono text-sm text-center">
          © {new Date().getFullYear()} Future-driven Full Stack Dev &nbsp;·&nbsp; Build with AI and love <br />
          <span className="text-cyan-400/80">Every day is a fresh start 🚀</span>
        </div>
      </div>
    </footer>
  );
}