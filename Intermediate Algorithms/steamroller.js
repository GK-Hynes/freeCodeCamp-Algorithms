// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? steamrollArray(curr) : curr);
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);

/*
1. Use reduce, passing it an empty array as its initial value.
2. Use Array.isArray() on the current value to check if it is an array.
3. If it is, call steamrollArray on curr to flatten it.
4. If it isn't, concat it onto acc.
5. Return the flattened array.
*/
