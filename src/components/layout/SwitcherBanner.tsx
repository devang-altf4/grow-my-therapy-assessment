"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Layers, ArrowLeft, ArrowRight } from "lucide-react";

export function SwitcherBanner() {
  const pathname = usePathname();
  const isPart1 = pathname === "/part-1" || pathname === "/original-clone";
  const isPart2 = pathname === "/part-2";

  return (
    <aside
      aria-label="Internship Evaluation Mode Switcher"
      className="bg-[#1A2022] text-[#FAF8F5] text-xs font-medium py-2 px-4 sticky top-0 z-50 shadow-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#C28B59] text-white uppercase tracking-wider">
            Assignment Mode
          </span>
          <span className="text-[#FAF8F5]/90 hidden sm:inline">
            Candidate: Devang Gupta •
          </span>
          <strong className="text-white font-semibold">
            {isPart1
              ? "Part 1 — Conejo Valley Family Counseling 1:1 Clone"
              : isPart2
              ? "Part 2 — Dr. Maya Reynolds, PsyD Creative Redesign"
              : "Grow My Therapy Assessment Portal"}
          </strong>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Portal</span>
          </Link>

          {isPart2 ? (
            <Link
              href="/part-1"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors font-medium"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Inspect Part 1 Clone</span>
            </Link>
          ) : (
            <Link
              href="/part-2"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C28B59] hover:bg-[#B07A4A] text-white transition-colors font-semibold shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>View Part 2 Redesign</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
