'use client';

import { motion } from "framer-motion";
import { Atom, Database, Bot, Cloud, Settings2, MonitorPlay } from "lucide-react";

const modules = [
  {
    icon: <Atom className="text-cyan-300 w-7 h-7" />,
    name: "Frontend",
    status: "Production-ready",
    desc: "React, TypeScript, Rudux, Next.js, Tailwind",
  },
  {
    icon: <Settings2 className="text-green-300 w-7 h-7" />,
    name: "Backend",
    status: "Production-ready",
    desc: "Node.js, C#, .NET, Java, Python",
  },
  {
    icon: <Database className="text-purple-300 w-7 h-7" />,
    name: "Database",
    status: "Production-ready",
    desc: "PostgreSQL, Redis, MongoDB, Elasticsearch",
  },
  {
    icon: <Bot className="text-blue-300 w-7 h-7" />,
    name: "AI Integration",
    status: "Stable",
    desc: "TensorFlow, Prompt Engineering, LLM APIs, Langchain",
  },
  {
    icon: <Cloud className="text-cyan-100 w-7 h-7" />,
    name: "Cloud",
    status: "Auto-scaling",
    desc: "AWS, Azure",
  },
  {
    icon: <MonitorPlay className="text-yellow-300 w-7 h-7" />,
    name: "Devops",
    status: "Learning by doing",
    desc: "CI/CD, Monitoring, Performance",
  },
];

export default function Modules() {
  return (
    <section id="aimodules" className="w-full flex flex-col items-center px-4 pt-16">
      <h2 className="font-mono text-2xl mb-10 text-cyan-200 font-bold tracking-wide">Strengths in Action</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl w-full">
        {modules.map((mod, i) => (
          <motion.div
            key={mod.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.07,
              boxShadow: `0 0 22px #67e8f9, 0 0 16px #8b5cf6`,
              borderColor: "#a5b4fc"
            }}
            transition={{ delay: i * 0.07, duration: 0.5, type: "spring" }}
            className="rounded-xl p-7 bg-gradient-to-br from-[#171d33]/80 to-[#23283d]/60 border border-blue-900/50 flex flex-col items-center shadow-lg backdrop-blur cursor-pointer relative"
          >
            <div className="mb-2">{mod.icon}</div>
            <div className="font-mono text-cyan-200 text-lg font-bold mb-2">{mod.name}</div>
            <div className="text-cyan-300 font-mono text-xs mb-1">[{mod.status}]</div>
            <div className="text-cyan-100 text-sm text-center">{mod.desc}</div>
            {/* Glowing status orb */}
            <span className={`absolute top-4 right-4 w-3 h-3 rounded-full ${mod.status === 'Online' ? 'bg-green-400 animate-pulse' : 'bg-cyan-400'} shadow`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}