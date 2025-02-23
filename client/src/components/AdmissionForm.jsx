"use client";
import { useState } from "react";

const AdmissionForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const toggleModal = () => setIsOpen(!isOpen);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Email Sent Successfully!");
            setIsOpen(false);
            setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
            alert("Error sending email.");
        }
    };

    return (
        <>
            <button onClick={toggleModal} className="bg-blue-600 text-white px-4 py-2 rounded">
                Admission Inquiry
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-80">
                        <h2 className="text-xl font-bold mb-4">Admission Inquiry</h2>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border" onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Your Email" className="w-full p-2 border" onChange={handleChange} required />
                            <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-2 border" onChange={handleChange} required />
                            <textarea name="message" placeholder="Message" className="w-full p-2 border" onChange={handleChange} required></textarea>
                            <div className="flex justify-between">
                                <button type="button" onClick={toggleModal} className="text-gray-500">Cancel</button>
                                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdmissionForm;
