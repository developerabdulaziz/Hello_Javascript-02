
// =====================================  Get part of an array and insert elements using slice, splice ====================================== //

// ----------- slice() ---------------
// const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
// const partial = friends.slice(2, 5);
// console.log(partial);
// console.log(friends);


//-------- splice() ---------------
// array theke remove kore dibe
// const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
// const partial = friends.splice(2, 6);
// console.log(partial);
// console.log(friends);


// ======================================= Remove duplicate items from an array ========================================================//

/*
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

// const names = [2, 3, 4, 2, 4, 5, 6, 6, 7, 8];

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     console.log(element);
    // }

    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
*/

// -------------------------------------
// const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

// function removeDuplicate(names) {
//     /*
//       for (let i = 0; i < names.length; i++) {
//          let index = i;
//          let element = names[i];
//          console.log(index, element);
//      }
//      */

//     for (const element of names) {
//         console.log(element);
//     }
// }
// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);


// --------------------------

// const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

// function removeDuplicate(names) {
//     const unique = [];
//     for (let i = 0; i < names.length; i++) {
//         const name = names[i];
//         if (unique.includes(name) === false) {
//             unique.push(name);
//         }
//     }
//     return unique;
// }
// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);


// ================================= Write foo, bar, foobar if divisible by 3 or 5 or both ===============================//

/*
    1. show output from: 1-50
    2.if the number is divisible by 3 then instead of the number show 'foo'
    3.if the number is divisible by 5 then instead of the number show 'bar'
    4.if the number is divisible by both 3 and 5 then instead of the number show 'foobar'
*/

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('foobar');
//     }
//     else if (i % 3 == 0) {
//         console.log('foo');
//     }
//     else if (i % 5 == 0) {
//         console.log('bar');
//     }
//     else {
//         console.log(i);
//     }
// }



// =============================== Use add and multiplication to calculate wood requirements ===============================//

/*
fixes: per item wood requirements
    1. chairWood = 3cft / chair;
    2. tableWood = 10cft / table;
    3. bedWood = 50cft / bed;

very: quantity
*/

// table chair bed total kototuku kath lagbe ta ber kora
// function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {

//     // 3cft,10cft,50cft kath bujhano hoise
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     //wood calculation
//     const chairWoodQuantity = chairQuantity * perChairWood;
//     const tableWoodQuantity = tableQuantity * perTableWood;
//     const bedWoodQuantity = bedQuantity * perBedWood;

//     // adding all wood quantity
//     const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
//     return totalWood;
// }

// const totalQuantity = woodCalculator(1, 1, 1);
// console.log('total wood required: ', totalQuantity);


// ========================= Find the cheapest phone from an array of phone objects ============================================ //

// const phones = [
//     { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
//     { name: 'walton m32', price: 15000, camera: 8, storage: 8 },
//     { name: 'shaomi m3', price: 12000, camera: 8, storage: 16 },
//     { name: 'oppo a2', price: 17000, camera: 8, storage: 32 },
//     { name: 'nokia m95', price: 8000, camera: 8, storage: 4 },
//     { name: 'htc', price: 25000, camera: 8, storage: 16 },

// ];

// function cheapestPhone(phones) {
//     let cheapest = phones[0];
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i]
//         if (phone.price < cheapest.price) {
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }

// const mySelection = cheapestPhone(phones)
// console.log(mySelection);


// --------------------------------------------------------------
// const phones = [
//     { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
//     { name: 'walton m32', price: 15000, camera: 8, storage: 8 },
//     { name: 'shaomi m3', price: 12000, camera: 8, storage: 16 },
//     { name: 'oppo a2', price: 17000, camera: 8, storage: 32 },
//     { name: 'nokia m95', price: 8000, camera: 8, storage: 4 },
//     { name: 'htc', price: 25000, camera: 8, storage: 16 },

// ];

// let cheapest = phones[0];
// for (const phone of phones) {
//     //compare price only
//     if (phone.price < cheapest.price) {
//         cheapest = phone;
//     }
// }
// console.log(cheapest);



// =============================== Calculate the total cost of the products in a shopping cart ======================================= //



// ---------- shopping cart ------------------
// const shoppingCart = [
//     { name: 'shoe', price: 1200 },
//     { name: 'shirt', price: 2200 },
//     { name: 'pant', price: 3700 },
//     { name: 'belt', price: 600 }
// ];

// function totalCost(products) {
//     let sum = 0;
//     for (let i = 0; i < products.length; i++) {
//         const product = products[i];
//         sum = sum + product.price;
//         // console.log(product);
//     }
//     return sum;
// }

// const expense = totalCost(shoppingCart);
// console.log('Total expense today:', expense);




// ---------- quantity cart ------------------

// const shoppingCart = [
//     { name: 'shoe', price: 1200, quantity: 2 },
//     { name: 'shirt', price: 2200, quantity: 5 },
//     { name: 'pant', price: 3700, quantity: 4 },
//     { name: 'belt', price: 600, quantity: 3 }
// ];

// function totalCost(products) {
//     let sum = 0;
//     for (let i = 0; i < products.length; i++) {
//         const product = products[i];
//         const productTotal = product.price * product.quantity;
//         sum = sum + productTotal;
//         // console.log(product);
//     }
//     return sum;
// }

// const expense = totalCost(shoppingCart);
// console.log('Total expense today:', expense);



// ----- for loop diye kora ------

