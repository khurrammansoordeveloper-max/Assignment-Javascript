// // 1. Take input from the user (returns a string)
// let input = prompt("Enter a number:");

// // 2. Convert the input to a number
// let number = Number(input);

// // 3. Check the logic
// if (number % 2 === 0) {
//     console.log(number + " is Even");
// } else {
//     console.log(number + " is Odd");
// }


let num = prompt("Enter a number:");
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(`The number is ${result}`);