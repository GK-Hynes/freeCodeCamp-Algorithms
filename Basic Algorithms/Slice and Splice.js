// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array.The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    arr3.splice(n, 0, arr1[i]);
    n++;
  }

  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/*
1. Create a new array, arr3, using slice() on arr2 so that arr2 is unchanged.
2. Loop through the contents of arr1.
3. Splice items from arr1 into arr2, starting at index n.
4. Increment n to insert the next item at the next index.
5. Finally return arr3. 
*/
