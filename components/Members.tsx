"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Building2 } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";

const Particles = () => (
  <div className="absolute inset-0 overflow-hidden z-0" aria-hidden>
    <div className="absolute w-full h-full animate-[pulse_8s_ease-in-out_infinite] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
    <div className="absolute w-full h-full animate-[spin_20s_linear_infinite] bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.15)_0%,transparent_70%)]" />
  </div>
);

type Guest = {
  name: string;
  designation: string;
  organization: string;
  photo: string;
};

const GuestsCarousel = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const swiperRef = useRef<SwiperType | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [centerIndex, setCenterIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const guests2024: Guest[] = [
    {
      name: "ADITHI SURESH",
      designation: "PRESIDENT",
      organization: "3rd year Cybersecurity Student",
        photo: "/images/adithi1.jpg",
        // logo removed
      // about removed
    },
    {
      name: "Vivek Reddy",
      designation: "TECHNICAL LEAD",
      organization: "3rd year Cybersecurity Student",
        photo: "/images/vivek1.jpg",
        // logo removed
      // about removed
    },
    {
      name: "Phani Chandan Reddy",
      designation: "SECRETARY",
      organization: "3rd year Cybersecurity Student",
        photo: "/images/phani1.jpg",
        // logo removed
      // about removed
    },
    {
      name: "Praveen Preetham",
      designation: "PHYSICAL FORENSICS CO-ORDINATOR",
      organization: "3rd year Cybersecurity Student",
        photo: "/images/praveen2.jpg",
        // logo removed
      // about removed
    },
    {
      name: "Archanaa Dinakaran",
      designation: "VICE PRESIDENT",
      organization: "2nd year Cybersecurity Student",
        photo: "/images/archana1.jpg",
        // logo removed
      // about removed
    },
    {
      name: "Sarany G",
      designation: "CLUB CO-ORDINATOR",
      organization: "Assistant Professor, Amrita University",
        photo: "/images/saranya.jpg",
        // logo removed
      // about removed
    },
  ];

  const handleCardOpen = (index: number) => {
    setExpandedIndex(index);
    swiperRef.current?.autoplay?.stop();
  };

  const handleCardClose = () => {
    setExpandedIndex(null);
    swiperRef.current?.autoplay?.start();
  };

  return (
    <section
      id="members"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-black via-red-900 to-red-700"
      ref={ref}
    >
      <Particles />

      {/* Heading */}
      <motion.div
        className="relative text-center mb-16 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
  <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black font-roboto text-red-600 drop-shadow-xl mb-4">
          Meet the Team
        </h2>
        <p className="body-text max-w-2xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#b22049] via-black to-[#b22049]" style={{ fontWeight: 500 }}>
        <span className="text-white">A focused group shaping the future through innovation and technical excellence.</span>
        </p>
      </motion.div>

      {/* Swiper */}
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={900}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setCenterIndex(swiper.realIndex);
          if (expandedIndex !== null && expandedIndex !== swiper.realIndex) {
            setExpandedIndex(null);
          }
        }}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 250,
          modifier: 1.2,
          slideShadows: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="w-[92%] max-w-7xl relative z-10"
      >
        {guests2024.map((guest, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <SwiperSlide key={index} className="flex justify-center py-12">
              <motion.div
                className={[
                  "group relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden",
                  "w-[380px] md:w-[500px] text-center cursor-pointer will-change-transform shadow-[0_0_60px_rgba(255,255,255,0.12)]",
                ].join(" ")}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
                onMouseEnter={() => handleCardOpen(index)}
                onMouseLeave={() => handleCardClose()}
                onClick={() => (isExpanded ? handleCardClose() : handleCardOpen(index))}
              >
                {/* Photo */}
                <div className="h-[320px] md:h-[400px] relative">
                  <img
                    src={guest.photo}
                    alt={guest.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Bottom Info (Name + Profession + Company/Logo) */}
                <AnimatePresence>
                  {!isExpanded && (
                    <motion.div
                      key="info"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 24 }}
                      transition={{ duration: 0.35 }}
                      className="absolute bottom-0 left-0 right-0 px-4 pb-4"
                    >
                      <div
                        className="
                          mx-auto w-full rounded-2xl border border-white/15
                          bg-white/10 backdrop-blur-md
                          px-4 py-3
                          text-center
                        "
                      >
                        {/* Name (single line, centered) */}
                        <h3 className="truncate font-semibold font-roboto text-[15px] md:text-base text-white leading-tight">
                          {guest.name}
                        </h3>

                        {/* Profession (single line, centered) */}
                        <p className="truncate text-xs md:text-sm text-gray-200/90 leading-snug mt-0.5">
                          {guest.designation}
                        </p>

                        {/* Company (one line, centered, logo removed) */}
                        <div className="mt-1.5 flex items-center justify-center gap-2 min-w-0">
                          <span className="truncate text-xs md:text-sm text-gray-100/90">
                            {guest.organization}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default GuestsCarousel;
