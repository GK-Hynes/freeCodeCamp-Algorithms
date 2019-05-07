// Given the array arr, iterate through and remove each element starting from the first element(the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      arr.splice(0, 1);
      i--;
    } else if (func(arr[i])) {
      return arr;
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});

/* 
1. Loop through the arr using a for loop.
2. If func returns false when arr[i] is passed into it, use .splice() to remove the first element from arr. Then decrement the index to account for the removed element.
3. The loop will continue until it hits an element that returns true from func. At this point return arr. 
4. Return arr from dropElements().
*/
