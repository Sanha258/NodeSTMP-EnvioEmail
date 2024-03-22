const nodemailer = require ("nodemailer")
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
});

// CONFIG.

const mailOptions = {
    from: {
        name: 'Teste WILLIAM',
        address: process.env.EMAIL,

    }, // SENDER - 

    to: ["williamsanha258@gmail.com"], 
    subject: " send email from GMAIL SMTP", // ASSUNTO EMAIL
    text: " send email from GMAIL SMTP", // CORPO EMAIL
    html: "<b>HELLO WORLD</b>",// CORPO DE EMAIL COM HTML
};

const sendMail = async (transporter, mailOptions) => {

    try {
        await transporter.sendMail(mailOptions);
        console.log ('mail has been sent');

    }catch(error) {
        console.log(error);

    }
};

sendMail(transporter, mailOptions);