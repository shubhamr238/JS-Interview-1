// Q4. Implement a function sum() in the following way 
// such that it gives the sum of two numbers

// Example:
// console.log(sum(1)(2)); // should output 3
// console.log(sum(10)(2)); // should output 12

var sum = function(x) {
    return function(y) { return x + y; };
}
console.log(sum(1)(2)); // should output 3
console.log(sum(10)(2)); // should output 12
