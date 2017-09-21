//Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
    var splitStr = str.split(" ");

    var longestWord = 0;

    for(var i = 0; i < splitStr.length; i++) {
        if(splitStr[i].length > longestWord) {
            longestWord = splitStr[i].length;
        }
    }
     return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

/*
1. Split the string and save it as a variable (splitStr).

2. Set up a variable (longestWord) for the length of the longest word.

3. Set up a for loop which will loop through splitStr.

4. Use .length to chek the length of splitStr and the length
    of each index in splitStr.

5. If the first index in splitStr is longer than longestWord
    set its value as the new value of longestWord.

6. Return the value of longestWord. */
