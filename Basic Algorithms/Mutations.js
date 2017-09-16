function mutation(arr) {

  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();

  for(var i = 0; i < test.length; i++){
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);

/*
1. indexOf() is case sensitive so change both of the strings to lower case.
2. Loop through the test string.
3. Use indexOf() to check if each index in the test string is present in the target string. It will return -1 if the letter is not present.
4. Return false if the result is less than 0. Otherwise return true.*/
