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