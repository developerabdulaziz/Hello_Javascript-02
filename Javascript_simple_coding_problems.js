

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

const lines = ['Tumi bondhu kala pakhi ami jeno ki',
    'bosonkale tomai bolte pari ni',
    'kala kala sada sada',
    'rong jomese sada kala'];

// const newSong = lines.join(':');
// console.log(newSong);

const newSong = lines.join('. ');
console.log(newSong);