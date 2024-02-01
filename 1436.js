// 1436. Destination City

// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// Example 1:
// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

// Example 2:
// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are: 
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A". 
// Clearly the destination city is "A".


// full for loops barely passes, large run time and memory
var destCity = function(paths) {
    let set = new Set()
    for(let i = 0; i < paths.length; i++) {
        console.log(paths[i][0])
        set.add(paths[i][0])
    }
        for(let i = 0; i < paths.length; i++) {
            if(!set.has(paths[i][1])) {
            return paths[i][1]
        }
    }

    console.log(set)
};


//USing const of has much better run time and space 
var destCity = function (paths) {
    let set = new Set()
    for (const path of paths) {
        set.add(path[0])
    }
    for (const path of paths) {
        set.add(path[0])
        if(!set.has(path[1])) {
            return path[1]
        }
    }

};