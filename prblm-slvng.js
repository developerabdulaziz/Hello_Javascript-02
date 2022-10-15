

/*============================================= Problem-01 =============================================

You are given an array:

            Var fruits = [‘Apple’, ‘Banana’, ‘Orange’]

Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
Remove ‘Orange’ and add ‘Watermelon’.

 */

//---------------- a -------------------/
// var fruits = ['Apple', 'Banana', 'Orange'];
// var bananaIndex = fruits.indexOf('Banana');
// fruits[bananaIndex] = 'Mango';
// // console.log(bananaIndex);
// console.log(fruits);
// //---------------- b -------------------/
// fruits.pop();
// console.log(fruits);
// fruits.push('watermelon');
// console.log(fruits);

/* ============================================================= problem - 02 ===============================================================
You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56 and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friend’s grades using if-else.
 */



/* ================================================================== Problem - 03 ========================================================
You are given three numbers 13, 79 and 45. Write a program that will print the largest number using if-else.
You are given a triangle with the sides 9,8,9. Write a program to check whether a triangle is Isosceles or not using if-else.
Isosceles => two sides are equal
 */

/*
var num1 = 13;
var num2 = 79;
var num3 = 45;
if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    }
    else {
        console.log(num3);
    }
}
else {
    if (num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}


var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('Isosceles');
}
*/


// ========================================= Problem - 04============================================

// Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return;

// Input:
// The first line of the input is the taka Harry’s mom gave him.
// The second line is the cost of 1 kg of oranges and 1kg of apples;

// Sample Input: 1000, 700
// Output: 300



// var moneyGiven = 1000;
// var applePrice = 400;
// var orangePrice = 300;
// var totalPrice = applePrice + orangePrice;
// console.log(totalPrice);
// var getBack = moneyGiven - totalPrice;
// console.log(getBack);




// ====================================================== problem - 05 =========================================================
/* Write a program to calculate the average marks of Mathmetics, Biology, Chemistry, Physics, and Bangla of a student;
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:
Print the result in 2 decimal places;

Sample Input: 75.25, 65, 80, 35, 45, 99,50
Output: 71.04
 */

// 75.25, 65, 80, 35.45, 99.50
//  Mathmetics, Biology, Chemistry, Physics, and Bangla

// var mathMarks = 75.25;
// var biologyMarks = 65;
// var chemistryMarks = 80;
// var physicsMarks = 35.45;
// var banglaMarks = 99.50;
// var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
// console.log(totalMarks);
// var average = totalMarks / 5;
// var averageTwoDecimal = average.toFixed(2);
// console.log(averageTwoDecimal);



// =========================================================== Problem - 07 ================================================================

// Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the remainder would be if she divided the number by 5. Help Sarah write the program.
// Input : The first line of the input contains the number.
// Output : Print the remainder.
// Sample Input : 119         Output : 4


// var number = 119;
// var remainder = number % 5;
// console.log(remainder);



/* ================================================== Assignment 04 ===================================================== */

// ----------------------------------------- problem - 01 --------------------------------------------- //

/*
    1rad * 57.2958 deg
*/

// function radianToDegree(radian) {
//     //error message for bonus part starts

//     if (typeof radian !== 'number') {
//         return 'please enter a number';
//     }

//     // radian to degree convert
//     let radianConvert = radian * 57.2958;
//     let twoNumber = radianConvert.toFixed(2);
//     let output = parseFloat(twoNumber);
//     return output;
// };

// // the radian input number 01
// let number1 = 10;
// let radianNumber = radianToDegree(number1);
// console.log('radian output number - 01: ', radianNumber);

// // the radian input number 02
// let number2 = 25;
// let radianNumber2 = radianToDegree(number2);
// console.log('radian output number - 02: ', radianNumber2);

// // the radian input number 03
// let number3 = 199;
// let radianNumber3 = radianToDegree(number3);
// console.log('radian output number - 03: ', radianNumber3);




// ----------------------------------------- problem - 02 --------------------------------------------- //

/*
 function isJavaScriptFile(String) {

    // check the file name
    if (String.endsWith('.js')) {
        return true;
    }

    // get the error massage
    else {
        console.log('please Enter the file Name :');
        return false;
    }
}


// put the file name 01
let file1 = 'app.js';
let output01 = isJavaScriptFile(file1);
console.log(output01);

// put the file name 02
let file02 = 'js.png';
let output02 = isJavaScriptFile(file02);
console.log(output02);

// put the file name 03
let file03 = 'image.js.png';
let output03 = isJavaScriptFile(file03);
console.log(output03);

// put the file name 04
let file04 = 'image.jpg.js';
let output04 = isJavaScriptFile(file04);
console.log(output04);
 */


/* ---------------------------------------- Problem 3: oilPrice ------------------------------------------- */

/* 
function oilPrice(diesel, petrol, octen) {
    // oil fixed price
    let dieselPrice = 114;
    let petrolPrice = 130;
    let octenPrice = 135;

    // oil price Calculation
    let perDeieselPrice = dieselPrice * diesel;
    let perPetrolPrice = petrolPrice * petrol;
    let perOctenPrice = octenPrice * octen;

    // get the total oil price
    let totalPrice = perDeieselPrice + perPetrolPrice + perOctenPrice;
    return totalPrice;
}

// --------------------- oil quantity part 01 -------------------
let dieselQuantity01 = 1;
let petrolQuantity01 = 1;
let octenQuantity01 = 1;

// final output
let totalCosting01 = oilPrice(dieselQuantity01, petrolQuantity01, octenQuantity01);
console.log('get the total oil price one: ', totalCosting01);


// --------------------- oil quantity part 02 ------------------
let dieselQuantity02 = 30;
let petrolQuantity02 = 20;
let octenQuantity02 = 10;

// final output
let totalCosting02 = oilPrice(dieselQuantity02, petrolQuantity02, octenQuantity02);
console.log('get the total oil price two: ', totalCosting02);


// --------------------- oil quantity part 03 ----------------
let dieselQuantity03 = 1;
let petrolQuantity03 = 0;
let octenQuantity03 = 2;

// final output
let totalCosting03 = oilPrice(dieselQuantity03, petrolQuantity03, octenQuantity03);
console.log('get the total oil price three: ', totalCosting03);


// --------------------- oil quantity part 04 ----------------
let dieselQuantity04 = 0;
let petrolQuantity04 = 2;
let octenQuantity04 = 3;

// final output
let totalCosting04 = oilPrice(dieselQuantity04, petrolQuantity04, octenQuantity04);
console.log('get the total oil price four: ', totalCosting04);
*/

/* ==================================== Problem 5: isBestFriend ========================== */


/* 
function isBestFriend(object1, object2) {
    // object check
    if (object1.name == object2.friend && object1.friend == object2.name) {
        return true;
    }
    else {
        return false;
    }
}

const part1 = { name: 'doe', friend: 'alex' };
const part2 = { name: 'alex', friend: 'doe' };
const result = isBestFriend(part1, part2);
console.log(result);

 */




