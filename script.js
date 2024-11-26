function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9; // Added parentheses to ensure correct order of operations
}

let inputFahrenheit = prompt('Enter a number, we will convert that number from Fahrenheit to Celsius');
console.log("Input Fahrenheit: ", inputFahrenheit);

let convertedCelsius = convertToCelsius(Number(inputFahrenheit)); // Convert input to a number
console.log("Converted Celsius: ", convertedCelsius);

function createMessage(fahrenheit, celsius) {
    let message = '';
    const numFahrenheit = Number(fahrenheit); // Ensure fahrenheit is treated as a number

    if (numFahrenheit === 80) {
        message = 'What a beautiful weather!';
    } else if (numFahrenheit === 40) {
        message = 'It\'s freezing outside!';
    }
    
    return `${fahrenheit} Fahrenheit is ${celsius.toFixed(2)} Celsius. ${message}`;
}

let output = createMessage(inputFahrenheit, convertedCelsius); // Pass correct variables
console.log(output);