// const products = [
//     { name: 'laptop', price: 43000 },
//     { name: 'shirt', price: 500 },
//     { name: 'watch', price: 3680 },
//     { name: 'phone', price: 55000 }

// ];

// let totalPrice = 0;
// for (const product of products) {
//     totalPrice = totalPrice + product.price;
// };
// console.log(totalPrice);

// -----------------------------------------
// const cart = [
//     { name: 'laptop', price: 43000, quantity: 1 },
//     { name: 'shirt', price: 500, quantity: 8 },
//     { name: 'watch', price: 3680, quantity: 3 },
//     { name: 'phone', price: 55000, quantity: 1 }

// ];


// let cartTotal = 0;
// for (const product of cart) {
//     console.log(product);
//     const productTotal = product.price * product.quantity;
//     cartTotal = cartTotal + productTotal;
// }
// console.log(cartTotal);


// ================================= (advanced) Multi-layer discount price calculation ===================================== //

/*
    1.if ticket numbers is less than 100, per ticket price: 100
    2.if ticket numbers is more than 100, but less than 200.First 100 tickets will be 100/ticket rest ticketss will be 90 taka per piece per
    3.if you purchase more than 200 tickets

    first 100 ----------> 100 tk
    101-200 -------->90tk
    200+ --------> 70tk
*/

// function ticketPrice(ticketQuantity) {
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const restTicketRate = 70;
//     if (ticketQuantity <= 100) {
//         const price = ticketQuantity * first100Rate;
//         return price;
//     }
//     else if (ticketQuantity <= 200) {
//         const first100Price = 100 * first100Rate;
//         const restTicketQuantity = ticketQuantity - 100;
//         const restTicketPrice = restTicketQuantity * second100Rate;
//         const totalPrice = first100Price + restTicketPrice;
//         return totalPrice;
//     }
//     else {
//         const first100Price = 100 * first100Rate;
//         const second100Price = 100 * second100Rate;
//         const restTicketQuantity = ticketQuantity - 200;
//         const restTicketPrice = restTicketQuantity * restTicketRate;
//         const totalCost = first100Price + second100Price + restTicketPrice;
//         return totalCost;
//     }
// }

// const price = ticketPrice(12);
// console.log("price:", price);



// ======================= Traveling in a Jungle and counting wild animals =========================== //

// function animalCount(miles) {
//     const animalDensityFirst10Miles = 10;
//     const animalDensitySecond10Miles = 50;
//     const animalDensityRestMiles = 100;
//     if (miles <= 10) {
//         const count = miles * animalDensityFirst10Miles;
//         return count;
//     }

//     else if (miles <= 20) {
//         const firstDenseAnimals = 10 * animalDensityFirst10Miles;
//         const restMiles = miles - 10;
//         const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
//         const totalAnimals = firstDenseAnimals + secondDenseAnimals;
//         return totalAnimals;
//     }

//     else {
//         const firstDenseAnimals = 10 * animalDensityFirst10Miles;
//         const secondDenseAnimals = 10 * animalDensitySecond10Miles;
//         const restMiles = miles - 20;
//         const RestDenseAnimals = restMiles * animalDensityRestMiles;
//         const totalAnimals = firstDenseAnimals + secondDenseAnimals + RestDenseAnimals;
//         return totalAnimals;
//     }
// }

// const animals = animalCount(35);
// console.log(animals);


// =================================== Handle unexpected function input parameter error ======================================= //

/*
function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please enter a number';
    }
    return num1 + num2;
}
const result = add(12, '45');
// console.log(result);
*/


// -----------------------------------
/*
 function multiply(num1, num2) {
    return num1 * num2;
}

const output = multiply(12, 45);
console.log(output);

 */

//--------------------------------

// function addThreeNumber(num1, num2, num3) {
//     const sum = num2 + num3 + num1;
//     // console.log(sum)
//     return sum;
// }

// const firstTotal = addThreeNumber(20, 2, 5);
// console.log(firstTotal);

// const secondTotal = addThreeNumber(2, 3, 4);
// console.log(secondTotal);

// const thirdTotal = addThreeNumber(23, 4, 5);
// console.log(thirdTotal);

// const fourthNumber = addThreeNumber(1 + 3, 4 + 2, 4 + 4);
// console.log(fourthNumber);

// ---------------------------
/***
const a = 4;
const b = 2;
const c = a + b;

const x = 3;
const y = 2;
const z = x + y;

const one = 2;
const two = 3;
const total = one + two;

const fifthNumber = addThreeNumber(c, z, total);
console.log(fifthNumber);*///



// ------------------------------ Explore string nature and reverse a string ------------------------------------ //

/*const greetings = 'hello, how are you?';
// const greetings = 'hello, how are you?';
function reverseSring(text) {
    let reverse = '';
    for (const letter of text) {
        console.log(letter);
        // reverse = reverse + letter;
        reverse = letter + reverse;
        console.log(reverse);
    }
}
const reversed = reverseSring(greetings);
console.log(reversed);*///



// =============practice====================
// function reverseSring(text) {
//     let reverse = '';
//     for (const letter of text) {
//         console.log(letter);
//         // reverse = reverse + letter;
//         reverse = letter + reverse;
//         console.log(reverse);
//     }
// }

// const greetings = 'hello, how are you?';
// const reversed = reverseSring(greetings);
// console.log(reversed);


// =============================================== Module Summary and importance of problem solving =================================== //

