"use client";

export default function Error({
  reset,
}: {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}) {
  return (
    <main className="container-fit flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <p className="section-label">
          Something went wrong
        </p>

        <h1 className="mt-3 text-3xl font-black">
          Could not load FitLog
        </h1>

        <button
          onClick={() => reset()}
          className="lime-button mt-6 rounded-md px-5 py-3 text-xs uppercase"
        >
          Try again
        </button>
      </div>
    </main>
  );
}