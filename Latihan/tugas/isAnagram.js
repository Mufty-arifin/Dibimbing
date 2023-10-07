// Soal:
// Cek Apakah pasangan kata berikut adalah anagram atau bukan
// contoh:
// listen --- silent// true
// The Eyes ---- They See// true
// sun --- moon// false

// expected output berdasarkan soal:
// true
// true
// false
// Tidak boleh langsung print expected output
// Note : Berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban:
// write your code here
function isAnagram(str1, str2) {
  // Menghapus spasi dan mengubah huruf menjadi huruf kecil untuk memastikan perbandingan yang benar
  const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();

  // Mengurutkan karakter dalam string dan membandingkan apakah mereka sama
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");


  // Memeriksa apakah kedua string yang sudah diurutkan sama
  return sortedStr1 === sortedStr2;
}

// Output
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("The Eyes", "They See"));
console.log(isAnagram("sun", "moon"));
