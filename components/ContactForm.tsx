"use client";

import { useState, type FormEvent } from "react";
import { EMAIL } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      subject: String(data.get("subject") || "").trim(),
      message: String(data.get("message") || "").trim(),
      website: String(data.get("website") || "").trim(), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as {
        ok?: boolean;
        fallback?: "mailto";
        error?: string;
      };

      if (json.fallback === "mailto") {
        const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
          payload.subject || "Project enquiry",
        )}&body=${encodeURIComponent(
          `Hi Dinesh,\n\n${payload.message}\n\n— ${payload.name} (${payload.email})`,
        )}`;
        window.location.href = mailto;
        setStatus("mailto");
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setError(json.error || "Something went wrong. Please email me directly.");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Network error. Please try again or email me directly.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Honeypot — leave empty */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="field"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="field"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1 block font-medium">Subject</span>
        <input
          name="subject"
          type="text"
          className="field"
          placeholder="Project enquiry"
          defaultValue="Project enquiry"
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1 block font-medium">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="field resize-y"
          placeholder="What are you building? Timeline and stack preferences help."
          minLength={10}
        />
      </label>

      {status === "sent" && (
        <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
          Thanks — your message was sent. I usually reply within a day.
        </p>
      )}
      {status === "mailto" && (
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Opening your email app with the message filled in…
        </p>
      )}
      {status === "error" && (
        <p className="text-sm" style={{ color: "#ef4444" }} role="alert">
          {error}{" "}
          <a className="underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
