// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
    let arr = str.split(''); // Convert string to array of characters

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr.join(''); // Convert array back to string
};


// Converting the String to an Array:

// let arr = str.split(''); This line uses the split method to convert the input string str into an array of characters. The split('') with an empty string as an argument splits the string at each character, effectively creating an array with each character as an element.
// Swapping Characters in the Array:

// The loop runs from the start of the array to the midpoint. It uses Math.floor(arr.length / 2) to ensure that the loop only runs halfway through the array.
// Math.floor() is a function in JavaScript that rounds down to the nearest integer. It's used to guarantee that the loop runs the correct number of times, especially when the array length is odd. For example, in an array of length 7, dividing by 2 results in 3.5. Math.floor(3.5) returns 3, ensuring that the loop goes up to the third index.
// Inside the loop, the code swaps the characters from the beginning with their respective positions from the end of the array. This process effectively reverses the string.
// Rejoining the Array into a String:

// arr.join('') reverts the modified array back to a string. The join('') method combines all the elements of the array, effectively producing a reversed string.
// The logic is to reverse the string by converting it to an array, swapping characters by iterating up to the middle of the array, and rejoining the characters into a reversed string. The use of Math.floor ensures the correct number of iterations to avoid redundant swaps when the string length is odd.


function reverseString(str) {
    let reversed = ''; // Initialize an empty string to hold the reversed characters
  
    // Loop through the string in reverse order
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]; // Append each character to 'reversed'
    }
  
    return reversed; // Return the reversed string
  }

console.log(reverseString("hello")); // Expected output: "olleh"
console.log(reverseString("OpenAI")); // Expected output: "IAnepO"
console.log(reverseString("12345")); // Expected output: "54321"
console.log(reverseString("")); // Expected output: "" (empty string should return an empty string)
console.log(reverseString("a")); 
  

// Initialization of reversed String: A new string variable reversed is created and initialized as an empty string. This variable will gradually be filled with characters from str, but in reverse order.

// Looping in Reverse: The loop is set up to start from the last character of str (using str.length - 1 as the starting index) and decrement the index i after each iteration. This backward loop ensures that we start appending characters from the end of str to the beginning of reversed.

// Appending Characters: In each iteration of the loop, the current character (str[i]) is added to the reversed string. The += operator is used to append the character to whatever is currently in reversed. Since the loop runs backward through str, characters are appended to reversed in the reverse of their original order in str.

// Return the Reversed String: Once the loop has processed every character in str (when i has been decremented down to 0), the loop ends. At this point, reversed contains all of the characters from str, but in reverse order. The function then returns reversed.