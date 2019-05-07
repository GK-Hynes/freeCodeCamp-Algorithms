// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  let result = 0;
  let prevNum = 0;
  let currentNum = 1;

  while (currentNum <= num) {
    if (currentNum % 2 !== 0) {
      result += currentNum;
    }
    currentNum += prevNum;
    prevNum = currentNum - prevNum;
  }

  return result;
}

sumFibs(4);

/*
1. Create variables for the result, the previous number and the current number.
2. Use a while loop to make sure currentNum is less than or equal to num.
3. If currentNum is odd, add it to result.
4. Add prevNum (if any) to currentNum to move to the next iteration.
5. Subtract prevNum from currentNum to get a new prevNum.
6. Return the result.
*/
