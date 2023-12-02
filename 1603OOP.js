// Design Parking System

// Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

// Implement the ParkingSystem class:

// ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
// bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.
 
// Example 1:

// Input
// ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
// [[1, 1, 0], [1], [2], [3], [1]]
// Output
// [null, true, true, false, false]

// Explanation
// ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
// parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
// parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
// parkingSystem.addCar(3); // return false because there is no available slot for a small car
// parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.


var ParkingSystem = function(big, medium, small) {
    this.slot = [big, medium, small]
 
 };

//  ParkingSystem.prototype.addCar = function(carType) {
//     if(this.slot[carType - 1] > 0) {
//         this.slot[carType - 1]--
//         return true;
//     }
//     return false
// };

// OR 

ParkingSystem.prototype.addCar = function(carType) {
    return this.count[carType - 1]-- > 0;
  };


// ParkingSystem is a class.
// parkingSystem is an object created from the ParkingSystem class.
// addCar is a method of the ParkingSystem class.
// slot is a property of the ParkingSystem class.


// 1. Identify Objects and Classes:
// Objects:
// Parking System: This is our main object, representing the parking lot. It has properties (slots for big, medium, and small cars) and behaviors (checking and adding cars).
// Classes:
// ParkingSystem Class: This is like a blueprint for creating parking system objects. It defines the properties (slot) and behaviors (addCar) that each parking system object will have.
// 2. Encapsulation:
// The ParkingSystem class encapsulates the data (slots) and methods (addCar) within a single unit. This means the internal details of how the parking system works are hidden, and you interact with it through well-defined methods.

// 3. Object Creation:
// When you create a new parking system using var parkingSystem = new ParkingSystem(1, 1, 0);, you are instantiating an object (parkingSystem) from the ParkingSystem class. This object has its own set of slots for big, medium, and small cars.

// 4. Methods and Properties:
// Method (addCar): The addCar method is like a behavior associated with the parking system. It checks if there's space available for a specific car type and adjusts the slots accordingly.

// Properties (slot): The slot property represents the available parking slots for big, medium, and small cars. Each parking system object has its own set of slots.