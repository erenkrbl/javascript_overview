// tahmin edilen sayının bulunması 

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


