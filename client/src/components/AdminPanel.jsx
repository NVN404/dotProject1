import { useState, useEffect } from "react";
import supabase from "../../supabaseClient";
import HeaderForOthers from "./HeaderForOthers";

const Dashboard = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noticeImage, setNoticeImage] = useState(null);
  const [noticePreview, setNoticePreview] = useState(null);

  const [documents, setDocuments] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);

  useEffect(() => {
    fetchGallery();
    fetchNotices();
    fetchDocuments();
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

  // Fetch documents
  const fetchDocuments = async () => {
    const { data, error } = await supabase.from("documents").select("*");
    if (error) console.error("Error fetching documents:", error);
    else setDocuments(data || []);
  };

  // Handle multiple image selection
  const handleImageChange = (e, type) => {
    if (type === "gallery") {
      const files = Array.from(e.target.files);
      setImages(files);
      setPreviews(files.map((file) => URL.createObjectURL(file)));
    } else if (type === "notice") {
      if (e.target.files[0]) {
        setNoticeImage(e.target.files[0]);
        setNoticePreview(URL.createObjectURL(e.target.files[0]));
      }
    } else if (type === "pdf") {
      if (e.target.files[0]) {
        setPdfFile(e.target.files[0]);
        setPdfPreview(URL.createObjectURL(e.target.files[0]));
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
      const { data, error } = await supabase.storage
        .from("gallery")
        .upload(filePath, image);

      if (error) {
        console.error("Upload error:", error);
        alert("Failed to upload image: " + image.name);
        continue;
      }

      const publicUrl = supabase.storage.from("gallery").getPublicUrl(filePath)
        .data.publicUrl;
      uploadedImages.push({ image_url: publicUrl });
    }

    if (uploadedImages.length > 0) {
      const { data, error } = await supabase
        .from("gallery")
        .insert(uploadedImages)
        .select("*");
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
    if (!title.trim() || !content.trim())
      return alert("Title and content are required!");

    let noticeImageUrl = "";
    if (noticeImage) {
      const filePath = `notices/${Date.now()}-${noticeImage.name}`;
      const { data, error } = await supabase.storage
        .from("notices")
        .upload(filePath, noticeImage);
      if (error) {
        console.error("Upload error:", error);
        alert("Failed to upload notice image.");
        return;
      }
      noticeImageUrl = supabase.storage.from("notices").getPublicUrl(filePath)
        .data.publicUrl;
    }

    const { data, error } = await supabase
      .from("notices")
      .insert([{ title, content, image_url: noticeImageUrl }])
      .select("*")
      .single();
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

  // Upload PDF to Documents
  const handlePdfUpload = async () => {
    if (!pdfFile) return alert("No PDF selected!");
    setUploading(true);

    const filePath = `documents/${Date.now()}-${pdfFile.name}`;
    const { data, error } = await supabase.storage
      .from("documents")
      .upload(filePath, pdfFile);

    if (error) {
      console.error("Upload error:", error);
      alert("Failed to upload PDF.");
      setUploading(false);
      return;
    }

    const publicUrl = supabase.storage.from("documents").getPublicUrl(filePath)
      .data.publicUrl;

    const { data: dbData, error: dbError } = await supabase
      .from("documents")
      .insert([{ name: pdfFile.name, file_url: publicUrl }])
      .select("*")
      .single();

    if (dbError) {
      console.error("DB error:", dbError);
    } else {
      setDocuments((prev) => [...prev, dbData]);
    }

    setPdfFile(null);
    setPdfPreview(null);
    setUploading(false);
  };

  // Delete PDF
  const handleDeletePdf = async (id, fileUrl) => {
    const fileName = fileUrl.split("/documents/")[1];
    await supabase.storage.from("documents").remove([`documents/${fileName}`]);
    await supabase.from("documents").delete().eq("id", id);
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <HeaderForOthers />
      <h2 className="mt-[5em] md:mt-[6em] text-2xl font-extrabold text-gray-700 text-center font-helvetica">
        ADMIN DASHBOARD
      </h2>

      {/* Upload Image to Gallery */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Upload to Gallery
        </h3>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleImageChange(e, "gallery")}
          className="p-3 border rounded-lg"
        />
        <div className="grid grid-cols-4 gap-2 mt-2">
          {previews.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Preview"
              className="w-20 h-20 rounded"
            />
          ))}
        </div>
        <button
          onClick={handleGalleryUpload}
          disabled={uploading}
          className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg mt-3"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* Gallery Images */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative">
              <img
                src={image.image_url}
                alt="Gallery"
                className="rounded-lg shadow-md w-full h-auto"
              />
              <button
                onClick={() =>
                  handleDeleteGalleryImage(image.id, image.image_url)
                }
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upload PDF */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Upload Fee Structure document
        </h3>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => handleImageChange(e, "pdf")}
          className="p-3 border rounded-lg"
        />
        {pdfPreview && (
          <div className="mt-2">
            <p>{pdfFile.name}</p>
            <iframe src={pdfPreview} className="w-40 h-40" title="PDF Preview" />
          </div>
        )}
        <button
          onClick={handlePdfUpload}
          disabled={uploading}
          className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg mt-3"
        >
          {uploading ? "Uploading..." : "Upload PDF"}
        </button>
      </div>

      {/* Documents */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4"> Fee Structure Document</h3>
        {documents.map((doc) => (
          <div key={doc.id} className="border p-4 rounded-lg mb-4">
            <p>{doc.name}</p>
            <a href={doc.file_url} download className="text-blue-600 underline">
              Download
            </a>
            <button
              onClick={() => handleDeletePdf(doc.id, doc.file_url)}
              className="bg-red-500 text-white px-3 py-1 rounded mt-2 ml-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Add Notice */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Notice</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border rounded-lg w-full mb-3"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-3 border rounded-lg w-full mb-3"
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, "notice")}
          className="p-3 border rounded-lg w-full mb-3"
        />
        {noticePreview && (
          <img
            src={noticePreview}
            alt="Notice Preview"
            className="w-20 h-20 mt-2 rounded"
          />
        )}
        <button
          onClick={handleAddNotice}
          className="px-5 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg mt-3"
        >
          Add Notice
        </button>
      </div>

      {/* Notices */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Notices</h3>
        {notices.map((notice) => (
          <div key={notice.id} className="border p-4 rounded-lg mb-4">
            <h4 className="font-bold">{notice.title}</h4>
            <p>{notice.content}</p>
            {notice.image_url && (
              <img src={notice.image_url} alt="Notice" className="w-40 mt-2" />
            )}
            <button
              onClick={() => handleDeleteNotice(notice.id, notice.image_url)}
              className="bg-red-500 text-white px-3 py-1 rounded mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;