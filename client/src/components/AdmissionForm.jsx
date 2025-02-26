"use client";
import { useState, useContext } from "react";

import { AdmissionContext } from "./context/AdmissionContext";

const AdmissionForm = () => {
    const { openAdmissionForm, setOpenAdmissionForm } = useContext(AdmissionContext);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const toggleModal = () => setOpenAdmissionForm(!openAdmissionForm);

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
            setOpenAdmissionForm(false);
            setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
            alert("Error sending email.");
        }
    };

    return (
        <>
            <li onClick={toggleModal} className="hover:underline cursor-pointer">Admissions</li>
            {openAdmissionForm && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={toggleModal} // Clicking outside closes the modal
                >
                    <div
                        className="bg-[#2973B2] p-6 rounded-lg w-80"
                        onClick={(e) => e.stopPropagation()} // Prevents click inside from closing modal
                    >
                        <h2 className="text-xl font-bold mb-4 text-center text-white">ADMISSION ENQUIRY</h2>
                        <form onSubmit={handleSubmit} className="space-y-3 text-black">
                            <input type="text" name="name" placeholder="Your Name" spellCheck="false" className="w-full p-2 border rounded-lg focus:outline-none" onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Your Email" spellCheck="false" className="w-full p-2 border rounded-lg focus:outline-none" onChange={handleChange} required />
                            <input type="tel" name="phone" placeholder="Phone Number" spellCheck="false" className="w-full p-2 border rounded-lg focus:outline-none" onChange={handleChange} required />
                            <textarea name="message" placeholder="Message" spellCheck="false" className="w-full p-2 border rounded-lg focus:outline-none" onChange={handleChange} required></textarea>
                            <div className="flex justify-between">
                                <button type="button" onClick={toggleModal} className="text-white font-semibold">Cancel</button>
                                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 font-semibold">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdmissionForm;
