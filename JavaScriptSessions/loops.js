let idx = 0;
while(idx <= 5) {
    console.log(idx);
    idx++;
}

// Explore do while
let i=3;
do {
    console.log(i);
    i++;
}
while(i<5);

// for loop
for(let idx = 1; idx <= 5; idx++) {
    console.log(idx);
}

const whitesquare = "\u2B1C";
const blackSquare = "\u2B1B";

for(let idx = 1; idx <= 8; idx++) {
    console.log(whitesquare);
}

/*for(let idx=1;idx<=8;idx++){
    console.log(whiteSquare);
}
console.log("~~~~~~~~");
for(let idx=1;idx<=8;idx++){
    console.log(whiteSquare);
}*/

// Nested for loop
for(let row = 0; row < 2; row++) {
    for(let column = 1; column <=8; column++) {
        console.log(whitesquare);
    }
    console.log("~~~~~~~~~~~~~~");
}