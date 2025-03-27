import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { contactConfig } from '@/config/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: contactConfig.resendFromEmail,
      to: [contactConfig.notificationEmail],
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
} 