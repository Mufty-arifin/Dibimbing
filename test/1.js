const removeNegative = (array) => {
  let result = [];
  for (const i of array) {
    if (i >= 0) {
      result.push(i);
    }
  }

  return result;
};
console.log(removeNegative([1, 2, 3, 4, 5]));
console.log(removeNegative([-90, -33, -44, 1]));
console.log(removeNegative([-1, -2, 0, 90, 34]));
console.log(removeNegative([-1])); 
console.log(removeNegative([90, 34, 34, 34, -1])); 
