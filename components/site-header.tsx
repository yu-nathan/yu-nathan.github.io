"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Life", href: "#life" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border/70 bg-background/85 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="focus-visible:ring-ring font-serif text-xl font-semibold tracking-tight focus-visible:rounded focus-visible:ring-2 focus-visible:outline-none"
        >
          Nathan Yu<span className="text-accent">.</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-border bg-background border-t px-5 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:bg-muted focus-visible:ring-ring rounded-xl px-4 py-3 text-base font-medium focus-visible:ring-2 focus-visible:outline-none"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
