// 1791. Find Center of Star Graph

// There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

 

// Example 1:


// Input: edges = [[1,2],[2,3],[4,2]]
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
// Example 2:

// Input: edges = [[1,2],[5,1],[1,3],[1,4]]
// Output: 1


var findCenter = function(edges) {
    const first = edges[0];
    const second = edges[1];

    if(first[0] == second[0] || first[0] == second[1]){
        return first[0];
    }
    
    return first[1];
};




// using map, count and foreach to find the connecting node

var findCenter = function(edges) {
    let map = new Map();
    
    // Iterate over each edge
    for (let i = 0; i < edges.length; i++) {
        // Iterate over each node in the edge
        edges[i].forEach((node) => {
            // If the node is not in the map, add it with a count of 1
            if (!map.has(node)) {
                map.set(node, 1);
            } else {
                // If the node is already in the map, increment its count
                map.set(node, map.get(node) + 1);
            }
        });
    }
    
    // To identify, count it up
    let maxNode = 0
    let maxCount = 0;
    // in order to get the values and keys, this is the syntax to do it. 
    for (let [node, count] of map) {
        if (count > maxCount) {
            maxCount = count;
            maxNode = node;
        }
    }
    
    console.log(maxNode); // Log the center node
    return maxNode; 
    
};

// using the foreach loop keep the second iteration from being to bulky and more concise as we loop through he sub array. 
// The term "node" is used in the context of graphs in computer science and mathematics. In graph theory, a graph is a collection of points, called nodes (or vertices), and lines connecting some pairs of these points, called edges. The concept of a node is fundamental to various data structures and algorithms, especially those related to networks, trees, and graphs.

// Why "Node"?
// Abstract Representation: The term "node" provides an abstract way to represent an entity or a point within a structure without specifying the details of what that entity is. In different contexts, a node could represent anything from a computer in a network, a city in a map, a point of decision in a decision tree, or simply a value in a linked list.

// Flexibility: Calling them "nodes" emphasizes their role as points of connection within a graph. This abstraction allows for flexibility in applying graph theory to solve problems in various domains, such as computer networks, social networks, biological networks, and transportation systems.

// Connectivity: Nodes serve as the foundation for establishing relationships or connections (edges) with other nodes. This connectivity defines the structure of the graph and the relationship between different entities it represents.

// Nodes in Graphs
// In the context of your question about finding the center of a star graph, each number represents a node. A star graph is a special type of graph where one central node (the center) is directly connected to all other nodes, making it a hub of connectivity. The edges in the graph represent direct connections between nodes. In a programming context, especially when dealing with graphs:

// Nodes are typically represented by integers or strings for simplicity, but they can encapsulate more complex data structures.
// Edges are represented as pairs (often in an array or a list) that denote a connection between the two nodes identified by their labels (numbers or strings).
// By referring to the numbers as "nodes," we abstract away the details of what these numbers represent, focusing instead on their connections and relationships within the graph. This abstraction allows us to apply algorithms to analyze the graph's structure, such as finding the center node in a star graph, traversing the graph, finding the shortest path between nodes, and more.