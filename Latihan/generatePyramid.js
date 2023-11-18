// soal
// buat segitiga siku-siku dari angka 1 ke n 
// manfaatkan metode perulangan secara increment & rekursif
// gunakan fungsi cetak untuk menampilkan segitiga

// Input : 5
/* Expected output :
1
1 2
1 2 3
1 2 3 4 
1 2 3 4 5
*/

// Tidak boleh langsung print expected output
// NOTE : berikan comment penjelasan pada baris kode yang dirasa penting


// jawaban
const generatePyramid = (n) => {
   
    for (let i = 1; i <= n; i++) {
      // Membuat variabel row untuk menyimpan pola baris
      let row = '';
      // Loop untuk setiap kolom dari 1 hingga i
      for (let j = 1; j <= i; j++) {
        // Menambahkan nilai j dan spasi ke dalam variabel row
        row += j + ' ';
      }
      // Mencetak baris yang telah dibuat ke konsol
      console.log(row);
    }
  }
  
  generatePyramid(5);