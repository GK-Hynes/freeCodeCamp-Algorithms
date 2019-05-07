function sumAll(arr) {
  const sorted = arr.sort((a, b) => a - b);
  const range = [];

  for (let i = sorted[0]; i <= sorted[sorted.length - 1]; i++) {
    range.push(i);
  }

  return range.reduce((total, current) => total + current);
}

sumAll([10, 5]);
