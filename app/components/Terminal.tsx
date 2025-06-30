'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Braces, Atom, TerminalSquare, Leaf, Database, Cloud, Bot, Github, Wrench, FlaskConical, BadgeCent, Settings, Globe, Server, Mail, ExternalLink, Linkedin, Cpu
} from 'lucide-react';
import Spinner from './Spinner';

// --- Stack Badge ---
type StackBadgeProps = {
  icon: React.ReactNode;
  name: string;
  color: string;
};
function StackBadge({ icon, name, color }: StackBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded font-mono font-semibold border border-blue-800/40 text-xs shadow ${color}`}>
      {icon}
      {name}
    </span>
  );
}

// --- AI Terminal Sessions ---
const sessions = [
  {
    prompt: "whoami",
    output: (
      <>
        <div className="mb-2">
          I'm <span className="font-bold text-cyan-400">Full Stack Dev</span> <span className="animate-wave inline-block">🤖</span>
        </div>
        <div className="mb-2">
          Coding since <span className="text-blue-300 font-bold">2016</span>.
          <br />I love travelling, badminton and coffee.
        </div>
        <div className="mb-2">
          <span className="text-cyan-400 font-bold">AI, ML, and beautiful code</span> are my obsession.
        </div>
        <div className="flex gap-4 mt-3">
          <a href="#" className="text-cyan-400 hover:text-purple-400" aria-label="GitHub"><Github /></a>
          <a href="#" className="text-cyan-400 hover:text-purple-400" aria-label="LinkedIn"><Linkedin /></a>
          <a href="mailto:youremail@example.com" className="text-cyan-400 hover:text-purple-400" aria-label="Mail"><Mail /></a>
        </div>
      </>
    ),
  },
  {
    prompt: "ls tech-stack",
    output: (
      <div className="flex flex-wrap gap-3 mt-1">
        {/* Languages & Core */}
        <StackBadge icon={<Braces className="w-4 h-4 text-yellow-300" />} name="JavaScript" color="bg-blue-900/40 text-yellow-200" />
        <StackBadge icon={<Braces className="w-4 h-4 text-blue-300" />} name="TypeScript" color="bg-blue-800/50 text-blue-200" />
        <StackBadge icon={<span className="w-4 h-4">🐍</span>} name="Python" color="bg-yellow-900/30 text-yellow-200" />
        <StackBadge icon={<span className="w-4 h-4">#️⃣</span>} name="C#" color="bg-indigo-900/50 text-indigo-200" />
        <StackBadge icon={<span className="w-4 h-4">🌐</span>} name=".NET" color="bg-purple-900/40 text-purple-200" />
        {/* Frontend */}
        <StackBadge icon={<Atom className="w-4 h-4 text-cyan-300" />} name="React" color="bg-gradient-to-r from-cyan-800/40 to-blue-900/30 text-cyan-200" />
        <StackBadge icon={<TerminalSquare className="w-4 h-4 text-white" />} name="Next.js" color="bg-zinc-900/80 text-white" />
        {/* Backend */}
        <StackBadge icon={<Leaf className="w-4 h-4 text-green-400" />} name="Node.js" color="bg-green-900/30 text-green-300" />
        <StackBadge icon={<FlaskConical className="w-4 h-4 text-lime-300" />} name="Flask" color="bg-lime-900/30 text-lime-200" />
        {/* Database */}
        <StackBadge icon={<Database className="w-4 h-4 text-blue-300" />} name="PostgreSQL" color="bg-blue-950/60 text-blue-200" />
        <StackBadge icon={<Database className="w-4 h-4 text-green-400" />} name="MongoDB" color="bg-green-800/60 text-green-200" />
        {/* API & Testing */}
        <StackBadge icon={<Wrench className="w-4 h-4 text-orange-300" />} name="Postman" color="bg-orange-900/30 text-orange-200" />
        <StackBadge icon={<Wrench className="w-4 h-4 text-pink-300" />} name="Jest" color="bg-pink-900/20 text-pink-200" />
        {/* Cloud & Infra */}
        <StackBadge icon={<Cloud className="w-4 h-4 text-blue-300" />} name="Docker" color="bg-blue-800/30 text-blue-200" />
        <StackBadge icon={<Cloud className="w-4 h-4 text-white" />} name="Vercel" color="bg-zinc-900/80 text-white" />
        <StackBadge icon={<Server className="w-4 h-4 text-indigo-300" />} name="AWS" color="bg-indigo-900/30 text-indigo-200" />
        {/* DevOps & Tools */}
        <StackBadge icon={<Settings className="w-4 h-4 text-emerald-300" />} name="CI/CD" color="bg-emerald-900/20 text-emerald-200" />
        <StackBadge icon={<Github className="w-4 h-4 text-zinc-200" />} name="GitHub" color="bg-zinc-800/60 text-zinc-100" />
        {/* Data, AI/ML */}
        <StackBadge icon={<Bot className="w-4 h-4 text-purple-300" />} name="OpenAI" color="bg-purple-900/40 text-purple-200" />
        <StackBadge icon={<span className="w-4 h-4">🧠</span>} name="TensorFlow" color="bg-yellow-900/30 text-yellow-200" />
        <StackBadge icon={<Cpu className="w-4 h-4 text-blue-200" />} name="PyTorch" color="bg-blue-900/20 text-blue-200" />
        {/* Extra */}
        <StackBadge icon={<Globe className="w-4 h-4 text-cyan-200" />} name="GraphQL" color="bg-cyan-900/40 text-cyan-200" />
        <StackBadge icon={<BadgeCent className="w-4 h-4 text-orange-300" />} name="Prisma" color="bg-orange-900/20 text-orange-200" />
      </div>
    ),
  },
  {
    prompt: "ls projects --recent",
    output: (
      <div className="space-y-4">
        <div>
          <span className="font-bold text-cyan-300">IKEA Kitchen Planner RMS</span>
          <a href="#" className="inline-flex items-center text-cyan-400 hover:text-purple-400 ml-1"><ExternalLink size={16} /></a>
          <div className="text-blue-200 text-sm">IKEA kitchen range management system.</div>
        </div>
        <div>
          <span className="font-bold text-cyan-300">IKEA Kitchen Planner Template Chatbox</span>
          <a href="#" className="inline-flex items-center text-cyan-400 hover:text-purple-400 ml-1"><ExternalLink size={16} /></a>
          <div className="text-blue-200 text-sm">Realtime chat app built on AWS Bedrock, PostgreSQL, and LLM.</div>
        </div>
        <div>
          <span className="font-bold text-cyan-300">Avensia Nitro</span>
          <a href="#" className="inline-flex items-center text-cyan-400 hover:text-purple-400 ml-1"><ExternalLink size={16} /></a>
          <div className="text-blue-200 text-sm">Full stack E-commerce solution.</div>
        </div>
      </div>
    ),
  },
  {
    prompt: "contact",
    output: (
      <div>
        <div className="mb-3">
          <span className="text-blue-200 font-bold">Let’s connect and build the future.</span>
        </div>
        <div className="flex gap-3 mt-3">
          <a href="mailto:youremail@example.com" className="px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold hover:from-blue-400 hover:to-purple-400 transition flex items-center gap-2">
            <Mail size={18} /> Email
          </a>
          <a href="#" className="px-4 py-2 rounded border border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-900/30 transition flex items-center gap-2">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    ),
  },
  {
    prompt: "food --spinner",
    output: <Spinner />,
  }
];

// --- Main Terminal ---
export default function AITerminal() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    setTyped('');
    setShowOutput(false);
    const curr = sessions[step].prompt;
    let i = 0;
    const interval = setInterval(() => {
      setTyped(curr.slice(0, i + 1));
      i++;
      if (i >= curr.length) {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 350);
      }
    }, 33);
    return () => clearInterval(interval);
  }, [step]);

  return (
    <section id="ai-terminal" className="flex flex-col items-center w-full px-4 min-h-[45vh]">
      <motion.div
        initial={{ y: 40, opacity: 0, boxShadow: '0 0 0 0 #5ee1fa22' }}
        animate={{ y: 0, opacity: 1, boxShadow: '0 18px 80px 0 #3b82f680' }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-3xl mx-auto rounded-xl bg-[#111625]/80 border-2 border-blue-900 shadow-2xl backdrop-blur-[6px] overflow-hidden"
        style={{
          boxShadow: '0 10px 55px 0 #2dd4bf50, 0 0 0 5px #2d1e57a0',
        }}
      >
        {/* Terminal top bar */}
        <div className="flex items-center gap-2 bg-gradient-to-r from-[#191a28]/90 to-[#191925]/90 px-4 py-2 border-b border-blue-900/70 relative">
          <Bot className="text-cyan-300" size={20} />
          <span className="ml-2 text-cyan-400 font-mono text-xs">AI Terminal Assistant</span>
        </div>
        {/* Terminal content */}
        <div className="font-mono text-cyan-100 px-7 py-9 text-base min-h-[250px] transition-colors duration-500">
          <div className="flex items-center mb-2">
            <span className="text-cyan-400">$</span>
            <span className="ml-2">
              {typed}
              <motion.span
                key={showOutput ? 'hidden' : 'caret'}
                className="inline-block w-2 h-5 bg-cyan-400 align-bottom ml-1 animate-pulse"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.1 }}
              ></motion.span>
            </span>
          </div>
          <AnimatePresence>
            {showOutput && (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="ai-output"
              >
                {sessions[step].output}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Terminal footer nav */}
        <div className="flex justify-between items-center bg-gradient-to-r from-[#191a28]/70 to-[#191925]/70 border-t border-blue-900 px-6 py-3">
          <div className="space-x-3">
            {sessions.map((s, idx) => (
              <button
                key={s.prompt}
                className={`rounded-full px-3 py-1 text-xs font-mono font-bold border-2
                ${idx === step
                  ? 'bg-cyan-400 text-white border-blue-400 shadow'
                  : 'bg-transparent text-cyan-300 border-blue-800 hover:bg-[#182c34]/50'}
                transition`}
                onClick={() => setStep(idx)}
              >
                {s.prompt}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}