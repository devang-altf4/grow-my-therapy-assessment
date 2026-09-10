import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function Part2PlaceholderPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans p-8 flex flex-col items-center justify-center text-center">
      <div className="max-w-md space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold uppercase">
          Part 02 In Queue
        </div>
        <h1 className="text-3xl font-bold font-serif">
          Part 2: Creative Redesign (Dr. Maya Reynolds)
        </h1>
        <p className="text-sm text-neutral-600 leading-relaxed">
          We are currently perfecting Part 1 (UI Cloning Accuracy) first. Part 2 will be refined immediately after Part 1 is approved.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Assignment Portal</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
