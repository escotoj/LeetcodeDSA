// String manupulation for verifying wether a word is the same reversed. 
// Uses three built in JS methods, spit, which breaks up the string into individual letters by passing an empty space in the parameter
// reverse, us used to reverse the order of the new set of characters. 
// join is used to unite the each character by passing an empty char. 
// we us a if statement to check the boolean. 


var isPalindrome = function(str) {
    let newStr = str.split("")
    console.log(newStr)
    let newArray = newStr.reverse()
    console.log(newArray)
    let newNew = newArray.join('')
    console.log(newNew)
    if(newNew === str) {
        return true
    } else {
        return false
    }



};
