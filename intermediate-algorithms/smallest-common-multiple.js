// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let smallest = arr[0];
  let biggest = arr[1];
  let least = lcm(smallest, biggest);

  if (biggest - smallest === 1) {
    return least;
  } else {
    return lcm(least, smallestCommons([smallest + 1, biggest]));
  }

  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }

  // Generate greatest common divisor
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
}

smallestCommons([1, 5]);
