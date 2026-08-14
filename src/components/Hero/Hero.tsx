import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import { personal } from "../../data/personal";
import { Button } from "../ui/Button";
import { NeuralNetworkCanvas } from "./NeuralNetworkCanvas";
import { scrollToSection } from "../../lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="section-container grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="order-2 lg:order-1">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            {personal.heroLabel}
          </motion.span>

          <motion.h1
            id="hero-heading"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">{personal.tagline}</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg text-text-secondary"
          >
            {personal.subtitle}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6"
          >
            <p className="font-medium text-text-primary">
              Hi, I&apos;m {personal.name}.
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Computer Science undergraduate at FAST-NUCES Islamabad.
            </p>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button onClick={() => scrollToSection("projects")}>
              View My Projects
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection("contact")}>
              Let&apos;s Connect
            </Button>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex items-center gap-4"
          >
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent-light"
              aria-label="GitHub profile"
            >
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
            <span className="text-border">|</span>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent-light"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
            <span className="text-border">|</span>
            <a
              href={personal.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent-light"
              aria-label="View resume"
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 flex h-[300px] items-center justify-center sm:h-[400px] lg:order-2 lg:h-[500px]"
          aria-hidden="true"
        >
          <NeuralNetworkCanvas className="h-full w-full" />
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted transition-colors hover:text-accent-light"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.button>
    </section>
  );
}
