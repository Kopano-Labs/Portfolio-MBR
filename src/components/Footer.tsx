import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, MapPin, Briefcase, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative pt-16 pb-8" ref={ref}>
      {/* Business card section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 10 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 80px rgba(201,168,76,0.12), 0 0 160px rgba(124,58,237,0.08)",
          }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0d1228 0%, #111930 50%, #0d1228 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            boxShadow: "0 0 60px rgba(201,168,76,0.08), 0 0 120px rgba(124,58,237,0.06)",
          }}
        >
          {/* Gold corner accents */}
          <motion.div
            animate={inView ? { opacity: [0.4, 0.8, 0.4] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#c9a84c]/40 rounded-tl-3xl"
          />
          <motion.div
            animate={inView ? { opacity: [0.4, 0.8, 0.4] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#c9a84c]/40 rounded-br-3xl"
          />

          {/* Card circuit background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-stretch gap-0">
            {/* Left — avatar + name */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 p-8 sm:w-56 sm:border-r sm:border-[#1e2a4a]"
            >
              {/* Avatar with animated gold ring */}
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: "conic-gradient(#c9a84c, #7c3aed, #3b82f6, #c9a84c)",
                    padding: "2px",
                    borderRadius: "9999px",
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#0d1228] relative z-10"
                >
                  <img
                    src="/profile.png"
                    alt="Mashoto Bayne Rababalela"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
                {/* Online dot */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#c9a84c] border-2 border-[#0d1228] z-20"
                />
              </div>
              <div className="text-center">
                <motion.p
                  whileHover={{ scale: 1.05, color: "#c9a84c" }}
                  className="font-black text-white text-lg leading-tight cursor-default"
                >
                  Mashoto Bayne
                </motion.p>
                <motion.p
                  whileHover={{ scale: 1.05, color: "#c9a84c" }}
                  className="font-black text-white text-lg leading-tight cursor-default"
                >
                  Rababalela
                </motion.p>
              </div>
            </motion.div>

            {/* Right — contact details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex-1 flex flex-col justify-center gap-4 p-8"
            >
              <motion.p
                whileHover={{ letterSpacing: "0.15em" }}
                className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-1 cursor-default"
              >
                Business Card
              </motion.p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: <Briefcase size={14} />, primary: "Growth Consultant", secondary: "Clickteams.io", color: "#c9a84c" },
                  { icon: <Linkedin size={14} />, primary: "linkedin.com/in/mashoto-rababalela", href: "https://www.linkedin.com/in/mashoto-rababalela", color: "#a78bfa" },
                  { icon: <Mail size={14} />, primary: "mashrababalela@gmail.com", href: "mailto:mashrababalela@gmail.com", color: "#c9a84c" },
                  { icon: <MapPin size={14} />, primary: "Cape Town, Western Cape, SA", color: "#64748b" },
                  { icon: <Phone size={14} />, primary: "Available on LinkedIn", color: "#64748b" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="flex items-center gap-3"
                  >
                    <motion.span
                      whileHover={{ rotate: 360, scale: 1.3 }}
                      transition={{ duration: 0.4 }}
                      style={{ color: item.color }}
                      className="shrink-0"
                    >
                      {item.icon}
                    </motion.span>
                    {item.href ? (
                      <motion.a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        whileHover={{ color: item.color }}
                        className="text-sm text-[#e2e8f0] transition-colors font-medium"
                      >
                        {item.primary}
                      </motion.a>
                    ) : (
                      <div>
                        <p className="text-white text-sm font-semibold">{item.primary}</p>
                        {item.secondary && <p className="text-[#64748b] text-xs">{item.secondary}</p>}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* LinkedIn CTA */}
              <motion.a
                href="https://www.linkedin.com/in/mashoto-rababalela"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(201,168,76,0.3)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-[#c9a84c] to-[#d4b96a] text-[#080b1a] transition-all shadow-lg shadow-[#c9a84c]/15"
              >
                <Linkedin size={13} />
                View Full LinkedIn Profile
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-[#1e2a4a]/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <p className="text-xs text-[#475569]">
          &copy; {year} Mashoto Bayne Rababalela · All rights reserved
        </p>
        <p className="text-xs text-[#475569]">
          Built by{" "}
          <motion.a
            href="https://github.com/RobynAwesome"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "#d4b96a", scale: 1.05 }}
            className="text-[#c9a84c] hover:underline inline-block"
          >
            RobynAwesome
          </motion.a>
        </p>
      </motion.div>
    </footer>
  );
}
