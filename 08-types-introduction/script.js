// There are 8 basic data types in JavaScript. They are:
// string
let message = "Hello, World!";
let message2 = "Hello, World!";
let message3 = `Hello, World!`;

// string in backticks
let name = "John";
let message4 = `Hello, ${name}!`;
alert(`The result is ${1 + 2}`);

// number
let integerNumber = 123;
let floatNumber = 123.456;

// special numeric values
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;

// bigint
let bigInt = 1234567890123456789012345678901234567890n;

// boolean
let hasCar = true;
let isMarried = false;

// null
let age = null;

// undefined
let x;

// object
let user = {
  name: "John",
  age: 25,
};

// symbol
let id = Symbol("id");

// typeof operator
console.log(typeof message); // string
console.log(typeof integerNumber); // number
console.log(typeof infinity); // number
console.log(typeof bigInt); // bigint
console.log(typeof hasCar); // boolean
console.log(typeof age); // object
console.log(typeof "Hello"); // string
