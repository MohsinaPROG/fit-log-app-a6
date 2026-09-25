"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

interface FitLogContextType {
  // State
  plan: number[];
  saved: number[];
  done: number[];

  // Today's Plan
  addToPlan: (id: number) => void;
  removeFromPlan: (id: number) => void;

  // Saved
  saveWorkout: (id: number) => void;
  removeFromSaved: (id: number) => void;

  // Done
  markAsDone: (id: number) => void;

  // Check status
  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
  isDone: (id: number) => boolean;

  // Counts
  planCount: number;
  savedCount: number;
}

const FitLogContext = createContext<
  FitLogContextType | undefined
>(undefined);

export function FitLogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<number[]>([]);
  const [saved, setSaved] = useState<number[]>([]);
  const [done, setDone] = useState<number[]>([]);

  const [hydrated, setHydrated] = useState(false);

  // Load data from localStorage

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");
      const storedDone = localStorage.getItem("fitlog-done");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
      }

      if (storedDone) {
        setDone(JSON.parse(storedDone));
      }
    } catch (error) {
      console.error(
        "Failed to load FitLog data:",
        error
      );
    } finally {
      setHydrated(true);
    }
  }, []);

  // Save Today's Plan to localStorage

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan, hydrated]);

  // Save Saved Workouts to localStorage

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved, hydrated]);

  // Save Completed Workouts to localStorage

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-done",
      JSON.stringify(done)
    );
  }, [done, hydrated]);

  // Add workout to Today's Plan
  // Maximum 5 workouts

  const addToPlan = (id: number) => {
    // Already exists
    if (plan.includes(id)) {
      toast("Already in today's plan");
      return;
    }

    // Maximum 5 workouts
    if (plan.length >= 5) {
      toast.error(
        "Today's plan can contain only 5 lifts"
      );
      return;
    }

    setPlan((previous) => [
      ...previous,
      id,
    ]);

    toast.success(
      "Added to today's plan"
    );
  };

  // Remove workout from Today's Plan
  

  const removeFromPlan = (id: number) => {
    setPlan((previous) =>
      previous.filter(
        (item) => item !== id
      )
    );

    // If removed from plan,
    // also remove from completed list
    setDone((previous) =>
      previous.filter(
        (item) => item !== id
      )
    );

    toast.success(
      "Removed from today's plan"
    );
  };

  // Save workout


  const saveWorkout = (id: number) => {
    // Already saved
    if (saved.includes(id)) {
      toast("Already saved");
      return;
    }

    setSaved((previous) => [
      ...previous,
      id,
    ]);

    toast.success(
      "Saved for later"
    );
  };

  
  // Remove workout from Saved


  const removeFromSaved = (id: number) => {
    setSaved((previous) =>
      previous.filter(
        (item) => item !== id
      )
    );

    toast.success(
      "Removed from saved"
    );
  };

  
  // Mark workout as Done


  const markAsDone = (id: number) => {
    // Already completed
    if (done.includes(id)) {
      return;
    }

    setDone((previous) => [
      ...previous,
      id,
    ]);

    toast.success(
      "Workout marked as done"
    );
  };

  // Check if workout is in Today's Plan


  const isInPlan = (id: number) => {
    return plan.includes(id);
  };

  // Check if workout is Saved


  const isSaved = (id: number) => {
    return saved.includes(id);
  };

  // Check if workout is Done


  const isDone = (id: number) => {
    return done.includes(id);
  };

  // Provider


  return (
    <FitLogContext.Provider
      value={{
        // State
        plan,
        saved,
        done,

        // Today's Plan
        addToPlan,
        removeFromPlan,

        // Saved
        saveWorkout,
        removeFromSaved,

        // Done
        markAsDone,

        // Status
        isInPlan,
        isSaved,
        isDone,

        // Counts
        planCount: plan.length,
        savedCount: saved.length,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

// Custom Hook

export function useFitLog() {
  const context = useContext(
    FitLogContext
  );

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}











