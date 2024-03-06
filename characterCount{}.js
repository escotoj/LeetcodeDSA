// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

// basically asking to create a map that include the letters in a sentence and count how many times they appear. and return as an object 


var characterCount = function(str) {
    console.log(str)
    let count = {}
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        console.log(char)
        if(count[char]) {
            count[char] ++
        } else {
            count[char] = 1
        }
    }
    console.log(count)
    return count
};



// How the object works
// When the count object is first initialized as an empty object, it doesn't contain any properties, so no characters from the input string exist as properties in it.

// As the for loop iterates through the characters in the string, it encounters characters one by one.

// The if statement checks whether the current character exists as a property in the count object. Since the object is initially empty, the first time a character is encountered, it doesn't exist as a property in the object, so the else block is executed:

// // If it doesn't exist, initialize it with a count of 1
// **count[character] = 1;
// This line of code initializes a property in the count object with the name of the character (e.g., h, e, l, o) and sets its value to 1. This effectively starts counting the occurrences of that character.

// As the loop continues, the if statement will now recognize the character as a property in the count object because it was initialized in the previous step. When the character is encountered again, the if block is executed:


// // If it exists, increment the count
// // **count[character]++;
// This code increments the value associated with the character in the count object, effectively counting how many times that character appears.

function characterCount(inputString) {
    const charMap = new Map();
    
    // Iterate over each character in the input string
    for (const char of inputString) {
      // If the map already has the character, increment its count
      if (charMap.has(char)) {
        charMap.set(char, charMap.get(char) + 1);
      }
      // If the map doesn't have the character, add it with a count of 1
      else {
        charMap.set(char, 1);
      }
    }
    
    return charMap;
  }
  
  // Example usage
  const exampleString = "hello world";
  const result = characterCount(exampleString);
  for (const [char, count] of result) {
    console.log(`${char}: ${count}`);
  }
//   Function Definition: function characterCount(inputString) {...} defines a new function named characterCount which accepts one parameter, inputString, which is the string you want to analyze.

//   Initialize a Map Object: const charMap = new Map(); creates a new Map object. A Map is a collection of key-value pairs where each key is unique. In this context, keys will be the characters from the input string, and their corresponding values will be the counts of how many times each character appears.
  
//   Iterate Over the Input String: for (const char of inputString) {...} is a loop that goes through each character in the inputString. For each iteration, char represents the current character from the string.
  
//   Check if the Character Already Exists in the Map:
  
//   If the map already contains the current character (if (charMap.has(char))), the function retrieves the current count of that character using charMap.get(char), increments it by 1, and updates the map with the new count using charMap.set(char, charMap.get(char) + 1).
//   If the character is not present in the map (else), it adds the character to the map with an initial count of 1 using charMap.set(char, 1).
//   Return the Map: After iterating through all characters in the string, the function returns the Map object (return charMap;), which now contains the frequency count of each character.  