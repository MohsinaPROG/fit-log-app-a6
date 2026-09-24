import Hero from "@/components/home/Hero";
import WorkoutLibrary from "@/components/home/WorkoutLibrary";
import { getWorkouts } from "@/lib/api";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <main>
      {/* Hero Section */}
      <Hero image={workouts[0]?.image} />

      {/* Workout Library */}
      <WorkoutLibrary workouts={workouts} />
    </main>
  );
}












// import Hero from "@/components/home/Hero";
// import WorkoutCard from "@/components/home/WorkoutCard";
// import WorkoutLibrary from "@/components/home/WorkoutLibrary";
// import { getWorkouts } from "@/lib/api";

// export default async function HomePage() {
//   const workouts = await getWorkouts();

//   return (
//     <>
//       <Hero image={workouts[0].image} />
//       <section aria-labelledby="workout-library-heading">
//         <h2 id="workout-library-heading">Workout Library</h2>
//         <div>
//           {workouts.map((workout) => (
//             <article key={workout.id}>
//               <h3>{workout.name}</h3>
//             </article>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// import React from 'react';

// const HomePage = () => {
//   return (
//     <div>
//       Homepage
//     </div>
//   );
// };

// export default HomePage;