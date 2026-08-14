import { motion } from "framer-motion";
import { GitHubIcon } from "../ui/SocialIcons";
import { personal } from "../../data/personal";
import { Button } from "../ui/Button";

export function GitHubSection() {
  return (
    <section id="opensource" className="py-16" aria-labelledby="opensource-heading">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass mx-auto max-w-2xl rounded-2xl p-8 text-center"
        >
          <GitHubIcon className="mx-auto mb-4 h-10 w-10 text-accent-light" />
          <h2 id="opensource-heading" className="text-2xl font-bold text-text-primary">
            Built in Public
          </h2>
          <p className="mt-3 text-text-secondary">
            I enjoy learning by building practical systems and sharing my work through GitHub.
          </p>
          <div className="mt-6">
            <Button href={personal.links.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="h-4 w-4" /> View GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
