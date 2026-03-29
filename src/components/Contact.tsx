import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Send, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease },
    },
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xpwzrdqv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _replyto: form.email }),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        window.location.href = `mailto:mashrababalela@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
      }
    } catch {
      window.location.href = `mailto:mashrababalela@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    }
    setLoading(false);
  }

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={inView ? { scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#7c3aed] rounded-full blur-[100px]"
        />
        <motion.div
          animate={inView ? { scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] } : {}}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#c9a84c] rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* CTA banner */}
        <motion.div
          variants={fadeUp}
          whileHover={{
            boxShadow: "0 0 60px rgba(201,168,76,0.15), 0 0 120px rgba(124,58,237,0.08)",
          }}
          className="relative overflow-hidden rounded-3xl mb-14 p-8 sm:p-12 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(124,58,237,0.2) 50%, rgba(59,130,246,0.1) 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          {/* Animated shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 relative z-10"
          >
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Let's Work
            </motion.span>{" "}
            <motion.span
              className="text-[#e2e8f0] inline-block"
              whileHover={{ scale: 1.05, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Together
            </motion.span>
          </motion.h2>
          <p className="text-[#94a3b8] text-base sm:text-lg max-w-xl mx-auto mb-8 relative z-10">
            Whether you need a web application, growth strategy, or technical consulting —
            Mashoto is ready to make it happen.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <motion.a
              href="https://www.linkedin.com/in/mashoto-bayne-rababalela-836a47139/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 40px rgba(201,168,76,0.4), 0 0 80px rgba(201,168,76,0.15)",
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#c9a84c] text-[#080b1a] shadow-lg shadow-[#c9a84c]/20 transition-all"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
              <ArrowUpRight size={14} />
            </motion.a>
            <motion.a
              href="https://wa.me/27637820245"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 40px rgba(37,211,102,0.4), 0 0 80px rgba(37,211,102,0.15)",
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#25D366] text-[#080b1a] shadow-lg shadow-[#25D366]/20 transition-all"
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
              <ArrowUpRight size={14} />
            </motion.a>
            <motion.a
              href="mailto:mashrababalela@gmail.com"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 40px rgba(124,58,237,0.3)",
                borderColor: "#7c3aed",
                backgroundColor: "rgba(124,58,237,0.1)",
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-[#7c3aed]/50 text-[#8b5cf6] transition-all"
            >
              <Mail size={16} />
              Send an Email
            </motion.a>
          </div>
        </motion.div>

        {/* Contact info + form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <motion.div variants={slideLeft} className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <motion.h3
                whileHover={{ x: 4, color: "#c9a84c" }}
                className="text-xl font-bold text-[#e2e8f0] mb-1 cursor-default"
              >
                Get in touch
              </motion.h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Open to freelance projects, consulting engagements, and collaboration opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <Mail size={16} />,
                  label: "Email",
                  value: "mashrababalela@gmail.com",
                  href: "mailto:mashrababalela@gmail.com",
                  color: "#c9a84c",
                },
                {
                  icon: <Linkedin size={16} />,
                  label: "LinkedIn",
                  value: "Mashoto Bayne Rababalela",
                  href: "https://www.linkedin.com/in/mashoto-bayne-rababalela-836a47139/",
                  color: "#8b5cf6",
                },
                {
                  icon: (
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
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.2c4.1 0 7.4 3.3 7.5 7.4z" />
                    </svg>
                  ),
                  label: "WhatsApp / Phone",
                  value: "+27 63 782 0245",
                  href: "https://wa.me/27637820245",
                  color: "#25D366",
                },
                {
                  icon: <MapPin size={16} />,
                  label: "Location",
                  value: "City of Cape Town, Western Cape, South Africa",
                  color: "#3b82f6",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{
                    x: 8,
                    boxShadow: `0 0 20px ${item.color}15`,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-3 cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="text-xs text-[#64748b] mb-0.5">{item.label}</p>
                    {item.href ? (
                      <motion.a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        whileHover={{ color: item.color }}
                        className="text-sm font-medium text-[#e2e8f0] transition-colors"
                      >
                        {item.value}
                      </motion.a>
                    ) : (
                      <p className="text-sm font-medium text-[#e2e8f0]">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Newsletter capture */}
            <motion.div
              whileHover={{
                borderColor: "rgba(201,168,76,0.3)",
                boxShadow: "0 0 30px rgba(201,168,76,0.08)",
              }}
              className="mt-2 p-4 rounded-2xl border border-[#1e2a4a] bg-[#0d1228]/60 transition-all"
            >
              <p className="text-xs font-semibold text-[#c9a84c] mb-1 uppercase tracking-wide">
                Stay in the loop
              </p>
              <p className="text-xs text-[#64748b] mb-3">
                Subscribe for updates on new projects and insights.
              </p>
              <form
                action="https://formspree.io/f/xpwzrdqv"
                method="POST"
                className="flex gap-2"
              >
                <input
                  type="email"
                  name="newsletter_email"
                  placeholder="your@email.com"
                  className="flex-1 text-xs px-3 py-2 rounded-lg bg-[#080b1a] border border-[#1e2a4a] text-[#e2e8f0] placeholder-[#475569] focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(201,168,76,0.3)",
                    boxShadow: "0 0 15px rgba(201,168,76,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 rounded-lg bg-[#c9a84c]/20 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div variants={slideRight} className="lg:col-span-3">
            <motion.div
              whileHover={{
                borderColor: "rgba(30,42,74,0.8)",
                boxShadow: "0 0 40px rgba(124,58,237,0.06)",
              }}
              className="bg-[#0d1228]/80 border border-[#1e2a4a] rounded-3xl p-6 sm:p-8 transition-all"
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center justify-center h-64 text-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-16 h-16 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center mb-4"
                  >
                    <Send size={24} className="text-[#c9a84c]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#e2e8f0] mb-2">Message sent!</h3>
                  <p className="text-[#64748b] text-sm">
                    Mashoto will get back to you as soon as possible.
                  </p>
                  <motion.button
                    onClick={() => setSent(false)}
                    whileHover={{ scale: 1.05, color: "#d4b96a" }}
                    className="mt-4 text-xs text-[#c9a84c] hover:underline"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { label: "Name", type: "text", name: "name", placeholder: "Your full name" },
                      { label: "Email", type: "email", name: "email", placeholder: "your@email.com" },
                    ].map((field) => (
                      <motion.div key={field.name} whileHover={{ y: -2 }}>
                        <label className="block text-xs font-semibold text-[#64748b] mb-1.5 uppercase tracking-wide">
                          {field.label}
                        </label>
                        <motion.input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          required
                          placeholder={field.placeholder}
                          whileFocus={{ borderColor: "rgba(201,168,76,0.6)", boxShadow: "0 0 20px rgba(201,168,76,0.1)" }}
                          className="w-full px-4 py-3 rounded-xl bg-[#080b1a] border border-[#1e2a4a] text-[#e2e8f0] placeholder-[#475569] focus:outline-none focus:border-[#c9a84c]/60 transition-all text-sm"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div whileHover={{ y: -2 }}>
                    <label className="block text-xs font-semibold text-[#64748b] mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <motion.textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      whileFocus={{ borderColor: "rgba(201,168,76,0.6)", boxShadow: "0 0 20px rgba(201,168,76,0.1)" }}
                      className="w-full px-4 py-3 rounded-xl bg-[#080b1a] border border-[#1e2a4a] text-[#e2e8f0] placeholder-[#475569] focus:outline-none focus:border-[#c9a84c]/60 transition-all text-sm resize-none"
                    />
                  </motion.div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 40px rgba(201,168,76,0.3), 0 0 80px rgba(201,168,76,0.1)",
                      y: -2,
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm bg-[#c9a84c] text-[#080b1a] hover:bg-[#d4b96a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-[#c9a84c]/20"
                  >
                    {loading ? (
                      <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                        Sending...
                      </motion.span>
                    ) : (
                      <>
                        <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          <Send size={16} />
                        </motion.div>
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
