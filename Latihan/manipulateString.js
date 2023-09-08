// Soal:
// berikan spasi di antara kata yang terdapat pada string berikut
//expected output :
// Selamat Pagi Dunia
// Aku Suka Javascript

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : gunakan perulangan dan pengkondisian

// Jawaban:
function manipulateString(str) {
  let temp = str[0]; //mendeklarasikan variabel temp dan menginisialisasinya dengan karakter pertama dari string str (indeks 0).

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      //memeriksa apakah karakter saat ini dalam string adalah huruf kapital.
      temp += " "; // Jika karakter saat ini adalah huruf kapital, kita menambahkan spasi ke variabel temp
    }
    temp += str[i]; //menambahkan karakter saat ini (baik huruf kapital maupun huruf kecil) ke variabel temp
  }

  return temp;
}

console.log(manipulateString("SelamatPagiDunia")); // Selamat Pagi Dunia
console.log(manipulateString("AkuSukaJavascript")); // Aku Suka Javascript
