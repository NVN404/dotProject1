import React, { useState } from "react";
import HeaderForOthers from "./HeaderForOthers";
import MapComponent from "./MapComponent";
import Panel from "./Panel";
import sendMailTo from "./Server";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMailTo("New Contact Query", formData);
    alert("Your contact query has been sent!");
    setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
  };

  return (
    <div className="w-full min-h-screen ">
      <HeaderForOthers />
      <Panel src="./gal10.jpg" content="Contact Us" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 p-6">
        {/* Map Section */}
        <div className="relative h-[350px] md:h-[500px] rounded-sm overflow-hidden shadow-2xl z-10">
          <MapComponent />
        </div>

        {/* Contact Form Section */}
        <div className="bg-background text-white p-6 md:p-8 rounded-lg shadow-custom flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl mb-4 font-extrabold font-helvetica text-center">CONTACT US</h1>
          <form className="space-y-4 text-black" onSubmit={handleSubmit}>
            {["name", "email", "phone"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                spellCheck="false"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                onChange={handleChange}
                value={formData[field]}
                required
              />
            ))}
            <textarea
              name="message"
              placeholder="Message"
              spellCheck="false"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 transition-all text-white px-6 py-3 rounded-lg font-semibold shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;