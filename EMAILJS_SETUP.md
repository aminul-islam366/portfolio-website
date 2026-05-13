# EmailJS Setup Instructions

Follow these steps to set up EmailJS for your contact form:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

Hello Amin,

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
You can reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdefghij`)
3. Copy it for use in your application

## 5. Configure Environment Variables (Recommended)

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your actual credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=abcdefghij
   ```

## Alternative: Direct Configuration

If you prefer not to use environment variables, edit `src/config/emailjs.js`:

```javascript
export const emailjsConfig = {
  serviceId: 'service_abc123',
  templateId: 'template_xyz789',
  publicKey: 'abcdefghij',
}
```

## 6. Test the Form

1. Restart your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email (waminbroo@gmail.com) for the message

## Troubleshooting Common Issues:

### "The Public Key is invalid" Error

- Double-check your public key from EmailJS dashboard
- Make sure there are no extra spaces or characters
- Verify you're using the public key, not the private key

### "Service ID not found" Error

- Verify your service ID is correct
- Make sure your email service is active in EmailJS dashboard

### "Template not found" Error

- Check your template ID is correct
- Ensure your template is saved and published

### Form submits but no email received

- Check your spam folder
- Verify your email service is properly connected
- Test with EmailJS's test feature in their dashboard

## Template Variables Available:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Email subject
- `{{message}}` - Email message content
- `{{to_email}}` - Your email address
- `{{reply_to}}` - Reply-to email address

## Security Notes:

- Your EmailJS public key is safe to use in client-side code
- EmailJS handles security and prevents spam through their service
- Environment variables keep your credentials organized and secure
- Never commit `.env.local` to version control (it's in .gitignore)
