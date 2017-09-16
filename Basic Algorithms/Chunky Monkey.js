function chunkArrayInGroups(arr, size) {

  var newArr = [];

  for(var i = 0; i < arr.length; i+=size){
    newArr.push(arr.slice(i, i + size));
  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/*
1.	Create an empty array, newArr, to hold the result.
2.	Set up a for loop to loop through the array.
3.	Each time the loop runs it will return a slice from the array starting at i and ending at i + size.
4.	It will push this result into newArr.
5.	After the loop finishes, return newArr.*/
