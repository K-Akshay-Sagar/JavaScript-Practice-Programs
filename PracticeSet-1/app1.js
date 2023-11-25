// Q1) Create a number variable num with some value.
// Now, print "good" if the number is divisible by 10 and print "bad" if it is not

let num = 20;
if (num % 10 == 0)
{
    console.log("Good");
}
else
{
    console.log("Bad");
}

console.log("--------------------------------------------------------------------");




// Q2) Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting their name & age):
// "name is age years old".
// [Use template Literals to print this sentence]

let name = prompt("Enter your name : ");
let age = prompt("Enter your age : ");

alert(`${name} is ${age} years old`);

console.log("--------------------------------------------------------------------");




// Q3) Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4 : October, November, December
// [Use the number as the case value in switch]

let quarter_number = 3;
switch(quarter_number)
{
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Invalid quarter number");
}

console.log("--------------------------------------------------------------------");




// Q4) A string is a 'golden string' if it starts with the character 'A' or 'a' and has a total length greater than 5.
//  For a given string print if it is golden or not.

let str = "Akshay";
if ((str[0] == 'A' || str[0] == 'a') && (str.length > 5))
{
    console.log("Golden String");
}
else
{
    console.log("Not a golden string");
}

console.log("--------------------------------------------------------------------");




// Q5) Write a program to find the largest of 3 numbers.

let num1 = 22;
let num2 = 69;
let num3 = 79;

if ((num1 > num2) && (num1 > num3))
{
    // console.log(`num1 = ${num1} is largest among all`);
}

else if (num2 > num3)
{
    // console.log(`num2 = ${num2} is largest among all`);
}

else
{
    // console.log(`num3 = ${num3} is largest among all`);
}

// --------------------------------- OR -----------------------------------

if(num1 > num2)
{
    if(num1 > num3)
    {
        console.log(`num1 = ${num1} is largest among all`);
    }
    else
    {
        console.log(`num3 = ${num3} is largest among all`);
    }
}
else
{
    if (num2 > num3)
    {
        console.log(`num2 = ${num2} is largest among all`);
    }
    else
    {
        console.log(`num3 = ${num3} is largest among all`);
    }
}

console.log("--------------------------------------------------------------------");




// Q6) Bonus) Write a program to check if 2 numbers have the same last digit.
//  Ex: 32 and 47852 have the same last digit i.e., 2

let digit1 = 32;
let digit2 = 47852;
if((digit1 % 10) == (digit2 % 10))
{
    console.log("Both numbers have the same last digit ", (digit1 % 10));
}
else
{
    console.log("Both numbers don't have the same last digit");
}

console.log("--------------------------------------------------------------------");




// Q2) Write a JS program to find the no.of digits in a number.
// Example : if number = 287152, count = 6

let number = 287152;
let count = 0;
let temp = number;
while (temp > 0)
{
    count++;
    number = number / 10;
}
console.log(count);

console.log("--------------------------------------------------------------------");
