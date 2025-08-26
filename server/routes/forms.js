const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

// transporter using env vars
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,  // ✅ match your .env
  },
});

// Custom Website Request
router.post("/custom-request", async (req, res) => {
  const { name, email, phone, description, budget, timeframe } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: "New Custom Website Request",
    text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone || "N/A"}
    Budget: ${budget || "N/A"}
    Timeframe: ${timeframe || "N/A"}
    Description: ${description}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Suggestion
router.post("/suggestion", async (req, res) => {
  const { name, email, suggestion } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: "New Section Suggestion",
    text: `
    Name: ${name}
    Email: ${email}
    Suggestion: ${suggestion}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Contact Form
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER, // send to your support inbox
    subject: "New Contact Form Message",
    text: `
    Name: ${name}
    Email: ${email}
    Message:
    ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});


module.exports = router;
