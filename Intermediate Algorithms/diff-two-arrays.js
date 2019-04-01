function diffArray(arr1, arr2) {
  const newArr = [];

  const combinedArr = arr1.concat(arr2);

  combinedArr.filter(item => {
    if (!arr1.includes(item) || !arr2.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
