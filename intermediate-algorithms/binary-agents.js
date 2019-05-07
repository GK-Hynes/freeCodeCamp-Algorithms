// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {
  let nums = str.split(" ");

  let newStr = nums.map(num => {
    return String.fromCharCode(parseInt(num, 2));
  });

  return newStr.join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

/*
1. Split the string into an array, seperating by spaces.
2. Map over the array, using parseInt to convert the binary to decimal, then String.fromCharCode() to covert it to alphanumeric.
3. Join the new array into a string and return it.
*/
