/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.*/

function destroyer(arr) {
  var args = Array.from(arguments);

  return arr.filter(function(element) {
    return !args.includes(element);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*
1. Convert arguments into an array.
2. Use filter() to create a new array with all the elements that pass the test.
3. Use includes() to check for elements that are not in args and return them.
4. Return the filtered array.*/
