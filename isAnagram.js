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


function areAnagrams(str1, str2) {
    // Normalize strings and check lengths
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Count characters in str1
    const charCount = {};
    for (let char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Compare characters in str2 to the count
    for (let char of str2) {
      if (!charCount[char]) {
        // Character in str2 is not in str1
        return false;
      }
      charCount[char]--;
      if (charCount[char] < 0) {
        // More occurrences of char in str2 than in str1
        return false;
      }
    }
  
    // If all checks pass, strings are anagrams
    return true;
  }
  
  // Example usage
  console.log(areAnagrams("listen", "silent")); // true
  console.log(areAnagrams("hello", "world")); // false
  

//   The function first converts both strings to lowercase to ensure the comparison is case-insensitive.
// It checks if the strings have the same length. If not, they cannot be anagrams.
// Then, it counts the occurrences of each character in the first string using an object charCount.
// Next, it iterates through the second string, decrementing the count for each character found. If a character from the second string is not found in the object or if decrementing makes the count negative (indicating more occurrences in the second string than the first), the function returns false.
// If all characters match in frequency, the function returns true, indicating the strings are anagrams of each other.

function areAnagrams(str1, str2) {
    // Normalize strings and check lengths
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Count characters in str1
    const charCountMap = new Map();
    for (let char of str1) {
      const currentCount = charCountMap.get(char) || 0;
      charCountMap.set(char, currentCount + 1);
    }
  
    // Compare characters in str2 to the count
    for (let char of str2) {
      const currentCount = charCountMap.get(char) || 0;
      if (currentCount === 0) {
        // Character in str2 is not in str1, or there's a mismatch in counts
        return false;
      }
      charCountMap.set(char, currentCount - 1);
    }
  
    // If all checks pass, strings are anagrams
    return true;
  }
  
  // Example usage
  console.log(areAnagrams("listen", "silent")); // Expected output: true
  console.log(areAnagrams("hello", "world")); // Expected output: false
  



