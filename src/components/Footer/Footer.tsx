import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import { personal } from "../../data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12" role="contentinfo">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold text-text-primary">{personal.name}</p>
            <p className="mt-1 text-sm text-text-secondary">
              Building intelligent systems with AI.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
              aria-label="GitHub profile"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={personal.links.email}
              className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
              aria-label="Send email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-text-muted">
          &copy; {currentYear} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
