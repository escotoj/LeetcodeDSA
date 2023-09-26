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
var interpret = function(command) {
    // Use regular expression to split the string correctly
    const split = command.split(/\(\)|\(|\)/);
    
    let word = '';
    
    for (let i = 0; i < split.length; i++) {
        if (split[i] === "G") {
            word += "G";
        } else if (split[i] === "al") {
            word += "al";
        } else if (split[i] === "") {
            word += "o";
        }
    }
    console.log(word)
    return word;
}
interpret(command)



// var interpret = function(command) {
//     return command.split("()").join("o").split("(al)").join("al");
// };