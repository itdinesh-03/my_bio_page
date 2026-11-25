"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="relative mx-auto flex min-h-[50vh] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-sm" style={{ color: "var(--muted)" }}>
        An unexpected error occurred. Try again, or go back to the home page.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button type="button" className="btn btn-primary" onClick={reset}>
          Try again
        </button>
        <a className="btn btn-ghost" href="/">
          Home
        </a>
      </div>
    </main>
  );
}
