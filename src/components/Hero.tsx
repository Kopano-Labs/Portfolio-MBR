import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ArrowDown, Mail, Linkedin } from "lucide-react";

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -120, scale: 0.8, rotateY: 20 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: { duration: 1.2, ease },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.9, ease, delay: 0.2 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12"
    >
      {/* Animated gradient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0"
          animate={{
            background: [
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%)",
              "radial-gradient(ellipse 80% 60% at 60% 10%, rgba(124,58,237,0.22) 0%, transparent 70%)",
              "radial-gradient(ellipse 80% 60% at 40% 5%, rgba(124,58,237,0.18) 0%, transparent 70%)",
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          animate={{ opacity: [0.12, 0.2, 0.12], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#c9a84c] rounded-full blur-[150px]"
          style={{ transformOrigin: "80% 80%" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(201,168,76,0.25)" }}
        className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-xs font-semibold text-[#c9a84c] tracking-wide cursor-default"
      >
        <motion.span
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-[#c9a84c]"
        />
        Available for projects · Cape Town, SA
      </motion.div>

      {/* Main layout — image LEFT, text RIGHT */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={controls}
        className="relative z-10 flex flex-col lg:flex-row items-center gap-4 lg:gap-0 max-w-[1400px] mx-auto px-4 w-full"
      >
        {/* Profile image — LEFT, massive, clipped at bottom */}
        <motion.div
          variants={slideInLeft}
          className="relative flex-shrink-0 lg:-mr-32"
        >
          {/* Subtle glow behind — small tight ring */}
          <motion.div
            className="absolute inset-[10%] rounded-full pointer-events-none"
            animate={{
              boxShadow: [
                "0 0 40px rgba(201,168,76,0.15), 0 0 80px rgba(124,58,237,0.08)",
                "0 0 60px rgba(201,168,76,0.25), 0 0 120px rgba(124,58,237,0.12)",
                "0 0 40px rgba(201,168,76,0.15), 0 0 80px rgba(124,58,237,0.08)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Profile image — clipped to hide bottom artifacts */}
          <motion.div
            className="relative w-[400px] h-[500px] sm:w-[500px] sm:h-[620px] md:w-[600px] md:h-[750px] lg:w-[750px] lg:h-[850px] overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{
              maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
            }}
          >
            <img
              src="/profile.png"
              alt="Mashoto Bayne Rababalela"
              className="w-full h-full object-cover object-top drop-shadow-2xl"
              style={{ filter: "grayscale(0.3) contrast(1.1)" }}
            />
          </motion.div>
        </motion.div>

        {/* Text content — RIGHT, overlapping image slightly */}
        <motion.div
          variants={slideInRight}
          className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-20"
        >
          {/* Greeting */}
          <motion.p
            variants={fadeUp}
            className="text-[#94a3b8] text-lg font-mono mb-2 tracking-widest"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              wussp,
            </motion.span>
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-4"
          >
            <motion.span
              className="text-white inline-block"
              whileHover={{ scale: 1.05, x: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              I'm
            </motion.span>{" "}
            <motion.span
              className="gradient-text-gold inline-block"
              whileHover={{
                scale: 1.08,
                textShadow: "0 0 40px rgba(201,168,76,0.5)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Mashoto.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={fadeUp}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#cbd5e1]"
          >
            A Web & Mobile Social Media Manager
            <br />
            <motion.span
              className="gradient-text font-black inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Full-Stack Developer.
            </motion.span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-[#64748b] text-sm sm:text-base max-w-lg mb-8 leading-relaxed"
          >
            {["Growth Consultant", "Web Developer", "Electrical Engineer", "Business Owner", "Soccer Coach"].map(
              (role, i, arr) => (
                <span key={role}>
                  <motion.span
                    className="inline-block"
                    whileHover={{ color: "#c9a84c", y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {role}
                  </motion.span>
                  {i < arr.length - 1 && (
                    <motion.span
                      className="inline-block mx-1.5 text-[#c9a84c]"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      ·
                    </motion.span>
                  )}
                </span>
              )
            )}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
          >
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 40px rgba(201,168,76,0.4), 0 0 80px rgba(201,168,76,0.15)",
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-[#c9a84c] to-[#d4b96a] text-[#080b1a] shadow-lg shadow-[#c9a84c]/25 transition-all"
            >
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Mail size={16} />
              </motion.div>
              Get In Touch
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mashoto-bayne-rababalela-836a47139/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 40px rgba(124,58,237,0.3), 0 0 80px rgba(124,58,237,0.1)",
                borderColor: "#7c3aed",
                backgroundColor: "rgba(124,58,237,0.15)",
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl font-bold text-sm border border-[#7c3aed]/50 text-[#a78bfa] transition-all"
            >
              <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <Linkedin size={16} />
              </motion.div>
              Connect on LinkedIn
            </motion.a>
            <motion.a
              href="https://wa.me/27637820245"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 40px rgba(37,211,102,0.3), 0 0 80px rgba(37,211,102,0.1)",
                borderColor: "#25D366",
                backgroundColor: "rgba(37,211,102,0.15)",
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl font-bold text-sm border border-[#25D366]/50 text-[#25D366] transition-all"
            >
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.2c4.1 0 7.4 3.3 7.5 7.4z"/>
                </svg>
              </motion.div>
              Connect on WhatsApp
            </motion.a>

          </motion.div>

          {/* Email line */}
          <motion.p
            variants={fadeUp}
            className="text-xs text-[#475569] font-mono"
          >
            <motion.span
              whileHover={{ color: "#c9a84c" }}
              className="cursor-default"
            >
              mashrababalela@gmail.com
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#475569] hover:text-[#c9a84c] transition-colors group"
      >
        <a href="#about" className="flex flex-col items-center gap-1">
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[10px] font-mono tracking-widest"
          >
            SCROLL
          </motion.span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
