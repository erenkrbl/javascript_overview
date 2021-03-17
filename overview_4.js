// tahmin edilen sayının bulunması 
/*
let randomNumber = parseInt(Math.random() * 100 + 1);

console.log("random number : " + randomNumber);

let estimated = -1;
let estimatedNumber = 0;

while (estimated != randomNumber) {

    estimated = parseInt(prompt("Enter a number"));
    estimatedNumber++;
    
    if (estimated == randomNumber) {
        console.log("Congratulations." + estimatedNumber + " at once you knew.")
    } else if (estimated < randomNumber) {
        console.log("İncrease");
    } else {
        console.log("Decrease");
    }


}
*/

// kullanıcı 0'a bastığında girilen sayıları çarpamını veren uygulama 
/*
let enterNumber = parseInt(prompt("You are enter a number"));
let result = 1;

while ( enterNumber != 0) {
    result = result * enterNumber;
    enterNumber = parseInt(prompt("Enter a number"));
}
console.log("Multiplication result :" + result);
*/

// girilen iki sayının ebob' unu bulan uygulama

let firstNumber = parseInt(prompt("You are enter a number"));
let secondNumber = parseInt(prompt("You are enter a number"));

let ebob = 1, control=2;

while (control <= firstNumber && control <= secondNumber) {
    if (firstNumber % control == 0 && secondNumber % control == 0) {
        ebob = control;
    }
    control++;
}

if (ebob == 1) {
    console.log("These numbers are prime between them")
} else {
    console.log("Common divisor of these numbers : " + ebob)
}


