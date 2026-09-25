interface StatCardProps {
  label: string;
  value: number;
  unit?: string;
}

export default function StatCard({
  label,
  value,
  unit,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-[#292e2b] bg-[#101311] px-6 py-5">
      {/* Label */}
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
        {label}
      </p>

      {/* Value */}
      <div className="mt-3 flex items-end gap-1">
        <span
          className={`text-3xl font-black leading-none ${
            label === "Exercises"
              ? "text-[#ccff00]"
              : "text-white"
          }`}
        >
          {value}
        </span>

        {/* Unit */}
        {unit && (
          <span className="pb-0.5 text-xs font-medium text-gray-500">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}










