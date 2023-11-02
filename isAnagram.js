// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    let strA2 = strA.split('').sort()
    let strB2 = strB.split('').sort()
    if(!strA2.length === strB2.length)
        return false 

    for (let i = 0; i < strA2.length; i++) {
        const element = strA2[i];
        if(strA2[i] !== strB2[i]) 
            return false
    }
    return true

};

// EXPLaNATION 
// strA2 and strB2 are created by splitting the input strings strA and strB into arrays of characters and sorting them. This is done to put the characters of both strings in a consistent order, making it easier to compare them. Sorting the characters makes it so that anagrams will have the same sorted character sequences.

// The if statement checks if the lengths of the sorted arrays strA2 and strB2 are not equal. If their lengths are not equal, it means that the input strings cannot be anagrams, so the function returns false.

// If the lengths are equal, the function proceeds to the next step, which involves comparing the characters at each position in the sorted arrays. The for loop iterates through both strA2 and strB2.

// Inside the loop, it checks if the characters at the same position in strA2 and strB2 are not equal. If it finds a pair of characters that are not equal, it means that the input strings are not anagrams, so the function returns false.

// If the loop completes without finding any character pairs that are not equal, it means that all characters in both strA2 and strB2 are the same, in the same order. This implies that the input strings are anagrams, so the function returns true.