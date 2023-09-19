// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

const str = "hello, world my name is joey joe"

var titleCase = function(str) {
    let length = str.length
    const element = str.split(' ');
    let newStr = [ ];
    // console.log(str)
    for (let i = 0; i < element.length; i++) {
        let word = element[i];
        let firstLetter = word.charAt(0).toUpperCase();
        let otherLetters = word.slice(1).toLowerCase()
        let capWord = firstLetter + otherLetters;
        newStr.push(capWord);
        
        console.log(capWord)
    }
    let results = newStr.join(" ")
    console.log(results)
    return results

};

titleCase(str)