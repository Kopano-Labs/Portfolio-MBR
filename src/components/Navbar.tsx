import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Monitor, Linkedin } from "lucide-react";

type Theme = "dark" | "light" | "system";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function applyTheme(t: Theme) {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    if (t === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(prefersDark ? "dark" : "light");
    } else {
      root.classList.add(t);
    }
  }

  function cycleTheme() {
    const order: Theme[] = ["dark", "light", "system"];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  const themeIcon =
    theme === "dark" ? <Moon size={16} /> : theme === "light" ? <Sun size={16} /> : <Monitor size={16} />;

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Certs", href: "#certificates" },
    { label: "LinkedIn", href: "#linkedin" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          animate={scrolled ? { scale: 0.98, y: 0 } : { scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`navbar-pill led-border-outer rounded-2xl px-4 sm:px-5 py-2.5 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "shadow-2xl shadow-black/50" : ""
          }`}
        >
          {/* Logo — avatar + text */}
          <motion.a
            href="#home"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 rounded-full overflow-hidden border border-[#c9a84c]/40 group-hover:border-[#c9a84c] transition-colors duration-300 shrink-0"
            >
              <img
                src="/profile.png"
                alt="Mashoto"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
            <motion.span
              className="font-black text-lg tracking-tight gradient-text-gold"
              whileHover={{ textShadow: "0 0 20px rgba(201,168,76,0.5)" }}
            >
              Mashoto<span className="text-[#7c3aed]">.</span>
            </motion.span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  color: "#ffffff",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-3 py-1.5 text-sm font-medium text-[#94a3b8] transition-all duration-300 rounded-lg hover:bg-white/5 group"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#7c3aed] rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "80%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* LinkedIn pill */}
            <motion.a
              href="https://www.linkedin.com/in/mashoto-rababalela"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(201,168,76,0.3)",
                borderColor: "#c9a84c",
                backgroundColor: "rgba(201,168,76,0.1)",
              }}
              whileTap={{ scale: 0.9 }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[#c9a84c] border border-[#c9a84c]/30 transition-all duration-300 text-xs font-bold"
            >
              <Linkedin size={13} />
              LinkedIn
            </motion.a>

            {/* Theme toggle */}
            <motion.button
              onClick={cycleTheme}
              aria-label={`Switch theme (current: ${theme})`}
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-2 rounded-lg text-[#64748b] hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-200"
            >
              {themeIcon}
            </motion.button>

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 90 }}
              className="md:hidden p-2 rounded-lg text-[#64748b] hover:text-[#c9a84c] transition-colors duration-200"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden mt-2 navbar-pill rounded-2xl p-4 flex flex-col gap-1"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 8, color: "#c9a84c" }}
                  className="text-sm font-medium text-[#94a3b8] transition-colors py-2 px-3 rounded-lg"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="border-t border-[#1e2a4a] mt-2 pt-3">
                <motion.a
                  href="https://www.linkedin.com/in/mashoto-rababalela"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-2 text-sm font-bold text-[#c9a84c] hover:text-[#d4b96a] transition-colors py-2 px-3 rounded-lg hover:bg-[#c9a84c]/5"
                >
                  <Linkedin size={14} />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
