import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import HeaderForOthers from "./HeaderForOthers";

// Initialize Supabase Client
const supabaseUrl = "https://hdxtuvuiwsmeflrzfyzy.supabase.co"; // Replace with actual URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkeHR1dnVpd3NtZWZscnpmeXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjIzMDQsImV4cCI6MjA1NTg5ODMwNH0.3psdSi8Dv3-Y2_u9_iMYmrKeFq2yyHZjXCX0xUuMNdE"; // Replace with actual API Key
const supabase = createClient(supabaseUrl, supabaseKey);

export default function NoticeBoard() {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const fetchNotices = async () => {
            const { data, error } = await supabase
                .from("notices") // Your table name
                .select("*");

            if (error) {
                console.error("Error fetching notices:", error);
            } else {
                console.log("API Response:", data);
                setNotices(data);
            }
        };

        fetchNotices();
    }, []);

    return (
        <div>
            <HeaderForOthers />
            <div className="flex justify-center items-center h-min bg-[#0c3547] p-14">
            <div 
                className="relative w-[600px] max-w-full p-6 bg-[#f4e1c1] border-[6px] border-[#b07f39] rounded-xl shadow-xl"
                style={{
                    backgroundImage: "url('/path-to-paper-texture.jpg')",
                    backgroundSize: "cover",
                    backgroundBlendMode: "multiply"
                }}
            >
                {/* Decorative Pin at the Top */}
                <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-[3px] border-red-900 shadow-lg"></div>
                
                <h2 className="text-2xl font-bold text-center text-[#5a3e1b] mb-4 tracking-wide">
                    📜 Notice Board
                </h2>

                <div className="h-60 overflow-y-auto p-3 bg-[#fff7e1] rounded-md shadow-inner border border-[#d6ad60] scrollbar-thin scrollbar-thumb-[#b07f39] scrollbar-track-[#f4e1c1]">
                    {notices.length > 0 ? (
                        <ul className="space-y-2 text-[#5a3e1b] font-medium">
                            {notices.map((notice) => (
                                <li 
                                    key={notice.id} 
                                    className="p-2 border-l-4 border-[#b07f39] bg-[#fffbf2] rounded-md shadow-sm transition-all hover:bg-[#f8e4c2] hover:shadow-md"
                                >
                                    <span className="font-semibold">{notice.title}:</span> {notice.content}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center text-gray-600 italic">No notices yet.</p>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
}