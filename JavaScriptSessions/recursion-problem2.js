function factorial(number) {
    if(number == 0 || number == 1) {
        return 1;
    }
    return number*factorial(number - 1);
}

// let result = factorial(5);
// console.log("Result is: "+result);


function fibonacci(number) {
    if(number == 0 || number == 1)
        return number;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

let number = 6;
let output = fibonacci(number)
console.log(output)