// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  for (let i = 1; i <= str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

fearNotLetter("abce");

/*
1. Loop over the str, starting at the second character
2. If the difference in char codes between the current character and the previous character is greater than one, there is a missing character.
3. Add one to the previous charcter to get the char code for the missing character.
4. Use String.fromCharCode() to convert this to a letter. Then return it.
5. If there is is no missing letter, you will get undefined by default. 
*/
