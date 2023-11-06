import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async () => {
  try {
    const data = await resend.emails.send({
      from: 'Daniel <danielchuks082@gmail.com>',
      to: ['dannyuc91@gmail.com'],
      subject: 'Hello world!',
      react: EmailTemplate({ firstName: 'Daniel' }),
      text: 'Hello world',
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
};
