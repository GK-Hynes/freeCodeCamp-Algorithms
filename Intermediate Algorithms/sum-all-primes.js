// Sum all the prime numbers up to and including the provided number.
// The provided number may not be a prime.

function sumPrimes(num) {
  let nums = [];
  for (let i = 0; i <= num; i++) {
    nums.push(i);
  }

  let primes = nums.filter(num => {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
      if (num % i == 0) return false;
    }
    return true;
  });

  let sumPrimes = primes.reduce((acc, curr) => {
    return acc + curr;
  });

  return sumPrimes;
}

sumPrimes(10);

/*
1. Use a for loop to generate an array containing all numbers up to num.
2. Use filter on nums to filter out non prime numbers.
3. Use reduce on primes to add all the numbers in primes.
4. Return sumPrimes.
 */
