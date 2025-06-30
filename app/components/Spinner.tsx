'use client';

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, PlusCircle, XCircle } from "lucide-react";

// Food emojis for options
const FOOD_EMOJIS = [
  "🍕", "🍣", "🌮", "🍔", "🍜", "🍙", "🥗", "🍩",
  "🍟", "🥟", "🥪", "🍛", "🌯", "🍱", "🧋", "🍦",
  "🍗", "🍤", "🥞", "🍝", "🍨", "🧀", "🥩", "🍰"
];

// Color pairs for gradient segments
const SEGMENT_COLORS = [
  ["#22d3ee", "#6366f1"], // cyan to indigo
  ["#a78bfa", "#f472b6"], // purple to pink
  ["#34d399", "#06b6d4"], // emerald to cyan
  ["#fbbf24", "#fb7185"], // amber to rose
  ["#f472b6", "#a78bfa"], // pink to purple
  ["#2dd4bf", "#60a5fa"], // teal to blue
  ["#818cf8", "#a21caf"], // violet to fuchsia
  ["#38bdf8", "#5eead4"], // sky to teal
  ["#facc15", "#22d3ee"], // yellow to cyan
  ["#a3e635", "#22d3ee"], // lime to cyan
  ["#f472b6", "#fb7185"], // pink to rose
  ["#eab308", "#f59e42"], // yellow to orange
];

function pickRandom<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getEmojiForOption(opt: string, idx: number) {
  let hash = opt.split('').reduce((acc, c) => acc + c.charCodeAt(0), idx);
  return FOOD_EMOJIS[hash % FOOD_EMOJIS.length];
}

