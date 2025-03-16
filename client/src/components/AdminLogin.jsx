import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderForOthers from "./HeaderForOthers";
import supabase from "../../supabaseClient";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { AdminContext } from "./context/AdminContext";

const AdminLogin = () => {
    const [password, setPassword] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {login,setLogin} = useContext(AdminContext);

    const handleLogin = () => {
        if (enteredPassword === password) {
            setLogin(true);
            setTimeout(() => navigate("/admin"), 200);
        } else {
            alert("Incorrect Password!");
        }
    };

    useEffect(() => {
        const fetchPassword = async () => {
            const { data, error } = await supabase
                .from("admin")
                .select("password");
            if (error) {
                console.error("Error fetching password:", error);
            } else if (data.length > 0) {
                setPassword(data[0].password);
            }
        };

        fetchPassword();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <HeaderForOthers />
            <div className="flex flex-1 items-center justify-center p-4">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Admin Login</h2>
                    <div className="relative mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            value={enteredPassword}
                            onChange={(e) => setEnteredPassword(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        >
                            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                        </button>
                    </div>
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