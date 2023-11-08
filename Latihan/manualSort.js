// Soal:
// buatlah fungsi sorting manual bisa menggunakan QuickSort, MergeSort dll
// direkomendasikan menggunakan QuickSort karena sering digunakan drpd metode sorting lainnya
// lalu urutkan array berikut [1, 3, 340, 54, 12, 35]
// ['cat', 'dog', 'elephant', 'bee', 'ant']

// expected output
// [ 1, 3, 12, 35, 54, 340 ]
// [ 'ant', 'bee', 'cat', 'dog', 'elephant' ]

// Tidak boleh langsung print expected output
// NOTE : Berikan comment pada baris kode yang dianggap penting

// Jawaban:
const ManualSort = (arr) => {

    // write your code here
     // Kasus dasar: jika array kosong atau hanya memiliki satu elemen, itu sudah terurut.
  if (arr.length <= 1) {
    return arr;
  }

  // Pilih elemen pivot (dalam contoh ini, elemen pertama).
  const pivot = arr[0];

  // Buat dua array kosong untuk menyimpan elemen yang lebih kecil dan lebih besar dari pivot.
  const lesser = [];
  const greater = [];

  // Iterasi melalui array, mulai dari indeks 1 karena pivot sudah dipilih.
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  console.log("lesser " + lesser);
  console.log("greater " + greater);

  // Panggil rekursif fungsi ManualSort pada daftar lesser dan greater,
  // dan gabungkan pivot di tengahnya.
  return [...ManualSort(lesser), pivot, ...ManualSort(greater)];
}

console.log(ManualSort([1, 3, 340, 54, 12, 35]))
console.log(ManualSort(['cat', 'dog', 'elephant', 'bee', 'ant']))