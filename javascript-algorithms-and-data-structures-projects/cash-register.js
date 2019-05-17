// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument(price), payment as the second argument(cash), and cash -in -drawer(cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

//   Return { status: "INSUFFICIENT_FUNDS", change: [] } if cash -in -drawer is less than the change due, or if you cannot return the exact change.

//     Return { status: "CLOSED", change: [...] } with cash -in -drawer as the value for the key change if it is equal to the change due.

//       Otherwise, return { status: "OPEN", change: [...] }, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
  let result = { status: "", change: [] };
  let changeDue = cash - price;
  const cashReference = [
    { denom: "ONE HUNDRED", value: 100.0 },
    { denom: "TWENTY", value: 20.0 },
    { denom: "TEN", value: 10.0 },
    { denom: "FIVE", value: 5.0 },
    { denom: "ONE", value: 1.0 },
    { denom: "QUARTER", value: 0.25 },
    { denom: "DIME", value: 0.1 },
    { denom: "NICKEL", value: 0.05 },
    { denom: "PENNY", value: 0.01 }
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
  const changeAvailable = cashReference.reduce((acc, curr) => {
    let value = 0;
    while (register[curr.denom] > 0 && changeDue >= curr.value) {
      changeDue -= curr.value;
      register[curr.denom] -= curr.value;
      value += curr.value;

      changeDue = Math.round(changeDue * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.denom, value]);
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

checkCashRegister(19.5, 20, [
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
