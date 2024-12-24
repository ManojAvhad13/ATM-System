import React, { useState } from "react";

const ATMOperations = ({ balance, setBalance, setReceipt }) => {
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");

    const clearInput = () => {
        setAmount(""); // Clear the input field
    };

    const handleWithdraw = () => {
        const amt = parseFloat(amount);
        if (amt > balance) {
            setMessage("Insufficient balance.");
        } else if (amt > 0) {
            setBalance(balance - amt);
            setMessage("Withdrawal successful!");
        } else {
            setMessage("Enter a valid amount.");
        }
        clearInput();
    };

    const handleDeposit = () => {
        const amt = parseFloat(amount);
        if (amt > 0) {
            setBalance(balance + amt);
            setMessage("Deposit successful!");
        } else {
            setMessage("Enter a valid amount.");
        }
        clearInput();
    };

    const handleCheckBalance = () => {
        setMessage(`Your current balance is ₹${balance}`);
        clearInput();
    };

    const handlePrintReceipt = () => {
        setReceipt({ balance, date: new Date().toLocaleString() });
        setMessage("Receipt printed successfully!");
        clearInput();
    };

    const handleExit = () => {
        window.location.reload();
    };

    return (
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-96">
            <h1 className="text-2xl font-bold text-center mb-6">ATM System</h1>

            {/* Display Available Balance */}
            <div className="bg-gray-700 text-center p-4 rounded mb-4">
                <p className="text-lg font-semibold">Available Balance: ₹{balance}</p>
            </div>

            {/* Input for Amount */}
            <div className="bg-gray-700 p-4 rounded mb-4">
                <label className="block text-sm mb-2 text-center">Choose an action:</label>
                <input
                    type="number"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
            </div>

            {/* Display Message */}
            {message && <p className="text-green-500 text-center mb-4">{message}</p>}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-between">
                <button
                    onClick={handleWithdraw}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex-1"
                >
                    Withdraw
                </button>
                <button
                    onClick={handleDeposit}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex-1"
                >
                    Deposit
                </button>
                <button
                    onClick={handleCheckBalance}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex-1"
                >
                    Check Balance
                </button>
                <button
                    onClick={handlePrintReceipt}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex-1"
                >
                    Print Receipt
                </button>
                <button
                    onClick={handleExit}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex-1"
                >
                    Exit
                </button>
            </div>
        </div>
    );
};

export default ATMOperations;
