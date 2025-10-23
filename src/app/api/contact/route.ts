import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailContent = `
New contact form submission from Sophons website:

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Project Type: ${projectType || "Not specified"}
Budget: ${budget || "Not specified"}

Message:
${message}

---
Sent from Sophons website contact form
    `.trim();

    const emailData = {
      to: "sophons.dev@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
