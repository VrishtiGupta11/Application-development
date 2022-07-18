/*
Functions in javascript
Recursion with functions
*/

// y = f(x) | y = x*x + 1
// Creating a Function
// A block of statements, which will be executed in a sequence
function f(x) {
    let y = x*x + 1;
    console.log("y is: "+y);
}

// Execute/ call/ Run a function
f(1);
f(2);
f(5);

function register(name, email, password) {
    console.log("Registering..."+email);
    console.log("Thank you "+name+" for registering with us :)");
}

register("John", "john@example.com", "john123")
register("Fionna", "fionna@example.com", "fionna123")

// check internet conectivity -> eg of function called at each page
// promocode 
// ola cab

function bookCab(pickUplocation, dropLocation, typeOfCab, distance) {
    let basefare = 50;
    if(typeOfCab == 1) {  // OLA MINI
        basefare += 8*distance;
        console.log("OLA MINI cab booked from "+pickUplocation+" to "+dropLocation)
    }
    else if(typeOfCab == 2) {   // OLA SEDAN
        basefare += 50;
        basefare += 10*distance;
        console.log("OLA SEDAN cab booked from "+pickUplocation+" to "+dropLocation)
    }
    else if(typeOfCab == 3) {   // OLA BIKE
        basefare -= 30;
        basefare += 3*distance;
        console.log("OLA BIKE booked from "+pickUplocation+" to "+dropLocation)
    }
    else {
        console.log("Please Select the cab first");
    }
    console.log("Please pay: \u20b9"+basefare);
}

bookCab("Home", "Work", 1, 5);
bookCab("Work", "Mall", 2, 7);
bookCab("Mall", "Home", 3, 11);