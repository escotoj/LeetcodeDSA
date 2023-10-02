// 1688. Count of Matches in Tournament

// You are given an integer n, the number of teams in a tournament that has strange rules:
// If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.

// Example 1:
// Input: n = 7
// Output: 6
// Explanation: Details of the tournament:
// - 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 3 + 2 + 1 = 6.
// Example 2:

const n = 14;
// Output: 13
// Explanation: Details of the tournament:
// - 1st Round: Teams = 14, Matches = 7, and 7 teams advance.
// - 2nd Round: Teams = 7, Matches = 3, and 4 teams advance.
// - 3rd Round: Teams = 4, Matches = 2, and 2 teams advance.
// - 4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
// Total number of matches = 7 + 3 + 2 + 1 = 13.
// STUCK AND CONFUSED ON for loop 10/02 
// var numberOfMatches = function (n) {
//   if (n % 2 === 0) {
//     let team = n / 2;
//     console.log("team", team);
//     if(team % 2 === 0) {
//         let team2 = team / 2
//         console.log("team2", team2);
//     } else if ((team - 1) % 2 === 0) {
//         let teamOdd = ((n - 1) % 2) - 1;
//         console.log("teamOdd", teamOdd);
//       }}
// //   } else if ((n - 1) % 2 === 0) {
// //     let team2 = ((n - 1) % 2) - 1;
// //     console.log("team2", team2);
// //   }
// };

// numberOfMatches(n);



// CHAT GPT answer using only if statements
// var numberOfMatches = function (n) {
//     if (n === 1) {
//         return 0; // No matches are played when there's only one team.
//     } else if (n % 2 === 0) {
//         // Even number of teams
//         return n / 2 + numberOfMatches(n / 2);
//     } else {
//         // Odd number of teams
//         return (n - 1) / 2 + numberOfMatches((n - 1) / 2 + 1);
//     }
// };

// const n = 14;
// console.log(numberOfMatches(n)); // Output: 13

// ADDITIONAL SOLUTION 
var numberOfMatches = function (n) {
    let matches = 0;

    while (n > 1) {
        if (n % 2 === 0) {
            // Even number of teams
            matches += n / 2;
            n = n / 2;
        } else {
            // Odd number of teams
            matches += (n - 1) / 2;
            n = (n - 1) / 2 + 1;
        }
    }

    return matches;
};

console.log(numberOfMatches(n)); // Output: 13
