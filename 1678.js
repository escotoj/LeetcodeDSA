// 1678. Goal Parser Interpretation

// Companies
// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

 

// Example 1:
// const command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// Example 2:

const command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// const command = "(al)G(al)()()G"
// Output: "alGalooG"

// EASIEST METHOD OF SOLVING no use of loop, only built in methods. 
var interpret = function(command) {
    return command.split("()").join("o").split("(al)").join("al");
};

// 1. command.split("()").join("o"):
// .split("()"): This part splits the command string wherever it finds the substring ().
// .join("o"): This part joins the resulting array of substrings into a single string, replacing each occurrence of () with the letter "o".
// 2. .split("(al)").join("al"):
// .split("(al)"): This part splits the modified command string wherever it finds the substring (al).
// .join("al"): This part joins the resulting array of substrings into a single string, replacing each occurrence of (al) with the substring "al".
// Overall:
// The function essentially replaces occurrences of () with "o" and (al) with "al" in the input command. It utilizes the combination of split and join to achieve this replacement.





// var interpret = function(command) {
//     let word = ''
//     let split = command.split((/\(\)|\(|\)/))
//     console.log(split)
//     for (let i = 0; i < split.length; i++) {
//         console.log('el', split[i])
//         if(split[i] === "G") {
//             word += split[i];
//         } else if (split[i] === "al") {
//             word += "al";
//         } else if (split[i] === '') {
//             word += 'o'
//         }
//     }
//     console.log(word)
//     return word
    
// };
// var interpret = function(command) {
//     // Use regular expression to split the string correctly
//     const split = command.split(/\(\)|\(|\)/);
    
//     let word = '';
    
//     for (let i = 0; i < split.length; i++) {
//         if (split[i] === "G") {
//             word += "G";
//         } else if (split[i] === "al") {
//             word += "al";
//         } else if (split[i] === "") {
//             word += "o";
//         }
//     }
//     console.log(word)
//     return word;
// }
// interpret(command)



