// Convert a string to spinal case, removing any spaces or underscores

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  const regex = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  return str.toLowerCase().replace(regex, "-");
}

spinalCase("This Is Spinal Tap");

/*
1. Create a regex for whitespace and underscores
2. Use .replace() and another regex to replace adjacent lowercase and uppercase characters with lowercase + space + uppercase characters.
3. Convert the str to lowercase and use the first regex to replace spaces and underscores with dashes.
*/
