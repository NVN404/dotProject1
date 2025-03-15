"use client";
import { useState } from "react";
import sendMailTo from "./Server"; // Import sendMailTo function

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = ({ target: { name, value } }) =>
        setFormData((prev) => ({ ...prev, [name]: value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMailTo("Admission Enquiry", formData);
        alert("Your admission enquiry has been sent to Dobbespet Public School!");
    };

    return (
        <div className="flex items-center justify-center bg-opacity-50 mt-8 mb-6">
            <div className="bg-background p-6 md:p-10 rounded-lg w-80 md:w-[30rem] shadow-custom">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-white">
                    ADMISSION ENQUIRY
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6 text-black">
                    {["name", "email", "phone"].map((field) => (
                        <input
                            key={field}
                            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                            name={field}
                            placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                            spellCheck="false"
                            className="w-full p-2 border rounded-lg focus:outline-none"
                            onChange={handleChange}
                            value={formData[field]}
                            required
                        />
                    ))}
                    <textarea
                        name="message"
                        placeholder="Message"
                        spellCheck="false"
                        className="w-full p-2 border rounded-lg focus:outline-none"
                        onChange={handleChange}
                        value={formData.message}
                        required
                    />
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 font-semibold"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;
