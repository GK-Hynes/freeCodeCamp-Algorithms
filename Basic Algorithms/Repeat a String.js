/*Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.*/

function repeatStringNumTimes(str, num) {
  var newStr = "";
  for (var i = 0; i < num; i++) {
    newStr = newStr.concat(str);
  }
  return newStr;
}

repeatStringNumTimes("*", 3);

// or, using a while loop

function repeatStringNumTimes(str, num) {
  var newStr = "";
  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}

repeatStringNumTimes("*", 3);

// 1.	Create an empty string that will hold the repeated string.
// 2.	Set the while loop to run as long as num > 0.
// 3.	Each time it runs, newStr now equals newStr + str.
// 4.	Decrement num by 1.
// 5.	When the loop finishes return the current string.
