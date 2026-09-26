"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";

import { SortOption, Workout } from "@/types/fitlog";
import { useFitLog } from "@/components/providers/FitLogProvider";

import SortDropdown from "@/components/home/SortDropdown";
import PlanCard from "./PlanCard";
import StatCard from "./StatCard";
import EmptyPlan from "./EmptyPlan";

type PlanTab = "today" | "saved";

// const API_URL = "https://api.abcz.workers.dev/api/fitlog";
const API_URL = "https://api.api-store.workers.dev/api/fitlog";

export default function MyPlanClient() {
  const { plan, saved } = useFitLog();

  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  // Current tab
  const [tab, setTab] = useState<PlanTab>("today");

  // Sorting
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  // Search
  const [search, setSearch] = useState("");


  // Fetch all workouts


  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        setLoading(true);

        const response = await fetch(API_URL, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data: Workout[] = await response.json();

        setWorkouts(data);
      } catch (error) {
        console.error("Workout loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  // Today's Plan workouts

  const planWorkouts = useMemo(() => {
    return plan
      .map((id) => {
        return workouts.find((workout) => workout.id === id);
      })
      .filter(
        (workout): workout is Workout =>
          workout !== undefined
      );
  }, [plan, workouts]);


  // Saved workouts

  const savedWorkouts = useMemo(() => {
    return saved
      .map((id) => {
        return workouts.find((workout) => workout.id === id);
      })
      .filter(
        (workout): workout is Workout =>
          workout !== undefined
      );
  }, [saved, workouts]);

  // Current tab workouts

  const currentWorkouts = useMemo(() => {
    // Today's Plan or Saved
    const list =
      tab === "today"
        ? planWorkouts
        : savedWorkouts;

    // Search text
    const searchText = search
      .trim()
      .toLowerCase();

    // Filter
    const filteredWorkouts = list.filter(
      (workout) => {
        // No search
        if (!searchText) {
          return true;
        }

        // Search by workout name
        const nameMatch = workout.name
          .toLowerCase()
          .includes(searchText);

        // Search by muscle group
        const muscleMatch =
          workout.muscleGroups.some(
            (group) =>
              group
                .toLowerCase()
                .includes(searchText)
          );

        return nameMatch || muscleMatch;
      }
    );

    // Sort
    return [...filteredWorkouts].sort(
      (a, b) => {
        // Duration
        if (sortBy === "duration") {
          return a.duration - b.duration;
        }

        // Calories
        if (sortBy === "calories") {
          return (
            a.caloriesBurned -
            b.caloriesBurned
          );
        }

        // Rating
        return a.rating - b.rating;
      }
    );
  }, [
    tab,
    planWorkouts,
    savedWorkouts,
    search,
    sortBy,
  ]);

  // Statistics


  // Exercises
  // Changes according to current tab
  const totalExercises =
    currentWorkouts.length;

  // Total minutes
  // Changes according to current tab
  const totalMinutes = useMemo(() => {
    return currentWorkouts.reduce(
      (total, workout) =>
        total + workout.duration,
      0
    );
  }, [currentWorkouts]);

  // Total calories
  // Changes according to current tab
  const totalCalories = useMemo(() => {
    return currentWorkouts.reduce(
      (total, workout) =>
        total + workout.caloriesBurned,
      0
    );
  }, [currentWorkouts]);

  // Tab handlers

  const handleTodayTab = () => {
    setTab("today");
    setSearch("");
  };

  const handleSavedTab = () => {
    setTab("saved");
    setSearch("");
  };

  // UI

  return (
    <main className="min-h-screen bg-[#070908] text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Page Heading */}

        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-xs text-gray-500 sm:text-sm">
            Cap of five lifts for today. Finish them,
            then load more.
          </p>
        </div>

        {/* Statistics */}


        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <StatCard
            label="Exercises"
            value={totalExercises}
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

        {/*  Tabs + Search + Sort */}

        <div className="mt-8 flex flex-col gap-4 border-b border-[#292e2b] pb-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Tabs */}

          <div className="flex w-fit rounded-lg border border-[#292e2b] bg-[#101311] p-1">

            {/* Today's Plan */}

            <button
              type="button"
              onClick={handleTodayTab}
              className={`rounded-md px-4 py-2 text-xs font-bold uppercase transition ${tab === "today"
                ? "bg-[#ccff00] text-black"
                : "text-gray-500 hover:text-white"
                }`}
            >
              Today's Plan
            </button>

            {/* Saved */}

            <button
              type="button"
              onClick={handleSavedTab}
              className={`rounded-md px-4 py-2 text-xs font-bold uppercase transition ${tab === "saved"
                ? "bg-[#ccff00] text-black"
                : "text-gray-500 hover:text-white"
                }`}
            >
              Saved
            </button>
          </div>

          {/* Search + Sort */}

          <div className="flex flex-col gap-3 sm:flex-row">

            {/* Search */}

            <div className="relative">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search workouts..."
                className="h-9 w-full rounded-md border border-[#292e2b] bg-[#101311] pl-9 pr-3 text-xs text-white outline-none placeholder:text-gray-600 focus:border-[#ccff00] sm:w-56"
              />
            </div>

            {/* Sort */}

            <SortDropdown
              value={sortBy}
              onChange={setSortBy}
            />
          </div>
        </div>

        {/*Workout List */}

        <div className="mt-6">

          {/* Loading */}

          {loading ? (
            <div className="rounded-xl border border-[#292e2b] bg-[#101311] py-20 text-center">

              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#292e2b] border-t-[#ccff00]" />

              <p className="mt-4 text-sm text-gray-500">
                Loading workouts...
              </p>
            </div>
          ) : currentWorkouts.length === 0 ? (

            /* Empty */

            <EmptyPlan mode={tab} />

          ) : (

            /* Workout Cards */

            <div className="space-y-3">
              {currentWorkouts.map(
                (workout) => (
                  <PlanCard
                    key={workout.id}
                    workout={workout}
                    mode={tab}
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
















