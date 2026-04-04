// 1. Ask the user for their name
const userName = prompt("What is your name?");

// 2. Ask the user for their age
// Note: prompt() always returns a string, even if they type a number!
const userAge = prompt("How old are you?");

// 3. Create the greeting message
// Using a Template Literal (backticks) to inject the variables easily
const greeting = `Hello, ${userName}! You are ${userAge} years old.`;

// 4. Display the message in the console
console.log(greeting);

// 5. Display the message in a popup alert
alert(greeting);