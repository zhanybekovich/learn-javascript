"use strict";

// declare a variable
let message;

// assign a value to the variable
message = "Hello, World!";

// display the value of the variable
alert(message);

// declare a variable and assign a value to it
let username = "John";

// declaring multiple variables in one line
let user = "John",
  age = 25,
  city = "New York";

// naming variables
// first character must be a letter, an underscore (_), or a dollar sign ($)
// subsequent characters can be letters, digits, underscores, or dollar signs
// variable names are case-sensitive

// valid variable names
let _name;
let $name2;
let name3;
let Name4;
let name$5;
let name_6;
let $;
let _;

// invalid variable names
// let 1name;
// let my-name;
// let my name;
// let my+name;
// let my*name;

// camelCase
let myName;
let myAge;

// don't use reserved words as variable names https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5_%D1%81%D0%BB%D0%BE%D0%B2%D0%B0
// let let = "Hello";
// let return = "World";
// let function = "Hello, World!";
// let class = "Hello, World!";

// constants
const COLOR_RED = "#F00";

/**
 * Task 1:
 * Declare two variables: admin and name.
Write the string "John" to the variable name.
Copy the value from the variable name to admin.
Display the value of admin using the alert function (it should show "John").
 */

let name = "John";
let admin = name;
alert(admin);
