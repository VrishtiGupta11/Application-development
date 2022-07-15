var prompt = require("prompt-sync")();

const whiteSquare = "\u2B1C";
const blackSquare = "\u2B1B";

let output = "";
for(let i=0; i<8; i++) {
    for(let j=0; j<8; j++) {
        if(i%2 == 0) {
            if(j%2 == 0) {
                output += blackSquare + " ";
            }
            else {
                output += whiteSquare + " ";
            }
        }
        else {
            if(j%2 == 0) {
                output += whiteSquare+ " ";
            }
            else {
                output += blackSquare+ " ";
            }
        }
    }
    output += '\n';
}

let blackQueen = "\u265B";
let whiteQueen = "\u2655";

let N = Number(prompt("Enter no. of queens: "));

var outputList = output.split(" ");
if(N > 0) {
    var [qR, qC] = prompt("Enter queen position splitted by space: ").split(" ");
    var qRowList = [qR];
    var qcolList = [qC];
    console.log("Queen placed at " + qR + ", " + qC);
    outputList[0] = whiteQueen + " ";
}

for(let i = 0; i<N-1; i++) {
    [qR, qC] = prompt("Enter queen position splitted by space: ").split(" ");
    
    if(qRowList.includes(qR) || qcolList.includes(qC)) {
        console.log("Cannot Place queen at " + qR + ", " + qC); 
    }
    else {
        console.log("Queen placed at " + qR + ", " + qC);
        qRowList.push(qR);
        qcolList.push(qC);

        if(outputList[Number(qR*8) + Number(qC)] == whiteSquare)
            outputList[Number(qR*8) + Number(qC)] = blackQueen + " ";
        else if(outputList[Number(qR*8) + Number(qC)] == blackSquare) 
            outputList[Number(qR*8) + Number(qC)] = whiteQueen + " ";
    }
}

output = outputList.join("");
console.log(output)