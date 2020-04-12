// Q3. Implement a function strContains(char) that I can use on any string 
// and it returns true/false if the character “char” is present on a string 
// (optimize it as much as possible)

// Example:
// “I am a string”.strContains(‘@’); // should return false
// “I am a string”.strContains(‘a’); // should return true

String.prototype.strContains=function (char){
    for(var i=0; i<this.length; i++){
        if(this.charAt(i)===char){
            return true;
        }
    }
    return false;
}
console.log("I am a string".strContains('@')); // should return false
console.log("I am a string".strContains('a')); // should return true