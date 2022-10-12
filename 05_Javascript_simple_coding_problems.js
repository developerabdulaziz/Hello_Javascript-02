

// ============================================= String comparison using toLowerCase toUpperCase ===============================================

// ---------------------- case.js ------------------
/*
const userName = 'blackPink';
const userInput = 'blackPink';

if (userName === userInput) {
    console.log('valid user');
}
else {
    console.log('invalid user');
}

*/


/*
 const userName = 'blackPink';
const userInput = 'blackPink';
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
if (userName.toLowerCase() === userInput.toLowerCase()) {
    console.log('valid user');
}
else {
    console.log('invalid user');
}

*/

// ========================================== Apply Search includes, indexOf, startswith, endswith =========================================


// ---------------- includes ---------------------
/* includs() diye bujha jai j ta khujteso seta string er modde ase naki nai*/

// const lyrics = 'Tumi bondhu kala pakhi ami jeno ki';

/*
 const searchString = 'Pakhi';
// const doesExist = lyrics.includes('paKhi');
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);
console.log(doesExistOneLine);

 */

// ---------------- index Of ---------------------
// console.log(lyrics.indexOf('kala'));
//

/*
if (lyrics.includes('sada') !== -1) {
    console.log('exists inside the string');
}
else {
    console.log('cannot find it');
}
*/

// ---------------- startsWith ---------------------
// startsWith() diye check kore j jinis khujteso seta string er surute ase naki nai

/*
 console.log(lyrics.startsWith('Tumi')); // true
console.log(lyrics.startsWith('2umi')); // false
 */
// ---------------- endssWith ---------------------
// endsWith() diye check kore j jinis khujteso seta string er sese ase naki nai

/*
console.log(lyrics.endsWith('jeno ki')); //true
console.log(lyrics.endsWith('jeno'));  // false
 */


/*
    1.includes
    2.indexOf
    3.startsWith
    4.endsWith
*/


// ======================================== How to split, slice, substr, substring, concat, join ==============================================

// ---------- splite ---------------

// splite mane alda kora

// const lyrics = 'Tumi bondhu kala pakhi ami jeno ki.bosonkale tomai bolte parini.kala kala sada sada';

/*
let parts = lyrics.split(' ');
let sentence = lyrics.split('.')
console.log(parts);
console.log(sentence);

*/

/*
// kono string er sobgulo charecter k alada kora
let chars = lyrics.split('');
console.log(chars);
*/


// ---------- slice ---------------
// slice() akta string er soto ongsoke ber kore seta k return kore dei
/*
const partial1 = lyrics.slice(5, 8); // ekhane 5 index theke suru hobe 8 index er ag prjnto nibe
console.log(partial1);
 */

// -------------- substring ---------------
//

/*
 const partial2 = lyrics.substring(5, 8);
console.log(partial2);

 */

// -------------- concat/join ---------------
// concat() ekadik string k jora diye akta string make kore
// duita string k jog kora

/*
let text1 = "Bangladesh";
let text2 = "is a beatiful country";
let text = text1.concat(text2);
console.log(text);

*/

// const lines = ['Tumi bondhu kala pakhi ami jeno ki',
//     'bosonkale tomai bolte pari ni',
//     'kala kala sada sada',
//     'rong jomese sada kala'];

// const newSong = lines.join(':');
// console.log(newSong);

// const newSong = lines.join('. ');
// console.log(newSong);


// ============================================== Math, abs, pow, round, ceil, floor, and random number ==============================

// -------------- Math.abs --------------

// Math.abs mane absolutely orthat songhati positive negative jai hok Math.abs dara positive tai nirdes korbe
/*
 const myNumber = -5;
const output = Math.abs(myNumber);
console.log(output);
 */


/*
 const num1 = 25;
const num2 = 45;
const gap = num1 - num2;
if (gap < 5) {
    console.log('you guys can be friends');
}
else {
    console.log('you guys stay apart');
}

// output -20
 */


/*
 const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap);
if (gap < 5) {
    console.log('you guys can be friends');
}
else {
    console.log('you guys stay apart');
}
 */


// ---------------------- Math.pow ------------------
// const result = Math.pow(3, 8);
// console.log(result);


// ---------------------- Math.round -----------------

/* 5.798 ekhane dosomik er por jodi fst nmbr 5/6,7,8,9 hoi tahole uporer dike jabe.  r jodi dosomik por fst nmbr 5 er kom hoi orthat 1-4 tahole nicher dike jabe.*/

// ---------------------
// const myNumber = 5.798;
// const output = Math.round(myNumber);
// console.log(output); // 6

// --------------------
// const myNumber = 5.398;
// const output = Math.round(myNumber);
// console.log(output); // 5



// -------------------- Math.ceil/floor -------------------
// kono dosomilwala number k tar sorbochcho kaser o nicher number prokas korar maddom holo Ceil/Floor.


// const number = 2.4598;
// // const output = Math.ceil(number);
// const output = Math.floor(number);
// console.log(output);



// -------------------- Math.random -------------------
// console.log(Math.random());
// const random = Math.random() * 100;
// const random = Math.round(Math.random() * 100);
// console.log(random);


