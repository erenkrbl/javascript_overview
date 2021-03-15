// girilen 3 sayının ortalamasını bulan uygulama

// let firstNumber = parseInt(prompt("You entered a number"));
// let secondNumber = parseInt(prompt("You entered a number"));
// let thirdNumber = parseInt(prompt("You entered a number"));
// let numberTotal = firstNumber + secondNumber + thirdNumber;
// let numberAverage = numberTotal / 3;


// console.log(`First number ${firstNumber} second number ${secondNumber} third number ${thirdNumber} total ${numberTotal} number average ${numberAverage}`);

// üçgen çeşidini bulan uygulama

// let firstLength = parseInt(prompt("Entered a length"));
// let secondLength = parseInt(prompt("Enter one more length"));
// let thirdLength = parseInt(prompt("Enter one more length"));

// console.log(`first Length ${firstLength} second Length ${secondLength} third length ${thirdLength}`);

// if ((firstLength == secondLength) && (firstLength == thirdLength)) {
//     console.log("This triangle equal is a triangle");
// } else if ((firstLength != secondLength) && (secondLength != thirdLength) && (firstLength != thirdLength)) {
//     console.log("This triangle kind of side is a triangle");
// } else {
//     console.log("This triangle isosceles is a triangle") 
// }

// vize final notlarına göre dersi geçip geçmediğini söyleyen uygulama(geçme notu:50 vize %40, final %60)


const vizeGrade = parseInt(prompt("Enter your visa grade")); 
const finalGrade = parseInt(prompt("Enter your final grade"));

const gradeAverage = (vizeGrade * 0.40 ) + (finalGrade * 0.60 );

console.log(`Vize grade : ${vizeGrade}, final grade : ${finalGrade}, grade average : ${gradeAverage}`)

if (gradeAverage >= 50) {
    console.log("You passed the lesson");
} else {
    console.log("Sorry.You failed the lesson")
}

