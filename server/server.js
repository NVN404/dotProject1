const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "naveen96neevan@gmail.com",
            pass: "rqwh fpol fjhs naxs",
        },
    });

    const mailOptions = {
        from: "naveen96neevan@gmail.com",
        to: "manbingtwo@gmail.com", // Change this to the principal’s email
        subject: "New Admission Inquiry",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
