"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/components/providers/FitLogProvider";

export default function Navbar() {
  const pathname = usePathname();

  const { planCount, savedCount } = useFitLog();

  const workoutActive =
    pathname === "/" || pathname.startsWith("/workouts");

  const planActive = pathname === "/my-plan";

  return (
    <header className="border-b border-[#292e2b] bg-[#080a09]/95 backdrop-blur">
      <div className="container-fit flex min-h-[72px] items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          className="mr-8 flex shrink-0 items-center gap-2 px-2"
        >
          {/* Logo/Icon - angled */}
          <div className="rotate-[-135deg]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="25"
              height="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#ccff00]"
            >
              <path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11M3 12h3.5M17.5 12H21" />
            </svg>
          </div>

          {/* FITLOG text - straight */}
          <span className="font-black tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 rounded-full border border-[#292e2b] bg-[#101311] p-1">
          <Link
            href="/#library"
            className={`rounded-full px-4 py-2 text-xs font-bold transition ${
              workoutActive
                ? "bg-[#ccff00] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-xs font-bold transition ${
              planActive
                ? "bg-[#ccff00] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-4">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="hidden items-center gap-1.5 rounded-full bg-[#ccff00] px-3 py-1.5 text-[10px] font-black uppercase text-black sm:flex"
          >
            Plan
            <span>{planCount}</span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-full border border-[#ccff00] px-3 py-1.5 text-[10px] font-black uppercase text-[#ccff00]"
          >
            Saved
            <span>{savedCount}</span>
          </Link>

          {/* Extra space after Saved */}
          <div className="w-2" />
        </div>
      </div>
    </header>
  );
}