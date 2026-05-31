import { NextResponse } from "next/server";

type StrategyCallPayload = {
  name: string;
  email: string;
  website?: string;
  serviceArea?: string;
  message?: string;
  phone?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendViaResend(payload: StrategyCallPayload, toEmail: string, fromEmail: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email,
      subject: `Strategy Call Request: ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.phone ? `Phone: ${payload.phone}` : null,
        payload.website ? `Website: ${payload.website}` : null,
        payload.serviceArea ? `Service Area: ${payload.serviceArea}` : null,
        "",
        "Message:",
        payload.message || "No message provided.",
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  return response.ok;
}

async function sendViaWeb3Forms(payload: StrategyCallPayload) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Strategy Call Request: ${payload.name}`,
      from_name: payload.name,
      email: payload.email,
      phone: payload.phone,
      website: payload.website,
      service_area: payload.serviceArea,
      message: payload.message,
    }),
  });

  if (!response.ok) return false;
  const data = (await response.json()) as { success?: boolean };
  return data.success === true;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as StrategyCallPayload;
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const payload: StrategyCallPayload = {
      name,
      email,
      phone: body.phone?.trim(),
      website: body.website?.trim(),
      serviceArea: body.serviceArea?.trim(),
      message: body.message?.trim(),
    };

    const toEmail = process.env.STRATEGY_CALL_TO_EMAIL ?? "hello@localseowiser.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Local SEO Wiser <onboarding@resend.dev>";

    const sent =
      (await sendViaResend(payload, toEmail, fromEmail)) || (await sendViaWeb3Forms(payload));

    if (!sent) {
      return NextResponse.json(
        {
          error:
            "Form delivery is not configured yet. Add RESEND_API_KEY or WEB3FORMS_ACCESS_KEY in your environment variables.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again in a moment." }, { status: 500 });
  }
}
