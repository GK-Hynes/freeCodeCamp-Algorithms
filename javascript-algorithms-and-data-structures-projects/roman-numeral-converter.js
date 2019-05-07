// Convert the given number into a roman numeral.

function convertToRoman(num) {
  let result = "";
  const arabicNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNums = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  for (let i = 0; i < arabicNums.length; i++) {
    while (num >= arabicNums[i]) {
      result += romanNums[i];
      num -= arabicNums[i];
    }
  }

  return result;
}

convertToRoman(36);

/*
1. Create an empty string for the result.
2. Create two arrays, one with the different Roman numerals from M down to I, and the other with their Arabic equivalents.
3. Use a for loop to loop over the Arabic numerals.
4. Inside this, use a while loop to check if the number passed to convertToRoman, num, is greater than or equal to the current Arabic numeral.
5. If it is, add the equivalent Roman numeral to result and subtract the current Arabic numeral from num.
6. Return the result.
*/
