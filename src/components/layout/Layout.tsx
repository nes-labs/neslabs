import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  page: string;
  setPage: (page: string) => void;
  children: React.ReactNode;
};

export function Layout({ page, setPage, children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
      <Header page={page} setPage={setPage} />
      {children}
      <Footer page={page} />
    </div>
  );
}
