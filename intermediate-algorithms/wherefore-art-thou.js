function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(item => {
    return sourceKeys.every(key => {
      return item.hasOwnProperty(key) && item[key] === source[key];
    });
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
