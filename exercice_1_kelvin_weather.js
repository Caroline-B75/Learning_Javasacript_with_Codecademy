const kelvin = 0; //create the variable kelvin and set it equal to 293
const celsius = kelvin - 273; //create the variable celsius equal to kelvin 273 less than kelvin
let fahrenheit = celsius * (9/5) + 32; //create the variable fahrenheit
fahrenheit = Math.floor(fahrenheit); //to get a number round down
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
