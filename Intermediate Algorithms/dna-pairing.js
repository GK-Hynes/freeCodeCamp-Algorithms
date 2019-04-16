// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

function pairElement(str) {
  let paired = [];

  str = str.split("").map(base => {
    paired.push(Array.from(base));
  });

  paired.forEach(base => {
    if (base.includes("G")) {
      base.push("C");
    } else if (base.includes("C")) {
      base.push("G");
    } else if (base.includes("T")) {
      base.push("A");
    } else {
      base.push("T");
    }
  });

  return paired;
}

pairElement("GCG");

/*
1. Create an empty array for the paired elements.
2. Split the str into an array, map over it and push each base (once converted to an array using Array.from()) into 'paired'. This gives you an array of arrays.
3. Loop over paired, use .includes() to check which base is present, and push on the correct base to pair with it.
*/
