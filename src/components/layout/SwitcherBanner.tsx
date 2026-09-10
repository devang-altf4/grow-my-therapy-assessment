"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Layers, ArrowRight } from "lucide-react";

export function SwitcherBanner() {
  const pathname = usePathname();
  const isOriginal = pathname === "/original-clone";

  return (
    <aside
      aria-label="Internship Evaluation Mode Switcher"
      className="bg-foreground text-surface text-xs font-medium py-2 px-4 sticky top-0 z-50 shadow-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent text-white uppercase tracking-wider">
            Assignment Preview
          </span>
          <span className="text-surface/90 hidden sm:inline">
            Grow My Therapy Evaluation Mode:
          </span>
          <strong className="text-white font-semibold">
            {isOriginal
              ? "Part 1 — 1:1 Conejo Valley Clone"
              : "Part 2 & 3 — Dr. Maya Reynolds Rebrand + Custom 'Our Office' Section"}
          </strong>
        </div>

        <div className="flex items-center gap-2">
          {isOriginal ? (
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>View Dr. Maya Reynolds Rebrand</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          ) : (
            <Link
              href="/original-clone"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Inspect 1:1 Original Clone</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
