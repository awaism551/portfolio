import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function mail(req: NextApiRequest, res: NextApiResponse) {
  console.log("🚀 ~ mail ~ process.env.REACT_APP_SENDGRID_API_KEY:", process.env.REACT_APP_SENDGRID_API_KEY)
  console.log("🚀 ~ mail ~ process.env.REACT_APP_TO_EMAIL:", process.env.REACT_APP_TO_EMAIL)
  console.log("🚀 ~ mail ~ process.env.REACT_APP_FROM_EMAIL:", process.env.REACT_APP_FROM_EMAIL)
  
  if (
    !process.env.REACT_APP_SENDGRID_API_KEY ||
    !process.env.REACT_APP_TO_EMAIL ||
    !process.env.REACT_APP_FROM_EMAIL
  ) {
    return res.status(500).json({
      message: `ERROR SENDING EMAIL VIA SENDGRID: Check your enviroment variable config`,
    });
  }
  sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;
    const msg = {
      to: process.env.REACT_APP_TO_EMAIL,
      from: process.env.REACT_APP_FROM_EMAIL,
      subject: `PORTFOLIO: ${firstName} ${lastName} sent you a message!`,
      text: `
          Email: ${email}
          Message: ${message}`,
    };
    try {
      await sgMail.send(msg);
      return res.status(200).end();
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({
          message: `ERROR SENDING EMAIL VIA SENDGRID: ${error.message}`,
        });
      }
    }
  }
  return res.status(200).end();
}
