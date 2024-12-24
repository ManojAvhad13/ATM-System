import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (password === "1234") {
            onLogin();
        } else {
            setError("Incorrect PIN. Please try again.");
        }
    };

    const handleClear = () => {
        setPassword("");
        setError("");
    };

    return (
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-96">
            <h1 className="text-2xl font-bold text-center mb-6">ATM System</h1>
            <div className="bg-gray-700 p-4 rounded mb-4">
                <label className="block text-sm mb-2 text-center">Please enter your PIN: <br />Pin is: 1234</label>
                <input
                    type="password"
                    placeholder="Enter PIN 1234"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="flex justify-between">
                <button
                    onClick={handleLogin}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Submit
                </button>
                <button
                    onClick={handleClear}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
