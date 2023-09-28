// 1528. Shuffle String

// Companies
// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.
// const s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// Example 2:

const s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.



// 45 minutes to solve and got stuck at sorting the sArr, it return the array with the proper number order but needed to specify each index for a, b to sort each.
// also struggles with targting the letters in the sArray index until testing yielded this syntax sArr[j][1]
// var restoreString = function(s, indices) {
//         let newS = s.split('')
//         let sArr = []

//     for (let i = 0; i < indices.length ; i++) {
//         sArr[i] = [indices[i], newS[i]]
//     }
//     sArr.sort((a, b) => a[0] - b[0])
//     // console.log(sArr)

//     let word = ''
//     for (let j = 0; j < sArr.length; j++) {
//         console.log(sArr[j][1]);
//         word += sArr[j][1]
//     }
//      console.log(word)
//      return word
// };

// restoreString(s, indices)


// second solution on from leetcode using join
var restoreString = function(s, indices) {
    const res = new Array(indices.length)
    for (let i = 0; i < indices.length; i++) {
 
        res[indices[i]] = s[i];
        
    }
       
       let ans = res.join('')
       console.log(ans)
       return ans
}

restoreString(s, indices)