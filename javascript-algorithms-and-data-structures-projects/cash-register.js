// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument(price), payment as the second argument(cash), and cash -in -drawer(cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

//   Return { status: "INSUFFICIENT_FUNDS", change: [] } if cash -in -drawer is less than the change due, or if you cannot return the exact change.

//     Return { status: "CLOSED", change: [...] } with cash -in -drawer as the value for the key change if it is equal to the change due.

//       Otherwise, return { status: "OPEN", change: [...] }, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
  let result = { status: "", change: [] };
  let changeDue = cash - price;
  const denominationReference = [
    { denomination: "ONE HUNDRED", value: 100.0 },
    { denomination: "TWENTY", value: 20.0 },
    { denomination: "TEN", value: 10.0 },
    { denomination: "FIVE", value: 5.0 },
    { denomination: "ONE", value: 1.0 },
    { denomination: "QUARTER", value: 0.25 },
    { denomination: "DIME", value: 0.1 },
    { denomination: "NICKEL", value: 0.05 },
    { denomination: "PENNY", value: 0.01 }
  ];

  // Create register object
  let register = cid.reduce(
    (acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle if register contents equal change due
  if (register.total === changeDue) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }

  // Handle if there are insufficient funds
  if (register.total < changeDue) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  // Calculate change available and compare to change needed
  const changeAvailable = denominationReference.reduce((acc, curr) => {
    let valueOfCurrentDenomination = 0;
    while (register[curr.denomination] > 0 && changeDue >= curr.value) {
      changeDue -= curr.value;
      register[curr.denomination] -= curr.value;
      valueOfCurrentDenomination += curr.value;

      // Round changeDue to counteract floating point issues
      changeDue = Math.round(changeDue * 100) / 100;
    }
    if (valueOfCurrentDenomination > 0) {
      acc.push([curr.denomination, valueOfCurrentDenomination]);
    }
    return acc;
  }, []);

  if (changeAvailable.length < 1 || changeDue > 0) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  result.status = "OPEN";
  result.change = changeAvailable;
  return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

/* 
1. Create a result object with status set to an empty string and change set to an empty array.
2. Subtract price from cash to get the change due.
3. Create an array of objects listing the values of each denomination.
4. Use reduce to turn cid into an object with a total for the register and the value of each denomination in the register. 
5. If the register total equals the change due, return the result with the status as "CLOSED" and change as cid.
6. If the register total is less than the change due, return the result with the status as "INSUFFICIENT_FUNDS". 
7. Loop over the cash reference using reduce, with the accumulator as an array.
8. Use a variable, valueOfCurrentDenomination, to store the value of the denomination being checked in each "drawer" of the register.
9. While there is cash available in the denomination being checked and changeDue is greater than or equal to the value of the current denomination, 
  i. Subtract the value of the current denomination from changeDue.
  ii. Take one unit of the current denomination from the register and add it to valueOfCurrentDenomination.
10. Round changeDue to avoid floating point errors.
11. If valueOfCurrentDenomination is greater than 0, push the current denomination and it's value onto the accumulator array.
12. Return the accumulator array assigned to the variable changeAvailable.
13. If changeAvailable is empty or there is still change due, return the result with the status as "INSUFFICIENT_FUNDS".
14. Otherwise, return the result with the status set to "OPEN" and the change array set to changeAvailable.
*/
