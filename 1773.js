// 1773. Count Items Matching a Rule

// Companies
// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:
// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Example 1:
// const items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
// const ruleKey = "color"
// const ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

// Example 2:
const items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.


// SOLUTION under 10 minutes - first try 10/01
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0
    for (let i = 0; i < items.length; i++) {
        console.log(items[i])
        if(ruleKey == "type" && ruleValue == items[i][0]) {
            count ++
        } else if(ruleKey == "color" && ruleValue == items[i][1]){
            count ++
        } else if (ruleKey == "name" && ruleValue == items[i][2]) {
            count ++
        }
        
    }
    console.log(count)
};

countMatches(items, ruleKey, ruleValue)

// Runtime
// Details
// 72ms
// Beats 19.48%of users with JavaScript
// Memory
// Details
// 45.98MB
// Beats 51.35%of users with JavaScript


// OTHER SOLUTION using for each
// var countMatches = function (items, ruleKey, ruleValue) {
//     let ruleKeys = ["type", "color", "name"];
//     return items.filter(e =>e[ruleKeys.indexOf(ruleKey)] === ruleValue ).length;
//   };