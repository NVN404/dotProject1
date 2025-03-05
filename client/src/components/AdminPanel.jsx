import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import HeaderForOthers from "./HeaderForOthers";

const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";
const supabase = createClient(
    "https://hdxtuvuiwsmeflrzfyzy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkeHR1dnVpd3NtZWZscnpmeXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjIzMDQsImV4cCI6MjA1NTg5ODMwNH0.3psdSi8Dv3-Y2_u9_iMYmrKeFq2yyHZjXCX0xUuMNdE"
);
const AdminPanel = () => {
    const [notices, setNotices] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNotices = async () => {
            const { data, error } = await supabase.from("notices").select("*");
            if (error) console.error("Error fetching notices:", error);
            else setNotices(data || []);
            setLoading(false);
        };

        const fetchGallery = async () => {
            const { data, error } = await supabase.from("gallery").select("*");
            if (error) console.error("Error fetching gallery images:", error);
            else setGalleryImages(data || []);
        };

        fetchNotices();
        fetchGallery();
    }, []);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            setPreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleAddNotice = async () => {
        if (!title || !content) return alert("Title and content are required!");

        let imageUrl = null;
        if (image) {
            const filePath = `notices/${Date.now()}_${image.name}`;
            const { data, error } = await supabase.storage.from("notices").upload(filePath, image);

            if (error) {
                console.error("Error uploading image:", error);
                return;
            }

            imageUrl = supabase.storage.from("notices").getPublicUrl(filePath).data.publicUrl;
        }

        const { data, error } = await supabase
            .from("notices")
            .insert([{ title, content, image_url: imageUrl }])
            .select("*")
            .single();

        if (error) {
            console.error("Error adding notice:", error);
            return;
        }

        setNotices((prev) => [...prev, data]);
        setTitle("");
        setContent("");
        setImage(null);
        setPreview(null);
    };

    const handleDeleteNotice = async (id) => {
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

    // 🖼 Gallery Upload Handler
    const handleGalleryUpload = async () => {
        if (!image) {
            alert("No image selected!");
            return;
        }
        setUploading(true);

        const filePath = `${Date.now()}-${image.name}`;
        const { data, error } = await supabase.storage.from("gallery").upload(filePath, image);

        if (error) {
            console.error("Error uploading gallery image:", error);
            alert("Failed to upload image.");
            setUploading(false);
            return;
        }

        const publicUrl = supabase.storage.from("gallery").getPublicUrl(filePath).data.publicUrl;

        const { error: dbError } = await supabase.from("gallery").insert([{ image_url: publicUrl }]);

        if (dbError) {
            console.error("Database error:", dbError.message);
            alert("Failed to save image to database.");
        } else {
            alert("Image uploaded successfully!");
            setGalleryImages((prev) => [...prev, { image_url: publicUrl }]);
        }

        setImage(null);
        setPreview(null);
        setUploading(false);
    };

    return (
        <div className="bg-gray-100 min-h-screen mt-[7em] md:mt-[9em]">
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
                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input type="file" accept="image/*" onChange={handleImageChange}
                            className="flex-1 p-3 border border-gray-300 rounded-lg"
                        />
                        <button onClick={handleAddNotice}
                            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-500 transition w-full md:w-auto"
                        >
                            Add Notice
                        </button>
                    </div>
                </div>

                {/* Notices List */}
                <div className="bg-white p-4 sm:p-6 mt-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Notices</h3>
                    {loading ? (
                        <div className="flex justify-center items-center py-6">
                            <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
                        </div>
                    ) : notices.length > 0 ? (
                        <ul className="space-y-4">
                            {notices.map((notice) => (
                                <li key={notice.id} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                    <h4 className="text-lg font-semibold text-gray-900">{notice.title}</h4>
                                    <p className="text-gray-700">{notice.content}</p>
                                    {notice.image_url && (
                                        <img src={notice.image_url} alt="Notice"
                                            className="mt-2 rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    )}
                                    <button onClick={() => handleDeleteNotice(notice.id)}
                                        className="bg-red-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-red-600 transition"
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

                {/* Gallery Upload Section */}
                <div className="bg-white p-4 sm:p-6 mt-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Upload to Gallery</h3>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {preview && <img src={preview} alt="Preview" className="w-40 mt-2 rounded" />}
                    <button onClick={handleGalleryUpload} disabled={uploading}
                        className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                    >
                        {uploading ? "Uploading..." : "Upload to Gallery"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;