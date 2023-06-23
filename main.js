const fs = require("fs");

// Generate array of quotes
const quotes = fs.readFileSync("./quotes.txt", "utf-8").toString().split("\n");

// Randomly selection quote
const randomIndex = Math.floor(Math.random() * quotes.length);
// Print Quote
const message = quotes[randomIndex];
console.log(message);
