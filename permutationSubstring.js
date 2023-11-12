// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false



var permutationSubstring = function(str, sub) {
    const sortedSub = sub.split('').sort().join('');

    for (let i = 0; i <= str.length - sub.length; i++) {
        const sortedSubstr = str.substring(i, i + sub.length).split('').sort().join('');
        if (sortedSub === sortedSubstr) {
            return true;
        }
    }

    return false;
};


// Sorting the Second String:

// sortedSub is created by splitting the sub string into an array of characters, sorting it, and then joining it back into a string. This creates a sorted representation of the substring.
// Checking Substring in Permutations:

// The function then iterates through str, segment by segment (each segment being the same length as the sub string) using the for loop. This ensures all possible substrings of the same length as the second string are checked.
// Sorting and Matching:

// For each segment of str, it creates sortedSubstr in the same way as sortedSub, by sorting the characters of that segment.
// If sortedSub (the sorted representation of the second string) is the same as sortedSubstr (the sorted representation of the current segment of str), it means the characters of the second string are present in that segment in the same frequency and arrangement.
// Return True or False:

// If a match is found (i.e., the sorted representations are the same), the function returns true, indicating that the second string is a substring of a permutation of the first string.
// If no match is found after checking all possible substrings of str, the function returns false.