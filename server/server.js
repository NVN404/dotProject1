import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "naveen96neevan@gmail.com",
        pass: "rqwh fpol fjhs naxs",
    },
});

// Endpoint for Admission Enquiry
app.post("/send-email", async (req, res) => {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
        from: "naveen96neevan@gmail.com",
        to: "nikhil.4002.50.82@gmail.com", // Change this to the principal’s email
        subject: "Admission Enquiry",
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

// Endpoint for Contact Us Queries
app.post("/contact-us", async (req, res) => {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
        from: "naveen96neevan@gmail.com",
        to: "nikhil.4002.50.82@gmail.com", // Change this to the school's email
        subject: "New Contact Query",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Query sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to send query" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
