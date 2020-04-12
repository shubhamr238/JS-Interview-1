// Q1. Implement customMap() function for JS arrays. 
// The functionality should be exactly the same as that of JS native .map() function. 
// Function customMap() should return a new array and not change the array on which we are mapping
// Example:
// const arr = [1, 2, 3];
// const squaredNums = arr.customMap((item, index) => {
// 	return item * item;
// }); 
//console.log(squaredNums); // should output [1, 4, 9]
//console.log(arr); // should output [1, 2, 3]
Array.prototype.customMap = function(cb){
    const outArray=[];
    for(let i=0; i<this.length; i++){
        outArray.push(cb(this[i], i, this));
    }
    return outArray;
}
const arr = [4, 6, 9];
const squaredNums = arr.customMap((item, index) => {
	return item * item;
}); 
console.log("Input Array:",arr); 
console.log("Output Array:",squaredNums);