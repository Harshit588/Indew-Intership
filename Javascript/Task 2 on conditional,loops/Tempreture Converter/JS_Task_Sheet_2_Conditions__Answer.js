// Question 1 -> Temperature Converter - Convert Celsius to Fahrenheit and categorize the weather

const temperature = 20; // Celsius
const celsius = parseFloat(temperature);
const fahrenheit = (celsius * 9 / 5) + 32;
let weatherCategory = "";
if (celsius < 0) {
    weatherCategory = "Freezing";
}
else if (celsius >= 0 && celsius <= 15) {
    weatherCategory = "Cold";
} else if (celsius > 15 && celsius <= 25) {
    weatherCategory = "Warm";
} else {
    weatherCategory = "Hot";
}
console.log("Answer of Q No. 1:", `Temperature in Fahrenheit: ${fahrenheit}, Weather Category: ${weatherCategory}`);
