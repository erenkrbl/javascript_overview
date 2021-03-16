// girilen x ve y değerleri için 
// aşağıdaki şartlara uygun hesaplama yapınız
// x > 0, y<0 ise f(x,y)= 4x + 2y + 4
// x > 0, y=0 ise f(x,y)= 2x - y + 3
// x < 0, y>0 ise f(x,y)= 3x + 4y + 3

//first solution

// let firstNumber = parseInt(prompt("Enter a number ", "1"));
// let secondNumber = parseInt(prompt("Enter a number ", "1"));

// let resultOne = (firstNumber * 4) + (secondNumber * 2) + 4;
// let resultTwo = (firstNumber * 2) - (secondNumber) + 3;
// let resultThree = (firstNumber * 3) + (secondNumber * 4) + 3;


// if ( firstNumber > 0 && secondNumber < 0){
//     console.log(resultOne);
// } else if (firstNumber > 0 && secondNumber == 0 ) {
//     console.log(resultTwo);
// } else if (firstNumber < 0 && secondNumber > 0 ) {
//     console.log(resultThree)
// } else {
//     console.log("Didn't find any formule")
// }

// second solution

let xValue = parseInt(prompt("Enter a value"));
let yValue = parseInt(prompt("Enter a value"));

let result = 0;

if (xValue > 0 && yValue < 0) {
    result = 4 * xValue + 2 * yValue + 4;8
} else if (xValue > 0 && yValue == 0) {
    result = 2 * xValue - yValue + 3;
} else if (xValue < 0 && yValue > 0) {
    result = 3 * xValue + 4 * yValue + 3;
}

console.log(`Enter x value : ${xValue} and y value :  ${yValue} result: ${result}`)



