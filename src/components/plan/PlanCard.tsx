

"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Check,
  Clock3,
  Flame,
  Star,
  X,
} from "lucide-react";

import { Workout } from "@/types/fitlog";
import { useFitLog } from "@/components/providers/FitLogProvider";

interface PlanCardProps {
  workout: Workout;
  mode: "today" | "saved";
}

export default function PlanCard({
  workout,
  mode,
}: PlanCardProps) {
  const {
    done,
    markAsDone,
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  // Check completed status
  const isDone = done.includes(
    workout.id
  );

  // =====================================================
  // Remove
  // =====================================================

  const handleRemove = () => {
    if (mode === "today") {
      removeFromPlan(
        workout.id
      );
    } else {
      removeFromSaved(
        workout.id
      );
    }
  };

  // =====================================================
  // Mark as Done
  // =====================================================

  const handleDone = () => {
    if (isDone) {
      return;
    }

    markAsDone(
      workout.id
    );
  };

  return (
    <article
      className={`group flex flex-col gap-4 rounded-xl border bg-[#101311] p-3 transition hover:border-[#3b403d] sm:flex-row sm:items-center ${
        isDone
          ? "border-[#ccff00]/30"
          : "border-[#292e2b]"
      }`}
    >

      {/* =================================================
          Image
      ================================================= */}

      <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-28">

        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="112px"
        />

      </div>

      {/* =================================================
          Workout Information
      ================================================= */}

      <div className="min-w-0 flex-1">

        {/* Muscle group */}
        <div className="flex flex-wrap gap-1">

          {workout.muscleGroups
            .slice(0, 2)
            .map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-2 py-0.5 text-[8px] font-black uppercase text-black"
              >
                {group}
              </span>
            ))}

        </div>

        {/* Workout Name */}
        <h3
          className={`mt-1 text-sm font-black uppercase ${
            isDone
              ? "text-gray-500 line-through"
              : "text-white"
          }`}
        >
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-0.5 text-[10px] text-gray-500">
          {workout.equipment}
        </p>

        {/* Workout Stats */}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-gray-500">

          <span className="flex items-center gap-1">
            <Clock3 size={11} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame
              size={11}
              className="text-[#ccff00]"
            />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star
              size={11}
              className="fill-[#ccff00] text-[#ccff00]"
            />
            {workout.rating}
          </span>

        </div>
      </div>

      {/* =================================================
          Actions
      ================================================= */}

      <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">

        {/* View Details */}
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-[#292e2b] px-4 py-2 text-[9px] font-bold uppercase tracking-wide text-gray-300 transition hover:border-white hover:text-white"
        >
          View Details
        </Link>

        {/* ================================================
            Mark as Done
            ONLY Today's Plan
        ================================================= */}

        {mode === "today" && (
          <button
            type="button"
            onClick={handleDone}
            disabled={isDone}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[9px] font-black uppercase tracking-wide transition ${
              isDone
                ? "cursor-default bg-[#252a27] text-gray-500"
                : "bg-[#ccff00] text-black hover:bg-[#b8e600]"
            }`}
          >
            <Check size={12} />

            {isDone
              ? "Done"
              : "Mark as Done"}
          </button>
        )}

        {/* ================================================
            Remove
            Today's Plan → removeFromPlan
            Saved → removeFromSaved
        ================================================= */}

        <button
          type="button"
          onClick={handleRemove}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#292e2b] text-gray-500 transition hover:border-red-500 hover:bg-red-950/30 hover:text-red-400"
          aria-label={
            mode === "today"
              ? "Remove from today's plan"
              : "Remove from saved"
          }
        >
          <X size={14} />
        </button>

      </div>

    </article>
  );
}













// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Check, Clock3, Flame, Star, X } from "lucide-react";

// import { Workout } from "@/types/fitlog";
// import { useFitLog } from "@/components/providers/FitLogProvider";

// interface PlanCardProps {
//   workout: Workout;
//   mode: "today" | "saved";
// }

// export default function PlanCard({ workout, mode }: PlanCardProps) {
//   const {
//     done,
//     markAsDone,
//     removeFromPlan,
//     removeFromSaved,
//   } = useFitLog();

//   // Check whether this workout is already completed
//   const isDone = done.includes(workout.id);

//   // Remove button handler
//   const handleRemove = () => {
//     if (mode === "today") {
//       removeFromPlan(workout.id);
//     } else {
//       removeFromSaved(workout.id);
//     }
//   };

//   // Mark workout as completed
//   const handleDone = () => {
//     if (!isDone) {
//       markAsDone(workout.id);
//     }
//   };

//   return (
//     <article
//       className={`flex flex-col gap-4 rounded-xl border bg-[#101311] p-3 transition sm:flex-row sm:items-center ${
//         isDone
//           ? "border-[#ccff00]/30"
//           : "border-[#292e2b]"
//       }`}
//     >
//       {/* Workout Image */}
//       <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-lg sm:w-40">
//         <Image
//           src={workout.image}
//           alt={workout.name}
//           fill
//           className="object-cover"
//           sizes="160px"
//         />
//       </div>

//       {/* Workout Information */}
//       <div className="min-w-0 flex-1">
//         {/* Muscle Groups */}
//         <div className="flex flex-wrap gap-1">
//           {workout.muscleGroups.slice(0, 2).map((group) => (
//             <span
//               key={group}
//               className="rounded-full bg-[#ccff00] px-2 py-1 text-[8px] font-black uppercase text-black"
//             >
//               {group}
//             </span>
//           ))}
//         </div>

//         {/* Name */}
//         <h3
//           className={`mt-2 text-sm font-black uppercase ${
//             isDone
//               ? "text-gray-500 line-through"
//               : "text-white"
//           }`}
//         >
//           {workout.name}
//         </h3>

//         {/* Equipment */}
//         <p className="mt-1 text-xs text-gray-500">
//           {workout.equipment}
//         </p>

//         {/* Stats */}
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

//       {/* Buttons */}
//       <div className="flex flex-wrap items-center gap-2 sm:justify-end">

//         {/* View Details */}
//         <Link
//           href={`/workouts/${workout.id}`}
//           className="rounded-md border border-[#292e2b] px-3 py-2 text-[10px] font-bold uppercase text-gray-300 transition hover:border-white hover:text-white"
//         >
//           View Details
//         </Link>

//         {/* Mark as Done */}
//         {mode === "today" && (
//           <button
//             type="button"
//             onClick={handleDone}
//             disabled={isDone}
//             className={`flex items-center gap-1 rounded-md px-3 py-2 text-[10px] font-bold uppercase transition ${
//               isDone
//                 ? "cursor-not-allowed bg-[#252a27] text-gray-500"
//                 : "bg-[#ccff00] text-black hover:bg-[#b8e600]"
//             }`}
//           >
//             <Check size={13} />

//             {isDone ? "Done" : "Mark as Done"}
//           </button>
//         )}

//         {/* Remove */}
//         <button
//           type="button"
//           onClick={handleRemove}
//           className="rounded-md border border-red-900/50 p-2 text-red-400 transition hover:bg-red-950/30"
//           aria-label={
//             mode === "today"
//               ? "Remove from today's plan"
//               : "Remove from saved"
//           }
//         >
//           <X size={15} />
//         </button>
//       </div>
//     </article>
//   );
// }







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

//   const handleRemove = () => {
//     if (mode === "today") {
//       removeFromPlan(workout.id);
//     } else {
//       removeFromSaved(workout.id);
//     }
//   };

//   return (
//     <article
//       className={`flex flex-col gap-4 rounded-xl border bg-[#101311] p-3 transition sm:flex-row sm:items-center ${
//         isDone
//           ? "border-[#ccff00]/30"
//           : "border-[#292e2b]"
//       }`}
//     >
//       {/* Image */}
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
//               : "text-white"
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
//           className="rounded-md border border-[#292e2b] px-3 py-2 text-[10px] font-bold uppercase text-gray-300 transition hover:border-white hover:text-white"
//         >
//           View Details
//         </Link>

//         {/* Mark as Done only for Today's Plan */}
//         {mode === "today" && (
//           <button
//             type="button"
//             onClick={() =>
//               markAsDone(workout.id)
//             }
//             disabled={isDone}
//             className={`flex items-center gap-1 rounded-md px-3 py-2 text-[10px] font-bold uppercase ${
//               isDone
//                 ? "cursor-default bg-[#252a27] text-gray-500"
//                 : "bg-[#ccff00] text-black hover:bg-[#b8e600]"
//             }`}
//           >
//             <Check size={13} />

//             {isDone
//               ? "Done"
//               : "Mark as Done"}
//           </button>
//         )}

//         {/* Remove */}
//         <button
//           type="button"
//           onClick={handleRemove}
//           className="rounded-md border border-red-900/50 p-2 text-red-400 transition hover:bg-red-950/30"
//           aria-label={
//             mode === "today"
//               ? "Remove from today's plan"
//               : "Remove from saved"
//           }
//         >
//           <X size={15} />
//         </button>

//       </div>
//     </article>
//   );
// }

















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