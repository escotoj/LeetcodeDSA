// 1859. Sorting the Sentence
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

// Example 1:
const s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

// Example 2:
// const s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

// var sortSentence = function(s) {
//     let split = s.split(' ')
//     let sorted = split.reverse(split)
//     console.log(split)

//     console.log(sorted)
// };
// sortSentence(s)



//FIRST ATTEMPT 09/25 passed one test case. 
// var sortSentence = function(s) {
//     let stack = []
//     let split = s.split(' ')
//     console.log(split)
//     for (let i = 0; i < split.length; i++) {
//         if(split[i].includes('1')) {
//             stack.push(split[3])
//         } else if(split[i].includes('2')) {
//             stack.push(split[2])
//         } else if(split[i].includes('3')) {
//             stack.push(split[1])
//         } else if (split[i].includes('4')) {
//             stack.push(split[0])
//         }
//     }
//     let result = []
//     console.log("newArray", stack)
//     for (let j = 0; j < stack.length; j++) {
//         const element = stack[j];
//         if(element.includes('1')) {
//             result.push(stack[j].split(1))
//         } else if (element.includes('2')) {
//             result.push(stack[j].split(2))
//         } else if (element.includes('3')) {
//             result.push(stack[j].split(3))
//         } else if (element.includes('4')) {
//             result.push(stack[j].split(4))
//         } 
//     }
//     let newResult = result.join('')
//     let finalResult = newResult.split(",").join(" ")
//     console.log(finalResult)
//     return finalResult

// };
// sortSentence(s)


// CHATGPT assistance but still but failed 15/45 cases. 
// var sortSentence = function(s) {
//     let stack = [];
//     let split = s.split(' ');

//     // First loop: Identify the positions based on numbers and push words into stack
//     for (let i = 0; i < split.length; i++) {
//         if (split[i].includes('1')) {
//             stack[0] = split[i].replace(/\d/g, ''); // Remove the number and store in the correct position
//         } else if (split[i].includes('2')) {
//             stack[1] = split[i].replace(/\d/g, '');
//         } else if (split[i].includes('3')) {
//             stack[2] = split[i].replace(/\d/g, '');
//         } else if (split[i].includes('4')) {
//             stack[3] = split[i].replace(/\d/g, '');
//         }
//     }

//     let result = [];
// console.log(stack.join(' '))
//     // Second loop: Extract words without numbers and store in result
//     for (let j = 0; j < stack.length; j++) {
//         const element = stack[j];
//         console.log(element)
//         if (element) {
//             result.push(element);
//         }
//     }

//     // Join the words in the result array with spaces to get the final result
//     let finalResult = result.join(' ');

//     return finalResult;
// };

// const s = "Myself2 Me1 I4 and3";


// FINAL SOLUTION - passed all testcases 
var sortSentence = function(s) {
    let stack = [];
    let split = s.split(' ');
    for(let i = 0 ; i < split.length; i++) {
        if(split[i].includes('1')) {
            stack[0] = split[i].replace(/\d/g, '');
        } else if (split[i].includes('2')) {
            stack[1] = split[i].replace(/\d/g, '');
        } else if (split[i].includes('3')) {
            stack[2] = split[i].replace(/\d/g, '');
        } else if (split[i].includes('4')) {
            stack[3] = split[i].replace(/\d/g, '');
        } else if (split[i].includes('5')) {
            stack[4] = split[i].replace(/\d/g, '');
        } else if (split[i].includes('6')) {
            stack[5] = split[i].replace(/\d/g, '');
        } else if (split[i].includes('7')) {
            stack[6] = split[i].replace(/\d/g, '');
        } else if (split[i].includes('8')) {
            stack[7] = split[i].replace(/\d/g, '');
        }else if (split[i].includes('9')) {
            stack[8] = split[i].replace(/\d/g, '');
        }else if (split[i].includes('10')) {
            stack[9] = split[i].replace(/\d/g, '');
        }
    }
    let result = stack.join(' ');

    return result
};



const output = sortSentence(s);
console.log(output);


function sortSentence(s) {
    // Split the shuffled sentence 's' into an array of words.
    const words = s.split(' ');

    // Sort the array of words based on the numeric value at the end of each word.
    // This numeric value indicates the word's original position in the sentence.
    // Since the problem guarantees no more than 9 words, the last character is always the digit we need.
    words.sort((a, b) => {
        return a[a.length - 1] - b[b.length - 1]; // Compare the numeric values (last character of each word).
    });

    // Transform each word in the array by removing its last character, which is the numeric position indicator.
    // The 'map' function applies this transformation to each word, and the result is a new array with the numbers removed.
    const originalWords = words.map(word => word.slice(0, -1)); // Slice off the last character of each word.

    // Join the transformed words back into a single string, which is the original, unshuffled sentence.
    // Words are joined with a space between them to form a proper sentence.
    return originalWords.join(' ');
}

// Test the function with the provided examples
const example1 = "is2 sentence4 This1 a3";
const example2 = "Myself2 Me1 I4 and3";

console.log(sortSentence(example1)); // "This is a sentence"
console.log(sortSentence(example2)); // "Me Myself and I"
