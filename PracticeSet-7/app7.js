// Q1) Square and sum the array elements using the arrow function and then find the average of the array.

let nums = [2, 7, 9, 4, 6, 3];

const square = nums.map((num) => num * num);

const sum = square.reduce((sum, el) => sum+el);

let avg = sum/nums.length;
console.log(avg);


console.log("--------------------------------------------------------------------------------");






// Q2) Create a new array using the map function whose each element is equal to the original element plus 5.

let arr = [3, 7, 2, -6, 8, -4, 0];

let newArr = arr.map((elmt) => elmt+5);
console.log(newArr);


console.log("--------------------------------------------------------------------------------");






// Q3) Create a new array whose elements are in uppercase of words present in the original array.

let names = ["akshay", "manisha", "nikhil", "rohit", "rahul"];

console.log(names.map((name) => name.toUpperCase()));


console.log("--------------------------------------------------------------------------------");






// Q4) Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((arg) => arg*2)
];

let numbers = [2, 4, 6];
console.log(doubleAndReturnArgs(numbers, 1, 8));
console.log(doubleAndReturnArgs([10], 5, 10));


console.log("--------------------------------------------------------------------------------");






// Q5) Write a function called mergeObjects that accepts two objects and returns a new object which contains
//  all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const obj1 = {
    name : "Ashish",
    age : 22
};

const obj2 = {
    gpa : 6.60,
    city : "Warangal"
};

console.log(mergeObjects(obj1, obj2));


console.log("--------------------------------------------------------------------------------");

