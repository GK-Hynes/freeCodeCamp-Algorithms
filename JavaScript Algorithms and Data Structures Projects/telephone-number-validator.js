// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number.

function telephoneCheck(str) {
  const regex = /^1?\s?(\(\d{3}\)|\d{3})\s?[-|\s]*\d{3}[-|\s]*\d{4}$/;
  if (str.match(regex)) {
    console.log("matched!");
  } else {
    console.log("Not matched");
  }
}

telephoneCheck("555-5555");
telephoneCheck("5555555");
telephoneCheck("1 555)555-5555");
telephoneCheck("123**&!!asdf#");

/*
1. Create a regex that will match a valid US telephone number.
2. The regex should check for:
  start of string
  the country code (optional),
  whitespace (optional)
  either the area code in parentheses or the area code by itself
  whitespace or hyphens (optional)
  three digits
  whitespace or hyphens (optional)
  four digits
  end of string
3. Return true if the string matches the regex, return false otherwise.
*/
