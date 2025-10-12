// 🚀 ARRAYS in JavaScript — High-Order Functions & Methods
// Arrays can hold multiple values — even of different data types (heterogeneous arrays)

const students = ["Ashish", "Ginny", "Ron"];
const marks = [88, 98, 76];

// console.log(students[0]); // Output: Ashish → Access element by index
// console.log(marks[1]);    // Output: 98

// 🧠 Arrays in JS can store multiple data types
const myArray = [1, true, "Ashish", "🚀"];
myArray.push("Siri"); // Adds element at the END
myArray.push("Alexa");

// JS allows HETEROGENEOUS arrays (mix of numbers, strings, booleans, objects, etc.)
// console.log(myArray);

// You can even push an OBJECT inside an array
myArray.push({ name: "Ashish" });
// console.log(myArray);

// .indexOf(value) → returns the index of the first match, or -1 if not found
// console.log(myArray.indexOf("Ashish")); // 2

// .length → total number of elements in the array
// console.log(myArray.length); // 7

// .pop() → removes the LAST element from the array
// myArray.pop();
// console.log(myArray);

// --------------------------------------
// 🔥 HIGHER-ORDER ARRAY METHODS
// Higher-Order Functions = functions that take another function as input or return a function

// 1️⃣ .forEach()
// 👉 Runs a given function once for EVERY element (does NOT return new array)
students.forEach((student) => {
  // console.log(student + " Jha"); // Adds "Jha" after every name
});

// 2️⃣ .map()
// 👉 Creates a NEW array after applying a function on every element
// ✅ Always returns a NEW array (original remains same)
const newStudents = students.map((student) => {
  return student; // Here we are simply returning the same value
});
// console.log(newStudents);

// 🧩 Practice Example:
// Q1: Given an array of numbers, return a new array with each number doubled
let numbers = [11, 22, 33, 44, 55, 66, 77];

function doubleIt(num) {
  return num * 2;
}

let doubleNumbers = numbers.map(doubleIt);
// console.log(doubleNumbers); // [22, 44, 66, 88, 110, 132, 154]

// 3️⃣ .find()
// 👉 Returns the FIRST element that matches the condition (stops after first match)
const nums = [5, 12, 8, 16, 130, 44, 234];
let ans = numbers.find((num) => num === 130); // Finds if 130 exists
let ans2 = numbers.find((num) => num === 4 * 4); // Finds if 16 exists
// console.log(ans);  // 130
// console.log(ans2); // undefined (since 16 not found)

// .findIndex()
// 👉 Similar to .find(), but returns the INDEX of first matching element, or -1 if not found
let result = numbers.findIndex((num) => num === 4 * 4);
// console.log("Index of 4 * 4 is: ", result);

// .includes(value)
// 👉 Checks if the array CONTAINS a given value → returns true or false
// console.log(numbers.includes(130)); // true
// console.log(numbers.includes(10));  // false
// console.log(numbers.includes(4 * 4)); // false

// 4️⃣ .filter()
// 👉 Returns a NEW array with all elements that pass the test (condition)
// ✅ Does NOT modify the original array
const filteredNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(filteredNumbers); // [22, 44, 66]

// 5️⃣ .slice(start, end)
// 👉 Returns a COPY of a portion of array (end index NOT included)
// ✅ Does NOT change original array
const animals = ["ant", "bison", "camel", "duck", "elephant"];
const slicedAnimals = animals.slice(1, 4); // From index 1 to 3
const slicedAnimals2 = animals.slice(2); // From index 2 to end
// console.log("Original Array: ", animals);
// console.log("Sliced Animals 1: ", slicedAnimals); // ['bison', 'camel', 'duck']
// console.log("Sliced Animals 2: ", slicedAnimals2); // ['camel', 'duck', 'elephant']

// 6️⃣ .splice(start, deleteCount, ...itemsToAdd)
// 👉 Directly MODIFIES the original array
// 👉 Can REMOVE or ADD elements
const months = ["Jan", "March", "April", "June", "July", "Aug", "Sept", "Oct"];
console.log("Original Months Array: ", months);

const splicedMonths = months.splice(2, 6);
// Starts at index 2, removes 6 elements → modifies original
console.log("Spliced months Array: ", splicedMonths); // ['April', 'June', 'July', 'Aug', 'Sept', 'Oct']
console.log("Months array after splice: ", months); // ['Jan', 'March']

// 🧠 Quick Recap:
// forEach()  → Just runs a loop (no new array)
// map()      → Transforms each element (returns new array)
// filter()   → Filters out elements (returns new array)
// find()     → Returns first matching VALUE
// findIndex()→ Returns first matching INDEX
// includes() → Returns true/false
// slice()    → Returns a COPY (non-destructive)
// splice()   → CHANGES original array (adds/removes elements)
