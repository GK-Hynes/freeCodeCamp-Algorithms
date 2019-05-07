//Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}

palindrome("eye");

/*
1. Use regular expressions to remove non-alphanumeric characters.
    /\W/ would remove all non-alphanumeric characters.
    /[\W_]/ is used here as you need to include _ for one of the test conditions.
2. Use toLowerCase() to ignore capital letters
3. Compare this string to a reversed version of itself using split(), reverse(), join().

This is inefficient since you have to operate on the whole string
multiple times and then compare the whole string twice.*/
