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
// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

// var sortSentence = function(s) {
//     let split = s.split(' ')
//     let sorted = split.reverse(split)
//     console.log(split)

//     console.log(sorted)
// };
// sortSentence(s)




var sortSentence = function(s) {
    let stack = []
    let split = s.split(' ')
    console.log(split)
    for (let i = 0; i < split.length; i++) {
        if(split[i].includes('1')) {
            stack.push(split[3])
        } else if(split[i].includes('2')) {
            stack.push(split[2])
        } else if(split[i].includes('3')) {
            stack.push(split[1])
        } else if (split[i].includes('4')) {
            stack.push(split[0])
        }
    }
    let result = []
    console.log("newArray", stack)
    for (let j = 0; j < stack.length; j++) {
        const element = stack[j];
        if(element.includes('1')) {
            result.push(stack[j].split(1))
        } else if (element.includes('2')) {
            result.push(stack[j].split(2))
        } else if (element.includes('3')) {
            result.push(stack[j].split(3))
        } else if (element.includes('4')) {
            result.push(stack[j].split(4))
        } 
    }
    let newResult = result.join('')
    let finalResult = newResult.split(",").join(" ")
    console.log(finalResult)
    return finalResult

};
sortSentence(s)