

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