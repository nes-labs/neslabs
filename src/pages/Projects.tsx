export function ProjectsPage() {
  const projects = [
    { 
      name: "Soroban-ZK-Std", 
      domain: "https://soroban-zk-std.neslabs.io/",
      points: ["Protocol 25 ZK-Primitives", "High-performance cryptography", "Soroban integration"] 
    },
    { name: "iwallet", points: ["Asset management", "Secure transactions", "Seamless on-chain interactions"] },
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
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  {p.domain && (
                    <a 
                      href={p.domain} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1 inline-block"
                    >
                      {p.domain.replace(/^https?:\/\//, '')}
                    </a>
                  )}
                </div>
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
