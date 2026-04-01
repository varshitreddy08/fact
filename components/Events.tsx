"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "Cyber Forensics Workshop",
    date: "March 2026",
    desc: "Hands-on digital investigation session"
  },
  {
    title: "CTF Challenge",
    date: "April 2026",
    desc: "Capture The Flag cybersecurity event"
  },
  {
    title: "Malware Analysis Lab",
    date: "May 2026",
    desc: "Reverse engineering & threat analysis"
  }
];

export default function Events() {
  return (
    <section id="events" className="relative py-20 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Animated Background */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: 0.8, scale: 1.1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(circle at 70% 30%, #b22049 0%, #3b82f6 40%, transparent 80%)',
          filter: 'blur(80px)',
        }}
      />

      <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {events.map((e, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg"
          >
            <h3 className="text-xl font-semibold">{e.title}</h3>
            <p className="text-cyan-400 mt-2">{e.date}</p>
            <p className="text-gray-400 mt-2">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}