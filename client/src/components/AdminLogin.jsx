import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderForOthers from "./HeaderForOthers";

const AdminLogin = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Entered password:", password);
        if (password === "root") {
            localStorage.setItem("admin", "true");
            setTimeout(() => navigate("/admin"), 200);
        } else {
            alert("Incorrect Password!");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <HeaderForOthers />
            <div className="flex flex-1 items-center justify-center p-4">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Admin Login</h2>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                    />
                    <button
                        onClick={handleLogin}
                        className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-500 transition font-semibold"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
