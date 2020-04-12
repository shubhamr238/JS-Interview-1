// Q9. Why do we need let and const in JS. Compare it with the problems in ES5

/* 

ES2015(ES6) introduced two important new JavaScript keywords, namely let and const.
These two keywords provide Block Scope variables and constants(blocked scoped too) in JavaScript accordingly.
Before ES2015(ES6), JavaScript had only two types of scope: Global Scope and Function Scope. 

------------------------------------------------------------------------------------------
Global Scope:
Variables declared Globally (outside any function) have Global Scope. 
Example:
var carName = "Volvo"; //global scope

// code here can use carName

function myFunction() {
  // code here can also use carName
}
------------------------------------------------------------------------------------------
Function Scope:
Variables declared Locally (inside a function) have Function Scope.

Example:
// code here can NOT use carName
function myFunction() {
  var carName = "Volvo";
  // code here CAN use carName
}
// code here can NOT use carName
------------------------------------------------------------------------------------------
let Keyword (ES6):

Unlike the var keyword, let keyword allows us to declare variables that are block-scoped.

Example:
//loop will print 1 to 10
for(let i=1; i<=10; i++){
    console.log(i);
}
console.log(i); //it will throw an ref error as i is decleared using let and is block-scoped.
------------------------------------------------------------------------------------------
Const Keyword (ES6):

const keyword creates block-scoped variables whose values can’t be reassigned,
that is treated as constant whose value can never be changed or updated.

Example:
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error


*/
var car_global="maruti";

console.log("Global Var:",car_global);

function print(){
    console.log("Global Var printed inside a function:",car_global);
    
    var car_funScoped="suzuki";
    console.log("Fun Scoped Var printed inside a function:",car_funScoped);
}

//console.log("Fun Scoped Var printed outside the function:",car_funScoped); //error

console.log("Printing 1 to 10 using block scoped var");
for(let i=1; i<=10; i++){
    console.log(i);
}
//console.log("accessing blocked scoped var outside block:",i); //error