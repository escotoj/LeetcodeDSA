// 1637. Widest Vertical Area Between Two Points Containing No Points

// Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.
// A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.
// Note that points on the edge of a vertical area are not considered included in the area.

// Example 1:
// Input: points = [[8,7],[9,9],[7,4],[9,7]]
// Output: 1
// Explanation: Both the red and the blue area are optimal.

// Example 2:
// Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
// Output: 3


var maxWidthOfVerticalArea = function(points) {
    // begin by sorting array by their x axis in ascending order
    let s = points.sort((a,b) => a[0] - b[0])
    console.log(s)
let maxWidth = 0
// record the max width by setting it to zero and later altering it
    for(let i = 1; i <s.length; i++) {
        // begin the loop from the first index and subtract the previous index to record the difference between each point AKA the width
        let width = s[i][0] - s[i - 1][0]
        // use Math.max to update the width to the largest encountered and later return it 
        maxWidth = Math.max(width, maxWidth)
    }
    return maxWidth
};