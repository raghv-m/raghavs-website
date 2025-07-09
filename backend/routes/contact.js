const express = require('express');
const router = express.Router();

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

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the contact attempt
    
    // For now, we'll simulate a successful submission
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

    // Log the contact (in production, save to database)
    console.log('📧 New contact submission:', contactData);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      data: {
        id: contactData.id,
        timestamp: contactData.timestamp
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