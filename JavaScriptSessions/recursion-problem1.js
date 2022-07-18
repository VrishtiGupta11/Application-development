var prompt = require("prompt-sync")();

// Loop
// let data = [10, 20, 30];
// let max = data[0];
// for(let idx = 0; idx <data.length; idx++) {
//     if(data[idx] > max) {
//         max = data[idx];
//     }
// }

// console.log("Max is: ", max);

// Recursion
function getMax(data, N) {
    if(N == 1) {
        return data[N-1];
    }
    let ans = getMax(data, N-1)
    ans = (ans > data[N-1]) ? ans : data[N-1];
    return ans; 
}

function getMax2(arr, N, i) {
    if(i == N-1) {
        return arr[i];
    }
    let max = getMax2(arr, N, i+1);
    if(max > arr[i]) 
        return max;
    else
        return arr[i];
    return max;
}

data = prompt("Enter arr element: ").split(" ");
let ans = getMax2(data, data.length, 0);
console.log(ans);