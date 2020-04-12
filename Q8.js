// Q8. Why do we need Async/Await. Explain a little about 
// how and why we reached here, with relevant examples

/* 
Javascript is a Synchronous which means that it has an event loop that 
allows us to queue up an action that won’t take place until the loop is 
available sometime after the code that queued the action has finished executing. 
But there’s a lot of functionalities in our program which makes our code Asynchronous. 
One of them is the Async/Await functionality. Async/Await is the extension of promises. 
*/

/* 
Async:
It simply allows us to write promises based code as if it was synchronous
and it checks that we are not breaking the execution thread. It operates 
asynchronously via the event-loop. Async functions will always return a value. 
It makes sure that a promise is returned and if it is not returned then javascript 
automatically wraps it in a promise which is resolved with its value. 
*/
const getData = async() => { 
    var data = "Shubham Rakshit from getData"; 
    return data; 
} 
  
getData().then(data => console.log(data)); 

/* 
Await:
Await function is used to wait for the promise. It could be used within the async block only. 
It makes the code wait until the promise returns a result. It only makes the async block wait.
 */
const getData1 = async() => { 
    var y = await "Shubham Rakshit from getData1"; 
    console.log(y); 
} 
  
console.log(1); 
getData1(); 
console.log(2);