/*
for (i = 0; i < 20; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}
 */


// ==================================== Swap variable, swap without temp, destructing ========================================

// var first = 5;
// var second = 7;

// // console.log(first, second);

// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// var a = 5;
// var b = 8;
// var c = a;
// a = b;
// b = c;
// console.log(a, b);

// // destructing
// [first, second] = [second, first];
// console.log(first, second);


// ========================================= Can you find out who will get the delicious cake? =================================

/*
const jim = 84;
const dela = 75;
if (jim < dela) {
    console.log('jim will get the cake');
}
else {
    console.log('dela you will get the cake')
}
*/


// tinta jiniser lojik ber kora
/*
const jim = 84;
const dela = 99;
const chinku = 77;
if (jim > dela && jim > chinku) {
    console.log('jim will get the cake');
}
else if (dela > jim && dela > chinku) {
    console.log('dela will get the cake');
}
else {
    console.log('chinku will get the cake');
}
 */


// ============== Find max of two values, find max of three values(দুটি মানের সর্বাধিক খুঁজুন, তিনটি মানের সর্বাধিক খুঁজুন) ==============//


// const business = 450;
// // const minister = 350;
// const minister = 550;
// const army = 850;
// if (business > minister) {
//     console.log('Business person er pola is bigger');
// }
// else {
//     console.log('Ministerer pola is bigger');
// }


/*compare three
if (business > minister && business > army) {
    console.log('Business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}
else(army > business && army > minister) {
    console.log('army is bigger');
}*/



// akhon uporer tintar modde konta boro ba soto seta ber korar sohoj upai

// var max = Math.max(business, minister, army);
// console.log('largest is', max);


/*
function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const larger = findLargest(354, 241, 500);
console.log('largest is', larger);
 */



// ========= Who is the tallest? Find the max number in an array (সবচাইতে লম্বা কে? একটি অ্যারের মধ্যে সর্বাধিক সংখ্যা খুঁজুন) ============= //

/*
// Find the largest element of an array
// array er element er modde boro songkha konti

// function maxInArray(numbers) {
//     // console.log(numbers);
//     let largest = numbers[0]; // ekhane array er o index theke suru hobe
//     for (i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('tallest person is: ', tallest);
 */



// =========================== Reverse a string and Reverse words in a sentence ========================

// -------------------------------
// akta array er modde suru theke sas prjnto charecter gulo reverse way te dekhano
// function reverseString(text) {
//     for (let i = 0; i < text.length; i++) {
//         const element = text[i];
//         console.log(element);
//     }
// }

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);
// console.log(reversed);



//------------------------------
/*
// akta array er modde sas theke suru prjnto charecter gulo reverse way te dekhano
// function reverseString(text) {
//     for (let i = text.length; i >= 0; i--) {
//         const element = text[i];
//         console.log(element);
//     }
// }

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);
// console.log(reversed);
*/


// --------------- word reverse ------------------------

/*
// function reverseWords(str) {
//     const word = str.split(' ');
//     console.log(word);
// }

// const myString = 'I am a good boy';
// reverseWords(myString); // output: [ 'I', 'am', 'a', 'good', 'boy' ]
*/

// ----------------

/*
function reverseWords(str) {
    const word = str.split(' ');
    const result = [];
    // output: [ 'I', 'am', 'a', 'good', 'boy' ] eta k ultavabe dekhano
    for (let i = word.length - 1; i >= 0; i--) {
        const element = word[i];
        result.push(element);
    }
    // return result

    // console.log(result);

    const reversed = result.join(' ');
    return reversed;
}

const myString = 'I am a good boy';
var total = reverseWords(myString); // output: [ 'I', 'am', 'a', 'good', 'boy' ]
console.log(total);

 */


// --------------------------------------------- sort()/reverse() ------------------------

/*     Have fun with sort and reverse a javascript array    */
// sort() diye akta array er element k serioul vabe sajano hoi

// const number = [4, 7, 1, 3, 9, 2, 5];
// const sortedNumber = number.sort();
// console.log(sortedNumber);

// const sortedNumber = number.reverse();
// console.log(sortedNumber);


// =================================== (advanced) Create a Fibonacci Series using a for loop ======================================
// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

/*
    fibo[3] = fibo[2] + fibo[1]
    fibo[4] = fibo[3] + fibo[2]
    fibo[5] = fibo[4] + fibo[3]
    fibo[50] = fibo[49] + fibo[48]
    fibo[487] = fibo[486] + fibo[485]
    fibo[n] = fibo[n-1] + fibo[n-2]
    fibo[i] = fibo[i-1] + fibo[i-2]
*/

//------------
/*
const fibo = [0, 1];
for (let i = 2; i <= 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];

}
console.log(fibo);
*/


// ---------------

// const fibo = [0, 1]
// for (let i = 2; i <= 10; i++) {
//     // nth = (n - 1)th + (n - 2)th
//     // ith = (i - 1)th + (i - 2)th
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);


// ---------------

/*
 function fibonacciSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(13);
console.log(fiboSeries);
*/

