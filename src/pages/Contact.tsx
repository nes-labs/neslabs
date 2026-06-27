import { Button } from "@/components/ui/button";

export function ContactPage() {
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
