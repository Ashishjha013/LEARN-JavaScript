// Arrays - High Order Functions & Methods
const students = ["Ashish", "Ginny", "Ron"];
const marks = [88, 98, 76];
// console.log(students[0]); // Ashish
// console.log(marks[1]);    // 98

const myArray = [1, true, "Ashish", "🚀"];
myArray.push("Siri");
myArray.push("Alexa");
// IN JavaScript we have "Hetrogeneous Arrays" (can store multiple data types)
// console.log(myArray);

// Pushing an object into array (.push() adds element at the end)
myArray.push({ name: "Ashish" });
// console.log(myArray);

// .indexOf() returns the index of the element (if not found, returns -1)
// console.log(myArray.indexOf("Ashish")); // 2

// .length returns the size of the array
// console.log(myArray.length); // 7

// myArray.pop(); // removes last element
// console.log(myArray);

// ----------------------

// Arrays Methods (Useful for Higher-Order Functions)

// 1️⃣ .forEach() → executes a provided function once for each array element
students.forEach((student) => {
  console.log(student);
});
