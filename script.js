let balance = 1000;
const pinCode = "1234";

function checkPin() {
    const pinInput = document.getElementById("pin").value;
    const message = document.getElementById("message");

    if (pinInput === pinCode) {
        document.getElementById("atm-actions").style.display = "block";
        message.textContent = "Choose an action:";
    } else {
        message.textContent = "Invalid PIN. Try again.";
    }
}

function clearScreen() {
    document.getElementById("pin").value = "";
    document.getElementById("message").textContent = "Please enter your PIN:";
    document.getElementById("atm-actions").style.display = "none";
}

function withdraw() {
    let amount = prompt("Enter amount to withdraw:");
    amount = parseFloat(amount);

    if (amount <= balance && amount > 0) {
        balance -= amount;
        alert(`Withdrawal successful! New balance: Rs ${balance.toFixed(2)}`);
    } else {
        alert("Insufficient funds or invalid amount.");
    }
}

function deposit() {
    let amount = prompt("Enter amount to deposit:");
    amount = parseFloat(amount);

    if (amount > 0) {
        balance += amount;
        alert(`Deposit successful! New balance: Rs ${balance.toFixed(2)}`);
    } else {
        alert("Invalid amount.");
    }
}

function checkBalance() {
    alert(`Your current balance is: Rs ${balance.toFixed(2)}`);
}

function exit() {
    document.getElementById("atm-actions").style.display = "none";
    document.getElementById("pin").value = "";
    document.getElementById("message").textContent = "Thank you for using the ATM!";
}
