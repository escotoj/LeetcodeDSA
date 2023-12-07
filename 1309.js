// 1309. Decrypt String from Alphabet to Integer Mapping

// You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// The test cases are generated so that a unique mapping will always exist.

// Example 1:
// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

// Example 2:
// Input: s = "1326#"
// Output: "acz"

// *** First attempt, only passed first case, uses maps and six for loops ****
// var freqAlphabets = function (s) {
//     let firstHalf = [];  // Create an empty array to store lowercase letters
//     for (let i = 97; i <= 105; i++) {
//       firstHalf.push(String.fromCharCode(i));
//     }
  
//     let firstNum = []
//     for (let i = 1; i <= 9; i++) {
//       firstNum.push(i);
//     }
//     let map1 = new Map()
//     let s1 = ''
//     for(let i = 0; i < firstHalf.length; i++) {
//       map1.set(firstHalf[i], firstNum[i])
//         if(s.includes(firstNum[i])) {
//         s1 += firstHalf[i]
//       }
//     }
//     console.log(s1)
  
//     let secondHalf = [];  // Create an empty array to store lowercase letters
//     for (let i = 105; i <= 122; i++) {
//       secondHalf.push(String.fromCharCode(i));
//     }
//     let secondNum = []
//     for (let i = 9; i <= 26; i++) {
//       secondNum.push(i + '#');
      
//     }
//    let map2= new Map()
//    let s2 = ''
//     for(let i = 0; i < secondHalf.length; i++) {
//       map2.set(secondHalf[i], secondNum[i])
//       if(s.includes(secondNum[i])) {
//         s2 += secondHalf[i]
//       }
//     }
//       console.log(s2)
//       return s2.concat(s1)
  
//   };

// Leetcode solution that is a long the same lines as OG answer
var freqAlphabets = function(s) {

	//  Alphabet Array
    let alphabetArray = [null,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
	// Map that will corresponds the numbers to letters
    const decryptionMap = new Map();
    
	// Populating the Map
    for(let i = 1; i < alphabetArray.length; i++){
        if(i >= 10){
            decryptionMap.set(i+'#', alphabetArray[i]);
        } else {
            decryptionMap.set(i, alphabetArray[i]);
        }
    }
    
    let result = [];
	
	/* Iterating over the string and pushing the appropriate element to the array i+2 to capture three elements
	for example s[i] = 1 then next i+2 needs to be (10#) otherwise it is a single digit number */
	
    for(let i = 0; i < s.length; i++){
        if(s[i+2] === '#'){
            result.push(decryptionMap.get(s[i]+s[i+1]+s[i+2]));
            i += 2;
        } else {
            result.push(decryptionMap.get(Number(s[i])));
        }
    }
    return result.join('');
};


// Alphabet Array (alphabetArray):

// This array represents the English alphabet where each index corresponds to a letter. The first element is set to null to align the index with the numeric values.
// Decryption Map (decryptionMap):

// The decryptionMap is a Map that will be used to map numeric values or numeric values followed by '#' to their corresponding letters. It is populated using a loop that goes through the alphabetArray.
// Loop for Populating the Map:

// The loop populates the decryptionMap by associating numeric values with their corresponding letters. If the numeric value is 10 or greater, it includes '#' to form the key.
// Result Array (result):

// The result array will store the letters obtained from the mapping.
// Main Loop (Iterating Over the String):

// The main loop iterates through the input string s. For each character:
// If the next two characters form a number with '#', it looks up the corresponding letter from the decryptionMap and pushes it to the result array. It then skips the next two characters by incrementing the loop index.
// If it's a single-digit number, it looks up the corresponding letter and pushes it to the result array.
// Joining the Result:

// The final result is obtained by joining the elements of the result array into a single string using the join('') method.