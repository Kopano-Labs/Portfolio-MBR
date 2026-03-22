import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { MapPin, Layers, Handshake } from "lucide-react";

const stats = [
  {
    icon: <Layers size={22} />,
    label: "Multiple Disciplines",
    sub: "Engineering · Dev · Business · Coaching",
  },
  {
    icon: <MapPin size={22} />,
    label: "Cape Town, SA",
    sub: "City of Cape Town, Western Cape",
  },
  {
    icon: <Handshake size={22} />,
    label: "Open to Collaborate",
    sub: "Freelance · Consulting · Partnerships",
  },
];

const titleWords = ["You", "dream", "it.", "I", "build", "it."];
const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/banner-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#080b1a]/75 backdrop-blur-[2px]" />

      {/* Gold/purple vignette edges */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 50%, transparent 40%, rgba(8,11,26,0.8) 100%)",
        }}
      />

      {/* Animated floating orbs */}
      <motion.div
        animate={inView ? { x: [0, 30, 0], y: [0, -20, 0], opacity: [0.05, 0.1, 0.05] } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-[300px] h-[300px] bg-[#c9a84c] rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={inView ? { x: [0, -20, 0], y: [0, 30, 0], opacity: [0.04, 0.08, 0.04] } : {}}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-[#7c3aed] rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center"
      >
        {/* Animated word-by-word title */}
        <div className="mb-8 flex flex-wrap justify-center gap-x-4 gap-y-1">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, filter: "blur(12px)", rotateX: 40 }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{
                scale: 1.15,
                textShadow: i >= 3 ? "0 0 40px rgba(201,168,76,0.5)" : "0 0 30px rgba(255,255,255,0.3)",
                y: -8,
              }}
              className={`text-5xl sm:text-7xl md:text-8xl font-black leading-none cursor-default ${
                i >= 3
                  ? "gradient-text-gold"
                  : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Summary text */}
        <motion.p
          variants={fadeUp}
          className="text-[#cbd5e1] text-base sm:text-lg leading-relaxed max-w-2xl mb-12"
        >
          Multifaceted professional bridging technical engineering and strategic business growth.
          Growth Consultant at{" "}
          <motion.span
            whileHover={{ scale: 1.05, color: "#d4b96a" }}
            className="text-[#c9a84c] font-semibold inline-block cursor-default"
          >
            Clickteams.io
          </motion.span>{" "}
          — architecting commission-only remote outbound teams. Web & Software Developer deploying sophisticated
          front and backend solutions. Bachelor's in{" "}
          <motion.span
            whileHover={{ scale: 1.05, color: "#d4b96a" }}
            className="text-[#c9a84c] font-semibold inline-block cursor-default"
          >
            Electrical & Electronics Engineering
          </motion.span>{" "}
          from Northlink College.
        </motion.p>

        {/* Animated stat tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-3xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.85, rotateY: 20 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.0 + i * 0.15, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{
                scale: 1.08,
                y: -8,
                boxShadow: "0 0 40px rgba(201,168,76,0.3), 0 0 80px rgba(124,58,237,0.15)",
                borderColor: "rgba(201,168,76,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-3xl border border-[#1e2a4a] cursor-default"
              style={{
                background: "rgba(13,18,40,0.7)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Hover shimmer */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(124,58,237,0.1) 100%)",
                }}
              />
              {/* Animated top border on hover */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#c9a84c] via-[#7c3aed] to-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative z-10 p-6 flex flex-col items-center gap-3">
                <motion.div
                  className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -15, 15, -10, 10, 0], scale: 1.3 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <p className="font-black text-base text-white group-hover:text-[#c9a84c] transition-colors duration-300">
                  {stat.label}
                </p>
                <p className="text-xs text-[#64748b] group-hover:text-[#94a3b8] transition-colors duration-300 leading-relaxed">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
