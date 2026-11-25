import { NextResponse } from "next/server";
import { EMAIL } from "@/lib/data";

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot: bots fill this; humans leave empty
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const subject = (body.subject || "Project enquiry").trim().slice(0, 120);
  const message = (body.message || "").trim();

  if (name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!emailOk(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json(
      { error: "Please write a slightly longer message." },
      { status: 400 },
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!resendKey) {
    // No email provider configured — client opens mailto with the same content.
    return NextResponse.json({ ok: true, fallback: "mailto" });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", res.status, detail);
      return NextResponse.json(
        { error: "Email provider failed. Please try mailto instead.", fallback: "mailto" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact send failed:", err);
    return NextResponse.json(
      { error: "Could not send email.", fallback: "mailto" },
      { status: 502 },
    );
  }
}
