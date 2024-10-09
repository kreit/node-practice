// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js")

const firstName = getInput(1);  
const lastName = getInput(2);

console.log(`Hello ${firstName} ${lastName}`);

console.log(`${fullNameCapitalized} is your name capitalized.`)

const fullNameCapitalized = `${getInput(1)} ${getInput(2)}`;

const initials = "KyleRose"

console.log(initials[0])

console.log(initials[4])

const email = `${getInput(1)}${getInput(2)}.prsvr@gmail.com`;

console.log(`Your persevere.com email is: ${email}`);