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
      <div className="fee-structure-container mx-auto max-w-4xl py-6 px-4 flex justify-center">
        <p className="text-lg text-black text-center">
          Click{" "}
          <a
            href={feeStructureUrl} // Fallback if not loaded// Fallback if not loaded
            download="fee_structure.pdf"
            className="inline-flex items-center px-4 py-2 text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 hover:text-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            <svg
              className="w-5 h-5 mr-2"
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
          </a>{" "}
          to get the fee details.
        </p>
      </div>
      <AdmissionForm />
    </>
  );
};

export default Admission;