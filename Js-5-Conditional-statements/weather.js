let weather = prompt("What's the weather like? (sunny, rainy, cold)").toLowerCase();

switch (weather) {
    case "sunny":
        console.log("Grab some shades and head to the park!");
        break;
    case "rainy":
        console.log("Perfect time for a movie and a warm cup of cocoa.");
        break;
    case "cold":
        console.log("Bundle up! It's a great day for a brisk walk or some indoor reading.");
        break;
    default:
        console.log("Not sure about that weather, but have a great day anyway!");
}
