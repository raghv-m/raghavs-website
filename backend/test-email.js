require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('🧪 Testing SMTP Connection...\n');

// Log configuration (without password)
console.log('📧 SMTP Configuration:');
console.log('  Host:', process.env.SMTP_HOST);
console.log('  Port:', process.env.SMTP_PORT);
console.log('  User:', process.env.SMTP_USER);
console.log('  From Email:', process.env.FROM_EMAIL);
console.log('  Password length:', process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 'undefined');
console.log('  Password format:', process.env.SMTP_PASS ? `"${process.env.SMTP_PASS}"` : 'undefined');
console.log('');

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Test connection
async function testConnection() {
  try {
    console.log('🔗 Testing connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
    
    console.log('\n📤 Testing email send...');
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.DESTINATION_EMAIL,
      subject: 'Test Email from Portfolio Backend',
      text: 'This is a test email to verify SMTP configuration is working correctly.',
      html: '<h1>Test Email</h1><p>This is a test email to verify SMTP configuration is working correctly.</p>'
    });
    
    console.log('✅ Test email sent successfully!');
    console.log('  Message ID:', info.messageId);
    console.log('  Response:', info.response);
    
  } catch (error) {
    console.error('❌ SMTP Test Failed:');
    console.error('  Error:', error.message);
    console.error('  Code:', error.code);
    console.error('  Command:', error.command);
    
    if (error.code === 'EAUTH') {
      console.error('\n💡 Authentication failed. Please check:');
      console.error('  1. Your email address is correct');
      console.error('  2. Your app password is correct (should be 16 characters with spaces)');
      console.error('  3. 2-Factor Authentication is enabled on your Google account');
      console.error('  4. App password is generated for "Mail" application');
    } else if (error.code === 'ECONNECTION') {
      console.error('\n💡 Connection failed. Please check:');
      console.error('  1. Your internet connection');
      console.error('  2. SMTP_HOST is set to "smtp.gmail.com"');
      console.error('  3. SMTP_PORT is set to 587');
    }
  }
}

testConnection(); 