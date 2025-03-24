// conversion to string

let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); // string

// conversion to number

// math operations return numbers
console.log("6" / "2"); // 3

let strNumber = "123";
let num = Number(strNumber);
console.log(num); // 123

// conversion to boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
