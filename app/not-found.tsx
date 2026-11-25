import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center">
      <p
        className="text-sm font-semibold uppercase tracking-wider"
        style={{ color: "var(--accent)" }}
      >
        404
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm" style={{ color: "var(--muted)" }}>
        That URL does not exist. Head home or browse the CV and projects.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Link className="btn btn-primary" href="/">
          Home
        </Link>
        <Link className="btn btn-ghost" href="/cv">
          CV
        </Link>
        <Link className="btn btn-ghost" href="/projects">
          Projects
        </Link>
      </div>
    </main>
  );
}
