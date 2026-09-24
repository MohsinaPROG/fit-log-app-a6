"use client";

import { useEffect, useMemo, useState } from "react";

import { Search } from "lucide-react";

import {
  SortOption,
  Workout,
} from "@/types/fitlog";

type PlanTab = "today" | "saved";

const API_URL = "/api/workouts";

import { useFitLog } from "@/components/providers/FitLogProvider";
import SortDropdown from "@/components/home/SortDropdown";
//import SortDropdown from "@/components/plan/SortDropdown";

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-[#292e2b] bg-[#101311] p-4">
      <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
      <p className="mt-2 text-2xl font-black text-white">{value}</p>
    </div>
  );
}

function EmptyPlan() {
  return (
    <div className="rounded-xl border border-[#292e2b] bg-[#101311] py-20 text-center">
      <p className="text-sm text-gray-500">
        No workouts found. Add a workout to your plan to get started.
      </p>
    </div>
  );
}

function PlanCard({
  workout,
  mode,
}: {
  workout: Workout;
  mode: PlanTab;
}) {
  return (
    <article className="rounded-xl border border-[#292e2b] bg-[#101311] p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-bold text-white">{workout.name}</h2>
          <p className="mt-1 text-xs text-gray-500">
            {workout.muscleGroups.join(" • ")}
          </p>
        </div>
        <span className="text-xs text-gray-500">
          {mode === "saved" ? "Saved" : "Today"}
        </span>
      </div>
      <div className="mt-3 flex gap-4 text-xs text-gray-400">
        <span>{workout.duration} min</span>
        <span>{workout.caloriesBurned} cal</span>
        <span>★ {workout.rating}</span>
      </div>
    </article>
  );
}


export default function MyPlanClient() {
  const {
    plan,
    saved,
  } = useFitLog();

  const [workouts, setWorkouts] = useState<
    Workout[]
  >([]);

  const [loading, setLoading] = useState(true);

  const [tab, setTab] =
    useState<PlanTab>("today");

  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();

        setWorkouts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  const planWorkouts = useMemo(() => {
    return plan
      .map((id) =>
        workouts.find(
          (workout) => workout.id === id
        )
      )
      .filter(Boolean) as Workout[];
  }, [plan, workouts]);

  const savedWorkouts = useMemo(() => {
    return saved
      .map((id) =>
        workouts.find(
          (workout) => workout.id === id
        )
      )
      .filter(Boolean) as Workout[];
  }, [saved, workouts]);

  const currentWorkouts = useMemo(() => {
    const list =
      tab === "today"
        ? planWorkouts
        : savedWorkouts;

    const filtered = list.filter((workout) => {
      const searchText = search.toLowerCase();

      return (
        workout.name
          .toLowerCase()
          .includes(searchText) ||
        workout.muscleGroups.some((group) =>
          group.toLowerCase().includes(searchText)
        )
      );
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return (
          a.caloriesBurned - b.caloriesBurned
        );
      }

      return b.rating - a.rating;
    });
  }, [
    tab,
    planWorkouts,
    savedWorkouts,
    search,
    sortBy,
  ]);

  const totalMinutes = planWorkouts.reduce(
    (total, workout) =>
      total + workout.duration,
    0
  );

  const totalCalories = planWorkouts.reduce(
    (total, workout) =>
      total + workout.caloriesBurned,
    0
  );

  return (
    <main className="container-fit py-10 sm:py-14">
      {/* Heading */}
      <div>
        <p className="section-label">
          Your Training
        </p>

        <h1 className="display-font mt-2 text-4xl font-black uppercase sm:text-5xl">
          My Plan
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Cap of five lifts for today. Finish them, then
          load more.
        </p>
      </div>

      {/* Metrics */}
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatCard
          label="Exercises"
          value={planWorkouts.length}
        />

        <StatCard
          label="Minutes"
          value={totalMinutes}
        />

        <StatCard
          label="Calories"
          value={totalCalories}
        />
      </div>

      {/* Controls */}
      <div className="mt-8 flex flex-col gap-4 border-b border-[#292e2b] pb-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Tabs */}
        <div className="flex w-fit rounded-lg border border-[#292e2b] bg-[#101311] p-1">
          <button
            onClick={() => setTab("today")}
            className={`rounded-md px-4 py-2 text-xs font-bold ${
              tab === "today"
                ? "bg-[#ccff00] text-black"
                : "text-gray-500"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setTab("saved")}
            className={`rounded-md px-4 py-2 text-xs font-bold ${
              tab === "saved"
                ? "bg-[#ccff00] text-black"
                : "text-gray-500"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search workouts..."
              className="h-9 w-full rounded-md border border-[#292e2b] bg-[#101311] pl-9 pr-3 text-xs text-white outline-none placeholder:text-gray-600 focus:border-[#ccff00] sm:w-56"
            />
          </div>

          <SortDropdown
            value={sortBy}
            onChange={setSortBy}
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        {loading ? (
          <div className="rounded-xl border border-[#292e2b] bg-[#101311] py-20 text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#292e2b] border-t-[#ccff00]" />

            <p className="mt-4 text-sm text-gray-500">
              Loading workouts…
            </p>
          </div>
        ) : currentWorkouts.length === 0 ? (
          <EmptyPlan />
        ) : (
          <div className="space-y-3">
            {currentWorkouts.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                mode={tab}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}