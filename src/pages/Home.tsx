import { motion } from "framer-motion";
import { ProjectCard } from "../components/shared/ProjectCard";

type HomeSectionProps = {
  onGoProjects: () => void;
  onGoContact: () => void;
};

export function HomeSection({ onGoProjects, onGoContact }: HomeSectionProps) {
  return (
    <>
      {/* HERO */}
      <section className="relative flex flex-1 items-center justify-center px-6 py-24 text-center bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-black">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-black to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
            Building the impossible, quietly.
          </h1>
          <p className="mt-5 text-lg text-black/70 dark:text-white/70">
            Quietly crafting the projects others only dream about.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://x.com/nes_labs"
              className="px-6 py-3 text-sm bg-black text-white rounded-md hover:bg-gradient-to-r hover:from-black hover:to-neutral-700 dark:bg-white dark:text-black dark:hover:bg-gradient-to-r dark:hover:from-white dark:hover:to-neutral-400"
            >
              Build with us
            </a>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-20 px-6 border-t border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">
            A focused set of tools that form a dependable on-chain stack.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              name="Soroban-ZK-Std"
              desc="High-performance cryptographic standard library for Protocol 25 ZK-Primitives designed for Soroban."
            />
            <ProjectCard
              name="iwallet"
              desc="A secure, modern wallet solution for seamless asset management and on-chain interactions."
            />
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="py-20 px-6 border-t border-black/10 dark:border-white/10 bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-neutral-800 dark:to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold">Work with Neslabs</h3>
          <p className="mt-3 text-black/70 dark:text-white/70">
            Pilots, integrations, or collaborations—let’s ship something real.
          </p>
          <div className="mt-6" />
        </div>
      </section>
    </>
  );
}
