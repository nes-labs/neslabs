import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import README from "../../README.md?raw";

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
    return (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  },
};

export function WhyPage() {
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
