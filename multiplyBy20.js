const multiplyInto20 = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] === 20) {
                return true;
            }
        }
    }
    return false;
  };
  