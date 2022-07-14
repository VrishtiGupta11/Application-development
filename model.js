/*
    Software Architecture Pattern
        Model
            Data structure
        View
            Website
            App
            CLI
        Controller
            conditional
            loop
*/

"use strict";  // poorane zmane ka code na ho.. aaj k zmaane ka hi ho nhi to errors milenge
var prompt = require('prompt-sync')();
// Single value container in javascript 

// Keyword var has more scope
// var amount = 1000;
// var promocode = "TRYNEW";

// Or
// let has local scope or less scope
// Create operation
let amount = 1000;
let promocode = "TRYNEW";

// Update operation
amount = 1200

// View -> printed the data on console
console.log("Amount is: \u20b9" + amount);
console.log("Promocode is: \u20b9" + promocode);

// bottle me paani, pateele me milk, therefore different containers for diff purpose

console.log("Type of amount is: " + typeof amount);
console.log("Type of promocode is: " + typeof promocode);

let age = "12";
let numAge = Number(age);
console.log("Age is: "+age+" and type of age is: "+typeof age);
console.log("Age is: "+numAge+" and type of age is: "+typeof numAge);

// Data Types
/*
    String
    Number
    BigInt
    Boolean
    undefined
    null
    Symbol -> Kind of a constant
    Object -> Multi value container | Homogeneous/Heterogeneous
    Array -> Multi value container | Homogeneous/Heterogeneous
*/

// Primitive data type
const appName = "Instagram";
console.log("appName is: "+appName+" and type of appName id: "+typeof appName);
// appName = "Meta Instagram"; // We can not update it because it is constant.


// Bigint
let phoneNumber = 9999999999n;
console.log("phoneNumber is: "+phoneNumber+" and type of phoneNumber is: "+typeof phoneNumber);

// Boolean
let x = Boolean(10 > 5);
console.log("value of x: " + x + " Type of x: " + typeof x);

let y = 10 > 5;
console.log("value of y: " + y + " Type of y: " + typeof y);

// Undefined
let cafeName;  // Not initialized -> undefined
console.log("Cafe Name is: " + cafeName); // Undefined

// NULL
let result = null;  // on a minimial you can initialize it with null
console.log("result is: " + result); // NULL

// View pe string use hota hai
const value = Symbol("Instagram");
// console.log("Value is: "+ value +"and type is " + typeof value);   // It gives error as it can not be accessed.
console.log("Value is: "+ value.description +"and type is " + typeof value);


let student = {
    roll: 101,
    name: "John",
    age: 20
};

console.log("Student is: " + student + "type is : " + typeof student);
console.log(student)

let marks = [10, 20, 30];
console.log(marks);

console.log(student['name']);
console.log(marks[1]);