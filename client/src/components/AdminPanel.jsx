import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import HeaderForOthers from "./HeaderForOthers";

const supabase = createClient(
    "https://hdxtuvuiwsmeflrzfyzy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkeHR1dnVpd3NtZWZscnpmeXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjIzMDQsImV4cCI6MjA1NTg5ODMwNH0.3psdSi8Dv3-Y2_u9_iMYmrKeFq2yyHZjXCX0xUuMNdE"
);

const AdminPanel = () => {
    const [notices, setNotices] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNotices = async () => {
            const { data, error } = await supabase.from("notices").select("*");
            if (error) console.error("Error fetching notices:", error);
            else setNotices(data || []);
        };
        fetchNotices();
    }, []);

    const handleAddNotice = async () => {
        if (!title || !content) return alert("Title and content are required!");

        const { data, error } = await supabase
            .from("notices")
            .insert([{ title, content }])
            .select("*")
            .single();

        if (error) {
            console.error("Error adding notice:", error);
            return;
        }

        setNotices((prev) => [...prev, data]);
        setTitle("");
        setContent("");
    };

    const handleDelete = async (id) => {
        const { error } = await supabase.from("notices").delete().eq("id", id);

        if (error) {
            console.error("Error deleting notice:", error);
            return;
        }

        setNotices((prev) => prev.filter((notice) => notice.id !== id));
    };

    const handleLogout = () => {
        localStorage.removeItem("admin");
        navigate("/");
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <HeaderForOthers />
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-700 text-center md:text-left">Admin Panel</h2>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full md:w-auto mt-2 md:mt-0"
                    >
                        Logout
                    </button>
                </div>

                {/* Add Notice Form */}
                <div className="bg-white p-4 sm:p-6 mt-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Notice</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            placeholder="Content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            onClick={handleAddNotice}
                            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-500 transition w-full md:w-auto"
                        >
                            Add Notice
                        </button>
                    </div>
                </div>

                {/* Notices List */}
                <div className="bg-white p-4 sm:p-6 mt-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Notices</h3>
                    {notices.length > 0 ? (
                        <ul className="space-y-4">
                            {notices.map((notice) => (
                                <li
                                    key={notice.id}
                                    className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gray-50 border border-gray-200 rounded-lg"
                                >
                                    <div className="w-full">
                                        <h4 className="text-lg font-semibold text-gray-900 break-words">{notice.title}</h4>
                                        <p className="text-gray-700 break-words">{notice.content}</p>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(notice.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full md:w-auto mt-2 md:mt-0"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 text-center">No notices available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
