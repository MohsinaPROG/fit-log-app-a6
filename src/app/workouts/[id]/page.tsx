


import { notFound } from "next/navigation";

import WorkoutDetails from "@/components/details/WorkoutDetails";
import { getWorkouts } from "@/lib/api";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const workouts = await getWorkouts();
  const workout = workouts.find((item) => String(item.id) === id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
}