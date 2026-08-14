import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import { navLinks, personal } from "../../data/personal";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { cn, scrollToSection } from "../../lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3 shadow-lg shadow-black/20" : "bg-transparent py-5",
      )}
    >
      <nav className="section-container flex items-center justify-between" aria-label="Main navigation">
        <button
          onClick={() => handleNavClick("home")}
          className="text-lg font-bold tracking-tight text-text-primary transition-colors hover:text-accent-light"
          aria-label="Go to home"
        >
          MH<span className="text-accent">.</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                  activeSection === link.id
                    ? "text-accent-light"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
            aria-label="GitHub profile"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={personal.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
            aria-label="View resume"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass border-t border-border md:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={cn(
                      "w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors",
                      activeSection === link.id
                        ? "bg-accent-subtle text-accent-light"
                        : "text-text-secondary hover:bg-white/5 hover:text-text-primary",
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 flex gap-3 border-t border-border pt-4">
                <a
                  href={personal.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
                >
                  <GitHubIcon className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
                >
                  <LinkedInIcon className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
