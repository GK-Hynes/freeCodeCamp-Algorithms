// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  str = str.split("");

  for (let i = 0; i <= str.length; i++) {
    switch (str[i]) {
      case "&":
        str[i] = "&amp;";
        break;
      case "<":
        str[i] = "&lt;";
        break;
      case ">":
        str[i] = "&gt;";
        break;
      case '"':
        str[i] = "&quot;";
        break;
      case "'":
        str[i] = "&apos;";
        break;
    }
  }

  return str.join("");
}

convertHTML("Dolce & Gabbana");

/*
1. Split the str into an array
2. Loop over the array and use a switch to check if str[i] equals one of the characters to be replaced.
3. Set str[i] to the correct HTML entity.
4. Join the str and return it.
*/
