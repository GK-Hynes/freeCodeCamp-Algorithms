//Remove all falsy values from an array.

function bouncer(arr) {
  return arr.filter(function(element) {
    if (Boolean(element)) {
      return element;
    }
  });
}

bouncer([7, "ate", "", false, 9]);

/*
1. Use filter() on the array. It creates a new array containing all the elements that pass the test carried out by the function.
2. Pass filter() a function that checks an element's Boolean value.
3. Use the Boolean() function to check if an element is truthy.
4. If it is truthy, return it to filter().
5. filter() will now return a new array containing only the elements that evaluated to truthy.*/
