// Q1) Write a JavaScript function that prints array elements larger than a number.

let arr = [45, 12, 71, 49, 78, 33, 85, 22, 69];
let num = 50;

function getLargeElements(arr, num)
{
    for(let i=0; i<arr.length; i++)
    {
        if (arr[i]>num)
        {
            console.log(arr[i]);
        }
    }
}

getLargeElements(arr, num);

console.log("--------------------------------------------------------------------");






// Q2) Write a JavaScript function to extract unique characters from a string.
//      Example : str = "abcdabcdefgggh" ans = "abcdefgh"

let str = "abcdabcdefgggh";
let ans = "";

function getUniqueChars(str)
{
    for(let i=0; i<str.length; i++)
    {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1)
        {
            ans = ans + currChar;
        }
    }
    return ans;
}

console.log(getUniqueChars(str));
console.log("--------------------------------------------------------------------");






// Q3) Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
//      Example : country = ["Australia", "Germany", "United States of America"] output : "United States of America".

let country = ["Australia", "Germany", "United States of America"];

function getLongestName(country)
{
    let resIdx = 0;
    for(let i=0; i<country.length; i++)
    {
        let resLen = country[resIdx].length;
        let currLen = country[i].length;
        if(currLen > resLen)
        {
            resIdx = i;
        }
    }
    return country[resIdx];
}

console.log(getLongestName(country));

console.log("--------------------------------------------------------------------");






// Q4) Write a JavaScript function to count the number of vowels in a String argument.

let strg = "Koduru Akshay Sagar";
let count = 0;

function countVowels(strg)
{
    for(let i=0; i<strg.length; i++)
    {
        if(strg[i] == "A"|| 
        // -------- OR ---------
        // strg.chatAt(i) == "A"
            strg[i] == "E"||
            strg[i] == "I"||
            strg[i] == "O"||
            strg[i] == "U"||
            strg[i] == "a"||
            strg[i] == "e"||
            strg[i] == "i"||
            strg[i] == "o"||
            strg[i] == "u")
        {
            count++;
        }
    }
    return count;
}

console.log(`Number of vowels in the given string ${strg} = ${countVowels(strg)}`);

console.log("--------------------------------------------------------------------");






// Q5) Write a JavaScript function to generate a random number within a range(start, end).

let start = Number(prompt("Enter starting number range : "));
let end = Number(prompt("Enter ending number range : "));

function generateRandom(start, end)
{
    let diff = end - start;
    return Math.floor(Math.random()*diff) + start;
}
console.log(generateRandom(start, end));

console.log("--------------------------------------------------------------------");

