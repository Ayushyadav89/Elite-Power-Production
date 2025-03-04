import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,  // The service email
    to: options.email,        // The user's email
    subject: options.subject,
    text: `${options.message} \n\nName of Customer: ${options.name} \n\nEmail of Customer Who Sent The Message: ${options.userEmail} \n\nMobile Number of Customer: ${options.mobile}`,  // Include the customer's email in the message body
  };
  await transporter.sendMail(mailOptions);
};