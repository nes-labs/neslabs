type HeaderProps = {
  page: string;
  setPage: (page: string) => void;
};

export function Header({ page, setPage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={() => setPage("home")} className="flex items-center gap-2 text-gray-700 dark:text-gray-400 ">
          <span className="text-2xl font-bold ">
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
        </div>
      </nav>
    </header>
  );
}
