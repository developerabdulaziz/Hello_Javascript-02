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


//===============================================================================================
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



//====================================================================================//
/*
var number = [2, 6, 4, 8, 98, 23, 80]
// number.push(200);
// number.pop();
// number.unshift(100);
// number.shift();
// console.log(number);
// console.log(number.length);

number[3] = 50;
var fifthPosition = number[4];
console.log(fifthPosition);

var nmbrIndex = number.indexOf(98);
// console.log(nmbrIndex);
*/




/*//=========variable part========
var glass = 'water';
console.log(glass);

var a = '25';
var b = 60;
var result = a + b;
console.log(result);


var x = 'amar sonar bangla';
var y = 250;
console.log(x + ' ' + y);

var apple = 98;
apple = 98 + 2;
var orange = 50;
orange -= 2;
var sum = apple + orange;
console.log(sum);*////




//======================Data Type===================//
//Primitive data type


/*=======//----------------1. string data type-----------------//
var firstName = 'Abdul';
var lastName = 'Aziz';
// var fullName = firstName + lastName;
var fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(typeof fullName);*///



//---------------- 2. Number data type-----------------//
/*var a = '25';
var b = 60;
// var result = a + b;
var result = a + " " + b;
console.log(result);
console.log(typeof result);*/

/*var book1 = 25;
var book2 = 40;
var bookPrice = book1 + book2;
console.log(bookPrice);
console.log(typeof bookPrice);


var onionPrice = 54;
var eggPrice = "36";
var total = onionPrice + " " + eggPrice;
console.log(total);
console.log(typeof total);


var onionPrice = 54;
var eggPrice = "36";
var total = onionPrice + parseInt(eggPrice);
console.log(total);
console.log(typeof total);*/

/*******var a = 45.87;
var b = '54';
var result = parseInt(a) + parseInt(b);
console.log(result);
console.log(typeof result);


var x = 5;
var y = '9';
var sum = parseFloat(x) + parseInt(y);
console.log(sum);
console.log(typeof sum);


var apple = 42;
var orange = '45.25';
var applePrice = parseFloat(apple);
var orangePrice = parseFloat(orange);
var total = applePrice + orangePrice;
console.log(total);




var banana = 60;
var apple = 42.25;
var orange = '45.25';
var applePrice = parseInt(apple);
var orangePrice = parseFloat(orange);
var total = applePrice + orangePrice + banana;
console.log(total);*////



//---------------- 3. Boolean data type-----------------//

// var num1 = 60;
// var num2 = 50;
// console.log(num1 == num2);



/******var a = 50;
var b = 80;
var total = a == b;
console.log(a == b);
console.log(typeof total);
//a b er theke soto ki na
console.log(a < b);
//a b er theke boro ki na
console.log(a > b);
//a b er theke soto ba soman ki na
console.log(a <= b);
//a b er theke boro ba soman ki na
console.log(a >= b);*////////

//---------------- Undefine data type-----------------//
// var rollNumber;
// console.log(typeof rollNumber);

//---------------- Null data type-----------------//
// var x = null;
// console.log(x);





//====================== Conditional ===================//

/**var number1 = 30;
var number2 = 50;
//number1 theke ki number2 boro? ==true.
/*console.log(number1 < number2);
if (number1 < number2) {
    console.log("number2 is big", number2);
}
else {
    console.log('number is small', number1);
}



console.log(number1 > number2);
// number2 theke number1 boro ki na? ==false.
if (number1 > number2) {
    console.log('number1 is small', number1);
}
else {
    console.log('number2 theke number1 boro noi', number2);
}*////




// var firstNumber = 0.1;
// var secondNumber = 0.2;
// var total = firstNumber + secondNumber;
// console.log(total.toFixed(1));
// console.log(parseFloat(total.toFixed(2)));


//====================== Even/jor   odd/bijor ===================//

// const num = 4;
// const remainder = num % 2;
// console.log(remainder == 0);

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}



const num = 2230;
const isEvenNumber = isEven(num);
console.log(isEvenNumber);
