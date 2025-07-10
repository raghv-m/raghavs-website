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
    to: contactData.to || process.env.DESTINATION_EMAIL,
    subject: `Portfolio Contact: ${contactData.subject}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Message</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #374151;
            background-color: #f9fafb;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
          }
          .content {
            padding: 40px 30px;
          }
          .message-card {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 24px;
            margin: 20px 0;
          }
          .field {
            margin-bottom: 16px;
          }
          .field-label {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 4px;
            display: block;
          }
          .field-value {
            color: #4b5563;
            word-wrap: break-word;
          }
          .message-text {
            background-color: white;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            padding: 16px;
            margin-top: 8px;
            white-space: pre-wrap;
            font-family: inherit;
          }
          .footer {
            background-color: #f3f4f6;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .footer p {
            margin: 4px 0;
            color: #6b7280;
            font-size: 14px;
          }
          .social-links {
            margin-top: 16px;
          }
          .social-links a {
            color: #667eea;
            text-decoration: none;
            margin: 0 8px;
          }
          .social-links a:hover {
            text-decoration: underline;
          }
          .timestamp {
            background-color: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 6px;
            padding: 12px;
            margin-top: 20px;
            font-size: 12px;
            color: #92400e;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 New Contact Message</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Someone reached out through your portfolio</p>
          </div>
          
          <div class="content">
            <div class="message-card">
              <div class="field">
                <span class="field-label">👤 Name:</span>
                <div class="field-value">${contactData.name}</div>
              </div>
              
              <div class="field">
                <span class="field-label">📧 Email:</span>
                <div class="field-value">
                  <a href="mailto:${contactData.email}" style="color: #667eea; text-decoration: none;">${contactData.email}</a>
                </div>
              </div>
              
              <div class="field">
                <span class="field-label">📝 Subject:</span>
                <div class="field-value">${contactData.subject}</div>
              </div>
              
              <div class="field">
                <span class="field-label">💬 Message:</span>
                <div class="message-text">${contactData.message.replace(/\n/g, '\n')}</div>
              </div>
            </div>
            
            <div class="timestamp">
              <strong>📅 Received:</strong> ${new Date(contactData.timestamp).toLocaleString()}<br>
              <strong>🌐 IP Address:</strong> ${contactData.ip}<br>
              <strong>🔍 User Agent:</strong> ${contactData.userAgent}
            </div>
          </div>
          
          <div class="footer">
            <p><strong>Raghav Mahajan</strong></p>
            <p>Full Stack Developer</p>
            <div class="social-links">
              <a href="https://github.com/raghv-m">GitHub</a> •
              <a href="https://linkedin.com/in/raghav-mahajan-17611b24b">LinkedIn</a> •
              <a href="https://instagram.com/ragh.v_">Instagram</a>
            </div>
            <p style="margin-top: 16px; font-size: 12px; color: #9ca3af;">
              © ${new Date().getFullYear()} Raghav Mahajan. Based in Edmonton, AB, Canada
            </p>
          </div>
        </div>
      </body>
      </html>
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
    subject: "Thanks for contacting me! - Raghav Mahajan",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for your message</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #374151;
            background-color: #f9fafb;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
          }
          .header p {
            margin: 8px 0 0 0;
            opacity: 0.9;
            font-size: 16px;
          }
          .content {
            padding: 40px 30px;
          }
          .message {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 24px;
            margin: 20px 0;
            text-align: center;
          }
          .message h2 {
            color: #1f2937;
            margin: 0 0 16px 0;
            font-size: 20px;
          }
          .message p {
            color: #4b5563;
            margin: 0 0 16px 0;
            font-size: 16px;
          }
          .signature {
            border-top: 2px solid #e5e7eb;
            padding-top: 20px;
            margin-top: 20px;
            text-align: center;
          }
          .signature p {
            margin: 4px 0;
            color: #6b7280;
          }
          .footer {
            background-color: #f3f4f6;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .footer h3 {
            color: #1f2937;
            margin: 0 0 16px 0;
            font-size: 18px;
          }
          .social-links {
            margin: 20px 0;
          }
          .social-links a {
            display: inline-block;
            margin: 0 12px;
            color: #667eea;
            text-decoration: none;
            font-weight: 500;
            padding: 8px 16px;
            background-color: white;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            transition: all 0.2s;
          }
          .social-links a:hover {
            background-color: #667eea;
            color: white;
            transform: translateY(-1px);
          }
          .portfolio-link {
            display: inline-block;
            margin-top: 16px;
            padding: 12px 24px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: transform 0.2s;
          }
          .portfolio-link:hover {
            transform: translateY(-2px);
          }
          .copyright {
            margin-top: 20px;
            font-size: 12px;
            color: #9ca3af;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>👋 Hi ${contactData.name}!</h1>
            <p>Thank you for reaching out through my portfolio</p>
          </div>
          
          <div class="content">
            <div class="message">
              <h2>Message Received ✅</h2>
              <p>I've received your message and I'll get back to you as soon as possible!</p>
              <p>I typically respond within 24 hours during business days.</p>
            </div>
            
            <div class="signature">
              <p><strong>Best regards,</strong></p>
              <p style="font-size: 18px; color: #1f2937; margin: 8px 0;">Raghav Mahajan</p>
              <p style="color: #6b7280;">Full Stack Developer</p>
            </div>
          </div>
          
          <div class="footer">
            <h3>Let's Connect</h3>
            <div class="social-links">
              <a href="https://github.com/raghv-m">GitHub</a>
              <a href="https://linkedin.com/in/raghav-mahajan-17611b24b">LinkedIn</a>
              <a href="https://instagram.com/ragh.v_">Instagram</a>
            </div>
            
            <a href="https://www.raghv.dev" class="portfolio-link">
              🌐 Visit My Portfolio
            </a>
            
            <div class="copyright">
              <p>© ${new Date().getFullYear()} Raghav Mahajan. Based in Edmonton, AB, Canada</p>
            </div>
          </div>
        </div>
      </body>
      </html>
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
