import { useEffect, useState, useContext, useCallback } from "react";
import supabase from "../../supabaseClient";
import { RiCloseLargeLine } from "react-icons/ri";
import HeaderForOthers from "./HeaderForOthers";
import Panel from "./Panel";
import { SelectedNoticeContext } from "./context/SelectedNoticeContext";

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const { selectedNoticeId, setSelectedNoticeId } = useContext(
    SelectedNoticeContext
  );

  const fetchNotices = useCallback(async () => {
    const { data, error } = await supabase.from("notices").select("*");
    if (error) {
      console.error("Error fetching notices:", error);
    } else {
      setNotices(data.reverse());
    }
  }, []);

  useEffect(() => {
    fetchNotices();
  }, [fetchNotices]);

  return (
    <div>
      <HeaderForOthers />
      <div className="mt-[7em] md:mt-[9em]">
        <Panel src="/gal12.jpg" content="Circulars" />

        <div className="flex flex-col items-center py-10 px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-3xl p-6 sm:p-8 bg-background rounded-3xl shadow-2xl border border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-6">
              <span className="text-white text-4xl sm:text-5xl font-[Helvetica]">
                NOTICE BOARD
              </span>
            </h2>
            <div className="h-[55dvh] overflow-y-auto p-4 sm:p-5 bg-gray-50 rounded-xl shadow-inner border border-gray-300 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {notices.length ? (
                <ul className="space-y-4 sm:space-y-5">
                  {notices.map(({ id, title, content, image_url }) => (
                    <li
                      key={id}
                      className="p-4 bg-white rounded-xl shadow-md border-l-4 border-background"
                    >
                      <h3
                        className="font-bold text-background text-md sm:text-lg cursor-pointer hover:underline"
                        onClick={() => setSelectedNoticeId(id)}
                      >
                        {title}
                      </h3>

                      {selectedNoticeId === id && (
                        <div className="mt-2 relative">
                          <p>{content}</p>
                          {image_url && (
                            <img
                              src={image_url}
                              alt="Notice"
                              className="rounded-lg shadow-md max-w-full h-auto"
                            />
                          )}
                          <button
                            className="absolute top-1 right-1 rounded-full shadow-md bg-background text-white p-2 hover:bg-green-500 transition duration-300"
                            onClick={() => setSelectedNoticeId(null)}
                          >
                            <RiCloseLargeLine size="16" />
                          </button>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-500 italic">
                  No notices available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
