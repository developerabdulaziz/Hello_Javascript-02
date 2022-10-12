

// ================================================= js concepts recap, var, let, and const =============================================
/*
Let দিয়ে Variable declare করা মানে অনেক জায়গায় change হবে বা করা হবে।
Constদিয়ে Variable declare মানে এটা একবারে Fixed পরবর্তীতে আর Declare করা যাবে না।
 */


// ----------------- variable -------------------
// var time = '10:15pm';
// var bookPrice = 150;
// var isWhiteColor = false;

//------------------- array ------------------------

/*

 var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');

// array et sas dik theke element add remove
partners.push('kajit');
partners.pop();

// array er surur dike element add or remove
partners.shift();
partners.unshift('rofik');
console.log(partners);

 */

// ----------------------- conditional -------------------
/*
 if (bookPrice < 120) {
    console.log('I will buy this book');
}
else {
    console.log('Mama, Kichu discount den na, apni na mama!');
}
 */

//--------------------- while, for loop -----------------
/*
var i = 0;
while (i <= 17) {
    // do some work
    i++;
}
for (var i = 0; i <= 17; i++) {

}
 */

// ------------------------ function --------------------------

/*
 function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}
var moonStatus = isMoonUp(21);
 */

// ======================= let const ================

// value of variable could change

// let price = 27;
// price = 29;
// price = 31;

// value of the variable will not change
// const myName = 'lal e lal mr. Helal';
// console.log(myName);
// myName = 22;


// =============================================== Unit Convert Inch to Feet, miles to kilometer ====================================

// ------------------------------ first way -----------------------------------
/* const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);
*/

// ----------------------- function  way te convert ----------------------------
/*
 function incheToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
var myInches = 132;
var feet = incheToFeet(myInches);
// console.log('my Inches in feet', feet);

var dadiInches = 144;
var feet = incheToFeet(dadiInches);
// console.log('dadi inches in feet', feet);

var naniInches = 156;
var feet = naniInches / 12;
// console.log(feet);

// -----------------------------
var nanaInches = 168;
var feet = nanaInches / 12;
// console.log(feet);
*/


// -------------------------------- Miles to km -------------------------
/*
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('marathon in km:', marathon);
 */


// =============================================== Check even and odd number using function ====================================


//    const number = 4;
//    const remainder = number % 2;
//    console.log(remainder == 0);
//    console.log(number % 2 == 0);


// ----------------------- is Even function ----------------------------
// function isEven(number) {
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// const myNumber = 1641;
// const isMyNumberEven = isEven(myNumber);
// console.log('is my number even', isMyNumberEven);

// const herNumber = 1892;
// const isHerNumberEven = isEven(herNumber);
// console.log('is her number even', isHerNumberEven);


// --------------------------------- is odd function --------------------------

// function isOdd(number) {
//     if (number % 2 != 0) {
//         return true;
//     }
//     return false;
// }
// const isMyNumberOdd = isOdd(myNumber);
// console.log('is my number odd', isMyNumberOdd);

// const isHerNumberOdd = isOdd(herNumber);
// console.log('is her odd number', isHerNumberOdd);


// ============================================== Check whether a year is a Leap Year or not(simply way) =====================================

// --------- Leap Year ----------
/*

function isLeapyear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 1244;
const isMyLeapYear = isLeapyear(myYear);
console.log(isMyLeapYear);

 */



/*
// function isLeapyear(year) {
//     if (year % 4 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const myYear = 2087;
// const isMyLeapYear = isLeapyear(myYear);
// console.log('Is my year leap year', isMyLeapYear);

// const yourYear = 2224;
// const isYourYearLeapYear = isLeapyear(yourYear);
// console.log('Is your LeapYear', isYourYearLeapYear);
*/



// ================================================ Calculate Sum of all numbers of an array ==============================================

// -------------- find-oddSum.js ------------------

/*
function getSumOfAnArray(numbers) {
    for (i = 0; i < numbers.length; i++) {
        var index = i;
        var element = numbers[index];
        console.log(index, element);
    }
}
var myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSumOfAnArray(myNumbers);
 */



/* function getSumOfAnArray(numbers) {
    var sum = 0;
    for (i = 0; i < numbers.length; i++) {
        var index = i;
        var element = numbers[index];
        var sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

var myNumbers = [12, 65, 45, 78, 32, 45, 91];
var result = getSumOfAnArray(myNumbers);
console.log(result);
 */


