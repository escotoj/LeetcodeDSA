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

function concertFlyer(magazine, flyer) {
    // Convert both strings to lowercase and split them into arrays of words.
    const magazineWords = magazine.toLowerCase().split(' ');
    const flyerWords = flyer.toLowerCase().split(' ');

    // Initialize a Map to count the occurrences of each word in the magazine.
    const wordCount = new Map();

    // Count words in the magazine
    magazineWords.forEach(word => {
        // If the word is already in the map, increment its count.
        // Otherwise, set its count to 1.
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    });

    // Check if all flyer words are in the magazine with the correct frequency
    for (let i = 0; i < flyerWords.length; i++) {
        const word = flyerWords[i];
        // If the word is not in the map or its count is 0, return false.
        if (!wordCount.has(word) || wordCount.get(word) === 0) {
            return false;
        }
        // Decrement the count of the word in the map.
        wordCount.set(word, wordCount.get(word) - 1);
    }

    // If the loop completes without returning false, then all flyer words are present
    // in the magazine with the correct frequency.
    return true;
}

// Map Object: A Map is used instead of a plain object for counting words. Maps are collections of key-value pairs where each key is unique. In this case, keys are words from the magazine, and values are their counts.

// Lowercasing and Splitting: Both the magazine and flyer strings are converted to lowercase and split into arrays of words. This ensures that the comparison is case-insensitive and operates on individual words.

// Counting Words in the Magazine: The code iterates over each word in magazineWords, using the forEach method. For each word, it checks if the word is already a key in the map using wordCount.get(word). If it is, it increments the count; if not, it sets the count to 1 with wordCount.set(word, ...).

// Checking Flyer Words: Then, the function iterates over flyerWords. For each word, it checks if the word exists in wordCount and has a non-zero count. If a word is missing or its count is 0, it means the flyer contains a word not available in the magazine in the required frequency, so the function returns false.

// Decrementing Counts: When a flyer word is found in the magazine's word count, its count is decremented by 1 using wordCount.set(word, wordCount.get(word) - 1), reflecting that one instance of the word has been "used."

// Successful Check: If the function never returns false during the flyer words check, it means all words in the flyer can be constructed from the magazine, so it returns true.




// SOLVES all but one test 
// var concertFlyer = function (magazine, flyer) {
//     console.log('mag', magazine)
//     console.log(flyer)

//     if(magazine.includes(flyer) || magazine.includes(flyer.charAt(0).toUpperCase() + flyer.slice(1))) {
//         return true
//     }
//     return false 
// };

