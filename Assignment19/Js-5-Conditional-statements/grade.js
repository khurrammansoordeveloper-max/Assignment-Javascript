
// if (isNaN(marks)) {
//     console.log("That's not a valid number!");
// } else {
//     // Put the rest of your if/else code here
// }
// 1. Get marks from the user
let marks = prompt("Enter your marks (0-100):");

// 2. Convert string input to a number
marks = Number(marks);

// 3. Determine the grade using if...else if
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}