// if else statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// more cases with else if
let number = 0;
if (number > 0) {
  console.log("Positive number");
} else if (number < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

// ternary operator
let isAdult = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(isAdult);
