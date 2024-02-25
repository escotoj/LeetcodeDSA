// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

const str = "hello, world my name is joey joe"

// var titleCase = function(str) {
//     let length = str.length
//     const element = str.split(' ');
//     let newStr = [ ];
//     // console.log(str)
//     for (let i = 0; i < element.length; i++) {
//         let word = element[i];
//         let firstLetter = word.charAt(0).toUpperCase();
//         let otherLetters = word.slice(1).toLowerCase()
//         let capWord = firstLetter + otherLetters;
//         newStr.push(capWord);
//         console.log(capWord)
//     }
//     let results = newStr.join(" ")
//     console.log(results)
//     return results

// };

function capitalizeFirstLetters(str) {
    // Check if the input string is empty
    if (str.length === 0) return str;
  
    // Initialize a result string with the first character capitalized
    let result = str[0].toUpperCase();
    console.log(result)
    // Loop through the string starting from the second character
    for (let i = 1; i < str.length; i++) {
      // Check if the previous character is a space, indicating the start of a new word
      if (str[i - 1] === ' ') {
        result += str[i].toUpperCase(); // Capitalize the current character
      } else {
        result += str[i]; // Add the current character as is
      }
    }
  console.log(result)
    return result;
  }
  
capitalizeFirstLetters(str)
// titleCase(str)

// Initial Capitalization: The function starts by capitalizing the first character of the input string (str[0].toUpperCase()) and assigning it to result. This handles the case where the first character should always be capitalized, assuming the string is not empty.

// Iterating Through the String: It then iterates through the rest of the string starting from the second character (i = 1).

// Identifying Word Start: For each character, the function checks if the preceding character is a space (str[i - 1] === ' '). If so, this indicates the current character is the first letter of a new word and should be capitalized.

// Building the Result: Depending on whether the current character starts a new word, it's either added to result as a capitalized letter or as it is.

// Returning the Result: Finally, the function returns the result string, which contains the original string with the first letter of each word capitalized.