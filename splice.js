// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

function concertFlyer(magazine, flyer) {
    const magazineWords = magazine.toLowerCase().split(' ');
    const flyerWords = flyer.toLowerCase().split(' ');

    const wordCount = {};

    // Count words in the magazine
    magazineWords.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    // Check if all flyer words are in magazine with correct frequency
    for (let i = 0; i < flyerWords.length; i++) {
        const word = flyerWords[i];
        if (!wordCount[word] || wordCount[word] === 0) {
            return false;
        }
        wordCount[word]--;
    }

    return true;
}

// Splitting both strings into arrays of words, converting them to lowercase.
// Creating a wordCount object to store the frequency of words in the first string.
// Checking if each word in the second string exists in the first string with the correct frequency by iterating through the second string's words and decrementing their count in the wordCount object. If a word is not found or its count reaches zero, the function returns false.
// If all words from the second string are found in the first string with the correct frequency, the function returns true.







// SOLVES all but one test 
// var concertFlyer = function (magazine, flyer) {
//     console.log('mag', magazine)
//     console.log(flyer)

//     if(magazine.includes(flyer) || magazine.includes(flyer.charAt(0).toUpperCase() + flyer.slice(1))) {
//         return true
//     }
//     return false 
// };

