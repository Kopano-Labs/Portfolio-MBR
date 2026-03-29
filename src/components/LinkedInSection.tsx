import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Linkedin,
  Lock,
  ExternalLink,
  Image,
  Play,
  ThumbsUp,
  MessageCircle,
  Send,
  Mail,
  Globe,
  Award,
  TrendingUp,
  Users,
  MoreHorizontal,
  Heart,
  Repeat2,
} from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/mashoto-bayne-rababalela-836a47139/";

const previewPosts = [
  {
    type: "text",
    timeAgo: "2d",
    preview:
      "Building scalable B2B outbound teams that generate real revenue — here's what I've learned at Clickteams.io after helping dozens of entrepreneurs scale their sales pipelines from zero to six figures...",
    hashtags: ["#B2B", "#SalesGrowth", "#Entrepreneurship", "#Clickteams"],
    likes: 84,
    comments: 12,
    reposts: 5,
    sends: 3,
  },
  {
    type: "image",
    timeAgo: "5d",
    preview:
      "Proud to share another milestone in our Growth Consulting journey. When we started, most people said commission-only outbound wouldn't work in Africa. The results speak for themselves.",
    hashtags: ["#GrowthConsulting", "#Africa", "#StartupLife", "#Results"],
    likes: 147,
    comments: 23,
    reposts: 18,
    sends: 9,
  },
  {
    type: "video",
    timeAgo: "1w",
    preview:
      "How I went from Electrical Engineering to Full-Stack Development to Growth Consulting — the full story. Sometimes your career path isn't a straight line, and that's exactly what makes it powerful.",
    hashtags: ["#CareerJourney", "#Engineering", "#WebDev", "#GrowthMindset"],
    likes: 203,
    comments: 41,
    reposts: 32,
    sends: 14,
  },
];

