import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { Code2, Zap, Briefcase, Users } from "lucide-react";

const skillCategories = [
  {
    icon: <Code2 size={24} />,
    title: "Web Development",
    description:
      "Designs and deploys sophisticated front and backend solutions. Builds scalable web applications with modern frameworks and clean architecture.",
    badges: [
      "React", "Node.js", "TypeScript", "JavaScript",
      "HTML & CSS", "TailwindCSS", "MongoDB", "Express.js",
      "REST APIs", "Python", "Git",
    ],
    color: "#c9a84c",
  },
  {
    icon: <Zap size={24} />,
    title: "Electrical Engineering",
    description:
      "Bachelor's degree in Electrical & Electronics Engineering from Northlink College. Applies rigorous analytical approach and logical precision to complex challenges.",
    badges: [
      "Circuit Design", "Electronics", "Signal Processing",
      "Problem Solving", "Systems Analysis", "Analytical Thinking",
      "Northlink College",
    ],
    color: "#7c3aed",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Growth & Sales Consulting",
    description:
      "Growth Consultant at Clickteams.io — architecting commission-only remote outbound teams for B2B entrepreneurs. Enhances client sales processes and drives scalable growth.",
    badges: [
      "B2B Sales", "Growth Strategy", "Outbound Teams",
      "Sales Management", "Clickteams.io", "Revenue Growth",
      "Client Relations", "Remote Teams",
    ],
    color: "#3b82f6",
  },
  {
    icon: <Users size={24} />,
    title: "Leadership & Coaching",
    description:
      "Soccer Coach leveraging classroom management and organizational skills to mentor athletes and foster disciplined, high-performing environments. Business Owner with strategic impact.",
    badges: [
      "Soccer Coaching", "Team Management", "Mentoring",
      "Business Ownership", "Strategic Planning",
      "Organizational Skills", "Leadership",
    ],
    color: "#c9a84c",
  },
];

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
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
    hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.7, ease },
    },
  };

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      {/* Animated decorative blobs */}
      <motion.div
        animate={inView ? { scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#7c3aed] rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={inView ? { scale: [1.2, 1, 1.2], opacity: [0.06, 0.1, 0.06] } : {}}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a84c] rounded-full blur-[100px] pointer-events-none"
      />

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
            Expertise
          </motion.p>
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Skills
            </motion.span>{" "}
            <motion.span
              className="text-[#e2e8f0] inline-block"
              whileHover={{ scale: 1.05, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              & Disciplines
            </motion.span>
          </motion.h2>
          <p className="text-[#64748b] max-w-2xl mx-auto text-base sm:text-lg">
            A unique blend of technical engineering, software development, business growth strategy,
            and people leadership.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: `0 20px 50px ${cat.color}15, 0 0 40px ${cat.color}08`,
              }}
              className="group relative bg-[#0d1228]/80 border border-[#1e2a4a] rounded-3xl p-6 overflow-hidden cursor-default"
            >
              {/* Top accent border — animated width on hover */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
                initial={{ scaleX: 0.3, opacity: 0.4 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                style={{
                  background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`,
                  transformOrigin: "center",
                }}
              />

              {/* Background glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${cat.color}08 0%, transparent 70%)`,
                }}
              />

              {/* Icon with spin on hover */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 relative z-10"
                style={{
                  background: `${cat.color}15`,
                  border: `1px solid ${cat.color}30`,
                  color: cat.color,
                }}
              >
                {cat.icon}
              </motion.div>

              <motion.h3
                whileHover={{ x: 4, color: cat.color }}
                className="text-lg font-bold text-[#e2e8f0] mb-2 relative z-10"
              >
                {cat.title}
              </motion.h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-5 relative z-10">{cat.description}</p>

              {/* Tech badges with stagger animation */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.badges.map((badge) => (
                  <motion.span
                    key={badge}
                    whileHover={{
                      scale: 1.15,
                      y: -3,
                      boxShadow: `0 4px 15px ${cat.color}20`,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg border transition-colors duration-200 cursor-default"
                    style={{
                      background: `${cat.color}08`,
                      borderColor: `${cat.color}25`,
                      color: `${cat.color}cc`,
                    }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
