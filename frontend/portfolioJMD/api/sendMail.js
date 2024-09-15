const axios = require('axios');
require('dotenv').config();

module.exports = async (req, res) => {
  // Set up CORS
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000', 'https://jmoreno.dev');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS requests (pre-flight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Get data from the request body
  const { user_name, user_email, subject, message } = req.body;

  // Validate received data
  if (!user_email || !user_name || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Get environment variables
  const serviceId = process.env.EMAIL_SERVICE_ID;
  const userTemplateId = process.env.EMAIL_USER_TEMPLATE_ID;
  const myTemplateId = process.env.EMAIL_MY_TEMPLATE_ID;
  const publicKey = process.env.EMAIL_PUBLIC_KEY;
  const privateKey = process.env.EMAIL_PRIVATE_KEY;

  // Ensure all variables are defined
  if (!serviceId || !userTemplateId || !myTemplateId || !publicKey) {
    return res.status(500).json({ message: 'EmailJS configuration error' });
  }

  try {
    // Send confirmation email to the user using EmailJS REST API
    const responseUser = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: serviceId,
      template_id: userTemplateId,
      user_id: publicKey,
      template_params: {
        user_name: user_name,
        user_email: user_email,
        subject: subject,
        message: message
      },
      accessToken: privateKey
    });

    // Send the user's message to yourself using EmailJS REST API
    const responseAdmin = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: serviceId,
      template_id: myTemplateId,
      user_id: publicKey,
      template_params: {
        user_name: user_name,
        user_email: user_email,
        subject: subject,
        message: message
      },
      accessToken: privateKey
    });

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ message: 'Error sending emails', error: error.message });
  }
};
