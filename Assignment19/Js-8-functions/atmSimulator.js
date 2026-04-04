let balance = 1000;
const correctPin = "1234";

let enteredPin = prompt("Enter your PIN:");

if (enteredPin !== correctPin) {
  alert("Incorrect PIN!");
} else {
  let choice = prompt(
    "Welcome to JS ATM 💳\n\n" +
    "1️⃣ Check Balance\n" +
    "2️⃣ Withdraw\n" +
    "3️⃣ Deposit\n" +
    "4️⃣ Exit\n\n" +
    "Enter your choice (1-4):"
  );

  switch (choice) {
    case "1":
      alert("Your balance is: $" + balance);
      break;

    case "2":
      let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
      if (isNaN(withdrawAmount) || withdrawAmount <= 100) {
        alert("Invalid amount!");
      } else if (withdrawAmount > balance) {
        alert("Insufficient funds!");
      } else {
        balance -= withdrawAmount;
        alert("Withdrawal successful! New balance: $" + balance);
      }
      break;

    case "3":
      let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
      if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Invalid amount!");
      } else {
        balance += depositAmount;
        alert("Deposit successful! New balance: $" + balance);
      }
      break;

    case "4":
      alert("Thank you for using the ATM!");
      break;

    default:
      alert("Invalid option!");
  }
}
