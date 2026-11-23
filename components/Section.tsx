import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  sub,
  children,
}: {
  id?: string;
  title: string;
  sub?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="reveal mx-auto max-w-5xl px-5 py-12">
      <h2 className="text-2xl font-bold tracking-tight">
        <span className="grad">{title}</span>
      </h2>
      {sub && (
        <p className="mb-6 mt-1 text-sm" style={{ color: "var(--muted)" }}>
          {sub}
        </p>
      )}
      {!sub && <div className="mb-6" />}
      {children}
    </section>
  );
}
