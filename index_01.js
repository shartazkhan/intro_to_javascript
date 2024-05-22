// My First JavaScript Code - Day 1 Learning Notes
// Author: [Your Name]
// Date: [Today's Date]

// Basic Output to the Console (Commented out for now)
// console.log('Hello World!'); // This line prints a message to the developer console

// Variables and Data Types
let name = 'John';        // String: Sequence of characters
const rate = 0.5;         // Number: Can be whole or decimal (const means the value is fixed)
console.log(name);        // Prints the current value of 'name'

let isApproved = true;   // Boolean: Represents true or false
let value = undefined;    // Undefined: Variable has been declared but not assigned a value
let myColor = null;       // Null: Represents the intentional absence of a value

// Objects: Collections of Key-Value Pairs
let person = {             
    name: "John",          // Property 'name' with value "John"
    age: 25               // Property 'age' with value 25
};

// Accessing and Modifying Object Properties
// Dot Notation
person.name = 'Don';      // Changes the 'name' property to "Don"
console.log(person.name); 

// Bracket Notation (Useful when property names are dynamic)
person['name'] = 'Jina'; // Changes the 'name' property again
console.log(person.name);

// Arrays: Ordered Lists of Items
let selectedColors = ['Red', 'Blue']; 
console.log(selectedColors[0]); // Accesses the first item in the array ("Red")

selectedColors[2] = 3;         // Adds a new element (3) to the array 
console.log(selectedColors);    // Output: ['Red', 'Blue', 3]
console.log(selectedColors.length); // Outputs: 3 (the number of items in the array)

// Functions: Reusable Blocks of Code
function greet(firstName, lastName) {  // Parameters: Placeholders for values passed into the function
    console.log('This is a function for ' + firstName + ' ' + lastName);
}

greet('John', 'Doe');     // Arguments: Actual values passed into the function when it's called

// Functions with Return Values
function square(number) {   
    return number * number; // Calculates the square and sends it back to where the function was called
}

let numb = square(2);  // 'numb' stores the result (4) of the 'square' function
console.log(numb);      // Output: 4
