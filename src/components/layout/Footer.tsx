import { Mail, Twitter } from "lucide-react";

type FooterProps = {
  page: string;
};

export function Footer({ page }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-black/10 dark:border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-black/70 dark:text-white/70 gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <span>
            © {new Date().getFullYear()} Neslabs. All rights reserved.
          </span>
          <a
            href="mailto:build@neslabs.io"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://x.com/nes_labs"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 hover:underline ${
              page === "contact" ? "underline" : ""
            }`}
          >
            <Twitter size={16} />
          </a>
        </div>

        {/* Right Section */}
        <div className="flex gap-6">
          <a
            href="https://explorer.sui.io/address/@neslabs?network=mainnet"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 border border-black/20 dark:border-white/20 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            Buy us a coffee (SUI)
          </a>
        </div>
      </div>
    </footer>
  );
}
