// api/send-email.js
import { readFileSync } from 'fs';
import { join } from 'path';
import Handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import { log } from 'console';

// ——— 1) Load & compile templates at startup ———
const templatesDirectory = join(process.cwd(), 'api', 'email-templates');
const messageSrc = readFileSync(join(templatesDirectory, 'message-to-me-email.html'), 'utf8');
const confirmationSrc = readFileSync(join(templatesDirectory, 'confirmation-email.html'), 'utf8');
const messageTpl     = Handlebars.compile(messageSrc);
const confirmationTpl = Handlebars.compile(confirmationSrc);

// ——— 2) Create reusable SMTP transporter ———
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS,
  }
})

export default async function handler(req, res) {
  // ——— 3) Only accept POST ———
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // ——— 4) Extract & validate body ———
  const { name, subject, email, message } = req.body || {};
  if (!name || !email || !message || !subject) {
    return res.status(400).json({ error: 'Missing name, email, subject or message' });
  }

  try {
    // ——— 5a) Notify yourself ———
    await transporter.sendMail({
      from: `"${process.env.FROM_NAME}" <${process.env.GMAIL_USER}>`,
      to:   process.env.CONTACT_EMAIL,
      subject: `New contact from ${name}: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: messageTpl({
        name,
        email,
        subject,
        // use triple-stash in template to avoid escaping your <br/>
        message: message.replace(/\n/g, '<br/>'),
      }),
    });

    // ——— 5b) Send confirmation to visitor ———
    await transporter.sendMail({
      from: `"${process.env.FROM_NAME}" <${process.env.GMAIL_USER}>`,
      to:   email,
      subject: `Thanks for getting in touch, ${name}!`,
      text: `Hi ${name},\n\nThanks for your message! I’ll read it shortly and reply as soon as I can.\n\nCheers,\n${process.env.FROM_NAME}`,
      html: confirmationTpl({
        name,
        subject,
        message,
        fromName: process.env.FROM_NAME,
      }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('✉️ Email error:', err);
    return res.status(500).json({ error: 'Failed to send emails' });
  }
}
