import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://hdxtuvuiwsmeflrzfyzy.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkeHR1dnVpd3NtZWZscnpmeXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjIzMDQsImV4cCI6MjA1NTg5ODMwNH0.3psdSi8Dv3-Y2_u9_iMYmrKeFq2yyHZjXCX0xUuMNdE");

const AdminPanel = () => {
    const [notices, setNotices] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    // ✅ Fetch Notices from Supabase
    useEffect(() => {
        const fetchNotices = async () => {
            const { data, error } = await supabase.from("notices").select("*");
            if (error) console.error("Error fetching notices:", error);
            else setNotices(data || []);
        };
        fetchNotices();
    }, []);

    // ✅ Add Notice to Supabase (Fix)
    const handleAddNotice = async () => {
        if (!title || !content) return alert("Title and content are required!");

        const { data, error } = await supabase
            .from("notices")
            .insert([{ title, content }])
            .select("*") // Fetch inserted row
            .single();

        if (error) {
            console.error("Error adding notice:", error);
            return;
        }

        setNotices((prev) => [...prev, data]); // Correctly update state
        setTitle("");
        setContent("");
    };

    // ✅ Delete Notice from Supabase (Fix)
    const handleDelete = async (id) => {
        const { error } = await supabase.from("notices").delete().eq("id", id);

        if (error) {
            console.error("Error deleting notice:", error);
            return;
        }

        setNotices((prev) => prev.filter((notice) => notice.id !== id)); // Update UI correctly
    };


    // ✅ Logout
    const handleLogout = () => {
        localStorage.removeItem("admin");
        navigate("/");
    };

    return (
        <div className="p-5">
            <h2>Admin Panel</h2>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2">Logout</button>
            <div>
                <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
                <button onClick={handleAddNotice}>Add Notice</button>
            </div>
            <ul>
                {notices.length > 0 ? (
                    notices.map((notice) => (
                        <li key={notice.id}>
                            {notice.title}: {notice.content}
                            <button onClick={() => handleDelete(notice.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No notices available.</p>
                )}
            </ul>
        </div>
    );
};

export default AdminPanel;
