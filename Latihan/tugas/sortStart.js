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
  //sorting manual
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // arr[0] Mendapatkan string pertama dari array yang sudah diurutkan
  // .split("") Memisahkan string yang sudah diurutkan menjadi array karakter
  // .join("***") Menggabungkan karakter-karakter dengan '***' di antara mereka dan menyimpannya dalam variabel result

  const result = arr[0].split("").join("***");

  return result; // Mengembalikan string yang sudah diurutkan dan digabungkan
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
