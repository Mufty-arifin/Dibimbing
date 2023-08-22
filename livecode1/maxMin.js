// Soal:
// Cari Nilai Max dan Min dari   [31, 9, 54, 11, 43, 6, 67]  dengan metode  for loop
// dengan hasil output {max:67, min:6}
// Tidak boleh langsung print expected output
/*
Expected Output:
{ max: 67, min: 6 }
*/
// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dianggap penting

// Jawaban:
const array = [31, 9, 54, 11, 43, 6, 67];

function maxMin(array) {
  // write your code here
  // Inisialisasi variabel max dan min dengan nilai dari elemen pertama array
  let max = array[0];
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
    // Memeriksa apakah elemen saat ini lebih besar dari nilai maksimum yang ada
    if (array[i] > max) {
      max = array[i];
    }
    // Memeriksa apakah elemen saat ini lebih kecil dari nilai minimum yang ada
    if (array[i] < min) {
      min = array[i];
    }
  }
  return { max, min }; // Mengembalikan objek yang berisi nilai maksimum dan minimum
}

console.log(maxMin(array));
