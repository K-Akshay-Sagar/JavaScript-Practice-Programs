// Q1) Write an arrow function that returns the square of a number 'n'.

const square = n => n*n;
let n = 11;
console.log(`square of ${n} is : ${square(n)}`);

console.log("----------------------------------------------------------------------------");






// Q2) Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

let arr = [2, 4, 6, 8, 10];
const arrayAverage = (arr) => {
    let avg = 0;
    let sum = 0;
    for (i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return avg = sum/arr.length;
}

console.log("Average =", arrayAverage(arr));

console.log("----------------------------------------------------------------------------");






// Q3) Write an arrow function named isEven() that takes a single number as an argument and returns if it is even or not.

const isEven = n => {
    if (n%2 == 0){
        return "even";
    }
    else
    {
        return "not an even";
    }
}

console.log(isEven(8));

// ----------------------------- OR -----------------------------

// const isEvenn = (num) => num % 2 == 0;
// console.log(isEvenn(8));

console.log("----------------------------------------------------------------------------");






// Q4) what is the output of the following code : 

const object = {
    message : 'Hello, World!',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

// After a delay of 1 second, undefined is logged to the console.
// While the setTimeout() function uses the object.logMessage as a callback, still it invokes object.logMessage
// as a regular function, rather than a method.
// And during a regular function invocation 'this' equals the global object, which is a window in the case of the browser environment.
// That's why console.log(this.message) inside logMessage method logs window.message, which is undefined.


// this is just a sample code to separate two codes.
setTimeout(() => {
    console.log("----------------------------------------------------------------------------");
}, 1000);







// Q5) What is the output of the following code :

// let length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object1 = {
//     length : 5,
//     method(callback) {
//         callback();
//     },
// };

// object1.method(callback, 1, 2);

// console.log("----------------------------------------------------------------------------");






// Q6) Write a function that prints "Hello World" 5 times at intervals of 2s each.

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("interval cleared");

    console.log("----------------------------------------------------------------------------");
}, 10000);

