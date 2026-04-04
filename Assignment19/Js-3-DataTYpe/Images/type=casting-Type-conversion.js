//This is a fantastic exercise to see how JavaScript handles the transition from "raw" user input (which is always a string) to actual, functional data types.

//In JavaScript, typecasting (or type conversion) is essential because trying to do math on a string or logic on a text value can lead to bugs.

//The Interactive Type-Classifier
//Copy and paste this into your browser's console to see it in action:


// 1. Collect User Input (All inputs start as Strings)
const rawName = prompt("Enter your Name:");
const rawAge = prompt("Enter your Age:");
const rawIsStudent = prompt("Are you a student? (Type anything for True, leave blank for False)");
const rawFavNum = prompt("Enter your Favorite Number:");
const rawNickname = prompt("Enter your Nickname:");

// 2. Convert to Correct Types (Typecasting)
const name = String(rawName);
const age = Number(rawAge);
// Boolean() turns an empty string "" into false, and text into true
const isStudent = Boolean(rawIsStudent); 
const favNum = Number(rawFavNum);
const nickname = String(rawNickname);

// 3. Display Results and their Types
console.log("--- Data Type Report ---");

console.log("Value:", name, "| Type:", typeof name);
console.log("Value:", age, "| Type:", typeof age);
console.log("Value:", isStudent, "| Type:", typeof isStudent);
console.log("Value:", favNum, "| Type:", typeof favNum);
console.log("Value:", nickname, "| Type:", typeof nickname);