// "use client";

// import { ChevronDown } from "lucide-react";

// import { SortOption } from "@/types/fitlog";

// interface SortDropdownProps {
//   value: SortOption;
//   onChange: (value: SortOption) => void;
// }

// export default function SortDropdown({
//   value,
//   onChange,
// }: SortDropdownProps) {
//   return (
//     <div className="flex items-center gap-2">
//       <span className="text-xs text-gray-500">
//         Sort By
//       </span>

//       <div className="relative">
//         <select
//           value={value}
//           onChange={(event) =>
//             onChange(
//               event.target.value as SortOption
//             )
//           }
//           className="appearance-none rounded-md border border-[#292e2b] bg-[#111412] px-3 py-2 pr-8 text-xs font-bold text-white outline-none focus:border-[#ccff00]"
//         >
//           <option value="duration">
//             Duration
//           </option>

//           <option value="calories">
//             Calories
//           </option>

//           <option value="rating">
//             Rating
//           </option>
//         </select>

//         <ChevronDown
//           size={14}
//           className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
//         />
//       </div>
//     </div>
//   );
// }









"use client";

import { SortOption } from "@/types/fitlog";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortDropdown({
  value,
  onChange,
}: SortDropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value as SortOption)
      }
      className="h-9 rounded-md border border-[#292e2b] bg-[#101311] px-3 text-xs text-white outline-none focus:border-[#ccff00]"
    >
      <option value="duration">Duration</option>
      <option value="calories">Calories</option>
      <option value="rating">Rating</option>
    </select>
  );
}