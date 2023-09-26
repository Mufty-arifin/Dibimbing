// Soal: Hitunglah jumlah masing masing karakter yang terdapat pada kata berikut
// karakter yang berupa huruf kapital maupun huruf kecil dihitung sama
// Contoh:
// Dibimbing di| karakter  contoh  d:2, i: 4 dst.....
// Software  | karakter  contoh   s:1, e: 1 dst.....
// Frontend  | karakter  contoh  f:1, r: 1 dst.....

// Expected Output:
// { d: 2, i: 4, b: 2, m: 1, n: 1, g: 1, ' ': 1 }
// { s: 1, o: 1, f: 1, t: 1, w: 1, a: 1, r: 1, e: 1 }
// { f: 1, r: 1, o: 1, n: 2, t: 1, e: 1, d: 1 }

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting
// Gunakan Object/Array dan juga perulangan
// Jawaban:
function charCount(word) {
  // write your code here
  let result = {};

  // Mengubah string menjadi huruf kecil agar tidak membedakan antara huruf besar dan kecil
  word = word.toLowerCase();

  // Loop melalui setiap karakter dalam string
  for (let i = 0; i < word.length; i++) {
    

    // Jika karakter sudah ada dalam objek hasil, tambahkan 1 ke hitungannya, jika belum, inisialisasi dengan 1
    if (result[word[i]]) {
      result[word[i]]++;
    } else {
      result[word[i]] = 1;
    }
  }

  return result;
}

console.log(charCount("Dibimbing di"));
console.log(charCount("Software"));
console.log(charCount("Frontend"));
