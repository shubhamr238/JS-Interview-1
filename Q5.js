// Q5. How to call the function display() in the 
// following code such that it logs the given object on the screen.

// const obj = {a: 100};
// function display() {
//     console.log(this);
// }
// calling display() should output {a: 100}

const obj = {a: 100};
function display() {
    console.log(this);
}
display.call(obj);
console.log("The Correct method to call is to use --> function_name.call(parameters)");