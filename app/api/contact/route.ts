export const runtime = 'nodejs';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: "mail.kaaryahire.com",
            port: 587,
            secure: false, // Use STARTTLS
            auth: {
                user: "support@kaaryahire.com",
                pass: process.env.EMAIL_PASSWORD?.trim(),
            },
        });

        const mailOptions = {
            from: '"KaaryaHire Contact" <support@kaaryahire.com>',
            to: "support@kaaryahire.com",
            subject: "New Contact Form Submission",
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send email', details: (error as Error).message },
            { status: 500 }
        );
    }
}
