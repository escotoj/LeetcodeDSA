// 2678. Number of Senior Citizens

// You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed into a string of length 15. The system is such that:

// The first ten characters consist of the phone number of passengers.
// The next character denotes the gender of the person.
// The following two characters are used to indicate the age of the person.
// The last two characters determine the seat allotted to that person.
// Return the number of passengers who are strictly more than 60 years old.

// Example 1:
// Input: details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
// Output: 2
// Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old.

// Example 2:
// Input: details = ["1313579440F2036","2921522980M5644"]
// Output: 0
// Explanation: None of the passengers are older than 60.

// SOLUTION using charAt and parseInt
var countSeniors = function (details) {
    let age = []
    for (let i = 0; i < details.length; i++) {
        let dig1 = [details[i].charAt(11), details[i].charAt(12)]
        let num = dig1.join('')
        // joining the two numbers found by using charAt
        age.push(parseInt(num))
        // converting to int for strict match
    }
    let count = 0
    for(const a of age) {
        if(a > 60) {
count++
        }
    }
    return count
};

// Altered version with a better run time by eliminating the use of two loops and removing variables, like num and the use of parseInt and having the age array be in the loop
var countSeniors = function (details) {
    let count = 0
    for (let i = 0; i < details.length; i++) {
        let age = []
        let dig1 = [details[i].charAt(11), details[i].charAt(12)].join('')
        age.push(dig1)
        if (age > 60) {
            count++
        }
    }

    return count
};


//Solution using filter to apply function to each el and using substring to find the digits that are less than target
var countSeniors = function(details) {
    return details.filter(detail => parseInt(detail.substring(11,13)) > 60).length;
};