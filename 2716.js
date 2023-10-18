// 2716 Minimize String Length


// Given a 0-indexed string s, repeatedly perform the following operation any number of times:

// Choose an index i in the string, and let c be the character in position i. Delete the closest occurrence of c to the left of i (if any) and the closest occurrence of c to the right of i (if any).
// Your task is to minimize the length of s by performing the above operation any number of times.

// Return an integer denoting the length of the minimized string.

 

// Example 1:

// Input: s = "aaabc"
// Output: 3
// Explanation: In this example, s is "aaabc". We can start by selecting the character 'a' at index 1. We then remove the closest 'a' to the left of index 1, which is at index 0, and the closest 'a' to the right of index 1, which is at index 2. After this operation, the string becomes "abc". Any further operation we perform on the string will leave it unchanged. Therefore, the length of the minimized string is 3.
// Example 2:

// Input: s = "cbbd"
// Output: 3
// Explanation: For this we can start with character 'b' at index 1. There is no occurrence of 'b' to the left of index 1, but there is one to the right at index 2, so we delete the 'b' at index 2. The string becomes "cbd" and further operations will leave it unchanged. Hence, the minimized length is 3. 
// Example 3:

// Input: s = "dddaaa"
// Output: 2
// Explanation: For this, we can start with the character 'd' at index 1. The closest occurrence of a 'd' to its left is at index 0, and the closest occurrence of a 'd' to its right is at index 2. We delete both index 0 and 2, so the string becomes "daaa". In the new string, we can select the character 'a' at index 2. The closest occurrence of an 'a' to its left is at index 1, and the closest occurrence of an 'a' to its right is at index 3. We delete both of them, and the string becomes "da". We cannot minimize this further, so the minimized length is 2.

var minimizedStringLength = function(s) {
    const charPositions = {};
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (charPositions[char] !== undefined) {
            const prevPos = charPositions[char];
            result -= prevPos + 1; // Remove characters to the left of the previous position
        }

        charPositions[char] = i;
        result++;
    }

    return result;
};


// The sumOfUnique function works by counting the occurrences of each number in the nums array and then summing up the unique elements.

// Here's a step-by-step explanation:

// let sum = 0; initializes a variable sum to store the sum of unique elements, setting it to 0 initially.

// let numCounts = {}; creates an empty object called numCounts to store the counts of each number in the array. The keys of this object will be the numbers, and the values will be their counts.

// The first for loop iterates through the nums array using for (let i = 0; i < nums.length; i++). In this loop:

// const num = nums[i]; extracts the current number from the array.

// numCounts[num] = (numCounts[num] || 0) + 1; increments the count of the current number in the numCounts object. If the number doesn't exist in numCounts, it initializes the count to 0 and then increments it by 1.

// The second for loop iterates through the nums array again. This loop is used to determine unique elements and add their values to the sum. In this loop:

// const num = nums[i]; extracts the current number from the array.

// if (numCounts[num] === 1) checks if the count of the current number in numCounts is equal to 1. If it's equal to 1, it means the number is unique.

// If the number is unique, sum += num; adds the unique number to the sum variable.

// Finally, console.log(sum); prints the sum of unique elements to the console.

// In summary, the function counts the occurrences of each number in the array, and then it iterates through the array again to find and sum up the unique elements. The uniqueness is determined by checking if the count of a number is equal to 1 in the numCounts object.