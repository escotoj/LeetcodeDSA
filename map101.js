// Creating a Map:
// You can create a Map using the new Map() constructor. You can also initialize a Map with an iterable (such as an array of key-value pairs).
let myMap = new Map();

// Adding Key-Value Pairs:
// You can add key-value pairs to a Map using the set method.
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

// Retrieving Values:
// You can retrieve values from a Map using the get method, providing the key as an argument.
let value = myMap.get("key1"); // Returns "value1"

// Checking for Key Existence:
// You can check if a key exists in a Map using the has method.
let hasKey = myMap.has("key1"); // Returns true

// Deleting Key-Value Pairs:
// You can remove a key-value pair from a Map using the delete method.
myMap.delete("key1");

// Iterating Over a Map:
// You can iterate over the keys, values, or entries (key-value pairs) of a Map.

// Iterate over keys
for (let key of myMap.keys()) {
    console.log(key);
}

// Iterate over values
for (let value of myMap.values()) {
    console.log(value);
}

// Iterate over entries
for (let [key, value] of myMap.entries()) {
    console.log(key, value);
}

// Map Size:
// You can get the size (number of key-value pairs) of a Map using the size property.

// javascript
// Copy code
// let size = myMap.size;
// Clearing a Map:
// You can remove all key-value pairs from a Map using the clear method.

// javascript
// Copy code
// myMap.clear();
// Use Case in the Context of sortPeople Function:
// In the sortPeople function you provided earlier, the Map is used to associate heights with corresponding names, allowing for efficient retrieval of names based on the sorted order of heights. This avoids the need to rearrange the original names array when sorting the heights. The Map acts as a lookup table, providing a quick way to get the associated names for each height.