// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format { name: 'name', avgAlt: avgAlt }.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number.The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s - 2.

function orbitalPeriod(arr) {
  function calcOrbital(avgAlt) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    return Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM)
    );
  }

  arr.map(obj => {
    obj.orbitalPeriod = calcOrbital(obj.avgAlt);
    delete obj.avgAlt;
  });

  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 }
]);

/*
1. Create a function, calcOrbital, to calculate the orbital period based off the avgAlt.
2. Use the formula: orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM).
3. Map over the array, call calcOrbital on each object's avgAlt and set that as the obj's orbitalPeriod.
4. Use the delete operator to remove the obj's avgAlt.
5. Return the arr.
*/
