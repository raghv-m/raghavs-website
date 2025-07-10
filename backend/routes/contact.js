const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Create email transporter
const createTransporter = () => {
  // Debug: Log SMTP settings (without password for security)
  console.log('🔧 SMTP Configuration:');
  console.log('  Host:', process.env.SMTP_HOST);
  console.log('  Port:', process.env.SMTP_PORT);
  console.log('  User:', process.env.SMTP_USER);
  console.log('  From Email:', process.env.FROM_EMAIL);
  console.log('  Password length:', process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 'undefined');

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

// Send email to site owner
const sendEmailToOwner = async (contactData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: contactData.to || process.env.FROM_EMAIL,
    subject: `Portfolio Contact: ${contactData.subject}`,
    html: `
      <div>
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <small><strong>IP:</strong> ${contactData.ip}</small><br/>
        <small><strong>User Agent:</strong> ${contactData.userAgent}</small>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
};

// Auto-reply to sender
const sendAutoReply = async (contactData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: contactData.email,
    subject: "Thanks for contacting me!",
    html: `
      <p>Hi ${contactData.name},</p>
      <p>Thanks for reaching out! I’ll get back to you soon.</p>
      <p>— Raghav</p>
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

    const contactData = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      subject: subject?.trim() || 'Portfolio Contact',
      message: message.trim(),
      to: to?.trim(),
      timestamp: new Date().toISOString(),
      ip: req.ip,
      userAgent: req.get('User-Agent')
    };

    await sendEmailToOwner(contactData);
    await sendAutoReply(contactData);

    res.status(201).json({ success: true, message: 'Message sent!' });
  } catch (error) {
    console.error('❌ Email error details:');
    console.error('  Message:', error.message);
    console.error('  Code:', error.code);
    console.error('  Command:', error.command);
    
    // Provide more specific error messages
    let errorMessage = 'Email failed to send';
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check your email and app password.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection failed. Please check your internet connection.';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Connection timed out. Please try again.';
    }
    
    res.status(500).json({ error: errorMessage });
  }
});

module.exports = router;
