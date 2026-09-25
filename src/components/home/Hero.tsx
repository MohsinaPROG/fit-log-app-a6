
import Image from "next/image";
import Link from "next/link";

import bannerImg from "../../assets/banner.png";

export default function Hero() {
  return (
    <section className="container-fit py-8 sm:py-10 lg:py-12">
      <div className="grid min-h-[500px] overflow-hidden rounded-2xl border border-[#242925] bg-[#151815] lg:grid-cols-2">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center bg-[#151815] px-7 py-10 sm:px-10 lg:px-14 xl:px-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="mt-4 max-w-[600px] text-4xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Train with intent.
            <br />
            Log every set.
          </h1>

          <p className="mt-6 max-w-[500px] text-sm leading-6 text-[#8b928d] sm:text-[15px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <div className="mt-8">
            <Link
              href="#library"
              className="inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
            >
              Browse workouts
              {/* <ArrowRight size={16} /> */}
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex min-h-[340px] items-center justify-center bg-[#151815] px-8 py-8 sm:px-12 lg:min-h-[500px] lg:px-14">
          
          {/* Image only — no background, no card */}
          <div className="relative h-[260px] w-full max-w-[400px] sm:h-[300px] lg:h-[340px]">
            <Image
              src={bannerImg}
              alt="Workout illustration"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 90vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

