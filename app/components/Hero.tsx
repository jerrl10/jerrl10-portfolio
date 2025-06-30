'use client';

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Bot } from "lucide-react";

const AVATAR_SIZE = 260;

function AvatarPlanet() {
  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center select-none">
      {/* AVATAR as the "planet" */}
      <div
        className="relative rounded-full bg-gradient-to-br from-cyan-100/70 via-cyan-200/40 to-blue-200/20 shadow-2xl"
        style={{
          width: AVATAR_SIZE,
          height: AVATAR_SIZE,
          zIndex: 2,
          boxShadow: "0 0 54px 0 #6cf9fb33"
        }}
      >
        <img
          src="/avatar.png"
          alt="avatar planet"
          className="rounded-full object-cover w-full h-full"
          style={{
            filter: "drop-shadow(0 0 6px #aaf6ff66)",
          }}
          draggable={false}
        />
        {/* Soft planet highlight */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full pointer-events-none"
             style={{
               boxShadow: "inset 0 0 40px 0 #fff7, 0 0 44px 0 #4feef855"
             }}
        />
      </div>
      <motion.div
        className="absolute"
        style={{
          left: "50%",
          top: "50%",
          width: 24,
          height: 24,
          marginLeft: -12,
          marginTop: -12,
          zIndex: 30,
        }}
        animate={{
          rotate: [0, 360],
          x: [0, 110],
          y: [0, 100],
          transition: { duration: 8.5, repeat: Infinity, repeatType: "loop" }
        }}
      >
        <div className="rounded-full" style={{ width: 16, height: 16, background: "#a48aff", boxShadow: "0 0 18px 4px #a48aff55" }} />
      </motion.div>
      <motion.div
        className="absolute"
        style={{
          left: "50%",
          top: "50%",
          width: 20,
          height: 20,
          marginLeft: -10,
          marginTop: -10,
          zIndex: 30,
        }}
        animate={{
          rotate: [90, 450],
          x: [0, -130],
          y: [0, -90],
          transition: { duration: 12.5, repeat: Infinity, repeatType: "loop" }
        }}
      >
        <div className="rounded-full" style={{ width: 12, height: 12, background: "#4fd1ff", boxShadow: "0 0 16px 3px #4fd1ff55" }} />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[0vh] flex flex-col md:flex-row items-center justify-between px-6 pt-16 md:px-20"
    >
      <div className="flex flex-col items-start z-10 w-full md:w-1/2 mt-20 md:mt-0">
        <div className="flex items-start mb-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shadow-cyan-400/50 shadow-lg" />
          <div className="border-l-2 border-cyan-400 h-36 mr-6" />
          <div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.8, type: "spring" }}
              className="text-lg text-cyan-200 mb-2"
            >
                Hi! I’m
            </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.7, type: "spring" }}
                className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight"
                style={{
                  background: 'linear-gradient(90deg, #62eaff 10%, #a8b8ff 50%, #e3cfff 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 12px #7ce7f9bb)',
                  letterSpacing: '-0.03em',
                }}
              >
                Jerry Liu
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight drop-shadow"
              style={{
                background: 'linear-gradient(90deg, #5ee1fa 25%, #a68cff 50%, #0ef9f9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 18px #2ec7fa77)',
              }}
            >
              Full Stack Dev
            </motion.h1>
            <div className="text-2xl md:text-3xl text-cyan-100 font-light mb-7 drop-shadow">
              Future-driven Engineer <span className="ml-2"><Bot className="inline h-7 w-7 text-cyan-400" /></span>
            </div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="flex gap-4 mb-9"
            >
              <a
                href="#ai-terminal"
                className="bg-gradient-to-r from-cyan-600 to-purple-500 text-white px-7 py-2 rounded-full font-bold shadow hover:from-blue-500 hover:to-fuchsia-400 transition"
              >AI ME</a>
            </motion.div>
            <div className="mb-3 text-cyan-200 font-medium">Find me:</div>
            <div className="flex gap-4">
              <a href="https://github.com/jerrl10" className="hover:text-cyan-300" aria-label="GitHub"><Github size={30} /></a>
              <a href="https://www.linkedin.com/in/chang-l-55b358131/" className="hover:text-cyan-300" aria-label="LinkedIn"><Linkedin size={30} /></a>
              <a href="mailto:youremail@example.com" className="hover:text-cyan-300" aria-label="Mail"><Mail size={30} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center z-10 relative">
        <AvatarPlanet />
      </div>
    </section>
  );
}