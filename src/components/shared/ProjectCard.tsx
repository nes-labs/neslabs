export type ProjectCardProps = { name: string; desc: string };

export function ProjectCard({ name, desc }: ProjectCardProps) {
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
