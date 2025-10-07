// ----------------------
// Arrow Functions - Quick Revision
// ----------------------

// 1️⃣ Syntax (short & clean)
const sayHello = (name) => {
  console.log(`Hello ${name}!`);
};
// sayHello("Ginny");

// ----------------------

// 2️⃣ Parameters
const add = (a, b) => a + b;
const square = (x) => x * x;
// console.log(add(5, 7));  // 12
// console.log(square(4));  // 16

// ----------------------

// 3️⃣ Hoisting
// Arrow Functions ❌ not hoisted
// Normal Functions ✅ hoisted
sayHi(); // Works
function sayHi() {
  console.log("Hello Buddy!");
}

// ----------------------

// 4️⃣ this keyword
// Arrow Functions → no own `this`, use parent scope `this`
// Normal Functions → have their own `this`
const obj = {
  name: "Ron",
  marks: 76,
  info: function () {
    console.log(`Name: ${this.name}, Marks: ${this.marks}`);
  },
};
obj.info(); // Name: Ron, Marks: 76

// ----------------------

// 5️⃣ No `new` keyword
// Arrow Functions ❌ can't be constructors
// const Person = (name) => { this.name = name }; ❌
// const user = new Person("John"); // Error
