import { useEffect, useState ,useContext} from "react";
import { createClient } from "@supabase/supabase-js";
import { RiCloseLargeLine } from "react-icons/ri";
import HeaderForOthers from "./HeaderForOthers";
import Panel from "./Panel";

import { SelectedNoticeContext } from "./context/SelectedNoticeContext";

// Initialize Supabase Client
const supabaseUrl = "https://hdxtuvuiwsmeflrzfyzy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkeHR1dnVpd3NtZWZscnpmeXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjIzMDQsImV4cCI6MjA1NTg5ODMwNH0.3psdSi8Dv3-Y2_u9_iMYmrKeFq2yyHZjXCX0xUuMNdE"; // Replace with actual API Key
const supabase = createClient(supabaseUrl, supabaseKey);

export default function NoticeBoard() {
    const [notices, setNotices] = useState([]);
    const {selectedNoticeId, setSelectedNoticeId} = useContext(SelectedNoticeContext);

    useEffect(() => {
        const fetchNotices = async () => {
            const { data, error } = await supabase
                .from("notices")
                .select("*");

            if (error) {
                console.error("Error fetching notices:", error);
            } else {
                console.log("API Response:", data);
                setNotices(data.reverse());
            }
        };

        fetchNotices();
    }, []);

    return (
        <div>
            <HeaderForOthers />
            <div className="mt-[7em] md:mt-[9em]">
                <Panel src="/gal3.jpg" content="Circulars" />
                <div className="h-[auto] flex flex-col items-center py-10 px-4 sm:px-6 md:px-8">
                    <div className="w-full max-w-3xl p-6 sm:p-8 bg-[#2973B2] rounded-3xl shadow-2xl border border-gray-200">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-6 flex items-center justify-center gap-2">
                            <span className="text-white text-4xl sm:text-5xl font-[Helvetica]">NOTICE BOARD</span>
                        </h2>
                        <div className="h-[55dvh] overflow-y-auto p-4 sm:p-5 bg-gray-50 rounded-xl shadow-inner border border-gray-300 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                            {notices.length > 0 ? (
                                <ul className="space-y-4 sm:space-y-5">
                                    {notices.map((notice) => (
                                        <li key={notice.id} className="p-4 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
                                            {/* Clickable Title */}
                                            <h3
                                                className="font-bold text-blue-700 text-md sm:text-lg cursor-pointer hover:underline"
                                                onClick={() => setSelectedNoticeId(notice.id)}
                                            >
                                                {notice.title}
                                            </h3>
                                            
                                            {/* Conditionally Render Image */}
                                            {selectedNoticeId === notice.id && (
                                                <div className="mt-2 relative">
                                                    <p>{notice.content}</p>
                                                    {notice.image_url?<img
                                                        src={notice.image_url}
                                                        alt="Notice"
                                                        className="rounded-lg shadow-md max-w-full h-auto"
                                                    />:""}
                                                    
                                                    {/* Close Button */}
                                                    <button
                                                        className="absolute top-1 right-1 rounded-full shadow-md bg-[#2973B2] text-white p-2 rounded-full hover:bg-green-500 transition duration-300 "
                                                        onClick={() => setSelectedNoticeId(null)}
                                                    >
                                                        <RiCloseLargeLine size="16" className="" />
                                                    </button>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-center text-gray-500 italic">No notices available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
