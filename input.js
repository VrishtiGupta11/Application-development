var prompt = require("prompt-sync")();

// By default text
let amount = Number(prompt("Enter Amount: "));
let promocode = prompt("Enter Promo Code: ");

console.log("Amount is: "+amount+" type is: "+typeof amount);
console.log("Promocode is: "+promocode+" type is: "+typeof promocode);
