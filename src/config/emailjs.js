// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from Account settings
// 6. Replace the values below with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
}

// Check if EmailJS is properly configured
export const isEmailJSConfigured = () => {
  return (
    emailjsConfig.serviceId !== 'YOUR_SERVICE_ID' &&
    emailjsConfig.templateId !== 'YOUR_TEMPLATE_ID' &&
    emailjsConfig.publicKey !== 'YOUR_PUBLIC_KEY' &&
    emailjsConfig.serviceId &&
    emailjsConfig.templateId &&
    emailjsConfig.publicKey
  )
}

// Example template variables you can use in your EmailJS template:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{subject}} - Email subject
// {{message}} - Email message
// {{to_email}} - Your email (waminbroo@gmail.com)

// Sample EmailJS template:
/*
Subject: New Contact Form Message: {{subject}}

Hello Amin,

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
*/
