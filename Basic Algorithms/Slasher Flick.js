function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);

/*
1. slice() makes a copy of the array between two indices.
2.  If an end index isn't specified, it will run to the end of the array.*/
