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

// let xValue = parseInt(prompt("Enter a value"));
// let yValue = parseInt(prompt("Enter a value"));

// let result = 0;

// if (xValue > 0 && yValue < 0) {
//     result = 4 * xValue + 2 * yValue + 4;
// } else if (xValue > 0 && yValue == 0) {
//     result = 2 * xValue - yValue + 3;
// } else if (xValue < 0 && yValue > 0) {
//     result = 3 * xValue + 4 * yValue + 3;
// }

// console.log(`Enter x value : ${xValue} and y value :  ${yValue} result: ${result}`)

// 100'lük sisstemde verilen notları harfli sistemde gösteren uygulama

// const lessonGrade = parseInt(prompt("Enter your lesson grade ", "100"));


// if (lessonGrade >= 90) {
//     console.log("Your lesson grade AA")
// } else if ( lessonGrade >= 80 && lessonGrade < 90) {
//     console.log("your lesson grade BA")
// } else if ( lessonGrade >= 70 && lessonGrade < 80) {
//     console.log("your lesson grade BB")
// } else if ( lessonGrade >= 60 && lessonGrade < 70) {
//     console.log("your lesson grade CB")
// } else if ( lessonGrade >= 50 && lessonGrade < 60) {
//     console.log("your lesson grade CC")
// } else if ( lessonGrade >= 40 && lessonGrade < 50) {
//     console.log("your lesson grade DC")
// } else if ( lessonGrade >= 30 && lessonGrade < 40) {
//     console.log("your lesson grade DD")
// } else if ( lessonGrade >= 20 && lessonGrade < 30) {
//     console.log("your lesson grade FD")
// } else if (lessonGrade < 20) {
//     console.log("your lesson grade FF")
// }

/*const lessonScore = parseInt(prompt("Enter your lesson grade ", "100"));
const scoreLimit = parseInt(lessonScore / 10);

console.log("Yüzlük sistemdeki not : " + lessonScore + " sinir " + scoreLimit)

if (lessonScore == 100) {
    scoreLimit = 10;
}

switch(scoreLimit) {
    //case 10: console.log("Lesson score : AA"); break;
    case 9: console.log("Lesson score : AA"); break;
    case 8: console.log("Lesson score : BA"); break;
    case 7: console.log("Lesson score : BB"); break;
    case 6: console.log("Lesson score : CB"); break;
    case 5: console.log("Lesson score : CC"); break;
    case 4: console.log("Lesson score : DC"); break;
    case 3: console.log("Lesson score : DD"); break;
    default: console.log("Your lesson score faller than 30")
}
*/

// çarpım taplosunu oluşturan bir uygulama yazınız

let writeText = "";

for (i = 1; i <= 10; i++) {
    for ( j = 1; j <= 10; j++) {
        writeText = writeText + (i + "x" + j + "=" + (i * j)+ "\t");
        
    }
    console.log(writeText);
    writeText = "";
}