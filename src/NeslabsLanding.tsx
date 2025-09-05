import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Twitter } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import README from "../README.md?raw";

/** Typed markdown renderers (responsive, no overflow)
 *  Note: we only rely on the public `Components` type and cast props to `any`
 *  to access `inline`, `className`, etc. This avoids version-specific type paths.
 */
const mdComponents: Partial<Components> = {
  pre(props: any) {
    return (
      <pre
        {...props}
        className={[
          "whitespace-pre-wrap",            // wrap on small screens
          "break-words",                    // break long tokens
          "overflow-x-auto",                // allow horizontal scroll if truly needed
          "text-xs sm:text-sm md:text-base",// responsive font size
          "leading-6",
          "bg-neutral-50 dark:bg-neutral-900",
          "p-4 sm:p-6",
          "rounded-lg",
          "border border-black/10 dark:border-white/10",
          props.className || "",
        ].join(" ")}
      />
    );
  },
  code(props: any) {
    const { inline, className, children, ...rest } = props;
    if (inline) {
      return (
        <code
          {...rest}
          className={["whitespace-pre-wrap break-words", className || ""].join(" ")}
        >
          {children}
        </code>
      );
    }
    // block code is visually handled by <pre>; keep this simple
    return (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  },
};

/**
 * NESLABS — Minimalist + Gradient Landing with Detailed Pages
 * - Primary brand color: Israel Blue (#0038B8)
 * - Dedicated sections for Projects, Why Neslabs, and Contact
 */
export default function NeslabsLanding() {
  const [page, setPage] = React.useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-black/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => setPage("home")} className="flex items-center gap-2">
            <span className="text-2xl font-bold" style={{ color: "#fff" }}>
              נֵס
            </span>
            <span className="hidden sm:inline text-lg tracking-tight font-medium">Neslabs</span>
          </button>
          <div className="flex items-center gap-6 text-sm font-medium">
            <button
              onClick={() => setPage("projects")}
              className={`hover:underline ${page === "projects" ? "underline" : ""}`}
            >
              Projects
            </button>
            <button
              onClick={() => setPage("why")}
              className={`hover:underline ${page === "why" ? "underline" : ""}`}
            >
              Why Neslabs
            </button>
            <a
              href="https://x.com/nes_labs"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:underline ${page === "contact" ? "underline" : ""} flex items-center gap-1`}
            >
              <Twitter size={16} />
            </a>
          </div>
        </nav>
      </header>

      {page === "home" && (
        <HomeSection onGoProjects={() => setPage("projects")} onGoContact={() => setPage("contact")} />
      )}
      {page === "projects" && <ProjectsPage />}
      {page === "why" && <WhyPage />}
      {page === "contact" && <ContactPage />}

      {/* FOOTER */}
      <footer className="mt-auto border-t border-black/10 dark:border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-black/70 dark:text-white/70">
          <div>© {new Date().getFullYear()} Neslabs. All rights reserved.</div>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a
              href="https://explorer.sui.io/address/0xa35de887586ac1a9e644bc8f1b24a0d54c6eea66b8feef8bfd94297adde8d479?network=mainnet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-black dark:border-white rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              Buy us a coffee (SUI)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

type HomeSectionProps = {
  onGoProjects: () => void;
  onGoContact: () => void;
};

function HomeSection({}: HomeSectionProps) {
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
              name="Mothrbox"
              desc="Encrypted storage & infrastructure primitives. Dev-friendly tooling for secure blob storage and retrieval."
            />
            <ProjectCard
              name="Suiref"
              desc="On-chain referral system with attendance verification, NFT rewards, and leaderboards to grow real communities."
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

function ProjectsPage() {
  const projects = [
    { name: "Mothrbox", points: ["Encrypted blob storage", "Auditable privacy", "SDKs for fast integration"] },
    { name: "Suiref", points: ["Referral links on-chain", "Attendance proofs", "NFT rewards & leaderboards"] },
  ];

  return (
    <main className="flex-1">
      <section className="px-6 py-16 text-center bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-black">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 text-black/70 dark:text-white/70">
          An integrated on-chain stack for builders and enterprises.
        </p>
      </section>
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.name} className="rounded-xl border border-black/10 p-6 dark:border-white/10">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="text-xs uppercase tracking-widest text-black/50 dark:text-white/50">On-chain</span>
              </div>
              <ul className="mt-4 list-disc pl-5 text-sm text-black/70 dark:text-white/70 space-y-1">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function WhyPage() {
  const pillars = [
    { title: "Infrastructure-first", body: "We build the boring, essential pieces—so teams can move faster with confidence." },
    { title: "Developer-centric", body: "APIs, SDKs, and docs designed for clarity. No ceremony, just tools that work." },
    { title: "Production-ready", body: "Security, performance, and operability considered from day one." },
    { title: "Composable", body: "Each project stands alone, but the stack works even better together." },
    { title: "Open collaboration", body: "Monochrome branding, transparent roadmaps, and community input." },
    { title: "Sui-native", body: "Optimized for the Sui ecosystem, with interoperability in mind." },
  ];
  return (
    <main className="flex-1">
      <section className="px-6 py-16 text-center bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-black">
        <h1 className="text-4xl font-bold tracking-tight">Why Neslabs</h1>
        <p className="mt-3 text-black/70 dark:text-white/70">Principles that keep us effective and reliable.</p>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-white/70">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* README render (responsive, centered, no overflow) */}
      <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 border-t border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 sm:mb-8">
            From our README
          </h2>
          <div className="mx-auto max-w-full sm:max-w-3xl md:max-w-4xl text-left">
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert max-w-none">
              <ReactMarkdown components={mdComponents}>{README}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="flex-1">
      <section className="px-6 py-16 text-center bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-black">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 text-black/70 dark:text-white/70">Tell us about your use-case. We reply within 48 hours.</p>
      </section>
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <div>
              <label className="text-sm">Name</label>
              <input
                className="mt-1 w-full rounded-md border border-black/20 bg-transparent p-3 dark:border-white/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-black/20 bg-transparent p-3 dark:border-white/20"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-sm">What do you want to build?</label>
              <textarea
                rows={5}
                className="mt-1 w-full rounded-md border border-black/20 bg-transparent p-3 dark:border-white/20"
                placeholder="Briefly describe your project"
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-black/60 dark:text-white/60">
                Or email us: <a className="underline" href="mailto:hello@neslabs.io">hello@neslabs.io</a>
              </p>
              <Button className="px-6 py-2 text-sm bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                Send
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

type ProjectCardProps = { name: string; desc: string };
function ProjectCard({ name, desc }: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-black/10 p-6 hover:border-transparent hover:bg-gradient-to-r hover:from-neutral-200 hover:to-neutral-300 dark:border-white/10 dark:hover:from-neutral-700 dark:hover:to-neutral-800">
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-medium">{name}</h3>
        <span className="text-xs uppercase tracking-widest text-black/50 dark:text-white/50">On-chain</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-black/70 dark:text-white/70">{desc}</p>
    </div>
  );
}
