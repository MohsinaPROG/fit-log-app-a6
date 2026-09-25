"use client";

import Link from "next/link";

interface EmptyPlanProps {
  mode?: "today" | "saved";
}

export default function EmptyPlan({
  mode = "today",
}: EmptyPlanProps) {
  return (
    <div className="flex min-h-[330px] flex-col items-center justify-center rounded-xl border border-[#292e2b] bg-[#101311] px-6 text-center">

      {/* Heading */}
      <h2 className="text-xl font-black uppercase text-white sm:text-2xl">
        Nothing Here Yet
      </h2>

      {/* Description */}
      <p className="mt-2 max-w-md text-xs leading-5 text-gray-500 sm:text-sm">
        {mode === "today"
          ? "Browse the library and add a lift to get your day moving."
          : "Save a workout from the library and it will appear here."}
      </p>

      {/* Button */}
      <Link
        href="/#library"
        className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-[10px] font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
      >
        Go to Workouts
      </Link>

    </div>
  );
}







// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import {
//   Check,
//   Clock3,
//   Flame,
//   Star,
//   X,
// } from "lucide-react";

// import { Workout } from "@/types/fitlog";
// import { useFitLog } from "@/components/providers/FitLogProvider";

// interface PlanCardProps {
//   workout: Workout;
//   mode: "today" | "saved";
// }

// export default function PlanCard({
//   workout,
//   mode,
// }: PlanCardProps) {
//   const {
//     done,
//     markAsDone,
//     removeFromPlan,
//     removeFromSaved,
//   } = useFitLog();

//   const isDone = done.includes(workout.id);

//   return (
//     <div
//       className={`flex flex-col gap-4 rounded-xl border bg-[#101311] p-3 sm:flex-row sm:items-center ${
//         isDone
//           ? "border-[#ccff00]/30"
//           : "border-[#292e2b]"
//       }`}
//     >
//       {/* Thumbnail */}
//       <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-lg sm:w-40">
//         <Image
//           src={workout.image}
//           alt={workout.name}
//           fill
//           className="object-cover"
//           sizes="160px"
//         />
//       </div>

//       {/* Info */}
//       <div className="min-w-0 flex-1">
//         <div className="flex flex-wrap gap-1">
//           {workout.muscleGroups
//             .slice(0, 2)
//             .map((group) => (
//               <span
//                 key={group}
//                 className="rounded-full bg-[#ccff00] px-2 py-1 text-[8px] font-black uppercase text-black"
//               >
//                 {group}
//               </span>
//             ))}
//         </div>

//         <h3
//           className={`mt-2 text-sm font-black uppercase ${
//             isDone
//               ? "text-gray-500 line-through"
//               : ""
//           }`}
//         >
//           {workout.name}
//         </h3>

//         <p className="mt-1 text-xs text-gray-500">
//           {workout.equipment}
//         </p>

//         <div className="mt-3 flex flex-wrap gap-3 text-[10px] text-gray-500">
//           <span className="flex items-center gap-1">
//             <Clock3 size={12} />
//             {workout.duration} min
//           </span>

//           <span className="flex items-center gap-1">
//             <Flame size={12} />
//             {workout.caloriesBurned} kcal
//           </span>

//           <span className="flex items-center gap-1">
//             <Star
//               size={12}
//               className="fill-[#ccff00] text-[#ccff00]"
//             />
//             {workout.rating}
//           </span>
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="flex flex-wrap items-center gap-2 sm:justify-end">
//         <Link
//           href={`/workouts/${workout.id}`}
//           className="rounded-md border border-[#292e2b] px-3 py-2 text-[10px] font-bold uppercase text-gray-300 hover:border-white hover:text-white"
//         >
//           View Details
//         </Link>

//         {mode === "today" && (
//           <button
//             onClick={() => markAsDone(workout.id)}
//             disabled={isDone}
//             className={`flex items-center gap-1 rounded-md px-3 py-2 text-[10px] font-bold uppercase ${
//               isDone
//                 ? "bg-[#252a27] text-gray-500"
//                 : "bg-[#ccff00] text-black"
//             }`}
//           >
//             <Check size={13} />

//             {isDone ? "Done" : "Mark as Done"}
//           </button>
//         )}

//         <button
//           onClick={() =>
//             mode === "today"
//               ? removeFromPlan(workout.id)
//               : removeFromSaved(workout.id)
//           }
//           className="rounded-md border border-red-900/50 p-2 text-red-400 hover:bg-red-950/30"
//           aria-label="Remove workout"
//         >
//           <X size={15} />
//         </button>
//       </div>
//     </div>
//   );
// }