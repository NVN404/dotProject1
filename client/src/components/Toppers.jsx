import React, { useState, useEffect } from "react";
import supabase from "../../supabaseClient";

const TopperPage = () => {
  const [banner, setBanner] = useState(null); // Changed to null since we expect a single object
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const { data, error } = await supabase
          .from("banner")
          .select("*")
          .order("id", { ascending: false }) // Order by id descending to get latest
          .limit(1) // Limit to 1 result
          .single(); // Get a single object instead of an array

        if (error) {
          console.error("Error fetching banner:", error);
        } else {
          setBanner(data || null);
        }
      } catch (error) {
        console.error("Error in fetchBanner:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  return (
    <div className="w-full p-[1em] lg:p-[2em] bg-background h-[auto]">
      <p className="text-xl md:text-3xl font-extrabold text-center font-helvetica text-white mb-4 md:mb-6">
        ⭐⭐⭐ACADEMIC STARS⭐⭐⭐
      </p>
      {loading ? (
        <div className="w-[100%] h-[17em] md:h-auto bg-gray-200 animate-pulse" />
      ) : banner ? (
        <img
          src={banner.file_url} // Changed to image_url to match your database structure
          alt="Academic Stars Banner"
          className="w-[100%] h-[17em] md:h-auto mb-4 rounded-lg shadow-md"
          draggable={false}
        />
      ) : (
        <div className="w-[100%] h-[17em] md:h-auto bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">No banner image available</p>
        </div>
      )}
    </div>
  );
};

export default TopperPage;