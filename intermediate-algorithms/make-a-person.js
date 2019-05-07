// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

const Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  (this.getFullName = function() {
    return "";
  }),
    (this.getFirstName = function() {}),
    (this.getLastName = function() {}),
    (this.setFirstName = function(first) {});
  this.setLastName = function(last) {};
  this.setFullName = function(firstAndLast) {};
  return firstAndLast;
};

const Bob = new Person("Bob Ross");
Bob.getFullName();
