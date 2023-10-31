// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    // Split the string by spaces
    let words = str.split(" ");
    
    // Capitalize the first letter of each word (except the first word)
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    // Join the words back together without spaces
    let camelCasedStr = words.join("");

    return camelCasedStr;
};

// TWO differnt attempts below 
// var camelCase = function(str) {
//     let str2 = str.split('')
//     for (let i = 0; i < str2.length; i++) {
//         if(str2[i] === " ") {
//             str2[i] = ""
//         } 
//     }
//     console.log(str2)
    
//      };
    
 
    
    
    
    
    // var camelCase = function(str) {
    //     console.log(str)
    //     let str2 = str.replace(" ", "")
    //     console.log(str2)
    
    //  };
    
    
     //SNAKE CASE
    // var camelCase = function(str) {
    //     let str2 = str.replace(" ", "_")
    //     return str2
    
    //  };
    