// loop diye akta array er element er jog kora
/*
 var sum = 0;
var myNumbers = [12, 65, 45, 78, 32, 45, 91];
for (i = 0; i < myNumbers.length; i++) {
    var number = myNumbers[i];
    var sum = sum + number;
    console.log(sum);
}

 */

//========================================== Get Odd Numbers of an array and get odd Sum of an array =====================================


//  akta array er moddo theke jor/odd and bijor/even ber kora

// function getOddNumbersOfAnArray(numbers) {
//     for (i = 0; i < numbers.length; i++) {
//         let index = i;
//         let element = numbers[index];
//         if (element % 2 === 0) {
//             console.log(index, element);
//         }
//         // console.log(index, element);
//     }
// }

// var myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getOddNumbersOfAnArray(myNumbers);



// array er modde even/odd nmbr dekhano
/*
function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        if (element % 2 !== 0) {
            // console.log(index, element);
            oddNumbers.push(element);
        }
        // console.log(index, element);
    }
    return oddNumbers;
}

var myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
getOddNumbersOfAnArray(myNumbers);

 */


/*
function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumbers.push(element);
        }
        // console.log(index, element);
    }
    return oddNumbers;
}

var myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumbersSum = getOddNumbersOfAnArray(oddNumbers);
console.log("odd number sum".oddNumbersSum);

 */





/*

function getEvenNumbersOfAnArray(numbers) {
    for (i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
        }
        // console.log(index, element);
    }
}

var myNumbers = [12, 65, 45, 78, 32, 45, 91];
getEvenNumbersOfAnArray(myNumbers);

*/


//========================================== Calculate Factorial of a number using for loop =====================================

// 1 + 2 + 3 + 4 + 5 + 6 + 7

/*
 let sum = 0;
for (i = 1; i <= 7; i++) {
    sum = sum + i;
    console.log(i, sum);
}

 */

// uporer loop function a korar upai
// function sumOfNumbers(number) {
//     let sum = 0;
//     for (i = 1; i <= number; i++) {
//         sum = sum + i;
//         console.log(i, sum);
//     }
//     return sum;
// }

// ------------ multiplcation of number -----------

// 1 * 2 * 3 * 4 * 5 * 6 * 7
/*factorial mane hosse binnas */
/*
3! = 3 x 2 x 1
4! = 4 x 3 x 2 x 1
5! = 5 x 4 x 3 x 2 x 1
6! = 6 x 5 x 4 x 3 x 2 x 1
7! = 7 x 6 x 5 x 4 x 3 x 2 x 1
*/

/*
function factorial(number) {
    let result = 1;
    for (i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

const result = factorial(9);
console.log(result);
 */


// ultavabe factorial nirnoi
/*
 function factorial(number) {
    for (i = number; i >= 1; i--) {
        console.log(i);
    }
}

factorial(9);
 */

// ultavabe gun kora
/*
function factorial(number) {
    let result = 1;
    for (i = number; i >= 1; i--) {
        result = result * i;
        console.log(i);
    }
    return result;
}

let fact = factorial(9);
console.log("factorial of 9:", fact);
 */


// ================
/* function factorial(number) {
    let num = 1;
    let result = 1;
    while (num <= 7) {
        result = result * num;
        num++;
    }
    return result;
}
let fact = factorial(9);
console.log("factorial of 9:", fact);
 */


/*
 function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
const myFactorial = getFactorial(6);
console.log(myFactorial);
 */

// =============================== summary ==================================

/* 
// ------------- SIX CORE CONCEPTS
    1. Variable (declare, naming convention, variable types, primitive, math operations)
    2. Conditionals (comparison: >, <, >=, <=, ===, !==, if-else)
    3. Array (declare, index, get values, set values, indexof, push, pop, unshift, shift)
    4. Loop (for loop, while loop, break, continue)
    5. function (declare, parameters, return, call, use the returned value form a function) 
    6. Object (declare, properties, keys, values, get proerties value, set value, loop object properties)
*/


/*
    1. google: function declaretion vs function expression
    2. google: arrow function
    3. loop vs function
    4. array vs object
    5. integer vs float
    6. == vs ===
    7. differences between: var, let, const
 */



/*
    1. celcius -----> Fahrenheit
    2. Fahrenheit -------> Celcius
    3. Simple Interest: principal, interest rate, time --------> interest amount
    4.
*/