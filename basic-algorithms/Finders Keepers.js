// Create a function that looks through an array(first argument) and returns the first element in the array that passes a truth test(second argument).If no element passes the test, return undefined.

function findElement(arr, func) {
  const filtered = arr.filter(func);
  return filtered[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/*
1. Create a variable, filtered.
2. Call filter() on the arr and pass func to filter as its callback function.
   Filter will return a new arr with all the elements that pass the test in func.
3. Now return filtered[0] as you only want the first element that passes the test.
4. If no elements pass the test an empty arr will be created. 
   Returning element 0 in an empty arr will return undefined.
*/
