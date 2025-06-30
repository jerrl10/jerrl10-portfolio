'use client';

import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

export default function Banner() {
  return (
    <div className="w-full flex justify-center pt-4 pb-1 select-none">
      <motion.div
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: [1, 1.04, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
        className="flex items-center gap-4 px-7 py-2 rounded-full bg-gradient-to-r from-[#1e3647]/80 to-[#222245]/80 border border-cyan-600/70 shadow-cyan-400/10 shadow-lg backdrop-blur-md"
      >
        <span className="relative flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60 animate-ping"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-400"></span>
        </span>
        <Bot className="text-cyan-300" size={22} />
        <span className="text-cyan-100 font-bold tracking-wide font-mono text-base drop-shadow">AI ME</span>
      </motion.div>
    </div>
  );
}