const address = "1.1.1.1"

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
var defangIPaddr = function(address) {
    let newAddress = ''
    let char = '.'
    let newChar = '[.]'
    for(let i = 0; i < address.length; i++) {
        if (address[i] === char) {
           newAddress += newChar
        } else {
            newAddress += address[i]
        }
    }
        console.log(newAddress)
    return newAddress
};



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



defangIPaddr(address)