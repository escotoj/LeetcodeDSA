// * Basic Incrementing Loop:

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//// Purpose: This loop iterates from i = 0 to i = 4 (inclusive) and logs each value of i to the console.

//// * Decrementing Loop *

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

//// Purpose: This loop iterates from i = 5 to i = 0 (inclusive) in a decrementing fashion and logs each value of i to the console.

// 3. Looping Through an Array:

// const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
//// Purpose: This loop iterates through each element of the array and logs each element to the console.

for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue;
    }
    console.log(i);
  }

//  * Skipping Iteration:

  for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue;
    }
    console.log(i);
  }
//   Purpose: This loop skips the iteration where i is equal to 2 using continue and logs other values of i to the console.

// * Breaking out of a Loop:

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Purpose: This loop breaks out of the loop when i is equal to 3 using break.
  