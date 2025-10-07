// Arrow Functions

// 1. Syntax
// Arrow functions provide a shorter syntax for writing functions.
const sayHello = (name) => {
  console.log(`Hello ${name}!`);
};

// Usage
// Call the function
// sayHello("Ginny");

// 2. `Arguments` keyword
// Functions with parameters
const add = (a, b) => {
  return a + b;
};
// console.log(add(5, 7)); // Outputs: 12

// Functions with a single parameter
const square = (x) => x * x;
// console.log(square(4)); // Outputs: 16

// 3. Hoisting
// Arrow functions are not hoisted, meaning they cannot be called before they are defined.
// Only normal function declarations are hoisted.

sayHello();

function sayHello() {
  console.log("Hello Buddy!");
}

// 4. `this` keyword
// Arrow functions do not have their own `this` context; they inherit `this` from the surrounding lexical scope.
const onn = {
  nmae: "Ron",
  marks: 76,
  studentInfo: function (name, marks) {
    console.log(`Name: ${this.name}, Marks: ${this.marks}`);
  },
};
obj.studentInfo(); // Outputs: Name: Ron, Marks: 76
// In the above example, `this` refers to the `obj` object.

// 5. No `new` keyword
// Arrow functions cannot be used as constructor functions.
