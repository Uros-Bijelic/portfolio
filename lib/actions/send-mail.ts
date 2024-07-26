'use server';

import {
  getInTouchFormSchema,
  type IGetInTouchFormSchema,
} from '../validation';

import { Resend } from 'resend';

import EmailTemplate from '@/components/EmailTemplate';

// ----------------------------------------------------------------

export const sendEmail = async (senderData: IGetInTouchFormSchema) => {
  const isValidData = getInTouchFormSchema.safeParse(senderData);

  if (isValidData.error)
    return { ok: false, status: 400, message: 'Validation failed.' };

  const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: `${senderData.name} <onboarding@resend.dev>`,
      to: ['urosbijelic90@gmail.com'],
      subject: 'Portfolio email',
      react: EmailTemplate({
        name: senderData.name,
        email: senderData.email,
        description: senderData.description,
        contact: senderData.contact,
      }),
    });
    if (data) {
      return {
        ok: true,
        status: 200,
        message: 'Email sent successfully.',
      };
    } else if (error) {
      return {
        ok: false,
        status: error.name,
        message: error.message,
      };
    }
  } catch (error) {
    console.log('Error sending email', error);
    return {
      ok: false,
      status: 500,
      message: 'Internal Server Error. Please try again.',
    };
  }
};
