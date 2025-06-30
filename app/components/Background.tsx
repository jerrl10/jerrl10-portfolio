'use client';

import { motion } from 'framer-motion';

function Star({ size, left, top, delay }: { size: number, left: string, top: string, delay: number }) {
  return (
    <motion.div
      className="absolute bg-white rounded-full pointer-events-none"
      style={{ width: size, height: size, left, top, opacity: 0.85 }}
      animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.16, 1] }}
      transition={{ repeat: Infinity, duration: 3.8 + delay, delay, ease: 'easeInOut' }}
    />
  );
}

export default function Background() {
  // A few random stars (you can add more for more density)
  const stars = [
    [2, '12vw', '8vh', 0],
    [1.5, '68vw', '21vh', 1.1],
    [2.2, '32vw', '44vh', 1.8],
    [1, '81vw', '82vh', 2.5],
    [1.8, '17vw', '70vh', 0.7],
    [1.1, '43vw', '58vh', 2.2],
    [2.6, '59vw', '5vh', 0.3],
    [1.3, '89vw', '15vh', 2.3],
    [1.1, '22vw', '85vh', 1.4],
    [1.5, '55vw', '80vh', 2.9],
  ];

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#101225]">
      {/* animated nebula blobs */}
      <motion.div
        className="absolute top-[-15%] left-[-18%] w-[65vw] h-[65vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, #6c3cff 0%, #1e295a 70%, transparent 100%)',
          filter: 'blur(120px)',
        }}
        animate={{
          x: [0, 90, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-16%] w-[55vw] h-[55vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, #41c9fc 0%, #22296a 80%, transparent 100%)',
          filter: 'blur(130px)',
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, -90, 0],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
      {/* Subtle purple blob */}
      <motion.div
        className="absolute left-[30vw] top-[50vh] w-[25vw] h-[20vw] rounded-full"
        style={{
          background: 'radial-gradient(circle, #c23ffc 0%, #242a55 100%)',
          filter: 'blur(90px)',
        }}
        animate={{
          y: [0, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
      {/* Stars */}
      {stars.map(([size, left, top, delay], i) =>
        <Star key={i} size={size as number} left={left as string} top={top as string} delay={delay as number} />
      )}
    </div>
  );
}