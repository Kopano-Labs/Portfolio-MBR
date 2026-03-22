import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const row1 = [
  "React", "Node.js", "TypeScript", "JavaScript", "Python",
  "HTML & CSS", "TailwindCSS", "MongoDB", "Express.js", "REST APIs",
];

const row2 = [
  "Electrical Engineering", "Growth Consulting", "B2B Sales", "Team Leadership",
  "Soccer Coaching", "Business Strategy", "Problem Solving", "Frontend Dev",
  "Backend Dev", "Digital Marketing",
];

function ScrollRow({ items, direction, inView }: { items: string[]; direction: "left" | "right"; inView: boolean }) {
  const doubled = [...items, ...items];
  const xFrom = direction === "left" ? "0%" : "-50%";
  const xTo = direction === "left" ? "-50%" : "0%";

  return (
    <motion.div
      initial={{ opacity: 0, y: direction === "left" ? -30 : 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="overflow-hidden py-2 relative"
    >
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#080b1a] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#080b1a] to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: [xFrom, xTo] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <motion.span
            key={i}
            whileHover={{
              scale: 1.15,
              borderColor: "#c9a84c",
              color: "#c9a84c",
              boxShadow: "0 0 20px rgba(201,168,76,0.2)",
              y: -4,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="glossy-badge border border-[#c9a84c]/20 rounded-full px-4 py-1.5 text-xs font-semibold text-[#c9a84c]/80 whitespace-nowrap cursor-default transition-colors duration-200"
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function InfiniteScrollBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-8 relative overflow-hidden">
      <div className="flex flex-col gap-3">
        <ScrollRow items={row1} direction="left" inView={inView} />
        <ScrollRow items={row2} direction="right" inView={inView} />
      </div>
    </section>
  );
}
