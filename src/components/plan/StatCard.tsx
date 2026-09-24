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
    <div className="rounded-xl border border-[#292e2b] bg-[#101311] p-5">
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
        {label}
      </p>

      <div className="mt-3 flex items-end gap-1">
        <span className="text-3xl font-black">
          {value}
        </span>

        {unit && (
          <span className="pb-1 text-xs text-gray-500">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}