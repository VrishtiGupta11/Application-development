var prompt = require('prompt-sync')();

let amount = Number(prompt("Enter Amount: "));
let promocode = prompt("Enter Promocode: ");
let pro = false;

console.log("Amount is: "+amount+" type is: "+typeof amount);
console.log("Promocode is: "+promocode+" type is: "+typeof promocode);

/*
if(amount >= 149) {
    console.log("You can apply Promocode");
}
else {
    console.log("You cannot apply Promocode");
}
*/
/*
if(amount >= 149 && promocode == "TRYNEW") {
    console.log("TRYNEW Promocode applied");
    let discount = 0.30*amount;
    amount -= discount;
    console.log("You got a discount of "+discount);
    console.log("Please Pay "+amount);
}
else {
    console.log("Either amount or Promocode is Invalid");
}
*/

/*
if(promocode == "TRYNEW") {
    console.log("TRYNEW promo code applied");

    if(amount >= 149) {
        let discount = 0.30*amount;
        amount -= discount;
        console.log("You got a discount of "+ discount);
        console.log("Please Pay "+amount);
    }
    else {
        console.log("Amount is lesser. Please add items worth "+(149-amount)+ " more");
    }
}
else {
    console.log("Promocode "+promocode+" is invalid");
}
*/
/*
if(promocode == "TRYNEW") {
    console.log("TRYNEW promo code applied");

    if(amount >= 149) {
        let discount = 0.30*amount;
        if(discount > 75) {
            discount = 75;
        }
        amount -= discount;
        console.log("You got a discount of "+ discount);
        console.log("Please Pay "+amount);
    }
    else {
        console.log("Amount is lesser. Please add items worth "+(149-amount)+ " more");
    }
}
else {
    console.log("Promocode "+promocode+" is invalid");
}
*/

// ZOMOATO
// FLAT 50% OFF on amount > 300
// `Also extar 10% off if a user is a zomato pro user.

if(promocode == "TRYNEW") {
    console.log("TRYNEW promo code applied");

    if(amount >= 149) {
        let discount = 0.30*amount;
        if(discount > 75) {
            discount = 75;
        }
        amount -= discount;
        console.log("You got a discount of "+ discount);
        console.log("Please Pay "+amount);
    }
    else {
        console.log("Amount is lesser. Please add items worth "+(149-amount)+ " more");
    }
}
else if(promocode == "ZOMATO") {
    console.log("ZOMATO Promo Code Applied");
    if(amount > 300) {
        let discount = 0.5 * amount;
        if(pro) {
            discount += 0.10 * amount;
        }
        amount -= discount;
        console.log("You got a discount of "+discount);
        console.log("Please Pay "+amount);
    }
    else {
        console.log("Amount is Lesser. Please add items worth "+(149-amount)+" more");
    }
}
else {
    console.log("Promocode "+promocode+" is invalid");
}