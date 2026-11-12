import { ArrowUp } from "lucide-react";
import { personal } from "../../data/personal";
import { scrollToSection } from "../../lib/utils";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div><strong>MH<i>.</i></strong><p>Designed and built by Muhammad Haris.</p></div>
        <p>AI & software engineering<br />Islamabad, Pakistan</p>
        <div className="footer-links"><a href={personal.links.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={personal.links.resume} target="_blank" rel="noopener noreferrer">Résumé</a></div>
        <button onClick={() => scrollToSection("home")} aria-label="Back to top"><ArrowUp aria-hidden="true" /></button>
      </div>
      <div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} Muhammad Haris</span><span>Built with React + TypeScript</span></div>
    </footer>
  );
}
