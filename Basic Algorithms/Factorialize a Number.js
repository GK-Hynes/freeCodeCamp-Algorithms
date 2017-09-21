//Return the factorial of the provided integer.

function factorialize(num) {
  if(num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

/*
1. Use a recursive function.

2. 0! = 1 so first of all return 1.
  This if statement prevents you from running an infinite loop
  when the function starts to call itself.

3. Take the number being passed in and multiply it by the function
  to get the recursion going.

  But pass in num - 1 so that each time the function calls itself
  num is decremented by 1.

4 The function multiplies num by num - 1, num - 2, num - 3 etc
  until it reaches 0 and then returns 1.

5 Return num multiplied by the function to get your factorialized number. */
