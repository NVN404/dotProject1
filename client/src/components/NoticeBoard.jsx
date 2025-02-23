import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client
const supabaseUrl = "https://hdxtuvuiwsmeflrzfyzy.supabase.co"; // Replace with your Supabase URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkeHR1dnVpd3NtZWZscnpmeXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjIzMDQsImV4cCI6MjA1NTg5ODMwNH0.3psdSi8Dv3-Y2_u9_iMYmrKeFq2yyHZjXCX0xUuMNdE"; // Replace with your Supabase API Key
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
        <div className="flex justify-center" style={{ backgroundImage: "url('YOUR_IMAGE_URL')", backgroundSize: "cover" }}>
            <div className="flex justify-center mt-10 mb-10">
                <div className="bg-yellow-300 w-[600px] h-[450px] rounded-lg shadow-lg p-4 border-4 border-yellow-700">
                    <h2 className="text-xl font-bold text-center mb-2">📢 Notice Board</h2>
                    <div className="h-40 overflow-auto">
                        {notices.length > 0 ? (
                            <ul className="list-disc list-inside">
                                {notices.map((notice) => (
                                    <li key={notice.id} className="py-1">{notice.title}: {notice.content}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-gray-600">No notices yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
