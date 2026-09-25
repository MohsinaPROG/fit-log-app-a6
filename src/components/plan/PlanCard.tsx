
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Check,
  Clock3,
  Flame,
  Star,
  X,
} from "lucide-react";

import { Workout } from "@/types/fitlog";
import { useFitLog } from "@/components/providers/FitLogProvider";

interface PlanCardProps {
  workout: Workout;
  mode: "today" | "saved";
}

export default function PlanCard({
  workout,
  mode,
}: PlanCardProps) {
  const {
    done,
    markAsDone,
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  // Check completed status
  const isDone = done.includes(
    workout.id
  );

  // Remove

  const handleRemove = () => {
    if (mode === "today") {
      removeFromPlan(
        workout.id
      );
    } else {
      removeFromSaved(
        workout.id
      );
    }
  };

  // Mark as Done

  const handleDone = () => {
    if (isDone) {
      return;
    }

    markAsDone(
      workout.id
    );
  };

  return (
    <article
      className={`group flex flex-col gap-4 rounded-xl border bg-[#101311] p-3 transition hover:border-[#3b403d] sm:flex-row sm:items-center ${isDone
          ? "border-[#ccff00]/30"
          : "border-[#292e2b]"
        }`}
    >

      {/* Image */}


      <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-28">

        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="112px"
        />

      </div>

      {/* Workout Information */}


      <div className="min-w-0 flex-1">

        {/* Muscle group */}
        <div className="flex flex-wrap gap-1">

          {workout.muscleGroups
            .slice(0, 2)
            .map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-2 py-0.5 text-[8px] font-black uppercase text-black"
              >
                {group}
              </span>
            ))}

        </div>

        {/* Workout Name */}
        <h3
          className={`mt-1 text-sm font-black uppercase ${isDone
              ? "text-gray-500 line-through"
              : "text-white"
            }`}
        >
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-0.5 text-[10px] text-gray-500">
          {workout.equipment}
        </p>

        {/* Workout Stats */}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-gray-500">

          <span className="flex items-center gap-1">
            <Clock3 size={11} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame
              size={11}
              className="text-[#ccff00]"
            />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star
              size={11}
              className="fill-[#ccff00] text-[#ccff00]"
            />
            {workout.rating}
          </span>

        </div>
      </div>

      {/*Actions */}


      <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">

        {/* View Details */}
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-[#292e2b] px-4 py-2 text-[9px] font-bold uppercase tracking-wide text-gray-300 transition hover:border-white hover:text-white"
        >
          View Details
        </Link>

            {/* Mark as Done
            ONLY Today's Plan */}

        {mode === "today" && (
          <button
            type="button"
            onClick={handleDone}
            disabled={isDone}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[9px] font-black uppercase tracking-wide transition ${isDone
                ? "cursor-default bg-[#252a27] text-gray-500"
                : "bg-[#ccff00] text-black hover:bg-[#b8e600]"
              }`}
          >
            <Check size={12} />

            {isDone
              ? "Done"
              : "Mark as Done"}
          </button>
        )}

            {/* Remove
            Today's Plan → removeFromPlan
            Saved → removeFromSaved */}
      

        <button
          type="button"
          onClick={handleRemove}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#292e2b] text-gray-500 transition hover:border-red-500 hover:bg-red-950/30 hover:text-red-400"
          aria-label={
            mode === "today"
              ? "Remove from today's plan"
              : "Remove from saved"
          }
        >
          <X size={14} />
        </button>

      </div>

    </article>
  );
}













