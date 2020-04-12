// Q7. Give a relevant example of Promises

/* 
    Promises are used to handle asynchronous operations in JavaScript. 
    They are easy to manage when dealing with multiple asynchronous operations 
    where callbacks can create callback hell leading to unmanageable code, as well
    as they provide better error handling than callbacks and events.

    Benefits of Promises
        1. Improves Code Readability
        2. Better handling of asynchronous operations
        3. Better flow of control definition in asynchronous logic
        4. Better Error Handling
    A Promise has four states:
        1. fulfilled: Action related to the promise succeeded
        2. rejected: Action related to the promise failed
        3. pending: Promise is still pending i.e not fulfilled or rejected yet
        4. settled: Promise has fulfilled or rejected
*/
var promise = new Promise(function(resolve, reject) { 
    const x = "Shubham"; 
    const y = "ShUbHaM"
    if(x.toLowerCase() === y.toLowerCase()) { 
        resolve("Strings Matched!"); 
    } else { 
        reject("Strings Mismatched!"); 
    } 
}); 
    
promise 
    .then(function (success) { 
        console.log('Success:', success); 
    }) 
    .catch(function (error) { 
        console.log('Error:', error); 
    }); 