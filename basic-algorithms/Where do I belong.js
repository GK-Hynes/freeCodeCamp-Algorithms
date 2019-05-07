/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.*/

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);

/*
1. Use sort to sort the array. 
2. Use a for loop to loop over the sorted array.
3. If num is less than or equal to an element, return the index of that element. 
4. If num is greater than every element in the array, return arr.length i.e. the assumed last index. 
*/
