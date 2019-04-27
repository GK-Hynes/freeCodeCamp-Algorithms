// Create a function that sums two arguments together.If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether(...args) {
  const isNumber = num => {
    return typeof num === "number";
  };

  if (isNumber(args[0]) && isNumber(args[1])) {
    return args[0] + args[1];
  } else if (isNumber(args[0]) && args.length === 1) {
    return function addNewNum(num) {
      if (isNumber(num)) {
        return num + args[0];
      }
    };
  } else {
    return undefined;
  }
}

addTogether(2, 3);

/* 
1. Destructure the arguments into an array, args.
2. Create a function, isNumber, to check if a value is a number.
3. If the first two elements of args are numbers, add them and return the total.
4. If the first element of args is a number and it is the only element, return a function, addNewNum().
5. Inside addNewNum(), if the number passed to it is a number, add it to the first element from args.
6. Otherwise return undefined.
*/
