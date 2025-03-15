import React, { useState, useEffect } from "react";
import supabase from "../../supabaseClient";
import AdmissionForm from "./AdmissionForm";
import Panel from "./Panel";
import HeaderForOthers from "./HeaderForOthers";

const Admission = () => {
  const [feeStructureUrl, setFeeStructureUrl] = useState("");

  useEffect(() => {
    const fetchFeeStructure = async () => {
      const { data, error } = await supabase
        .from("documents")
        .select("file_url")
        .eq("name", "dobbespet public school fee structure 2025-2026.pdf") // Match your uploaded file name
        .single();

      if (error) {
        console.error("Error fetching fee structure:", error);
      } else if (data) {
        setFeeStructureUrl(data.file_url);
      }
    };

    fetchFeeStructure();
  }, []);

  return (
    <>
      <HeaderForOthers />
      <Panel src="./gal11.jpg" content="Admission" />

      {/* Main Container */}
      <div className="flex flex-col justify-around items-center py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Fee Structure Box */}
        <div className="bg-background shadow-custom rounded-lg px-3 py-6 md:py-8 md:px-12 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-center">
          <p className="text-white text-lg md:text-xl font-medium">
            Click below to download the{" "}
            <span className="font-semibold text-yellow-400">Fee Structure</span>.
          </p>

          {/* Download Button */}
          <a
            href={feeStructureUrl} // Fallback if not loaded// Fallback if not loaded
            download="fee_structure.pdf"
            className="mt-4 inline-flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 text-white font-semibold bg-gradient-to-r from-blue-500 to-background rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Fee Structure
          </a>
        </div>

        {/* Admission Form */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mt-0 sm:mt-0">
          <AdmissionForm />
        </div>

      </div>
    </>
  );
};

export default Admission;
