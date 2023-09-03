// SOAL 1 ———————————————————————
/* 
===========
Deep Sum
===========

[INSTRUCTION]
buatlah program untuk menjumlahkan setiap bilangan yang ada didalam array multi dimensi:
- jika didalam array tidak memiliki nilai maka program akan mengembalikan pesan "No number"

[EXAMPLE]
untuk contoh inputan dan keluaran bisa dilihat Test Case dibawah

[RULE]
1. dilarang menggunakan map(), forEach(), filter()
2. dilarang menggunakan regex
*/

function deepSum(arr) {
  // Code disini
  if (arr.length === 0) {
    return "No number";
  }

  let totalIndeks = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const nestedSum = deepSum(arr[i]);
      if (nestedSum !== "No number") {
        totalIndeks += nestedSum;
      } else {
        return "No number";
      }
    } else {
      if (typeof arr[i] === 'number') {
        totalIndeks += arr[i];
      } else {
        return "No number";
      }
    }
  }

  return totalIndeks;
}



//TEST CASE
console.log(
  deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3],
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90],
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10],
    ],
  ])
); // 316

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
    [[3, 5, 1], [1, 5, 3], [1]],
    [[2]],
  ])
); // 156

console.log(
  deepSum([
    [20, 10, 5, 1],
    [5, 6, 7, 8],
    [2, 5, 9, 14],
  ])
); // 92

console.log(deepSum([])); // No number
console.log(deepSum([[]])); //  No number