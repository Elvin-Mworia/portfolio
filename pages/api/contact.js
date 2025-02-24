import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });
  const user=process.env.EMAIL_USER
  const password=process.env.EMAIL_PASS
  console.log(user);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: user, 
        pass: password, 
      },
    })

    await transporter.sendMail({
      from: email,
      to:user ,
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email" });
  }
}
