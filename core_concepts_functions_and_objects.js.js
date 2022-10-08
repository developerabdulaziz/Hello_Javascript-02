// ================================== function ===================================

/*

// function declaration
function startFan() {
    console.log('stand up');
    console.log('walk towards the switch');
    console.log('press the switch');
}
// call the function
startFan();

 */

// ================================== parameter ===================================

/*
function bringSingara(money) {
    console.log('ai lon tk');
    console.log(money);
}
bringSingara(100);
 */

// ---------------------------- jog kora ---------------------------
/* function addTwoNumber(number1, number2) {
    var total = number1 + number2;
    console.log(total);
}

var firstNumber = 200;
var secondNumber = 300;
var result = addTwoNumber(firstNumber, secondNumber);
 */

// ---------------------------- biog kora ---------------------------
/*  function addTwoNumber(number1, number2) {
    var total = number1 - number2;
    console.log(total);
}

var firstNumber = 400;
var secondNumber = 300;
var result = addTwoNumber(firstNumber, secondNumber);
console.log('bad dewn lagbo', result);
 */

/* function biogKora(a, b) {
    var c = a - b;
    return c;
}
var biog = biogKora(60, 80);
console.log('bad dewn lagbo', biog);
 */


// ---------------------------- gun kora ---------------------------
/*  function multipleTwoNumbers(num1, num2) {
    console.log(num1, num2);
    var result = num1 * num2;
    return result;

}

var total = multipleTwoNumbers(5, 100);
console.log('total after multiplication', total);
 */

/* function vagKora(nmbr1, nmbr2) {
    var result = nmbr1 / nmbr2;
    return result
}
var total = vagKora(120, 50);
console.log(total); */


// -------------------------------------------------------------- Multiple parameter -------------------------------------------------------

/*  function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}


var firstNumber = 50;
var SecondNumber = 80;
// addTwoNumbers(firstNumber, SecondNumber);
var result = addTwoNumbers(SecondNumber, firstNumber);
console.log('result value:', result);
// addTwoNumbers(21, 59);

 */

// ----------------
/* function multipleTwoNumbers(num1, num2) {
    console.log(num1, num2);
    var result = num1 * num2;
    return result;

}

var total = multipleTwoNumbers(5, 100);
console.log('total after multiplication', total);
 */

// ----------------
/* function biogKora(a, b) {
    var c = a - b;
    return c;
}
var biog = biogKora(60, 80);
console.log('bad dewn lagbo', biog);
 */

// ----------------
/* function vagKora(nmbr1, nmbr2) {
    var result = nmbr1 / nmbr2;
    return result
}
var total = vagKora(120, 50);
console.log(total); */


// ----------------
/* function sum(a, b, c, d, e) {
    var sum = a + b + c + d + e;
    console.log(sum);
}
sum(5, 5, 8, 3, 4); */

// --------------------------------------------------------------- Return ------------------------------------------------------------

/* function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}
// add(45, 15);
var total = add(80, 20);
console.log('total', total);
 */


/* function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var singaras = bringSingara(200);
console.log(singaras);

 *///========================================================== Object proparties =========================================================


var computer = {
    price: 20000,
    Storage: '156gb',
    color: 'black',
    processor: 'intel i5'
};

// object er all property dekhar niom
// var computerProperty = Object.keys(computer);
// console.log(computerProperty);

// object er all values dekhar niom
var computerValues = Object.values(computer);
console.log(computerValues);

// sompurno object output dekhanor khetre
// console.log(computer);

// r jodi property er man dekhate chai sekhetre
// console.log(computer.processor);

// r jodi object er property er man set korte chai
computer.color = 'yellow';
// console.log(computer);

// different ways to set a value of an object property
//  one way
var priceProperty = "price";
computer[priceProperty] = 9600;

// two way
computer.price = 22000;

// three way
computer["price"] = 60000;

// console.log(computer);



//-------------------------------------  switch ---------------------------------------
var color = 'white';
if (color == 'blue') {
    console.log('color is blue');
}
else if (color == 'red') {
    console.log('color is red');
}
else if (color == 'green') {
    console.log('color is green');
}
else if (color == 'white') {
    console.log('color is white');
}
else if (color == 'magenta') {
    console.log('color is magenta');
}
else if (color == 'yellow') {
    console.log('color is yellow');
}
else {
    console.log('color is black');
}

// --------------------------

switch (color) {
    case 'blue':
        console.log('color is blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'green':
        console.log('color is green');
        break;
    case 'white':
        console.log('color is white');
        break;
    case 'magenta':
        console.log('color is magenta');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    default:
        console.log('color is black');
}
