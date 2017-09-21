/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.*/

function truncateString(str, num) {
  if(num <= 3){
    return str.slice(0, num) + "...";
  } else if(str.length > num){
    return str.slice(0, num-3) + "...";
  } else {
    return str;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

/*
1.	Create an if else statement.
2.	Check if the length of the string is greater than num and num is greater than 3.
3.	Return a string slice starting at 0 and ending at num – 3 (to leave room for the “…”, which you now add).
4.	Check if the length of str is greater than num and num is less than or equal to 3.
5.	Return a string slice starting at 0 and ending at num, then add “…”.
6.	Otherwise return str.*/
