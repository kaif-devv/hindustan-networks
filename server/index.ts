import express from 'express'
import nodemailer from 'nodemailer'
import { fileURLToPath } from 'url'
import path from 'path'
import 'dotenv/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

// Serve built frontend in production
if (process.env.NODE_ENV === 'production') {
  const distPath = path.resolve(__dirname, '../dist')
  app.use(express.static(distPath))
}

// --- Email endpoint ---
app.post('/api/send-enquiry', async (req, res) => {
  const { name, email, phone, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || 'info@hindustannetworks.com',
      replyTo: email,
      subject: `[HN Enquiry] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:540px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px">
          <h2 style="color:#d97706;margin-top:0">New Website Enquiry</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#6b7280;width:100px">Name</td><td style="padding:6px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280">Email</td><td style="padding:6px 0">${email}</td></tr>
            ${phone ? `<tr><td style="padding:6px 0;color:#6b7280">Phone</td><td style="padding:6px 0">${phone}</td></tr>` : ''}
            <tr><td style="padding:6px 0;color:#6b7280">Subject</td><td style="padding:6px 0">${subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
          <p style="color:#6b7280;margin-bottom:6px">Message:</p>
          <p style="white-space:pre-wrap;background:#f9fafb;padding:12px;border-radius:8px">${message}</p>
        </div>
      `,
    })
    return res.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
})

// SPA fallback in production
if (process.env.NODE_ENV === 'production') {
  const distPath = path.resolve(__dirname, '../dist')
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
