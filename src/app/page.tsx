import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Palette, Building2, Video, ExternalLink } from "lucide-react";

export default function AssignmentPortalPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
      {/* Subtle Top Navigation */}
      <header className="border-b border-neutral-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-sm tracking-tight text-neutral-900">
              Grow My Therapy
            </span>
            <span className="text-neutral-300">/</span>
            <span className="text-xs text-neutral-500 font-medium">
              Internship Practical Assignment
            </span>
          </div>

          <div className="text-xs text-neutral-500 font-medium">
            Candidate: <strong className="text-neutral-900 font-semibold">Devang Gupta</strong>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <main className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold tracking-wide uppercase">
            Stage 2: Skill Evaluation Portal
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 font-serif leading-[1.15]">
            Frontend Internship Selection Deliverables
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Welcome to the evaluation portal for the Grow My Therapy technical assignment. 
            Choose any of the parts below to inspect the corresponding stage of implementation.
          </p>
        </div>

        {/* Evaluation Weights Summary */}
        <div className="mt-10 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70 grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
          <div className="space-y-1">
            <span className="text-xs text-neutral-500 font-medium block">UI Cloning</span>
            <span className="text-xl font-bold text-neutral-900">25%</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-neutral-500 font-medium block">Theme & Design</span>
            <span className="text-xl font-bold text-neutral-900">25%</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-neutral-500 font-medium block">Copy & Images</span>
            <span className="text-xl font-bold text-neutral-900">10%</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-neutral-500 font-medium block">New Section</span>
            <span className="text-xl font-bold text-neutral-900">10%</span>
          </div>
          <div className="col-span-2 sm:col-span-1 space-y-1">
            <span className="text-xs text-neutral-500 font-medium block">Video Demo</span>
            <span className="text-xl font-bold text-neutral-900">30%</span>
          </div>
        </div>

        {/* Three Clickable Option Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Option 1: Part 1 Clone */}
          <div className="group relative flex flex-col bg-white rounded-2xl p-8 border-2 border-neutral-200 hover:border-neutral-950 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-800">
                25% Weight
              </span>
            </div>

            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">
              Part 01
            </span>
            <h2 className="text-2xl font-bold text-neutral-950 font-serif tracking-tight mb-3">
              Clone the Homepage
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed mb-6 grow">
              High-accuracy UI replication of <strong>Conejo Valley Family Counseling</strong>. Recreates exact section order, 24-column grid hierarchy, Cormorant Infant &amp; PrintedMoments script typography, and original imagery.
            </p>

            <ul className="space-y-2 text-xs text-neutral-600 mb-8 pt-4 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Exact section sequence &amp; grid system</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Original typography &amp; script fonts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% responsive (desktop, tablet, mobile)</span>
              </li>
            </ul>

            <Link
              href="/part-1"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-semibold tracking-wide transition-all shadow-sm"
            >
              <span>View Part 1 Clone</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Option 2: Part 2 Redesign */}
          <div className="group relative flex flex-col bg-white rounded-2xl p-8 border-2 border-neutral-200 hover:border-neutral-950 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                <Palette className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-800">
                35% Weight
              </span>
            </div>

            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">
              Part 02
            </span>
            <h2 className="text-2xl font-bold text-neutral-950 font-serif tracking-tight mb-3">
              Creative Redesign
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed mb-6 grow">
              Complete redesign tailored for <strong>Dr. Maya Reynolds, PsyD</strong> in Santa Monica. Implements a bespoke coastal California palette, local SEO-driven copy, 3 clinical services, and Maya's verified portrait.
            </p>

            <ul className="space-y-2 text-xs text-neutral-600 mb-8 pt-4 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Coastal Slate Pine &amp; Warm Sand theme</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>3 clinical services from profile doc</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dr. Maya's authentic Drive portrait</span>
              </li>
            </ul>

            <Link
              href="/part-2"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-semibold tracking-wide transition-all shadow-sm"
            >
              <span>View Part 2 Redesign</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Option 3: Part 3 Custom Section */}
          <div className="group relative flex flex-col bg-white rounded-2xl p-8 border-2 border-neutral-200 hover:border-neutral-950 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-800">
                10% Weight
              </span>
            </div>

            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">
              Part 03
            </span>
            <h2 className="text-2xl font-bold text-neutral-950 font-serif tracking-tight mb-3">
              Our Office Section
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed mb-6 grow">
              Brand-new section not found in the original template. Spotlights Dr. Maya's physical Santa Monica practice space using the <strong>two verified office photos</strong> from her Google Drive folder.
            </p>

            <ul className="space-y-2 text-xs text-neutral-600 mb-8 pt-4 border-t border-neutral-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Two authentic office photos (Drive)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>123th Street 45 W, Santa Monica details</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>In-person &amp; hybrid California care</span>
              </li>
            </ul>

            <Link
              href="/part-3"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-semibold tracking-wide transition-all shadow-sm"
            >
              <span>View Part 3 Section</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Part 4 Note */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-700">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-950">
                Part 4: Video Walkthrough (30% Evaluation Weight)
              </h4>
              <p className="text-xs text-neutral-600">
                5-minute client demo video recorded on Loom covering desktop and mobile views in non-technical language.
              </p>
            </div>
          </div>
          <a
            href="https://www.conejovalleycounseling.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-neutral-700 hover:text-neutral-950 inline-flex items-center gap-1.5 shrink-0 underline"
          >
            <span>Original Template Link</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </main>
    </div>
  );
}
