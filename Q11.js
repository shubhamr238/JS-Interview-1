// Q11. Implement Stack class in JS.

// Stack class 
class Stack { 
  
    constructor() { 
        this.items = []; 
    } 
  
    // push function 
    push(element) { 
        this.items.push(element); 
    }

    // pop function 
    pop() { 
        if (this.items.length == 0) 
            return "Error: Stack Underflow"; 
        return this.items.pop(); 
    } 

    //peek function
    peek() { 
        return this.items[this.items.length - 1]; 
    } 

    //isEmpty Function
    isEmpty() { 
        return this.items.length == 0; 
    }

    // printStack function 
    printStack() { 
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        return str; 
    }
} 

//Implementing Stack
var stack = new Stack(); 
  
//testing isEmpty and pop on an empty stack returns true 
console.log(stack.isEmpty());  
  
//returns Underflow 
console.log(stack.pop()); 

//Adding element to the stack 
stack.push(50); 
stack.push(60); 
stack.push(70); 
  
//Printing the stack element 50 60 70
console.log(stack.printStack()); 
  
//returns 70 
console.log("Stack Peek:",stack.peek()); 
  
//returns 70 and remove it from stack 
console.log("Pop Stack:",stack.pop()); 
  
//Printing the stack element 50 60
console.log(stack.printStack());