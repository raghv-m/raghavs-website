const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Send email function with proper error handling
const sendEmail = async (contactData) => {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.FROM_EMAIL || process.env.SMTP_USER,
    to: process.env.DESTINATION_EMAIL || 'raaghvv0508@gmail.com',
    subject: `Portfolio Contact: ${contactData.subject}`,
    text: `
New contact form submission from your portfolio website:

Name: ${contactData.name}
Email: ${contactData.email}
Subject: ${contactData.subject}
Message: ${contactData.message}

Timestamp: ${contactData.timestamp}
IP Address: ${contactData.ip}
User Agent: ${contactData.userAgent}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${contactData.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="font-size: 12px; color: #666; border-top: 1px solid #ddd; padding-top: 10px;">
          <p><strong>Timestamp:</strong> ${contactData.timestamp}</p>
          <p><strong>IP Address:</strong> ${contactData.ip}</p>
          <p><strong>User Agent:</strong> ${contactData.userAgent}</p>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('📧 Email sending failed:', error);
    throw new Error(`Email sending failed: ${error.message}`);
  }
};

// Contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'message']
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Prepare contact data
    const contactData = {
      id: Date.now(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject?.trim() || 'Portfolio Contact',
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: req.ip,
      userAgent: req.get('User-Agent')
    };

    // Log the contact submission
    console.log('📧 New contact submission:', {
      id: contactData.id,
      name: contactData.name,
      email: contactData.email,
      subject: contactData.subject,
      timestamp: contactData.timestamp
    });

    // Send email notification
    let emailResult = null;
    try {
      emailResult = await sendEmail(contactData);
      console.log('✅ Email notification sent successfully');
    } catch (emailError) {
      console.error('❌ Email notification failed:', emailError.message);
      // Don't fail the entire request if email fails
      // In production, you might want to queue failed emails for retry
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      data: {
        id: contactData.id,
        timestamp: contactData.timestamp,
        emailSent: emailResult?.success || false
      }
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      error: 'Failed to submit contact form',
      message: 'Please try again later'
    });
  }
});

// Get contact statistics (for admin dashboard)
router.get('/stats', async (req, res) => {
  try {
    // In production, this would fetch from database
    const stats = {
      totalSubmissions: 0,
      thisMonth: 0,
      thisWeek: 0,
      today: 0
    };

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({
      error: 'Failed to fetch contact statistics'
    });
  }
});

module.exports = router; 