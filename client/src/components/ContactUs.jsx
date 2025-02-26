import React from "react";
import HeaderForOthers from "./HeaderForOthers";
import MapComponent from "./MapComponent";

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen">
      <HeaderForOthers />
      <div className="grid grid-cols-1 lg:grid-cols-2  p-6">
        
        {/* Map (Appears on Top for Mobile) */}
        <div className="h-[300px] md:h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-lg">
          <MapComponent />
        </div>

        {/* Contact Form */}
        <div className="bg-[#2973B2] text-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <form className="space-y-4 text-black">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              spellCheck="false"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              spellCheck="false"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              spellCheck="false"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              spellCheck="false"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 transition-all text-white px-6 py-3 rounded-lg font-semibold shadow-md"
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
