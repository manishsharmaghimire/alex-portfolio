import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Landing({ dark }) {
  const roles = ["Developer", "Freelancer", "Instructor", "Problem Solver"];
  const emojis = ["😄", "😁", "😆", "😊", "😎"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [emojiIndex, setEmojiIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => setRoleIndex((prev) => (prev + 1) % roles.length), 2500);
    const emojiInterval = setInterval(() => setEmojiIndex((prev) => (prev + 1) % emojis.length), 1500);
    return () => {
      clearInterval(roleInterval);
      clearInterval(emojiInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden transition-colors duration-700
        ${dark ? "bg-gray-900 text-white" : "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white"}`}
    >
      {/* Animated Blobs */}
      <motion.div className={`absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl ${dark ? "bg-gray-700/30" : "bg-pink-400/30"}`}
        animate={{ y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div className={`absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl ${dark ? "bg-gray-800/30" : "bg-indigo-400/30"}`}
        animate={{ y: [0, -60, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div className={`absolute top-1/2 left-1/3 w-40 h-40 rounded-full blur-2xl ${dark ? "bg-gray-600/20" : "bg-yellow-400/20"}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Greeting */}
      <motion.h1 className="text-5xl font-extrabold mt-20 flex items-center justify-center gap-2"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span>Hi, I am Alex Khanal</span>
        <motion.span key={emojiIndex} className="inline-block"
          animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          {emojis[emojiIndex]}
        </motion.span>
      </motion.h1>

      {/* Rotating Roles */}
      <motion.p key={roleIndex} className="mt-4 text-2xl font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {roles[roleIndex]}
      </motion.p>

      {/* Buttons */}
      <motion.div className="mt-8 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a href="/cv.pdf" download className={`px-6 py-2 rounded-full font-semibold shadow-lg transition-transform
          ${dark ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-white text-indigo-600 hover:scale-105"}`}
        >
          Download CV
        </a>
        <a href="#contact" className={`px-6 py-2 rounded-full border font-semibold transition-colors
          ${dark ? "border-gray-500 text-white hover:bg-gray-700" : "border-white text-white hover:bg-white hover:text-indigo-600"}`}
        >
          Contact Me
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div className="absolute bottom-10 text-lg opacity-80"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ↓ Scroll to explore
      </motion.div>
    </section>
  );
}
