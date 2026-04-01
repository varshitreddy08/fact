"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Target, Users, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    { icon: Shield, title: 'Threat Intelligence', desc: 'Understanding and analyzing real-world cyber threats' },
    { icon: Target, title: 'Skill Engineering', desc: 'Learning through practical challenges' },
    { icon: Users, title: 'Collaborative Network', desc: 'Building a strong, security-focused community' },
    { icon: Award, title: 'Professional Mastery', desc: 'Developing industry-level expertise in forensics' },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="about-bg-animate pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <style>{`
          .about-bg-animate {
            background: radial-gradient(circle at 20% 30%, #b2204940 0%, transparent 60%),
                        radial-gradient(circle at 80% 70%, #b2204940 0%, transparent 60%),
                        linear-gradient(120deg, #fff0f6 0%, #f8e1ec 100%);
            animation: aboutGradientMove 12s ease-in-out infinite;
          }
          @keyframes aboutGradientMove {
            0%,100% { background-position: 0 0, 100px 100px, 0 0; }
            50%     { background-position: 80px 40px, 180px 140px, 0 0; }
          }
          .about-bg-particle {
            position: absolute;
            border-radius: 50%;
            opacity: 0.18;
            filter: blur(1.5px);
            animation: aboutParticleFloat 8s linear infinite;
          }
          .about-bg-particle1 { width: 80px; height: 80px; left: 10%; top: 20%; background: #b22049; animation-delay: 0s; }
          .about-bg-particle2 { width: 50px; height: 50px; left: 70%; top: 60%; background: #b22049; animation-delay: 2s; }
          .about-bg-particle3 { width: 30px; height: 30px; left: 40%; top: 80%; background: #b22049; animation-delay: 4s; }
          @keyframes aboutParticleFloat {
            0%   { transform: translateY(0) scale(1); }
            50%  { transform: translateY(-30px) scale(1.2); }
            100% { transform: translateY(0) scale(1); }
          }
        `}</style>
        <div className="about-bg-particle about-bg-particle1" />
        <div className="about-bg-particle about-bg-particle2" />
        <div className="about-bg-particle about-bg-particle3" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <style>{`
                .about-logo-zoom {
                  transition: transform 0.5s cubic-bezier(.4,2,.6,1);
                }
                .group:hover .about-logo-zoom {
                  transform: scale(1.08);
                  animation: logoZoomPulse 0.7s;
                }
                @keyframes logoZoomPulse {
                  0%   { transform: scale(1); }
                  50%  { transform: scale(1.12); }
                  100% { transform: scale(1.08); }
                }
              `}</style>
              <img
                src="/images/Fact%20Logo.png"
                alt="FACT Forensic Analysis Club & Triage Logo"
                className="w-full h-96 object-cover about-logo-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6" style={{ color: '#b22049' }}>
           Welcome to FACT Club
          </h2>   
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded at ACN’23 (Amrita Cyber Nation), FACT is a student-driven community exploring the world of forensic analysis and digital investigation.

We bring together curious minds to learn, collaborate, and push boundaries in both digital and physical forensics.

Whether you're a beginner or an expert, FACT is your space to grow, innovate, and uncover the truth. Join us on this exciting journey into the world of cyber forensics and triage!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-roboto text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;