import { useEffect, useRef, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { navLinks, personal } from "../../data/personal";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { scrollToSection } from "../../lib/utils";

const sectionIds = ["home", ...navLinks.map((link) => link.id)];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const active = useScrollSpy(sectionIds, 130);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const navigate = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <button className="wordmark" onClick={() => navigate("home")} aria-label="Go to top">
          <span>MH</span><i aria-hidden="true" />
        </button>

        <div className="nav-desktop">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button className={active === link.id ? "active" : ""} onClick={() => navigate(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a className="nav-resume" href={personal.links.resume} target="_blank" rel="noopener noreferrer">
            Résumé <FileText size={14} aria-hidden="true" />
          </a>
        </div>

        <button
          ref={menuButton}
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <p className="kicker">Navigate</p>
        {navLinks.map((link, index) => (
          <button key={link.id} onClick={() => navigate(link.id)} tabIndex={open ? 0 : -1}>
            <span>0{index + 1}</span>{link.label}
          </button>
        ))}
        <a href={personal.links.resume} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
          View résumé <FileText size={16} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
