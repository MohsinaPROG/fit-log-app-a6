
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