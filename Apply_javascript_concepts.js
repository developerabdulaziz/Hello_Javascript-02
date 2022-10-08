

// ================================================= js concepts recap, var, let, and const =============================================
/* 
Let দিয়ে Variable declare করা মানে অনেক জায়গায় change হবে বা করা হবে।
Constদিয়ে Variable declare মানে এটা একবারে Fixed পরবর্তীতে আর Declare করা যাবে না।
 */


// ----------------- variable -------------------
var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

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

// ------------ first way ---------------------
/* const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);
*/

// ------------ function  way te convert ---------------------
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


// -------------------------------- mile to km -------------------------
/* 
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('marathon in km:', marathon);
 */
