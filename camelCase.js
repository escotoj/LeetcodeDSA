// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    // Split the string by spaces
    let words = str.split(" ");
    
    // Capitalize the first letter of each word (except the first word)
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    // Join the words back together without spaces
    let camelCasedStr = words.join("");

    return camelCasedStr;
};

// TWO differnt attempts below 
// var camelCase = function(str) {
//     let str2 = str.split('')
//     for (let i = 0; i < str2.length; i++) {
//         if(str2[i] === " ") {
//             str2[i] = ""
//         } 
//     }
//     console.log(str2)
    
//      };
    
 
    
    
    
    
    // var camelCase = function(str) {
    //     console.log(str)
    //     let str2 = str.replace(" ", "")
    //     console.log(str2)
    
    //  };
    
    
     //SNAKE CASE
    // var camelCase = function(str) {
    //     let str2 = str.replace(" ", "_")
    //     return str2
    
    //  };
    

    function toCamelCase(str) {
        let result = "";
        let makeNextCharUpperCase = false;
      
        for (let i = 0; i < str.length; i++) {
          // Directly convert the first character to lowercase
          if (i === 0) {
            result += str[i].toLowerCase();
            continue;
          }
      
          // Check if the current character is a space
          if (str[i] === " ") {
            makeNextCharUpperCase = true; // Set flag to capitalize next character
            continue; // Skip adding the space to the result
          }
      
          if (makeNextCharUpperCase) {
            result += str[i].toUpperCase(); // Capitalize the character
            makeNextCharUpperCase = false; // Reset the flag
          } else {
            result += str[i].toLowerCase(); // Add the character in lowercase
          }
        }
      
        return result;
      }
      
      // Example usage
      console.log(toCamelCase("hello world")); // "helloWorld"
      console.log(toCamelCase("This is a test string")); // "thisIsATestString"
      console.log(toCamelCase("another test string here")); // "anotherTestStringHere"
      


//       Initial Character: The first character of the string is always converted to lowercase and added to the result.
// Spaces as Delimiters: This solution only treats spaces as word delimiters. When a space is encountered, the makeNextCharUpperCase flag is set to true to ensure the next character (indicating the start of a new word) is capitalized.
// Character Processing: Each character is processed in a loop. If the makeNextCharUpperCase flag is true, the character is capitalized. Otherwise, characters are added to the result string in lowercase.
// Ignoring Spaces: Spaces are not added to the result string, ensuring words are concatenated without spaces in camelCase format.
