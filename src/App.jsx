import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import ATMOperations from "./components/ATMOperations";
import Receipt from "./components/Receipt";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [balance, setBalance] = useState(50000); // Default balance
  const [receipt, setReceipt] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center">
      {!isAuthenticated ? (
        <LoginForm onLogin={() => setIsAuthenticated(true)} />
      ) : receipt ? (
        <Receipt receipt={receipt} />
      ) : (
        <ATMOperations
          balance={balance}
          setBalance={setBalance}
          setReceipt={setReceipt}
        />
      )}
    </div>
  );
};

export default App;
