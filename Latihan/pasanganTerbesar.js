/* 

Buatlah fungsi untuk mencari pasangan terbesar (dua angka yang berhimpitan yang nilainya paling besar)

Contoh 1 :
input : 641573
output: 73

Contoh 2 :
input : 12783456
output: 83
  
  NOTE: berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
*/

function pasanganTerbesar(number) {
  // Mengubah angka menjadi string untuk memudahkan pengolahan digit
  const strNumber = String(number);

  // Inisialisasi variabel untuk menyimpan pasangan terbesar
  let maxPair = 0;

  // Loop untuk mengambil pasangan angka
  for (let i = 0; i < strNumber.length - 1; i++) {
    // Mengambil pasangan angka
    const pair = parseInt(strNumber[i] + strNumber[i + 1]);

    // Membandingkan dengan pasangan terbesar yang telah disimpan
    if (pair > maxPair) {
      maxPair = pair;
    }
  }

  // Mengembalikan pasangan terbesar sebagai output
  return maxPair;
}

console.log(pasanganTerbesar(8782931));

// Expected Output: 93
