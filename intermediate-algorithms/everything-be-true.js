// Check if the predicate(second argument) is truthy on all elements of a collection(first argument).

// In other words, you are given an array collection of objects.The predicate pre will be an object property and you need to return true if its value is truthy.Otherwise, return false.

function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);

/* 
1. Use every() to check if every element in collection passes a test.
2. Use bracket notation to check if the element being tested, obj, has the property pre.
3. If obj[pre] exists and is truthy, the function will return true. Otherwise it'll return false.
*/
