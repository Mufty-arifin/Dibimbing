function arrayBoard(angka) {
  let output = [];
  let count = 1;
  for (let i = 0; i < angka; i++) {
    let temp = [];
    for (let j = 0; j < angka; j++) {
      if (i % 2 === 1) {
        temp.unshift(count);
      } else {
        temp.push(count);
      }
      count++
    }
    output.push(temp);
  }
  return output;
}
console.log(arrayBoard(3));
// output
[
  [1, 2, 3],
  [6, 5, 4],
  [7, 8, 9],
];

console.log(arrayBoard(2));
// output
[
  [1, 2],
  [3, 4],
];
