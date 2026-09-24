import { Workout, SortOption } from "@/types/fitlog";

export function sortWorkouts(
  workouts: Workout[],
  sortBy: SortOption
) {
  return [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });
}