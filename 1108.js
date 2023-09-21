// 1108. Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

// Example 1:
const address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// name function
// since you are altering an exciting string, you initiate a variable to an empty string
// create a variable for . 
// one for [.]
//  use a for-loop and break down each character
// now an if statement that checks for a boolean that is true, we add that character to the empty string we created
// if false we add that chracter to the string and outside the for loop we call the new string variable

const ipDefang = function(address) {
    let newAddress = '';
    let char = '.'
    let newChar = '[.]'
    for (let i = 0; i < address.length; i++) {
  if (address[i] === char) {
    newAddress += newChar
  } else {
    newAddress += address[i]
  }   
    }
    return newAddress

}

console.log(ipDefang(address))








// const address = "1.1.1.1"

//FIRST ATTEMPT 09/13, stuck at for-loop, needed an new empty string to add newchar
// var defangIPaddr = function(address) {
//     let char = '.'
//     let newChar = '[.]'
//     for(let i = 0; i < address.length - 1; i++) {
//         if (address.includes(char)) {
//            address.split(char)
//            i++
//         }
//         console.log(address[i])
//     }
//     // console.log(address)
//     return address
   
// };
// defangIPaddr(address)




// ANSWER
// var defangIPaddr = function(address) {
//     let newAddress = ''
//     let char = '.'
//     let newChar = '[.]'
//     for(let i = 0; i < address.length; i++) {
//         if (address[i] === char) {
//            newAddress += newChar
//         } else {
//             newAddress += address[i]
//         }
//     }
//         console.log(newAddress)
//     return newAddress
// };



// The problem here is that address.includes(char) checks if the entire address string contains a period (.) anywhere in it. It doesn't tell you the position of the period or allow you to replace it. So, your code doesn't effectively replace periods with '[.]' because it's not tracking the position of the period within the string.

// To correctly replace periods with '[.]', you need to iterate through the string character by character and replace them when you encounter a period
// var defangIPaddr = function(address) {
//     let newAddress = ''
//     let char = '.'
//     let newChar = '[.]'
//     for(let i = 0; i < address.length - 1; i++) {
//         if (address.includes(char)) {
//            newAddress += newChar
//            i++
//         } else {
//             newAddress += address[i]
//         }
//     }
//     console.log(newAddress)
//     return newAddress
   
// };



// defangIPaddr(address)