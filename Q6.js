//Q6. Explain the concept of prototypes in JS. How is it related to Classes in ES6


/* 

Prototype help JavaScript in achieving the concepts of Object Oriented Programming.
When a function is created in JavaScript, the JavaScript engine adds a prototype property 
to the function. This prototype property is an object (called as prototype object) which 
has a constructor property by default. The constructor property points back to the function 
on which prototype object is a property. We can access the function’s prototype property 
using functionName.prototype.
we can also attach methods and properties in a prototype object, which enables all 
the other objects to inherit these methods and properties.

*/
function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}
var person1 = new Human("Shubham", "Rakshit");

console.log(person1);