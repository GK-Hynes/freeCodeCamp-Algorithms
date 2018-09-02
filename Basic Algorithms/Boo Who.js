// Check if a value is classified as a boolean primitive. Return true or false.

// First attempt
// function booWho(bool) {
//   if (typeof bool === "boolean") {
//     return true;
//   } else {
//     return false;
//   }
// }

// booWho(null);

// Refactor
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);

/* 
Use the typeof operator to check if bool is a boolean. 
If it is, it will return true.
If it isn't, it will return false. 
*/
