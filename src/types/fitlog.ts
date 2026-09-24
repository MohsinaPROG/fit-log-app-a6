export type SortOption = "duration" | "calories" | "rating";

export interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}


// export interface Workout {
//   id: number;
//   name: string;
//   image: string;
//   muscleGroups: string[];
//   equipment: string;
//   difficulty: string;
//   duration: number;
//   caloriesBurned: number;
//   sets: number;
//   reps: string;
//   rating: number;
//   description: string;
//   instructions: string[];
// }

// export type SortOption =
//   | "duration"
//   | "calories"
//   | "rating";

// export type PlanTab = "today" | "saved";