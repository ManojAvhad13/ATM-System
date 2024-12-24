import React, { useRef } from "react";

const Receipt = ({ receipt }) => {
    const receiptRef = useRef();

    const handlePrint = () => {
        const printContent = receiptRef.current.innerHTML;
        const printWindow = window.open("", "_blank");
        printWindow.document.open();
        printWindow.document.write(`
            <html>
                <head>
                    <title>Receipt</title>
                    <style>
                        body { font-family: Arial, sans-serif; text-align: center; }
                        .receipt { margin: 50px; padding: 20px; border: 1px solid #ddd; border-radius: 10px; }
                    </style>
                </head>
                <body onload="window.print();window.close()">
                    <div class="receipt">${printContent}</div>
                </body>
            </html>
        `);
        printWindow.document.close();
    };

    return (
        <div ref={receiptRef} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h1 className="text-xl font-bold mb-4">Receipt</h1>
            <p className="mb-2">Date: {receipt.date}</p>
            <p className="mb-2">Current Balance: ₹{receipt.balance}</p>
            <div className="flex justify-center gap-4 mt-4">
                <button
                    onClick={handlePrint}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Print
                </button>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                    Exit
                </button>
            </div>
        </div>
    );
};

export default Receipt;
