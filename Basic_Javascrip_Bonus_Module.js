
// ================================================ Understand recursion using sum of numbers =========================================== //

/*
 for (let i = 0; i <= 10; i++) {
    let index = i;
    console.log(index);
}

for (let i = 20; i >= 1; i--) {
    let index = i;
    console.log(index);
}
 */

/*
let sum = 0;
for (i = 1; i <= 5; i++) {
    sum = sum + i;

}
console.log(sum);
*/

/*
 let sum = 0;
for (let i = 10; i >= 1; i--) {
    sum = sum + i;
}
console.log(sum);

 */


// -------------- factorial ------------------//

/*
let factorial = 1;
for (let i = 5; i > 1; i--) {
    factorial = factorial * i;
}
console.log(factorial);
*/

/* function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(i - 1);
}
const result = factorial(5);
console.log(result);
 */
/*
    5 * factorial(i-1)
    5 * factorial(5-1)
    = 5 * factorial(4)

    5 * factorial(i-1)
    5 * factorial(4-1)
    = 5 * factorial(3)

    5 * factorial(i-1)
    5 * factorial(3-1)
    = 5 * factorial(2)

    5 * factorial(i-1)
    5 * factorial(2-1)
    = 5 * factorial(1)

*/

/*
    5 * factorial(4)
    5 * 4 * factorial(3)
    5 * 4 * 3 * factorial(2)
    5 * 4 * 3 * 2 * factorial(1)
    5 * 4 * 3 * 2 * 1
*/

// (advanced) Find the matching product by searching products

// let numbers = [45, 65, 23, 98, 19];

// // for (let i = 0; i < numbers.length; i++) {
// //     let index = i;
// //     const number = numbers[i];
// //     console.log(index, number);
// // }  // ------------- uporer sob aivabeo kora jai (const number of numbers) ----------//

// for (number of numbers) {
//     console.log(number);
// }




// const products = [
//     { name: 'iphone 14', price: 70000 },
//     { name: 'samsung galaxy 14', price: 60000 },
//     { name: 'dell laptop', price: 50000 },
//     { name: 'lenovo yoga laptop', price: 55000 },
//     { name: 'Asus afsus laptop 14', price: 35000 },
//     { name: 'smart watch samsung', price: 7000 },
//     { name: 'apple watch', price: 20000 },
//     { name: 'plus one phone 4', price: 70000 },
// ];


/*====step one=========/*

function searchProducts(products, searchText) {
    for (const product of products) {
        // console.log(product);
        // console.log(product.name);
        // console.log(product.price);
        // if (product.name.includes('watch')) {
        if (product.name.includes('laptop')) {
            console.log(product.name);
        }
    }
}

searchProducts(products);

*/

/*===========step Two=========*/

/*
 function searchProducts(products, searchText) {
    for (const product of products) {
        // console.log(product);
        // console.log(product.name);
        // console.log(product.price);
        // if (product.name.includes('watch')) {
        if (product.name.includes(searchText)) {
            console.log(product.name);
        }
    }
}

searchProducts(products, 'laptop');
 */

/*===========step Three=========*/

/* 
function searchProducts(products, searchText) {
    const result = []
    for (const product of products) {
        // console.log(product);
        // console.log(product.name);
        // console.log(product.price);
        // if (product.name.includes('watch')) {
        if (product.name.includes(searchText)) {
            console.log(product.name);
            result.push(product);
        }
    }
    return result;
}

const matched = searchProducts(products, 'laptop');
console.log(matched);
 */