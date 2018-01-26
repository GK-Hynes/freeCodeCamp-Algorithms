/*Write a function which takes a ROT13 (Caesar's cipher) encoded string as input and returns a decoded string.*/

function rot13(str) {
  var newStr = str
    .split("")
    .map(function(char) {
      x = char.charCodeAt(0);
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);
      } else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      return String.fromCharCode(x - 13);
    })
    .join("");

  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

/*
1. Create an array using split and then map over it. 
2. If a character has an ASCII value below 65 or above 90, return it unchanged.
  This preserves punctuation and spaces. 
3. If a character's ASCII value is less than 78, add 13 and return it. 
  Since N is the midpoint of the alphabet, this is the same as subtracting until you get to A and then subtracting from Z. (e.g.You want C, 67, to onvert to P, 80)
4. Otherwise return the character's ASCII value minus 13.
5. Finally use join to convert the array back into a string. 
*/
