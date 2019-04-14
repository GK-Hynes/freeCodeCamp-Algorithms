function translatePigLatin(str) {
  let pigLatin = "";
  const regex = /[aeiou]/gi;

  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    pigLatin = str + "ay";
  } else {
    let firstVowelIndex = str.indexOf(str.match(regex)[0]);

    pigLatin =
      str.substring(firstVowelIndex) + str.substring(0, firstVowelIndex) + "ay";
  }
  return pigLatin;
}

translatePigLatin("consonant");

/*
1. Create variables for the Pig Latin string and the vowel regex.
2. Use .match() to check if the first character is a vowel
3. Check if .match() equals null for the very few English words without vowels, e.g. nth
4. For words that start with a cluster of consonants:
  Find the index of the first vowel.
  Use substring and concat three strings:
    i.   From the first vowel to the end
    ii.  From the beginning to the first vowel
    iii. "ay"
*/
