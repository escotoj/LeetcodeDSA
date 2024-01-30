// 2325. Decode the Message

// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.

 

// Example 1:
// Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
// Output: "this is a secret"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".

// Example 2:
// Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
// Output: "the five boxing wizards jump quickly"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".


var decodeMessage = function(key, message) {
    let ans = '';
    key = Array.from(new Set(key.split(' ').join('')));
    const a = new Map();
    const b = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0; i<b.length; i++){
        a.set(key[i], b[i])
    }
    for(let chr of message){
        ans += a.get(chr) || ' ';
    }
    return ans;
};

// key = Array.from(new Set(key.split(' ').join('')));: This line removes duplicate characters from the key, then converts it into an array. The Set is used to automatically remove duplicates, and Array.from is used to convert the set back to an array. Spaces are removed from the key by splitting it at spaces and then joining it back together.

// const a = new Map();: This line creates a new Map object named a. This map will be used to store the mapping between characters in the key and their corresponding characters in the English alphabet.

// const b = 'abcdefghijklmnopqrstuvwxyz';: This line defines a string b containing the English alphabet in order.

// for(let i=0; i<b.length; i++){ a.set(key[i], b[i]) }: This loop iterates over the characters of the English alphabet and assigns each character in the key to its corresponding character in the English alphabet, creating a mapping.

// for(let chr of message){ ans += a.get(chr) || ' '; }: This loop iterates over each character in the input message. For each character, it looks up the corresponding character in the map a and appends it to the result string ans. If the character is not found in the map (i.e., it's not in the key), a space is appended instead.

// return ans;: The decoded message is returned.

