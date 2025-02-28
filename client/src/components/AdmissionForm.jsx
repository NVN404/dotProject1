"use client";
import { useState, useContext, useRef, useEffect } from "react";
import { AdmissionContext } from "./context/AdmissionContext";

const AdmissionForm = () => {
    const { openAdmissionForm, setOpenAdmissionForm } = useContext(AdmissionContext);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const formRef = useRef(null); // Ref to track the form container

    // Close form when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                setOpenAdmissionForm(false);
            }
        };

        if (openAdmissionForm) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openAdmissionForm]);

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
            {openAdmissionForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div ref={formRef} className="bg-[#2973B2] p-8 md:p-10 rounded-lg w-80 md:w-[30rem]">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">ADMISSION ENQUIRY</h2>
                        <form onSubmit={handleSubmit} className="space-y-6 text-black">
                            <input type="text" name="name" placeholder="Your Name" spellCheck="false" className="w-full p-2 border rounded-lg focus:outline-none" onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Your Email" spellCheck="false" className="w-full p-2 border rounded-lg focus:outline-none" onChange={handleChange} required />
                            <input type="tel" name="phone" placeholder="Phone Number" spellCheck="false" className="w-full p-2 border rounded-lg focus:outline-none" onChange={handleChange} required />
                            <textarea name="message" placeholder="Message" spellCheck="false" className="w-full p-2 border rounded-lg focus:outline-none" onChange={handleChange} required></textarea>
                            <div className="flex justify-center">
                                {/* <button
                                    type="button"
                                    onClick={() => {
                                        console.log("Cancel button clicked");
                                        setOpenAdmissionForm(false);
                                    }}
                                    className="text-white font-semibold"
                                >
                                    Cancel
                                </button> */}
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
