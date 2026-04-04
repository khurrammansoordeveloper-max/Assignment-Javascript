# ATM Simulator – Mini Project

### 🧭 **Objective**

Create a simple **ATM Simulation** program using **JavaScript** (no UI, only `prompt()` and `alert()` dialogs).

### 🧩 **Requirements**

1. **Start with a Default Balance**
    
    ```jsx
    let balance = 1000;
    ```
    
    This represents the user’s account balance.
    
2. **Ask for a PIN**
    - Use a `prompt()` to ask the user for their PIN.
    - Use a variable to store the correct PIN (e.g. `const correctPin = "1234";`).
    - If the entered PIN is **incorrect**, show an `alert("Incorrect PIN!")` and stop the program.
3. **Show the Main Menu**
    
    Once the correct PIN is entered, display a menu using a `prompt()`:
    
    ```
    let choice = prompt(
      "Welcome to JS ATM 💳\n\n" +
      "1️⃣ Check Balance\n" +
      "2️⃣ Withdraw\n" +
      "3️⃣ Deposit\n" +
      "4️⃣ Exit\n\n" +
      "Enter your choice (1-4):"
    );
    ```
    
    - Store the user’s choice in a variable.
    - Use **if...else if** or **switch** to handle each menu option.
4. **Handle Each Option**
    
    **Option 1 – Check Balance**
    
    → Show the current balance using `alert("Your balance is: $" + balance);`
    
    **Option 2 – Withdraw**
    
    → Ask how much to withdraw (`prompt()`),
    
    → If the amount is more than the balance, show `alert("Insufficient funds!")`
    
    → Otherwise, subtract it from `balance` and show `alert("Withdrawal successful! New balance: $" + balance);`
    
    **Option 3 – Deposit**
    
    → Ask how much to deposit (`prompt()`),
    
    → Add it to `balance`,
    
    → Show `alert("Deposit successful! New balance: $" + balance);`
    
    **Option 4 – Exit**
    
    → Show `alert("Thank you for using the ATM!")` and end the program.
    
5. **Invalid Input**
    
    → If the user enters anything other than 1–4, show `alert("Invalid option!")`.
    

### ✅ **Example Flow**

```
Enter PIN: 1234
→ Welcome to the ATM!
   1. Check Balance
   2. Withdraw
   3. Deposit
   4. Exit

User chooses 2 → Withdraw
Enter amount: 200
→ Withdrawal successful! New balance: $800
```