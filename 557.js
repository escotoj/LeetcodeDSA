// 557. Reverse Words in a String III
// Companies
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// const s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
const s = "God Ding"
// Output: "doG gniD"

var reverseWords = function(s) {
    let fullS = []
    let arr = s.split(' ')
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].split('');
        let el2 = element.reverse().join('')
        fullS.push(el2)

    }

    console.log(fullS.join(' '))
    
};
reverseWords(s)