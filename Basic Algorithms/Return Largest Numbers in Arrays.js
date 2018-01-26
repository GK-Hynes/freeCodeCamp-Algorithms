/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.*/

function largestOfFour(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var largestNum = arr[i][0];

    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    result[i] = largestNum;
  }
  return result;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

/* 1.	Create an empty array to store your results.
   2.	Create a for loop to loop through the outer array.
   3.	Create a variable (largestNum) to store the value of the currently largest number.
      (Set it to the value of the first number in the first inner array.
      Since it is outside the inner for loop it won’t be reassigned until a larger number is found.)

   4.	Create a for loop to loop through each inner array.
      (The second for loop checks if the element in the inner array is larger than the current largestNum.
      If it is, it updates largestNum.)

   5.	Save the largest number from the inner for loop as an element in the results array.
   6.	Return the results array.*/
