const whiteSquare = "\u2B1C";
const blackSquare = "\u2B1B";

let output = "";
for(let i=0; i<8; i++) {
    for(let j=0; j<8; j++) {
        if(i%2 == 0) {
            if(j%2 == 0) {
                output += blackSquare;
            }
            else {
                output += whiteSquare;
            }
        }
        else {
            if(j%2 == 0) {
                output += whiteSquare;
            }
            else {
                output += blackSquare;
            }
        }
    }
    output += '\n';
}
console.log(output)