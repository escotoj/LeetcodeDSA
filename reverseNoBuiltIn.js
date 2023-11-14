// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
    let arr = str.split(''); // Convert string to array of characters

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr.join(''); // Convert array back to string
};


// Converting the String to an Array:

// let arr = str.split(''); This line uses the split method to convert the input string str into an array of characters. The split('') with an empty string as an argument splits the string at each character, effectively creating an array with each character as an element.
// Swapping Characters in the Array:

// The loop runs from the start of the array to the midpoint. It uses Math.floor(arr.length / 2) to ensure that the loop only runs halfway through the array.
// Math.floor() is a function in JavaScript that rounds down to the nearest integer. It's used to guarantee that the loop runs the correct number of times, especially when the array length is odd. For example, in an array of length 7, dividing by 2 results in 3.5. Math.floor(3.5) returns 3, ensuring that the loop goes up to the third index.
// Inside the loop, the code swaps the characters from the beginning with their respective positions from the end of the array. This process effectively reverses the string.
// Rejoining the Array into a String:

// arr.join('') reverts the modified array back to a string. The join('') method combines all the elements of the array, effectively producing a reversed string.
// The logic is to reverse the string by converting it to an array, swapping characters by iterating up to the middle of the array, and rejoining the characters into a reversed string. The use of Math.floor ensures the correct number of iterations to avoid redundant swaps when the string length is odd.