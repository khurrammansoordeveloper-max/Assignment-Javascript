// --- INITIAL SETTINGS ---
let balance = 1000;
const correctPin = "1234";

// 1. PIN AUTHENTICATION
let enteredPin = prompt("Welcome to JS ATM 💳\n\nPlease enter your PIN:");

if (enteredPin !== correctPin) {
    alert("❌ Incorrect PIN! Access Denied.");
} else {
    // 2. SHOW MAIN MENU (Only if PIN is correct)
    let choice = prompt(
        "Welcome to JS ATM 💳\n\n" +
        "1️⃣ Check Balance\n" +
        "2️⃣ Withdraw\n" +
        "3️⃣ Deposit\n" +
        "4️⃣ Exit\n\n" +
        "Enter your choice (1-4):"
    );

    // 3. HANDLE USER CHOICE
    if (choice === "1") {
        // Option 1: Check Balance
        alert("💰 Your current balance is: $" + balance);

    } else if (choice === "2") {
        // Option 2: Withdraw
        let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
        
        if (withdrawAmount > balance) {
            alert("⚠️ Insufficient funds! You only have $" + balance);
        } else if (withdrawAmount <= 0 || isNaN(withdrawAmount)) {
            alert("❌ Invalid amount entered.");
        } else {
            balance -= withdrawAmount; // Subtract from balance
            alert("✅ Withdrawal successful!\nNew balance: $" + balance);
        }

    } else if (choice === "3") {
        // Option 3: Deposit
        let depositAmount = Number(prompt("Enter amount to deposit:"));

        if (depositAmount <= 0 || isNaN(depositAmount)) {
            alert("❌ Invalid amount entered.");
        } else {
            balance += depositAmount; // Add to balance
            alert("✅ Deposit successful!\nNew balance: $" + balance);
        }

    } else if (choice === "4") {
        // Option 4: Exit
        alert("👋 Thank you for using JS ATM. Have a great day!");

    } else {
        // Invalid Input
        alert("❓ Invalid option! Please restart and choose 1-4.");
    }
}