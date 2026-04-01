"use client";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <motion.form
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.input
          type="text"
          placeholder="Name"
          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        />
        <motion.input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.textarea
          placeholder="Message"
          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        ></motion.textarea>

        <motion.button
          className="px-6 py-3 bg-cyan-400 text-black rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}