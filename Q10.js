//Q10. Implement LinkedList class in JS.

//Linked List Node
class LinkedListNode { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 

//Linked List Implementation Class
class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 
     //insert element to the first.
    insertAtFirst(element){
        var node = new LinkedListNode(element); 
        if (this.head == null) { 

            this.head = node; 

        } else{

            node.next = head; 
            this.head = node; 
        }
        this.size++;
    }
    //insert element to the last.
    insertAtLast(element){ 
        var node = new LinkedListNode(element); 
        var current; 
    
        if (this.head == null) { 

            this.head = node; 

        } else { 
            current = this.head; 
    
            while (current.next) { 
                current = current.next; 
            } 
    
            current.next = node; 
        } 
        this.size++; 
    }
    //insert elemnt at specific position
    insertAt(element, index){ 
        if (index > 0 && index > this.size) {    
            return false; 
        }else { 
            var node = new LinkedListNode(element); 
            var curr, prev; 
    
            curr = this.head; 
    
            if (index == 0) { 
                node.next = head; 
                this.head = node; 
            } else { 
                curr = this.head; 
                var it = 0; 

                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                } 

                node.next = curr; 
                prev.next = node; 
            } 
            this.size++; 
        } 
    }
    //remove element from the given index
    removeFrom(index){ 
        if (index > 0 && index > this.size) {
            return -1;
        } else { 
            var curr, prev, it = 0; 
            curr = this.head; 
            prev = curr; 
    
            if (index === 0) { 
                this.head = curr.next; 
            } else { 
                while (it < index) { 
                    it++; 
                    prev = curr; 
                    curr = curr.next; 
                } 
    
                prev.next = curr.next; 
            } 
            this.size--; 
    
            return curr.element; 
        } 
    } 
    //remove the given element
    removeElement(element) { 
        var current = this.head; 
        var prev = null; 
     
        while (current != null) { 
            
            if (current.element === element) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.element; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return -1; 
    }
    //returns index of an elemnent if present else return -1
    indexOf(element) { 
        var count = 0; 
        var current = this.head; 
    
        while (current != null) { 
            
            if (current.element === element) 
                return count; 
            count++; 
            current = current.next; 
        } 

        return -1; 
    } 
    // checks the list for empty 
    isEmpty() { 
        return this.size == 0; 
    } 
    // gives the size of the list 
    sizeOfLinkedList() { 
        //console.log(this.size);
        return this.size;
    } 
    // prints the list items 
    printList() { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    } 
} 

//Implementing Linked List
var ll = new LinkedList(); 
 
//returns true
console.log("Is the Linked List Empty? " + ll.isEmpty()); 

// adding element to the list at first
ll.insertAtFirst(25); 
  
// prints 25 
ll.printList(); 
  
// returns 1 
console.log("Current Size of Linked List: ",ll.sizeOfLinkedList()); 
  
// adding more elements to the list 
ll.insertAtLast(68); 
ll.insertAtLast(39); 
ll.insertAtLast(124); 
ll.insertAtLast(78); 
  
// returns 25 68 39 124 78
ll.printList(); 
  
// remove the element 78 from the list 
console.log("Removing Element: " + ll.removeElement(78)); 
  
// prints 25 68 39 124
ll.printList(); 
  
// returns 2 
console.log("Index of 39: " + ll.indexOf(39)); 
  
// insert 123 at second position 
ll.insertAt(123, 2); 
  
// ll contains 25 68 123 39 124
ll.printList(); 
  
// returns false 
console.log("Is the Linked List Empty? " + ll.isEmpty()); 
  
// remove 3rd element from the list 
console.log("Revoving 3rd Element: ",ll.removeFrom(3)); 
  
// 25 68 123 124 
ll.printList();