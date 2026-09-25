import Hero from "@/components/home/Hero";
import WorkoutLibrary from "@/components/home/WorkoutLibrary";
import { getWorkouts } from "@/lib/api";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <main>
      {/* Hero Section */}
      <Hero image={workouts[0]?.image} />

      {/* Workout Library */}
      <WorkoutLibrary workouts={workouts} />
    </main>
  );
}