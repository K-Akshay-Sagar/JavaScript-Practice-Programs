// Q1) Write a JS program to delete all occurrences of element 'num' in a given array.
// Example : if arr = [1,2,3,4,5,6,2,3] & num = 2
// Result should be arr = [1,3,4,5,6,3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let i=0; i<arr.length; i++)
{
    if(arr[i] == num)
    {
        arr.splice(i,1);
    }
}

console.log(arr);

console.log("--------------------------------------------------------------------");




// Q2) Write a JS program to find the no.of digits in a number.
// Example : if number = 287152, count = 6

let number = 287152;
let count = 0;
let temp = number;

while(temp > 0)
{
    count++;
    temp = Math.floor(temp/10);

}

console.log(count);

console.log("--------------------------------------------------------------------");




// Q3) Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

let numb = 287152;
let sum = 0;
let tmp = numb;

while(tmp > 0)
{
    digit = tmp % 10;
    sum = sum + digit;
    tmp = Math.floor(tmp/10);
}

console.log(`Sum of digits in the given number "${numb}" is "${sum}" `);

console.log("--------------------------------------------------------------------");




// Q4) Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer
//  and denoted by that integer.]
// Example : 
//      7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
//      5! (factorial of 5) = 1x2x3x4x5 = 120
//      3! (factorial of 3) = 1x2x3 = 6
//      0! is always 1

let n = prompt("Enter a number: ");
let fact = 1;
for(let i=1; i<=n; i++)
{
    fact = fact * i;
}

console.log(`Factorial of ${n} = ${fact}`);

console.log("--------------------------------------------------------------------");




// Q5) Find the largest number in an array with only positive numbers.

let myArr = [51, 69, 47, 22, 85, 3, 94];
let largest = 1;
for(let i=0; i<myArr.length; i++)
{
    if(myArr[i] > largest)
    {
        largest = myArr[i];
    }
}

console.log(largest);


