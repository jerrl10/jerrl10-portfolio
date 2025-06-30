'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2, Zap, Bot } from "lucide-react";

const FEED = [
  {
    icon: <Zap className="text-cyan-400 w-5 h-5" />,
    text: 'Keep It Simple, Ship It Faster.',
    meta: 'Just now',
  },
  {
    icon: <Globe2 className="text-blue-400 w-5 h-5" />,
    text: 'Stay Curious, Keep Learning.',
    meta: '20 min ago',
  },
  {
    icon: <Bot className="text-cyan-200 w-5 h-5" />,
    text: 'Embrace Feedback, Grow Stronger.',
    meta: '1 hr ago',
  },
  {
    icon: <Zap className="text-yellow-200 w-5 h-5" />,
    text: 'Test Early, Test Often, Test Everything.',
    meta: '2 hr ago',
  },
];

export default function Feed() {
  const [idx, setIdx] = useState(0);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const t = setTimeout(() => setIdx((idx + 1) % FEED.length), 6000);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <section id="aifeed" className="w-full flex justify-center pt-16 px-4">
      <div className="w-full max-w-xl flex flex-col items-center">
        <h2 className="font-mono text-xl md:text-2xl mb-7 text-cyan-200 font-bold tracking-wide">
          Write Code for Humans
        </h2>
        <div className="relative w-full min-h-[110px] flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.54 }}
              className="flex items-center gap-4 w-full max-w-lg rounded-2xl bg-gradient-to-br from-[#171d33]/85 to-[#262a3d]/75 border border-blue-900/50 px-6 py-6 shadow-lg backdrop-blur-xl"
              style={{
                backdropFilter: "blur(9px)",
                WebkitBackdropFilter: "blur(9px)",
              }}
            >
              {/* Live glowing orb */}
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 opacity-90 shadow-md animate-pulse mr-3" />
              <div className="flex-shrink-0">{FEED[idx].icon}</div>
              <div className="flex flex-col flex-1">
                <span
                  className="text-cyan-100 text-base font-mono"
                  dangerouslySetInnerHTML={{ __html: FEED[idx].text }}
                />
                <span className="text-cyan-300/70 text-xs font-mono mt-1">{FEED[idx].meta}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}