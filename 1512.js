// 1512. Number of Good Pairs
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0

// SOLUTION with hashMap
    //Here we use hashMap
    //Because hashMap can store key => value pair to store number, and show times
    //when element show up 1 time we count 1 
    //when element show again we know that is a pair result += element show times
    //Then we just need to return the result

    //1. We initial hashMap key as number => value as this number showTimes
    //2. We initial result = 0 //because when no pair return 0
    //3. We loop through hashMap add elements showTimes together
    //4. return result

var numIdenticalPairs = function(nums) {
    const hashMap = new Map()
    let result = 0
    for(let i = 0; i < nums.length; i++){
        if(!hashMap.has(nums[i])){
            hashMap.set(nums[i], 1)
        }else{
            result += hashMap.get(nums[i])
            hashMap.set(nums[i], hashMap.get(nums[i]) + 1)
        }
    }

    return result
}