function titleCase(str) {

  var newArr = str.toLowerCase().split(" ");
  var capitalized = newArr.map(function(word){
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });

  return capitalized.join(" ");
}

titleCase("I'm a little tea pot");

/*1.	Use toLowerCase() and split(" ") to  make the entire string lower case
      and convert it to an array of strings.
  2.	Use map() to iterate over the array.
  3.	Use replace() and charAt(0) to replace the first character in each word.
  4.	Replace the first character with charAt(0).toUpperCase().
  5.	Use join(" ") to join the words back together into a string.
  6.	Return this new string.*/
