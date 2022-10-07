

// var i = 1;
// while (i <= 15) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++
// }

// for (var i = 0; i < 20; i++) {
//     console.log(i);
//     if (i > 8) {
//         break;
//     }
// }



var numbers = [54, 35, 21, 98, 23, 101, 45, 67];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number > 80) {
//         break;
//     }
// }


/* for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
} */


//========================================================================

/* for (var i = 1; i <= 20; i++) {
    console.log(i);
    if (i > 10) {
        break;
    }
} */


var roastGiven = 0;
while (roastGiven < 10) {
    console.log('roast dan plz');
    roastGiven++;
    if (roastGiven > 4) {
        break;
    }
}

var items = ['bottole', 'mouse', 'sunglass', 'pen', 'notebook', 'book'];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'sunglass') {
        break;
    }
    console.log(item);
}
