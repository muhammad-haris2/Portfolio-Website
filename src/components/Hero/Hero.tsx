import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, FileDown, MapPin } from "lucide-react";
import { personal } from "../../data/personal";
import { Button } from "../ui/Button";
import { SystemSchematic } from "./SystemSchematic";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import { scrollToSection } from "../../lib/utils";

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-rail" aria-hidden="true"><span>PORTFOLIO · 2026</span><span>ISB / PK</span></div>
      <div className="page-shell hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <p className="kicker">Muhammad Haris / AI & Software Engineering</p>
          <h1 id="hero-heading">I build intelligent systems that solve <em>real problems.</em></h1>
          <p className="hero-intro">{personal.subtitle}</p>
          <div className="hero-actions">
            <Button onClick={() => scrollToSection("work")}>Explore my work <ArrowDownRight size={17} aria-hidden="true" /></Button>
            <Button variant="outline" onClick={() => scrollToSection("contact")}>Get in touch <ArrowUpRight size={17} aria-hidden="true" /></Button>
          </div>
          <div className="hero-meta">
            <span><MapPin size={14} aria-hidden="true" /> Islamabad, Pakistan</span>
            <span>BS Computer Science · 2027</span>
          </div>
          <div className="hero-links" aria-label="Profile links">
            <a href={personal.links.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub</a>
            <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /> LinkedIn</a>
            <a href={personal.links.resume} target="_blank" rel="noopener noreferrer"><FileDown aria-hidden="true" /> Résumé</a>
          </div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <SystemSchematic />
        </motion.div>
      </div>
    </section>
  );
}
