let condition = prompt("Enter weather (sunny, rainy, cold):").toLowerCase();

if (condition === "sunny") {
    alert("Time for the beach!");
} else if (condition === "rainy") {
    alert("Don't forget your umbrella!");
} else if (condition === "cold") {
    alert("Wear a thick jacket!");
} else {
    alert("Stay safe, whatever the weather!");
}