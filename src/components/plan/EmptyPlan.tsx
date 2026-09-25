"use client";

import Link from "next/link";

interface EmptyPlanProps {
  mode?: "today" | "saved";
}

export default function EmptyPlan({
  mode = "today",
}: EmptyPlanProps) {
  return (
    <div className="flex min-h-[330px] flex-col items-center justify-center rounded-xl border border-[#292e2b] bg-[#101311] px-6 text-center">

      {/* Heading */}
      <h2 className="text-xl font-black uppercase text-white sm:text-2xl">
        Nothing Here Yet
      </h2>

      {/* Description */}
      <p className="mt-2 max-w-md text-xs leading-5 text-gray-500 sm:text-sm">
        {mode === "today"
          ? "Browse the library and add a lift to get your day moving."
          : "Save a workout from the library and it will appear here."}
      </p>

      {/* Button */}
      <Link
        href="/#library"
        className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-[10px] font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
      >
        Go to Workouts
      </Link>

    </div>
  );
}







