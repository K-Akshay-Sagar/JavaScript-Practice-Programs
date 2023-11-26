// Q1) Write a JavaScript program to get the first n elements of an array.[n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print [7, 9, 0]

let arr = [7, 9, 0, -2];
let n = 3;
let res = arr.slice(0, n);
console.log(res);

console.log("--------------------------------------------------------------------");




// Q2) Write a JavaScript program to get the last m elements of an array. [m can be any positive number].
// For example: for array [7, 9, 0, -2] and m = 3
// Print [9, 0, -2]

let arr1 = [7, 9, 0, -2];
let m = 3;
let ans = arr1.slice(arr1.length-m);
console.log(ans);

console.log("--------------------------------------------------------------------");




// Q3) Write a JavaScript program to check whether a string is blank or not.

let str = prompt("Enter a String to check whether it is blank or not: ");
if(str.length == 0)
{
    console.log("String is empty");
}
else
{
    console.log("String is not empty");
}

console.log("--------------------------------------------------------------------");




// Q4) Write a JavaScript program to test whether the character at the given (character) index is lower case.

let strg = "AKsHay SaGAr";
let index = 4;
if(strg[index] == strg[index].toLowerCase())
{
    console.log("Character is in lowercase");
}
else
{
    console.log("Character is not in lowercase");
}

console.log("--------------------------------------------------------------------");




// Q5) Write a JavaScript program to strip leading and trailing spaces from a string.

let strng = prompt("Enter a string to strip leading and trailing spaces: ");
console.log(`String Before stripping spaces: ${strng}`);
console.log(`String After stripping spaces: ${strng.trim()}`);

console.log("--------------------------------------------------------------------");




// Q6) Write a JavaScript program to check if an element exists in an array or not.

let arr2 = [5, 12, 67, 78, 3, 9];
let elmt = 78;
if (arr2.includes(elmt))
{
    console.log("element exists in the array");
}
else
{
    console.log("element does not exist in the array");
}

// --------------------- (OR) ---------------------------

// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let item = 9;
// if(arr3.indexOf(item) != -1)
// {
//     console.log("element exists in the array");
// }
// else
// {
//     console.log("element does not exist in the array");
// }

console.log("---------------------------------------------------------------------");
