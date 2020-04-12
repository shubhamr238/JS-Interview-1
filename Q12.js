//Q12. Implement Queue class in JS.

// Queue class 
class Queue { 
    constructor() { 
        this.items = []; 
    } 
                  
    // enqueue function 
    enqueue(element) {     
        this.items.push(element); 
    } 
    
    // dequeue function 
    dequeue() { 
        if(this.isEmpty()) 
            return "Error: Queue Underflow"; 
        return this.items.shift(); 
    }

    //peek front element
    front() { 
        if(this.isEmpty()) 
            return "Error: Queue Empty!"; 
        return this.items[0]; 
    } 

    // isEmpty function 
    isEmpty() { 
        return this.items.length == 0; 
    }

    // printQueue function 
    printQueue() { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] +" "; 
        return str; 
    } 
} 
//Implementing Queue
// creating object for queue class 
var queue = new Queue(); 

// returns Underflow 
console.log("Dequeing:",queue.dequeue()); 

// returns true 
console.log("Is Queue Empty?",queue.isEmpty()); 

// Adding elements to the queue 25 14 90 81 55 62
queue.enqueue(25); 
queue.enqueue(14); 
queue.enqueue(90); 
queue.enqueue(81); 
queue.enqueue(55); 
queue.enqueue(62); 

// printing the elements of the queue
console.log(queue.printQueue()); 

// returns 25
console.log("Peek Front:",queue.front()); 
  
// removes 25 from the queue queue contains 14 90 81 55 62
console.log("Dequeing:",queue.dequeue()); 
  
// returns 14 
console.log("Peek Front:",queue.front());
  
// removes 14 queue contains 90 81 55 62
console.log("Dequeing:",queue.dequeue()); 
  
// printing the elements of the queue prints 90 81 55 62 
console.log(queue.printQueue()); 