import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Entered password:", password); // Debugging
        if (password.trim() === "root") {
            localStorage.setItem("admin", "true");
            navigate("/admin");
        } else {
            alert("Incorrect Password!");
        }
    };


    return (
        <div className="p-5 text-center">
            <h2>Admin Login</h2>
            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded"
            />
            <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 ml-2">Login</button>
        </div>
    );
};

export default AdminLogin;