export default function AISpinnerSection() {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [spinIndex, setSpinIndex] = useState<number>(-1);
  const [spinTurns, setSpinTurns] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  function addTag(tag: string) {
    const val = tag.trim();
    if (!val) return;
    if (tags.length >= 12) return setError("Max 12 options");
    if (tags.includes(val)) return setError("Already added!");
    setTags([...tags, val]);
    setInput("");
    setError("");
    setTimeout(() => inputRef.current?.focus(), 40);
  }
  function removeTag(tag: string) {
    setTags(tags.filter(t => t !== tag));
    setError("");
    setResult(null);
    setSpinIndex(-1);
  }
  function handleInputKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === "," || e.key === "Tab") {
      e.preventDefault();
      if (input) addTag(input);
    } else if (e.key === "Backspace" && !input && tags.length) {
      removeTag(tags[tags.length - 1]);
    }
  }

  function handleSpin() {
    setResult(null);
    setError("");
    if (tags.length < 2) return setError("Enter at least 2 options!");
    setSpinning(true);

    const winner = pickRandom(tags);
    const winnerIdx = tags.findIndex(t => t === winner);
    setSpinIndex(winnerIdx);
    const rounds = 4 + Math.floor(Math.random() * 2);
    setSpinTurns(rounds);

    setTimeout(() => {
      setSpinning(false);
      setResult(winner);
    }, 2200);
  }

  function handleRedo() {
    setResult(null);
    setSpinning(true);
    const winner = pickRandom(tags);
    const winnerIdx = tags.findIndex(t => t === winner);
    setSpinIndex(winnerIdx);
    const rounds = 4 + Math.floor(Math.random() * 2);
    setSpinTurns(rounds);
    setTimeout(() => {
      setSpinning(false);
      setResult(winner);
    }, 2200);
  }

  function handleReset() {
    setInput("");
    setTags([]);
    setResult(null);
    setSpinning(false);
    setSpinIndex(-1);
    setSpinTurns(0);
    setError("");
    setTimeout(() => inputRef.current?.focus(), 40);
  }

  const showWheel = spinning || (result && tags.length > 1);

  return (
    <div className="flex flex-col items-center w-full transition-all duration-700">
      <div className="flex items-center mb-5">
        <Bot className="text-cyan-300 mr-2" />
        <span className="font-mono text-lg text-cyan-100">AI Food Spinner</span>
      </div>
      {/* INPUT */}
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="flex flex-wrap gap-2 mb-3 justify-center">
          {tags.map(tag => (
            <span key={tag} className="group flex items-center bg-cyan-800/70 text-cyan-100 px-3 py-1 rounded-xl font-mono text-sm shadow cursor-pointer transition-all hover:bg-cyan-400 hover:text-white">
              {getEmojiForOption(tag, tags.indexOf(tag))}&nbsp;{tag}
              <XCircle
                className="w-4 h-4 ml-1 text-cyan-400/70 group-hover:text-white hover:scale-125 transition"
                onClick={() => removeTag(tag)}
                tabIndex={0}
              />
            </span>
          ))}
        </div>
        <div className="flex w-full">
          <input
            ref={inputRef}
            type="text"
            className="flex-1 rounded-l-xl px-4 py-2 bg-[#181f32]/80 border-t border-b border-l border-cyan-400/50 text-cyan-200 font-mono focus:outline-none focus:border-cyan-400"
            placeholder={tags.length ? "Add another food..." : "Type a food & press Enter"}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleInputKey}
            disabled={spinning}
            maxLength={24}
          />
          <button
            onClick={() => addTag(input)}
            disabled={!input.trim() || spinning || tags.length >= 12}
            className="rounded-r-xl px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold hover:from-blue-500 hover:to-purple-400 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            tabIndex={0}
          >
            <PlusCircle className="w-5 h-5 mr-1" /> Add
          </button>
        </div>
        {error && (
          <div className="w-full text-center mt-2 text-xs text-red-300 font-mono">{error}</div>
        )}
      </div>
      {/* SPIN BUTTON */}
      <div className="flex mt-5 mb-3">
        <button
          onClick={handleSpin}
          disabled={spinning || tags.length < 2}
          className={`px-8 py-2 rounded-full font-bold font-mono bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-xl border-2 border-cyan-400/40 transition-all
          ${spinning || tags.length < 2 ? "opacity-50 cursor-not-allowed" : "hover:from-blue-500 hover:to-purple-400"}
          `}
        >
          <span className="tracking-widest">SPIN</span>
        </button>
        <button
          onClick={handleReset}
          className="ml-4 px-6 py-2 rounded-full font-bold font-mono border border-cyan-400/30 bg-cyan-800/40 text-cyan-200 hover:bg-cyan-700/80 hover:text-white transition"
        >
          Reset
        </button>
      </div>
      {/* SPINNER */}
      <div
        className={`flex flex-col items-center transition-all duration-700 ease-in-out ${
          showWheel ? "min-h-[340px]" : "min-h-[60px]"
        } w-full mb-1`}
      >
        <AnimatePresence>
          {showWheel && tags.length > 1 && (
            <motion.div
              key={spinning ? 'spinning' : 'result'}
              initial={{ opacity: 0, scale: 0.85, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 32 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Winner label floats above */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.88 }}
                  animate={{ opacity: 1, y: -50, scale: 1.11 }}
                  exit={{ opacity: 0, y: 18, scale: 0.88 }}
                  transition={{ duration: 0.6 }}
                  className="absolute left-1/2 -translate-x-1/2 -top-10 z-20 font-mono text-2xl font-bold text-cyan-200 bg-gradient-to-r from-cyan-700/80 to-purple-600/80 px-8 py-2 rounded-2xl shadow-2xl border border-cyan-400/50 animate-bounce"
                >
                  🎉 {getEmojiForOption(result, spinIndex)}&nbsp;<span className="text-purple-200">{result}</span>!
                </motion.div>
              )}
              <PrizeWheel
                options={tags}
                spinning={spinning}
                resultIndex={spinIndex}
                spinTurns={spinTurns}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* WINNER ACTION BUTTONS */}
        <AnimatePresence>
          {result && (
            <motion.div
              key="winner-actions"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.33 }}
              className="flex justify-center gap-4 mt-6"
            >
              <button
                onClick={handleRedo}
                className="px-7 py-2 rounded-full font-bold font-mono bg-gradient-to-r from-cyan-400 to-purple-400 text-white shadow-lg border-2 border-cyan-300/50 hover:from-blue-500 hover:to-purple-400 transition"
              >
                🔄 Redo
              </button>
              <button
                onClick={handleReset}
                className="px-7 py-2 rounded-full font-bold font-mono border border-cyan-400/30 bg-cyan-900/50 text-cyan-100 hover:bg-cyan-700/90 hover:text-white transition"
              >
                ❌ Reset
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// True "prize wheel"—SVG sectors, pointer, neon glass, emoji labels!
function PrizeWheel({
  options,
  spinning,
  resultIndex,
  spinTurns,
}: {
  options: string[];
  spinning: boolean;
  resultIndex: number;
  spinTurns: number;
}) {
  const N = options.length;
  const radius = 130;
  const segAngle = 360 / N;
  const targetAngle = resultIndex >= 0 ? (360 - (resultIndex * segAngle) + 360 * spinTurns) : 0;

  // Build SVG sectors
  const makeSector = (i: number) => {
    const startAngle = i * segAngle - 90;
    const endAngle = (i + 1) * segAngle - 90;
    const x1 = radius + radius * Math.cos((Math.PI * startAngle) / 180);
    const y1 = radius + radius * Math.sin((Math.PI * startAngle) / 180);
    const x2 = radius + radius * Math.cos((Math.PI * endAngle) / 180);
    const y2 = radius + radius * Math.sin((Math.PI * endAngle) / 180);
    const largeArc = segAngle > 180 ? 1 : 0;

    return (
      <path
        key={i}
        d={`M${radius},${radius} L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`}
        fill={`url(#sector${i % SEGMENT_COLORS.length})`}
        opacity={0.89}
        stroke="#fff"
        strokeWidth={resultIndex === i && !spinning ? 5 : 1.3}
        filter={resultIndex === i && !spinning ? "drop-shadow(0 0 16px #fff6)" : ""}
      />
    );
  };

  // Option label positions
  const labelPos = (i: number) => {
    const angle = ((i + 0.5) * segAngle - 90) * (Math.PI / 180);
    const x = radius + (radius - 38) * Math.cos(angle);
    const y = radius + (radius - 38) * Math.sin(angle);
    return { x, y, angle: (i + 0.5) * segAngle - 90 };
  };

  return (
    <motion.div
      className="relative"
      animate={{
        rotate: spinning
          ? [0, 360 * (spinTurns + 1)]
          : targetAngle,
        scale: N < 5 ? 0.82 + 0.17 * N : 1,
      }}
      transition={{
        duration: spinning ? 2.2 : 0.8,
        ease: spinning ? [0.24, 1.3, 0.38, 0.99] : "easeOut",
      }}
      style={{
        width: 2 * radius,
        height: 2 * radius,
        willChange: "transform",
      }}
    >
      {/* Glassy neon shadow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-2xl pointer-events-none" />
      {/* SVG wheel */}
      <svg
        width={2 * radius}
        height={2 * radius}
        viewBox={`0 0 ${2 * radius} ${2 * radius}`}
        style={{ zIndex: 2, position: "relative" }}
      >
        <defs>
          {options.map((_, i) => (
            <linearGradient
              key={i}
              id={`sector${i % SEGMENT_COLORS.length}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={SEGMENT_COLORS[i % SEGMENT_COLORS.length][0]} />
              <stop offset="100%" stopColor={SEGMENT_COLORS[i % SEGMENT_COLORS.length][1]} />
            </linearGradient>
          ))}
          <radialGradient id="wheel-glow2" r="80%" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#83eafd" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#192133" stopOpacity="0.18" />
          </radialGradient>
        </defs>
        <circle
          cx={radius}
          cy={radius}
          r={radius - 1}
          fill="url(#wheel-glow2)"
        />
        {options.map((_, i) => makeSector(i))}
        {/* Center circle */}
        <circle
          cx={radius}
          cy={radius}
          r={44}
          fill="url(#wheel-glow2)"
          opacity={0.93}
          stroke="#fff"
          strokeWidth={2}
          filter="blur(0.7px)"
        />
        {/* Labels + emojis */}
        {options.map((option, i) => {
          const { x, y, angle } = labelPos(i);
          return (
            <g key={option}>
              <text
                x={x}
                y={y - 13}
                fill="#fff"
                fontSize={21}
                fontFamily="monospace"
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`rotate(${angle} ${x} ${y - 13})`}
                style={{
                  filter:
                    resultIndex === i && !spinning
                      ? "drop-shadow(0 0 8px #fff8)"
                      : "",
                  opacity: 0.96,
                }}
              >
                {getEmojiForOption(option, i)}
              </text>
              <text
                x={x}
                y={y + 7}
                fill={resultIndex === i && !spinning ? "#fff" : "#e0e7ef"}
                fontSize={N > 8 ? 14 : 17}
                fontFamily="monospace"
                textAnchor="middle"
                alignmentBaseline="middle"
                fontWeight={resultIndex === i && !spinning ? "bold" : "500"}
                style={{
                  textShadow:
                    resultIndex === i && !spinning
                      ? "0 0 7px #fff, 0 0 21px #a5f3fc"
                      : "0 0 2px #777d"
                }}
                transform={`rotate(${angle} ${x} ${y + 7})`}
              >
                {option}
              </text>
            </g>
          );
        })}
      </svg>
      {/* Center dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-cyan-200 via-purple-400 to-blue-400 w-12 h-12 rounded-full blur-[2px] opacity-70 border-2 border-cyan-100 pointer-events-none z-10" />
      {/* Pointer */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[-32px] z-30">
        <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[32px] border-b-cyan-400/80 drop-shadow-xl" />
      </div>
    </motion.div>
  );
}