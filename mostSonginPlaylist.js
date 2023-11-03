// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var songDurations = [3, 4, 5, 2, 1, 6];
var mostSongsInPlaylist = function(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    let totalDuration = 0;
    let songCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (totalDuration + arr[i] <= 60) {
        totalDuration += arr[i];
        songCount++;
      } else {
        // If adding the next song exceeds 60 minutes, stop adding songs
        break;
      }
    }
  
    return songCount;
  };
  
  
//   Sorting the Array: The function begins by sorting the input array arr in ascending order using the sort method. This is important because it allows us to consider shorter songs first, which is a more efficient way to maximize the number of songs in a limited time frame.

// Initializing Variables: The function initializes two variables: totalDuration and songCount.

// totalDuration keeps track of the accumulated duration of songs added to the playlist.
// songCount keeps track of the number of songs added to the playlist.
// Iterating through the Sorted Array: The function then enters a for loop that iterates through the sorted array of song durations.

// Adding Songs to the Playlist: For each song, it checks if adding the duration of the song to the totalDuration is less than or equal to 60 minutes. If it is, the song can be added to the playlist without exceeding the time limit. So, it increments totalDuration by the duration of the current song and increments songCount by 1.

// Stopping When Exceeding 60 Minutes: If adding the duration of the next song would exceed 60 minutes, the loop breaks. This ensures that we stop adding songs when we reach the time limit.

// Returning the Result: After the loop completes, the function returns the value of songCount, which represents the maximum number of songs that can fit in a 60-minute playlist without exceeding the time limit.
  
  
  
  
  
  
  // First attempt
  // var mostSongsInPlaylist = function(arr) {
  //   // add your code here...
  //   let count = 0
  //   for (let i = 0; i < arr.length; i++) {
  //     const element = arr[i];
  //     if(element <= 60) {
  //       count++ 
  //     }
  //   }
  //   console.log(count)
  //   return count 
  // };
  