import Image from "next/image";
import Link from "next/link";

import {
  Clock3,
  Flame,
  Star,
  Dumbbell,
} from "lucide-react";

import { Workout } from "@/types/fitlog";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({
  workout,
}: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-xl border border-[#292e2b] bg-[#111412] transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00]/60 hover:shadow-[0_8px_30px_rgba(204,255,0,0.08)]"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#151917]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Muscle Groups */}
        <div className="flex min-h-[24px] flex-wrap gap-2">
          {workout.muscleGroups
            .slice(0, 2)
            .map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-black"
              >
                {group}
              </span>
            ))}
        </div>

        {/* Name */}
        <h3 className="mt-3 truncate text-sm font-black uppercase tracking-wide text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
          <Dumbbell size={13} />

          <span className="truncate">
            {workout.equipment}
          </span>
        </div>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-3 border-t border-[#292e2b] pt-3 text-[10px] text-gray-500">

          {/* Duration */}
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Clock3 size={12} />
            {workout.duration} min
          </span>

          {/* Calories */}
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Flame size={12} />
            {workout.caloriesBurned} kcal
          </span>

          {/* Rating */}
          <span className="ml-auto flex items-center gap-1">
            <Star
              size={12}
              className="fill-[#ccff00] text-[#ccff00]"
            />

            <span className="text-white">
              {workout.rating}
            </span>
          </span>

        </div>
      </div>
    </Link>
  );
}









// import Image from "next/image";
// import Link from "next/link";
// import {
//   Clock3,
//   Flame,
//   Star,
//   Dumbbell,
// } from "lucide-react";

// import { Workout } from "@/types/fitlog";

// interface WorkoutCardProps {
//   workout: Workout;
// }

// export default function WorkoutCard({
//   workout,
// }: WorkoutCardProps) {
//   return (
//     <Link
//       href={`/workouts/${workout.id}`}
//       className="group block overflow-hidden rounded-xl border border-[#292e2b] bg-[#111412] transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00]/60 hover:shadow-[0_8px_30px_rgba(204,255,0,0.08)]"
//     >
//       {/* ================= IMAGE ================= */}
//       <div className="relative aspect-[1.75/1] overflow-hidden bg-[#151917]">
//         <Image
//           src={workout.image}
//           alt={workout.name}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//           sizes="
//             (max-width: 639px) 100vw,
//             (max-width: 1023px) 50vw,
//             33vw
//           "
//         />

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="p-4">
//         {/* Category Tags */}
//         <div className="flex min-h-[22px] flex-wrap gap-1.5">
//           {workout.muscleGroups
//             .slice(0, 2)
//             .map((group) => (
//               <span
//                 key={group}
//                 className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-black"
//               >
//                 {group}
//               </span>
//             ))}
//         </div>

//         {/* Workout Name */}
//         <h3 className="mt-3 min-h-[20px] truncate text-sm font-black uppercase tracking-wide text-white">
//           {workout.name}
//         </h3>

//         {/* Equipment */}
//         <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
//           <Dumbbell size={12} />

//           <span className="truncate">
//             {workout.equipment}
//           </span>
//         </div>

//         {/* ================= STATS ================= */}
//         <div className="mt-4 flex items-center gap-3 border-t border-[#292e2b] pt-3 text-[10px] text-gray-500">
//           {/* Duration */}
//           <span className="flex items-center gap-1 whitespace-nowrap">
//             <Clock3 size={12} />

//             <span>
//               {workout.duration} min
//             </span>
//           </span>

//           {/* Calories */}
//           <span className="flex items-center gap-1 whitespace-nowrap">
//             <Flame size={12} />

//             <span>
//               {workout.caloriesBurned} kcal
//             </span>
//           </span>

//           {/* Rating */}
//           <span className="ml-auto flex items-center gap-1 whitespace-nowrap">
//             <Star
//               size={12}
//               className="fill-[#ccff00] text-[#ccff00]"
//             />

//             <span className="text-white">
//               {workout.rating}
//             </span>
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }




// import Image from "next/image";
// import Link from "next/link";
// import { Clock3, Flame, Star } from "lucide-react";

// import { Workout } from "@/types/fitlog";


// interface WorkoutCardProps {
//   workout: Workout;
// }

// export default function WorkoutCard({
//   workout,
// }: WorkoutCardProps) {
//   return (
//     <Link
//       href={`/workouts/${workout.id}`}
//       className="group dark-card block overflow-hidden rounded-xl transition duration-200 hover:-translate-y-1 hover:border-[#ccff00]/50"
//     >
//       {/* Image */}
//       <div className="relative aspect-[1.75/1] overflow-hidden bg-[#151917]">
//         <Image
//           src={workout.image}
//           alt={workout.name}
//           fill
//           className="object-cover transition duration-500 group-hover:scale-105"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         {/* Tags */}
//         <div className="flex flex-wrap gap-1.5">
//           {workout.muscleGroups.slice(0, 2).map((group) => (
//             <span
//               key={group}
//               className="rounded-full bg-[#ccff00] px-2 py-1 text-[9px] font-black uppercase text-black"
//             >
//               {group}
//             </span>
//           ))}
//         </div>

//         {/* Name */}
//         <h3 className="mt-3 text-sm font-black uppercase tracking-wide">
//           {workout.name}
//         </h3>

//         {/* Equipment */}
//         <p className="mt-1 truncate text-xs text-gray-500">
//           {workout.equipment}
//         </p>

//         {/* Stats */}
//         <div className="mt-4 flex items-center gap-3 border-t border-[#292e2b] pt-3 text-[10px] text-gray-500">
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
//     </Link>
//   );
// }