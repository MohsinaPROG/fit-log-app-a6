"use client";

import { useMemo, useState } from "react";
import { Workout, SortOption } from "@/types/fitlog";

import WorkoutCard from "./WorkoutCard";
//import SortDropdown from "./SortDropDown";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

export default function WorkoutLibrary({
  workouts,
}: WorkoutLibraryProps) {
  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    const copiedWorkouts = [...workouts];

    if (sortBy === "duration") {
      return copiedWorkouts.sort(
        (a, b) => a.duration - b.duration
      );
    }

    if (sortBy === "calories") {
      return copiedWorkouts.sort(
        (a, b) =>
          a.caloriesBurned - b.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      return copiedWorkouts.sort(
        (a, b) => b.rating - a.rating
      );
    }

    return copiedWorkouts;
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
         {/* <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            Workout Library
          </p>  */}

          <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            THE LIBRARY
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Sort Dropdown */}
        {/* <SortDropdown
          value={sortBy}
          onChange={setSortBy}
        />
      </div> */}
      </div>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
}










// "use client";

// import { useMemo, useState } from "react";

// import { Workout, SortOption } from "@/types/fitlog";

// import WorkoutCard from "./WorkoutCard";
// import SortDropdown from "./SortDropdown";

// interface WorkoutLibraryProps {
//   workouts: Workout[];
// }

// export default function WorkoutLibrary({
//   workouts,
// }: WorkoutLibraryProps) {
//   const [sortBy, setSortBy] =
//     useState<SortOption>("duration");

//   const sortedWorkouts = useMemo(() => {
//     return [...workouts].sort((a, b) => {
//       if (sortBy === "duration") {
//         return a.duration - b.duration;
//       }

//       if (sortBy === "calories") {
//         return (
//           a.caloriesBurned -
//           b.caloriesBurned
//         );
//       }

//       if (sortBy === "rating") {
//         return b.rating - a.rating;
//       }

//       return 0;
//     });
//   }, [workouts, sortBy]);

//   return (
//     <section
//       id="library"
//       className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
//     >
//       {/* ================= HEADING ================= */}
//       <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
//         <div>
//           <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
//             Workout Library
//           </p>

//           <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
//             THE LIBRARY
//           </h2>

//           <p className="mt-2 text-sm text-gray-500">
//             Twelve lifts covering every major
//             muscle group.
//           </p>
//         </div>

//         {/* Sort */}
//         <SortDropdown
//           value={sortBy}
//           onChange={setSortBy}
//         />
//       </div>

//       {/* ================= 3 × 4 GRID ================= */}
//       <div
//         className="
//           grid
//           grid-cols-1
//           gap-5
//           sm:grid-cols-2
//           lg:grid-cols-3
//         "
//       >
//         {sortedWorkouts.map((workout) => (
//           <WorkoutCard
//             key={workout.id}
//             workout={workout}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }




// "use client";

// import { useMemo, useState } from "react";
// import { Workout, SortOption } from "@/types/fitlog";
// import { sortWorkouts } from "@/lib/utils";
// import WorkoutCard from "@/components/home/WorkoutCard";
// import SortDropdown from "@/components/home/SortDropdown";

// interface WorkoutLibraryProps {
//   workouts: Workout[];
// }

// export default function WorkoutLibrary({
//   workouts,
// }: WorkoutLibraryProps) {
//   const [sortBy, setSortBy] =
//     useState<SortOption>("duration");

//   const sortedWorkouts = useMemo(() => {
//     return sortWorkouts(workouts, sortBy);
//   }, [workouts, sortBy]);

//   return (
//     <section
//       id="library"
//       className="container-fit scroll-mt-20 py-10 sm:py-14"
//     >
//       {/* Heading */}
//       <div className="flex flex-col gap-5 border-b border-[#292e2b] pb-6 sm:flex-row sm:items-end sm:justify-between">
//         <div>
//           <p className="section-label">
//             Workout Collection
//           </p>

//           <h2 className="display-font mt-2 text-3xl font-black uppercase sm:text-4xl">
//             The Library
//           </h2>

//           <p className="mt-2 text-sm text-gray-500">
//             Twelve lifts covering every major muscle
//             group.
//           </p>
//         </div>

//         <SortDropdown
//           value={sortBy}
//           onChange={(value) => setSortBy(value as SortOption)}
//         />
//       </div>

//       {/* Grid */}
//       <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {sortedWorkouts.map((workout) => (
//           <WorkoutCard
//             key={workout.id}
//             workout={workout}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }