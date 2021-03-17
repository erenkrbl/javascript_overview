// Girilen integer sayıya kadar olan asal sayıları bulan uygulama

let enterNumber = parseInt(prompt("You are enter a number", "10"));
let displayText = "";

for (i = 2; i <= enterNumber; i++) {

    let primireNumber = true;

    for (j = 2; j < i; j++) {
        if (i % j ==0) {
            primireNumber = false;
            break;
        }
    } if ( primireNumber == true) {
        displayText = displayText + i + " ";
    }
}
console.log(displayText);