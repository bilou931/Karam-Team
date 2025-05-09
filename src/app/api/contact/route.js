import nodemailer from "nodemailer";
export async function POST(req) {
  console.log(process.env.EMAIL_PASS)
  console.log(process.env.EMAIL_USER)
  try {
    

    const { name, email, message } = await req.json();

    // Configuration du transporter Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Utilise Gmail, sinon configure un SMTP custom
      auth: {
        user: process.env.EMAIL_USER, // Ton email
        pass: process.env.EMAIL_PASS, // Ton mot de passe ou App Password Gmail
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Ton email où tu veux recevoir les messages
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email envoyé !" }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail:", error);
    return Response.json({ success: false, message: "Erreur d'envoi de l'email" }, { status: 500 });
  }
}
