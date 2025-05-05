import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { SendMailOptions } from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    // Configure the email options
    const mailOptions: SendMailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form submission devharshthakur.in ${name}`,
      text: message,
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };
    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email Sent Sucessfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error Sending an email:', error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}
