import { Workout } from "@/types/fitlog";

const API_URL =
  "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: Workout[] = await response.json();

  return data;
}







// import { Workout } from "@/types/fitlog";

// export const API_URL =
//   "https://api.abcz.workers.dev/api/fitlog";

// export async function getWorkouts(): Promise<Workout[]> {
//   const response = await fetch(API_URL, {
//     next: {
//       revalidate: 60,
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch workouts");
//   }

//   return response.json();
// }

// export async function getWorkoutById(
//   id: string
// ): Promise<Workout | null> {
//   try {
//     const response = await fetch(`${API_URL}/${id}`, {
//       next: {
//         revalidate: 60,
//       },
//     });

//     if (response.ok) {
//       return response.json();
//     }
//   } catch {
//     // fallback below
//   }

//   // Fallback:
//   // If single workout endpoint doesn't work,
//   // get all workouts and find the matching one.
//   try {
//     const workouts = await getWorkouts();

//     return (
//       workouts.find(
//         (workout) => workout.id === Number(id)
//       ) ?? null
//     );
//   } catch {
//     return null;
//   }
// }