const profileStats = [
  { icon: <Users size={14} />, label: "500+ connections" },
  { icon: <Award size={14} />, label: "4 certifications" },
  { icon: <TrendingUp size={14} />, label: "Top voice" },
];

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function LinkedInSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -80, rotateY: 15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.8, ease },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease },
    },
  };

  return (
    <section id="linkedin" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={inView ? { scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#7c3aed] rounded-full blur-[120px]"
        />
        <motion.div
          animate={inView ? { scale: [1.2, 1, 1.2], opacity: [0.03, 0.06, 0.03] } : {}}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#c9a84c] rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Header */}
        <motion.div variants={slideUp} className="text-center mb-16">
          <motion.div
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(124,58,237,0.3)" }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/5 text-xs font-bold text-[#a78bfa] tracking-widest uppercase cursor-default"
          >
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              <Linkedin size={14} />
            </motion.div>
            LinkedIn Feed
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-5"
            variants={slideUp}
          >
            <motion.span
              className="text-[#e2e8f0] inline-block"
              whileHover={{ scale: 1.05, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Stay Connected
            </motion.span>{" "}
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              on LinkedIn
            </motion.span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-[#64748b] max-w-xl mx-auto text-base sm:text-lg"
          >
            Follow Mashoto's professional journey — insights on growth consulting,
            web development, and business strategy.
          </motion.p>
        </motion.div>

        {/* Profile card + posts grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Profile card — col 1 */}
          <motion.div
            variants={slideLeft}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 60px rgba(201,168,76,0.15), 0 0 120px rgba(124,58,237,0.1)",
            }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #111930 0%, #0d1228 40%, #111930 100%)",
            }}
          >
            {/* Gold/purple border glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
              padding: "1px",
              background: "linear-gradient(135deg, #c9a84c 0%, #7c3aed 50%, #c9a84c 100%)",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
            }} />

            {/* Banner with gradient overlay */}
            <div className="relative h-28 w-full overflow-hidden">
              <img
                src="/banner.png"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1228]" />
              {/* Animated sparkles on banner */}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="absolute top-3 right-6 w-1.5 h-1.5 rounded-full bg-[#c9a84c]"
              />
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                className="absolute top-5 right-16 w-1 h-1 rounded-full bg-[#a78bfa]"
              />
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                className="absolute top-7 right-10 w-1 h-1 rounded-full bg-[#c9a84c]"
              />
            </div>

            {/* Avatar with animated ring */}
            <div className="px-6 pb-6">
              <div className="-mt-12 mb-4 relative w-fit">
                <motion.div
                  className="absolute -inset-1 rounded-full"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: "conic-gradient(#c9a84c, #7c3aed, #3b82f6, #c9a84c)",
                    padding: "3px",
                    borderRadius: "9999px",
                  }}
                />
                <div className="relative w-22 h-22 rounded-full overflow-hidden border-3 border-[#0d1228] z-10">
                  <img
                    src="/profile.png"
                    alt="Mashoto Bayne Rababalela"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Online dot */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#c9a84c] border-2 border-[#0d1228] z-20"
                />
              </div>

              <motion.h3
                whileHover={{ x: 4, color: "#c9a84c" }}
                className="font-black text-white text-xl leading-tight mb-0.5 cursor-default"
              >
                Mashoto Bayne Rababalela
              </motion.h3>
              <p className="text-[#c9a84c] text-sm font-bold mb-1">
                Growth Consultant @ Clickteams.io
              </p>
              <p className="text-[#94a3b8] text-xs mb-5">
                Full-Stack Dev · Electrical Eng. · Soccer Coach · Cape Town, SA
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-2 mb-5">
                {profileStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(201,168,76,0.15)",
                      borderColor: "rgba(201,168,76,0.5)",
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1e2a4a] bg-[#0d1228]/60 text-[10px] text-[#94a3b8] font-semibold cursor-default"
                  >
                    <span className="text-[#c9a84c]">{stat.icon}</span>
                    {stat.label}
                  </motion.div>
                ))}
              </div>

              {/* Connect to see */}
              <div className="border-t border-[#c9a84c]/15 pt-4 mb-5">
                <p className="text-xs text-[#c9a84c] mb-3 font-bold tracking-wider uppercase">
                  Connect to see:
                </p>
                <ul className="text-xs text-[#94a3b8] space-y-2">
                  {[
                    { icon: <Globe size={11} />, text: "Posts & articles" },
                    { icon: <TrendingUp size={11} />, text: "Professional updates" },
                    { icon: <Image size={11} />, text: "Photos & videos" },
                    { icon: <Users size={11} />, text: "Network activity" },
                  ].map((item) => (
                    <motion.li
                      key={item.text}
                      whileHover={{ x: 6, color: "#c9a84c" }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="flex items-center gap-2.5 cursor-default"
                    >
                      <span className="text-[#7c3aed]">{item.icon}</span>
                      {item.text}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Connect CTA with glow */}
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(201,168,76,0.3), 0 0 80px rgba(124,58,237,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#c9a84c] to-[#d4b96a] text-[#080b1a] transition-all duration-300 shadow-lg shadow-[#c9a84c]/20"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </motion.a>

              <motion.a
                href="https://wa.me/27637820245"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(37,211,102,0.3), 0 0 80px rgba(37,211,102,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#25D366] to-[#34eb74] text-[#080b1a] transition-all duration-300 shadow-lg shadow-[#25D366]/20 mt-3"
              >
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
                Connect on WhatsApp
              </motion.a>


              {/* Secondary CTA */}
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                  borderColor: "#7c3aed",
                  backgroundColor: "rgba(124,58,237,0.1)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-xs mt-3 border border-[#7c3aed]/30 text-[#a78bfa] transition-all duration-300"
              >
                <Send size={13} />
                Send Message
              </motion.a>

              {/* Email CTA */}
              <motion.a
                href="mailto:mashrababalela@gmail.com"
                whileHover={{
                  scale: 1.03,
                  borderColor: "#c9a84c",
                  backgroundColor: "rgba(201,168,76,0.1)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-xs mt-3 border border-[#c9a84c]/30 text-[#c9a84c] transition-all duration-300"
              >
                <Mail size={13} />
                Send Email
              </motion.a>
            </div>
          </motion.div>

          {/* Posts preview — col 2-3 */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {previewPosts.map((post, i) => (
              <motion.div
                key={i}
                variants={slideRight}
                custom={i}
                onHoverStart={() => setHoveredPost(i)}
                onHoverEnd={() => setHoveredPost(null)}
                whileHover={{
                  scale: 1.015,
                  y: -4,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.3), 0 0 40px rgba(124,58,237,0.08)",
                }}
                className="relative bg-[#0d1228]/80 border border-[#1e2a4a] rounded-2xl p-5 overflow-hidden cursor-default group"
                style={{
                  transition: "border-color 0.3s",
                  borderColor: hoveredPost === i ? "rgba(124,58,237,0.4)" : undefined,
                }}
              >
                {/* Shimmer on hover */}
                <AnimatePresence>
                  {hoveredPost === i && (
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: "200%", opacity: 0.06 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent skew-x-[-20deg] pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                {/* Post header */}
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#c9a84c]/30 shrink-0"
                  >
                    <img src="/profile.png" alt="Mashoto" className="w-full h-full object-cover object-top" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-white">Mashoto Bayne Rababalela</p>
                      <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#c9a84c]/10 text-[#c9a84c] font-bold">1st</span>
                    </div>
                    <p className="text-xs text-[#64748b]">Growth Consultant · Clickteams.io</p>
                    <p className="text-[10px] text-[#475569] flex items-center gap-1 mt-0.5">
                      {post.timeAgo} · <Globe size={9} />
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {post.type === "image" && (
                      <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="p-2 rounded-lg bg-[#c9a84c]/10 text-[#c9a84c]">
                        <Image size={15} />
                      </motion.div>
                    )}
                    {post.type === "video" && (
                      <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="p-2 rounded-lg bg-[#7c3aed]/10 text-[#a78bfa]">
                        <Play size={15} />
                      </motion.div>
                    )}
                    <motion.div whileHover={{ scale: 1.1 }} className="p-1.5 rounded-lg hover:bg-white/5 text-[#475569] cursor-pointer">
                      <MoreHorizontal size={16} />
                    </motion.div>
                  </div>
                </div>

                {/* Post preview text with blur fade */}
                <div className="relative mb-3 z-10">
                  <p className="text-sm text-[#cbd5e1] leading-relaxed line-clamp-2">
                    {post.preview}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0d1228] to-transparent" />
                </div>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1.5 mb-4 z-10 relative">
                  {post.hashtags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1, color: "#c9a84c" }}
                      className="text-[10px] text-[#7c3aed] font-semibold cursor-pointer hover:underline"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Engagement stats */}
                <div className="flex items-center gap-3 text-[10px] text-[#475569] mb-3 pb-3 border-b border-[#1e2a4a] z-10 relative">
                  <span className="flex items-center gap-1">
                    <span className="flex -space-x-1">
                      <span className="w-4 h-4 rounded-full bg-[#0a66c2] flex items-center justify-center"><ThumbsUp size={8} className="text-white" /></span>
                      <span className="w-4 h-4 rounded-full bg-[#e74c3c] flex items-center justify-center"><Heart size={8} className="text-white" /></span>
                    </span>
                    {post.likes}
                  </span>
                  <span>{post.comments} comments</span>
                  <span>{post.reposts} reposts</span>
                </div>

                {/* Action buttons row (LinkedIn-style) */}
                <div className="flex items-center justify-between z-10 relative">
                  <div className="flex items-center gap-1">
                    {[
                      { icon: <ThumbsUp size={14} />, label: "Like" },
                      { icon: <MessageCircle size={14} />, label: "Comment" },
                      { icon: <Repeat2 size={14} />, label: "Repost" },
                      { icon: <Send size={14} />, label: "Send" },
                    ].map((action) => (
                      <motion.button
                        key={action.label}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(124,58,237,0.1)",
                          color: "#a78bfa",
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#475569] text-xs font-semibold transition-colors"
                      >
                        {action.icon}
                        <span className="hidden sm:inline">{action.label}</span>
                      </motion.button>
                    ))}
                  </div>
                  <motion.a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "rgba(201,168,76,0.15)",
                      boxShadow: "0 0 20px rgba(201,168,76,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#c9a84c] border border-[#c9a84c]/30 transition-all"
                  >
                    <Lock size={11} />
                    View on LinkedIn
                    <ExternalLink size={11} />
                  </motion.a>
                </div>
              </motion.div>
            ))}

            {/* View all CTA */}
            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={slideUp}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 50px rgba(124,58,237,0.15), 0 0 100px rgba(201,168,76,0.08)",
                borderColor: "#7c3aed",
                backgroundColor: "rgba(124,58,237,0.08)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 py-4 rounded-2xl border border-[#7c3aed]/30 text-[#a78bfa] transition-all duration-300 text-sm font-bold relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#c9a84c]/0 via-[#7c3aed]/5 to-[#c9a84c]/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <Linkedin size={18} className="relative z-10" />
              <span className="relative z-10">View Full Profile & All Posts on LinkedIn</span>
              <ExternalLink size={14} className="relative z-10" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
