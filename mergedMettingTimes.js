// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

var mergeMeetingTimes = function(arr) {
    // Check for empty input or single meeting
    if (arr.length <= 1) {
      return arr;
    }
  
    // Sort the array based on meeting start times
    arr.sort((a, b) => a[0] - b[0]);

  
    let mergedMeetings = [arr[0]];
      console.log(arr)
      console.log(mergedMeetings)

    for (let i = 1; i < arr.length; i++) {
      let currentMeeting = arr[i];
      let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
  
      // Check for overlap
      if (currentMeeting[0] <= lastMergedMeeting[1]) {
        // Merge overlapping meetings
        lastMergedMeeting[1] = Math.max(currentMeeting[1], lastMergedMeeting[1]);
      } else {
        // Add non-overlapping meetings
        mergedMeetings.push(currentMeeting);
      }
    }
  
    return mergedMeetings;
  };
  
  // Example usage:
  let meetingTimes = [[1, 3], [2, 4], [5, 6]];
  let mergedMeetings = mergeMeetingTimes(meetingTimes);
  console.log(mergedMeetings);

//   Base Case Check:

// The function first checks if the input array arr is empty or contains only a single meeting. If so, it returns the array as it is, as there are no meetings to merge.
// Sorting:

// The array is then sorted based on the start times of the meetings. This is crucial for the subsequent logic to work, as it ensures that meetings are considered in chronological order.
// Merging:

// The function initializes mergedMeetings with the first meeting from the sorted array.
// It then iterates through the sorted array starting from the second meeting (for (let i = 1; i < arr.length; i++)).
// For each meeting, it compares the start time of the current meeting (currentMeeting[0]) with the end time of the last merged meeting (lastMergedMeeting[1]).
// If there is an overlap (current meeting starts before or at the end of the last merged meeting), the meetings are merged by updating the end time of the last merged meeting to the maximum of the current meeting's end time and the existing end time.
// If there is no overlap, the current meeting is added as a new non-overlapping meeting to the mergedMeetings array.
// Final Result:

// The function returns the mergedMeetings array, which contains the merged meeting times.