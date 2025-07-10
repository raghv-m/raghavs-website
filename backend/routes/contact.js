const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Create mail transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Email to portfolio owner
const sendEmailToOwner = async (contactData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.FROM_EMAIL || process.env.SMTP_USER,
    to: contactData.to || process.env.DESTINATION_EMAIL || 'raaghvv0508@gmail.com',
    subject: `Portfolio Contact: ${contactData.subject}`,
    text: `
New contact form submission:

Name: ${contactData.name}
Email: ${contactData.email}
Subject: ${contactData.subject}
Message: ${contactData.message}

Timestamp: ${contactData.timestamp}
IP Address: ${contactData.ip}
User Agent: ${contactData.userAgent}
    `,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
        <p><strong>Subject:</strong> ${contactData.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background:#f9f9f9;padding:10px;border-radius:5px;">${contactData.message.replace(/\n/g, '<br>')}</div>
        <hr>
        <p><strong>Timestamp:</strong> ${contactData.timestamp}</p>
        <p><strong>IP:</strong> ${contactData.ip}</p>
        <p><strong>User Agent:</strong> ${contactData.userAgent}</p>
      </div>
    `
  };

  return await transporter.sendMail(mailOptions);
};

// Auto-reply to sender
const sendAutoReply = async (contactData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.FROM_EMAIL || process.env.SMTP_USER,
    to: contactData.email,
    subject: "Thanks for contacting me!",
    text: `Hi ${contactData.name},\n\nThanks for your message! I'll get back to you soon.\n\n— Raghav`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <p>Hi ${contactData.name},</p>
        <p>Thank you for reaching out via my portfolio website. I appreciate your message and will respond shortly.</p>
        <p>— Raghav Mahajan</p>
      </div>
    `
  };

  return await transporter.sendMail(mailOptions);
};

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message, to } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || (to && !emailRegex.test(to))) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const contactData = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      to: to?.trim().toLowerCase(),
      subject: subject?.trim() || 'Portfolio Contact',
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: req.ip,
      userAgent: req.get('User-Agent')
    };

    console.log('📧 New contact submission:', {
      id: contactData.id,
      name: contactData.name,
      email: contactData.email,
      to: contactData.to,
      subject: contactData.subject,
      timestamp: contactData.timestamp
    });

    let ownerResult = null;
    let userResult = null;

    try {
      ownerResult = await sendEmailToOwner(contactData);
      userResult = await sendAutoReply(contactData);
      console.log('✅ Emails sent successfully');
    } catch (err) {
      console.error('❌ Email sending error:', err.message);
    }

    res.status(201).json({
      success: true,
      message: "Thank you for your message! I’ll get back to you soon.",
      data: {
        id: contactData.id,
        timestamp: contactData.timestamp,
        emailSentTo: contactData.to || process.env.DESTINATION_EMAIL,
        emailSent: !!ownerResult?.messageId
      }
    });

  } catch (err) {
    console.error('❌ Contact form error:', err.message);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

// GET /api/contact/stats (mock)
router.get('/stats', async (req, res) => {
  try {
    const stats = {
      totalSubmissions: 0,
      thisMonth: 0,
      thisWeek: 0,
      today: 0
    };

    res.json({ success: true, data: stats });
  } catch (err) {
    console.error('❌ Stats error:', err.message);
    res.status(500).json({ error: 'Failed to fetch contact statistics' });
  }
});

module.exports = router;
