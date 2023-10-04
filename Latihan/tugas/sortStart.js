// Code from Codewars.com

// Soal:
// anda diberikan array yang berisi string
// Anda harus mengurutkannya menurut abjad (case-sensitive, dan berdasarkan karakter ASCII values) dan kemudian mengembalikan nilai pertama.
// The returned value harus berbentuk string, dan terdapat "***" diantara setiap hurufnya.
// anda tidak diperkenankan untuk menghapus atau menambah elemen pada array.

// expected output dari soal adalah
// Test Pass: output is b***i***t***c***o***i***n as expected
// Test Pass: output is a***r***e as expected

// Tidak boleh langsung print expected output
// NOTE : berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : gunakan sorting secara manual, gunakan split dan join

function testCase(i, o) {
  if (i === o) return `Test Pass: output is ${o} as expected`;
  return `Test Failed: ${i} not equall to ${o}`;
}

// Jawaban:
// write code here
function sortStart(arr) {
  // Mengurutkan array secara ascending berdasarkan karakter ASCII
  //sorting
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Menginisialisasi variabel result
  let result = "";

  // Loop melalui setiap karakter pada string pertama (indeks 0)
  for (let i = 0; i < arr[0].length; i++) {
    // Menambahkan karakter ke result, diikuti dengan "***"
    result += arr[0][i];
    if (i !== arr[0].length - 1) {
      result += "***";
    }
  }

  return result;
}

// Test case
console.log(
  testCase(
    sortStart([
      "bitcoin",
      "take",
      "over",
      "the",
      "world",
      "maybe",
      "who",
      "knows",
      "perhaps",
    ]),
    "b***i***t***c***o***i***n"
  )
);
console.log(
  testCase(
    sortStart([
      "turns",
      "out",
      "random",
      "test",
      "cases",
      "are",
      "easier",
      "than",
      "writing",
      "out",
      "basic",
      "ones",
    ]),
    "a***r***e"
  )
);
