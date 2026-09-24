import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <main className="container-fit flex min-h-[70vh] items-center justify-center py-20">
      <div className="text-center">
        <Dumbbell
          size={48}
          className="mx-auto text-[#ccff00]"
        />

        <p className="section-label mt-6">
          FitLog
        </p>

        <h1 className="display-font mt-3 text-6xl font-black">
          404
        </h1>

        <p className="mt-3 text-gray-500">
          This workout or page does not exist.
        </p>

        <Link
          href="/"
          className="lime-button mt-6 inline-block rounded-md px-5 py-3 text-xs uppercase"
        >
          Back to workouts
        </Link>
      </div>
    </main>
  );
}