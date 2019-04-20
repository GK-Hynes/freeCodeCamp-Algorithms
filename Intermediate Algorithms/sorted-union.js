// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
  const args = [...arguments];

  const newArr = args.reduce((arrA, arrB) => {
    return arrA.concat(
      arrB.filter(i => {
        return arrA.indexOf(i) === -1;
      })
    );
  });

  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*
1. Since you don't know how many arguments will be passed, destructure the arguments object into an array of arrays, args.
2. Use reduce on args. On each iteration, it will concat the current array, arrB, onto the first array inside args, arrA. 
3. Use filter to only return the values from each arrB that are not in arrA.
4. Set newArr equal to the value returned from reduce and then return newArr.
*/
