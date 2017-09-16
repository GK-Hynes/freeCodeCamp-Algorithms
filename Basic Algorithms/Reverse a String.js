function reverseString(str) {    
  str = str.split("").reverse().join("");
  return str;
}

reverseString("hello");

/*
1. Split the string into an array using split().
  By leaving no spaces between the quotes you tell the function
  to split the string between every character.

2. Reverse the array using reverse().

3. Join the array into a new string.
  By leaving no spaces between the quotes you tell the function
  to join each character together. */
