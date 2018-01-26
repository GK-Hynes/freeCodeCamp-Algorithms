/*Check if a string (first argument, str) ends with the given target string (second argument, target).*/

function confirmEnding(str, target) {
  if (str.substring(str.length - target.length) === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");

/*
1.	Use str.length – target.length to start at the location in the string the same length from the end as the length of target.
2.	Use the substring() method to extract a substring starting at this location.
3.	Use an if statement to check if the substring equals target.

Or, since comparison operators always return true or false, you can write it more concisely:
function confirmEnding(str, target) {
  return str.substring(-target.length) === target;
}
1.	The substring() method return the characters in a string beginning at the specified location.
    You can set the end location or allow the method to run to the end of the string.
2.	If you specify a negative location substring() counts back from the end of the string.*/
