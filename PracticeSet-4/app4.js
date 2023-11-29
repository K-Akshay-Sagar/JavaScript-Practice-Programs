// Q1) Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

console.log("--------------------------------------------------------------------");




// Q2) Create an object representing a car that stores the following properties for the car : name, model, color.
// Print the car's name.

const car = {
    name : "Rolce Royce",
    model : "Phantom",
    color : "Purple"
};

console.log(car.name);

// ---------- OR -----------
// console.log(car["name"]);

console.log("--------------------------------------------------------------------");




// Q3) Create an object Person with their name, age and city.
// Edit their city's original value to change it to "New York".
// Add a new property country and set it to the United States.

const Person = {
    name : "Akshay Sagar",
    age : 22,
    city : "Hyderabad"
};

console.log(Person);

Person.city = "New York";
Person.country = "United States";
console.log(Person);
 
console.log("--------------------------------------------------------------------");
