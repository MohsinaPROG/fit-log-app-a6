import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#292e2b] bg-[#080a09]">
      <div className="container-fit flex min-h-[100px] flex-col justify-center gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-black text-white"
        >
          <Dumbbell
            size={20}
            className="text-[#ccff00]"
          />

          <span className="text-white">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2026 FitLog — Workout Library. Train hard,
          log honest.
        </p>
      </div>
    </footer>
  );
}