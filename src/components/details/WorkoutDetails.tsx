"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Check,
  Clock3,
  Flame,
  Heart,
  Star,
} from "lucide-react";

import { Workout } from "@/types/fitlog";
import { useFitLog } from "@/components/providers/FitLogProvider";

interface WorkoutDetailsProps {
  workout: Workout;
}

export default function WorkoutDetails({
  workout,
}: WorkoutDetailsProps) {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useFitLog();

  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);

  return (
    <main className="container-fit py-8 sm:py-12">
      {/* Back */}
      <Link
        href="/#library"
        className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white"
      >
        <ArrowLeft size={15} />
        Back to library
      </Link>

      <div className="grid overflow-hidden rounded-2xl border border-[#292e2b] bg-[#101311] lg:grid-cols-[0.9fr_1.1fr]">
        {/* Image */}
        <div className="relative min-h-[400px] lg:min-h-[680px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 lg:p-12">
          <p className="section-label">
            Workout Details
          </p>

          <h1 className="display-font mt-3 text-3xl font-black uppercase leading-none sm:text-4xl">
            {workout.name}
          </h1>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            {workout.description}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-8">
            <h2 className="text-xs font-black uppercase tracking-[0.15em] text-white">
              Key Specs
            </h2>

            <div className="mt-3 divide-y divide-[#292e2b] rounded-xl border border-[#292e2b]">
              <Spec
                label="Equipment"
                value={workout.equipment}
              />

              <Spec
                label="Difficulty"
                value={workout.difficulty}
              />

              <Spec
                label="Sets"
                value={String(workout.sets)}
              />

              <Spec
                label="Reps"
                value={workout.reps}
              />

              <Spec
                label="Duration"
                value={`${workout.duration} min`}
              />

              <Spec
                label="Calories"
                value={`${workout.caloriesBurned} kcal`}
              />

              <Spec
                label="Rating"
                value={String(workout.rating)}
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-xs font-black uppercase tracking-[0.15em]">
              Instructions
            </h2>

            <ol className="mt-4 space-y-4">
              {workout.instructions.map(
                (instruction, index) => (
                  <li
                    key={`${instruction}-${index}`}
                    className="flex gap-3 text-sm leading-6 text-gray-400"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-black text-black">
                      {index + 1}
                    </span>

                    <span>{instruction}</span>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-5 border-y border-[#292e2b] py-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <Clock3 size={15} />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1.5">
              <Flame size={15} />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1.5">
              <Star
                size={15}
                className="fill-[#ccff00] text-[#ccff00]"
              />
              {workout.rating}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => addToPlan(workout.id)}
              disabled={inPlan}
              className={`flex items-center justify-center gap-2 rounded-md px-4 py-3 text-xs font-black uppercase transition ${
                inPlan
                  ? "cursor-not-allowed bg-[#252a27] text-gray-500"
                  : "lime-button"
              }`}
            >
              {inPlan ? (
                <>
                  <Check size={16} />
                  In Today's Plan
                </>
              ) : (
                "Add to today's plan"
              )}
            </button>

            <button
              onClick={() => saveWorkout(workout.id)}
              disabled={saved}
              className={`flex items-center justify-center gap-2 rounded-md border px-4 py-3 text-xs font-black uppercase ${
                saved
                  ? "cursor-not-allowed border-[#292e2b] text-gray-500"
                  : "border-[#ccff00] text-[#ccff00] hover:bg-[#ccff00] hover:text-black"
              }`}
            >
              <Heart
                size={16}
                className={saved ? "fill-current" : ""}
              />

              {saved ? "Saved" : "Save for later"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function Spec({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 text-xs">
      <span className="uppercase tracking-wide text-gray-500">
        {label}
      </span>

      <span className="text-right font-bold text-white">
        {value}
      </span>
    </div>
  );
}