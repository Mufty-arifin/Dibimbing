// Soal:
// Seorang front-end dev  diminta untuk membuat logic yang dapat merapikan sebuah random String
// Setiap kata memiliki huruf Capital pada awal hurufnya.
// Contoh  "SeLamAT PAGi semua halOo" menjadi "Selamat Pagi Semua Haloo"
// "HaRI iNi adALAh HarI LibUR " menjadi "Hari Ini Adalah Hari Libur"
// Bantulah front-end tersebut
/* 
Expected Output:
Selamat Pagi Semua Haloo
Hari Ini Adalah Hari Libur
*/
// berikan comment penjelasan pada baris kode yang dianggap penting
// Tidak boleh langsung print expected output

// Jawaban:

function wordFormatter(word) {
  let result = "";
  let kapital = true;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      // Jika karakter saat ini adalah spasi, maka kapital menjadi true
      kapital = true;
      result += word[i];
    } else if (kapital) {
      // Jika kapital adalah true, maka ubah karakter menjadi huruf kapital
      result += word[i].toUpperCase();
      kapital = false; // Kapital menjadi false untuk karakter berikutnya
    } else {
      // Jika kapital adalah false, ubah karakter menjadi huruf kecil
      result += word[i].toLowerCase();
    }
  }

  return result;
}

console.log(wordFormatter("SeLamAT PAGi semua halOo"));
console.log(wordFormatter("HaRI iNi adALAh HarI LibUR"));
