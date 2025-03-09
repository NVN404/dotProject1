import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import HeaderForOthers from "./HeaderForOthers";

const supabase = createClient(
    "https://hdxtuvuiwsmeflrzfyzy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkeHR1dnVpd3NtZWZscnpmeXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjIzMDQsImV4cCI6MjA1NTg5ODMwNH0.3psdSi8Dv3-Y2_u9_iMYmrKeFq2yyHZjXCX0xUuMNdE"
); 
const Dashboard = () => {
    const navigate = useNavigate();
    const [galleryImages, setGalleryImages] = useState([]);
    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [uploading, setUploading] = useState(false);

    const [notices, setNotices] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [noticeImage, setNoticeImage] = useState(null);
    const [noticePreview, setNoticePreview] = useState(null);

    useEffect(() => {
        fetchGallery();
        fetchNotices();
    }, []);

    // Fetch gallery images
    const fetchGallery = async () => {
        const { data, error } = await supabase.from("gallery").select("*");
        if (error) console.error("Error fetching gallery:", error);
        else setGalleryImages(data || []);
    };

    // Fetch notices
    const fetchNotices = async () => {
        const { data, error } = await supabase.from("notices").select("*");
        if (error) console.error("Error fetching notices:", error);
        else setNotices(data || []);
    };

 // Handle multiple image selection
 const handleImageChange = (e, type) => {
    if (type === "gallery") {
        const files = Array.from(e.target.files);
        setImages(files);
        setPreviews(files.map((file) => URL.createObjectURL(file)));
    } else {
        if (e.target.files[0]) {
            setNoticeImage(e.target.files[0]);
            setNoticePreview(URL.createObjectURL(e.target.files[0]));
        }
    }
};

    // Upload Image to Gallery
    const handleGalleryUpload = async () => {
        if (images.length === 0) return alert("No images selected!");
        setUploading(true);

        const uploadedImages = [];

        for (const image of images) {
            const filePath = `gallery/${Date.now()}-${image.name}`;
            const { data, error } = await supabase.storage.from("gallery").upload(filePath, image);

            if (error) {
                console.error("Upload error:", error);
                alert("Failed to upload image: " + image.name);
                continue;
            }

            const publicUrl = supabase.storage.from("gallery").getPublicUrl(filePath).data.publicUrl;
            uploadedImages.push({ image_url: publicUrl });
        }

        if (uploadedImages.length > 0) {
            const { data, error } = await supabase.from("gallery").insert(uploadedImages).select("*");
            if (error) console.error("DB error:", error);
            else setGalleryImages((prev) => [...prev, ...data]);
        }

        setImages([]);
        setPreviews([]);
        setUploading(false);
    };

    // Delete Gallery Image
    const handleDeleteGalleryImage = async (id, imageUrl) => {
        const fileName = imageUrl.split("/gallery/")[1];

        await supabase.storage.from("gallery").remove([`gallery/${fileName}`]);
        await supabase.from("gallery").delete().eq("id", id);

        setGalleryImages((prev) => prev.filter((img) => img.id !== id));
    };

    // Upload Notice
    const handleAddNotice = async () => {
        if (!title.trim() || !content.trim()) return alert("Title and content are required!");

        let noticeImageUrl = "";
        if (noticeImage) {
            const filePath = `notices/${Date.now()}-${noticeImage.name}`;
            const { data, error } = await supabase.storage.from("notices").upload(filePath, noticeImage);
            if (error) {
                console.error("Upload error:", error);
                alert("Failed to upload notice image.");
                return;
            }
            noticeImageUrl = supabase.storage.from("notices").getPublicUrl(filePath).data.publicUrl;
        }

        const { data, error } = await supabase.from("notices").insert([{ title, content, image_url: noticeImageUrl }]).select("*").single();
        if (error) console.error("DB error:", error);
        else {
            setNotices((prev) => [...prev, data]);
            setTitle("");
            setContent("");
            setNoticeImage(null);
            setNoticePreview(null);
        }
    };

    // Delete Notice
    const handleDeleteNotice = async (id, imageUrl) => {
        if (imageUrl) {
            const fileName = imageUrl.split("/notices/")[1];
            await supabase.storage.from("notices").remove([`notices/${fileName}`]);
        }
        await supabase.from("notices").delete().eq("id", id);
        setNotices((prev) => prev.filter((notice) => notice.id !== id));
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
        <HeaderForOthers />
            <div className="flex w-full mt-[10em] md:mt-[11em]">
                <h2 className=" text-2xl font-extrabold text-gray-700 text-center font-helvetica">ADMIN DASHBOARD</h2>
                <button className="border border-red-600 px-12 py-6 rounded-3xl bg-red-600 text-white text-2xl">Logout</button>
            </div>

            {/* Upload Image to Gallery */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Upload to Gallery</h3>
                <input type="file" accept="image/*" multiple onChange={(e) => handleImageChange(e, "gallery")} className="p-3 border rounded-lg" />
                <div className="grid grid-cols-4 gap-2 mt-2">
                    {previews.map((src, index) => (
                        <img key={index} src={src} alt="Preview" className="w-20 h-20 rounded" />
                    ))}
                </div>
                <button onClick={handleGalleryUpload} disabled={uploading} className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg mt-3">
                    {uploading ? "Uploading..." : "Upload"}
                </button>
            </div>

            {/* Gallery Images */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image) => (
                        <div key={image.id} className="relative">
                            <img src={image.image_url} alt="Gallery" className="rounded-lg shadow-md w-full h-auto" />
                            <button onClick={() => handleDeleteGalleryImage(image.id, image.image_url)} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg text-sm">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add Notice */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Notice</h3>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="p-3 border rounded-lg w-full mb-3" />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="p-3 border rounded-lg w-full mb-3"></textarea>
                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "notice")} className="p-3 border rounded-lg w-full mb-3" />
                {noticePreview && <img src={noticePreview} alt="Notice Preview" className="w-20 h-20 mt-2 rounded" />}
                <button onClick={handleAddNotice} className="px-5 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg mt-3">Add Notice</button>
            </div>

            {/* Notices */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Notices</h3>
                {notices.map((notice) => (
                    <div key={notice.id} className="border p-4 rounded-lg mb-4">
                        <h4 className="font-bold">{notice.title}</h4>
                        <p>{notice.content}</p>
                        {notice.image_url && <img src={notice.image_url} alt="Notice" className="w-40 mt-2" />}
                        <button onClick={() => handleDeleteNotice(notice.id, notice.image_url)} className="bg-red-500 text-white px-3 py-1 rounded mt-2">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;