// reference copy of numbers
function sortNumbers(numbers) {
    for(let i=0; i<numbers.length-1; i++) {
        for(let j=0; j<numbers.length-i; j++) {
            if(numbers[j] > numbers[j+1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }
}


numbers = [7, 4, 1, 9, 2];
console.log(numbers);
sortNumbers(numbers);
console.log(numbers);
