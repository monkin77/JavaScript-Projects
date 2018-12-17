const kelvin = 273; // Actual temperature in Kelvin
const celsius = kelvin - 273;   // Actual temperature in Celsius
let Fahrenheit = celsius * (9/5) + 32; // Actual temperature in Fahrenheit
fahrenheit = Math.floor(Fahrenheit); // Rounding the temperature
Newton = celsius*(33/100);
newton = Math.floor(Newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees newton`)