/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */

function getIntegersOnly(array) {
    const newArray = [];
    for (const number of array) {
        if (Number.isInteger(number)) {
            newArray.push(number);
        }
    }
    return newArray;
}
newArray = getIntegersOnly([3, 5, 6, 4.3, 22, 1.2, 5.6, 33]);
console.log(newArray);

/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */
function getEvenNumbers(array) {
    const newEvenArray = [];
    for (number of array) {
        if (number % 2 == 0) {
            newEvenArray.push(number);
        }
    }
    return newEvenArray;
}
newEvenArray = getEvenNumbers([34, 12, 64, 1, 5, 2, 8, 0]);
console.log(newEvenArray);

/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */
function getEvenNumbersFromMixedArray(array) {
    const newEvenMixedArray = [];
    for (number of array) {
        if (number % 2 == 0 && Number.isInteger(number)) {
            newEvenMixedArray.push(number);
        }
    }
    return newEvenMixedArray;
}
newEvenMixedArray = getEvenNumbersFromMixedArray([5, 6, 2, "cat", "mouse"]);
console.log(newEvenArray);


/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */
function getOddNumbers(array) {
    const newOddArray = [];
    for (number of array) {
        if (Math.abs(number % 2) == 1) {
            newOddArray.push(number);
        }
    }
    return newOddArray;
}
newOddArray = getOddNumbers([5, 4, 6, 66, 42, 2, 7, 3]);
console.log(newOddArray);

/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */
function evenOddTransform(arrayMoo) {
    let i = 0
    for (number of arrayMoo) {
        if (Math.abs(number % 2) == 1) {
            arrayMoo[i] = (number + 1);
            i += 1;
        } else if ((number % 2 == 0 && Number.isInteger(number))) {
            arrayMoo[i] = (number - 1);
            i += 1;
        }

    }
    return arrayMoo;
}

console.log(`and now some numbers: ` + evenOddTransform([1, 2, 3, 4]));