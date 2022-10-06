var destinations = ['sajek', 'coxbazar', 'nepal', 'bali', 'sp'];

console.log(destinations[2]);
destinations[2] = 'thailand';

var index = destinations.indexOf('bali');

destinations.push('bhutan');
destinations.pop();

destinations.unshift('italy');
destinations.shift();

// conditionals
// <, >, ==, !=, <=, >=
// && ||

if (destinations[1] === 'sajek') {
    console.log('phara ahare ahare');
}
else if (destinations[2] == 'bali') {
    console.log('chaina tor kache jamuna')
}

else if (destinations.length !== 3) {
    console.log('aro taka ase aro besi ghurmu');
}
else {
    console.log('kothao jamuna basai thakmu ar mosa marmu')
}





//================================================
var tableLength = 12;
var tourDestinations = ['coxsbazar', 'nepal', 'vutan', 'paris'];

tourDestinations.indexOf('vutan');

var fourthDestination = tourDestinations[3];

tourDestinations[1] = 'srilanka';

tourDestinations.push('london');

tourDestinations.pop();

if (tourDestinations[1] == 'nepal') {
    console.log('phara ahare ahare');
}
else if (tourDestinations[1] == 'china') {
    console.log('chaina tor kache jamuna')
}
else if (tourDestinations.length == 6) {
    console.log('aro taka ase aro besi ghurmu');
}
else {
    console.log('kothao jamuna basai thakmu ar mosa marmu')
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
    console.log('ami dim khamu');
}
if (eggPrice >= myBudget) {
    console.log('lebu diye vat khamu khamu');
}
console.log(32 != 32);
console.log(32 >= 32);