import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, X, ZoomIn } from "lucide-react";

const certs = [
  {
    title: "Google Ads Search Certification",
    issuer: "Google",
    date: "January 18, 2022",
    id: "103350618",
    image: "/certificates/1643802425862.jpg",
    description:
      "Mastery of the fundamentals of building and customizing effective Google Search campaigns.",
  },
  {
    title: "Google Analytics Individual Qualification",
    issuer: "Google",
    date: "January 18, 2022",
    id: "103362363",
    image: "/certificates/1643802467192.png",
    description: "Advanced Google Analytics concepts for data-driven decision making.",
  },
  {
    title: "Google Ads Display Certification",
    issuer: "Google",
    date: "January 19, 2022",
    id: "94693972",
    image: "/certificates/1643802492259.png",
    description:
      "Mastery of developing and optimizing effective Google Display campaigns.",
  },
  {
    title: "Google Ads — Measurement Certification",
    issuer: "Google",
    date: "January 19, 2022",
    id: "103462170",
    image: "/certificates/1643802517057.png",
    description:
      "Mastery of measuring and optimizing Google Ads performance.",
  },
];

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [modal, setModal] = useState<string | null>(null);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85, rotateY: 15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.7, ease },
    },
  };

  return (
    <section id="certificates" className="py-20 relative" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* Section header */}
        <motion.div variants={headerVariants} className="text-center mb-16">
          <motion.p
            whileHover={{ scale: 1.1, letterSpacing: "0.2em" }}
            className="text-[#c9a84c] font-mono text-sm mb-2 tracking-widest uppercase cursor-default"
          >
            Verified
          </motion.p>
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <motion.span
              className="text-[#e2e8f0] inline-block"
              whileHover={{ scale: 1.05, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Certifications
            </motion.span>{" "}
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              & Credentials
            </motion.span>
          </motion.h2>
          <p className="text-[#64748b] max-w-xl mx-auto text-base sm:text-lg">
            Google-certified across digital advertising and analytics — verified mastery in
            data-driven growth.
          </p>
        </motion.div>

        {/* Cert cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                boxShadow: "0 20px 50px rgba(201,168,76,0.15), 0 0 40px rgba(124,58,237,0.08)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group cursor-pointer bg-[#0d1228]/80 border border-[#1e2a4a] rounded-3xl overflow-hidden relative"
              onClick={() => setModal(cert.image)}
            >
              {/* Gold top border accent */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              />

              {/* Certificate preview */}
              <div className="relative h-48 overflow-hidden bg-white/95">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain object-top p-2"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#080b1a]/60 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ZoomIn size={28} className="text-[#c9a84c]" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start gap-2 mb-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  </motion.div>
                  <h3 className="text-sm font-bold text-[#e2e8f0] leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-xs text-[#64748b] mb-1">{cert.issuer} · {cert.date}</p>
                <p className="text-xs text-[#475569]">ID: {cert.id}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotateX: 20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotateX: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setModal(null)}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8 }}
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
              >
                <X size={16} className="text-gray-700" />
              </motion.button>
              <img src={modal} alt="Certificate" className="w-full h-auto" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
