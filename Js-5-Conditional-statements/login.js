// --- LOGIN SYSTEM ---
let user = prompt("Username:");
let pass = prompt("Password:");

if (user === "admin" && pass === "12345") {
    alert("Login Successful! Welcome, Admin.");
    
    // --- GRADE CALCULATOR (Only runs if login is successful) ---
    let marks = Number(prompt("Enter your marks (0-100):"));
    if (marks >= 90) {
        alert("Grade: A+");
    } else if (marks >= 80) {
        alert("Grade: A");
    } else if (marks >= 70) {
        alert("Grade: B");
    } else {
        alert("Grade: Fail");
    }

} else {
    alert("Error: Invalid username or password.");
}

// --- EVEN OR ODD ---
let num = Number(prompt("Enter a number to check Even or Odd:"));
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

// --- WEATHER SUGGESTION ---
let weather = prompt("Weather condition? (sunny, rainy, cold)").toLowerCase();
if (weather === "sunny") {
    console.log("Go outside and play!");
} else if (weather === "rainy") {
    console.log("Stay home and code!");
} else {
    console.log("Keep warm!");
}