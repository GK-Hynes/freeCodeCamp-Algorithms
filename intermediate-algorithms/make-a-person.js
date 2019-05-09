// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

const Person = function(firstAndLast) {
  let name = firstAndLast.split(" ");
  let firstName = name[0];
  let lastName = name[1];
  let fullName = `${firstName} ${lastName}`;
  (this.getFullName = function() {
    return fullName;
  }),
    (this.getFirstName = function() {
      return firstName;
    }),
    (this.getLastName = function() {
      return lastName;
    }),
    (this.setFirstName = function(first) {
      firstName = first;
      fullName = `${firstName} ${lastName}`;
    }),
    (this.setLastName = function(last) {
      lastName = last;
      fullName = `${firstName} ${lastName}`;
    }),
    (this.setFullName = function(firstAndLast) {
      fullName = firstAndLast;
      name = firstAndLast.split(" ");
      firstName = name[0];
      lastName = name[1];
    });
  return fullName;
};

const bob = new Person("Bob Ross");
bob.getFullName();
