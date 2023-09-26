// Soal:
// Pada suatu toko terdapat beberapa kaos kaki
// warna biru dinyatakan dengan 1
// warna hijau dinyatakan dengan 3
// warna hitam dinyatakan dengan 5
// warna merah dinyatakan denga 8
// koleksi kaos kaki pada toko dinyatakan dengan array [1, 1, 3, 3, 5, 5, 5, 5]
// disebut sebagai sepasang kaos kaki apabila kaos kaki tersebut memiliki pasangan
// contoh :
// [1,3,3,3] => pada array ini, ada 1 kaos kaki biru, dan 3 kaos kaki hijau. Maka hasilnya ada sepasang(2) kaos kaki hijau dan masing2 1 kaos kaki biru dan 1 kaos kaki hijau lainnya yang tidak memiliki pasangan

// Expected Output :
// 4
// 2

// Berapa pasang kaos kaki kah yang tersedia?
// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pad baris kode yang dirasa penting
// Clue : Gunakan array, perulangan dan pengkondisian

// Jawaban:
function sockMerchant(word) {
  const sockCounts = {}; // Membuat objek untuk menghitung jumlah masing-masing jenis kaos kaki
  let pairs = 0; // Variabel untuk menyimpan jumlah pasang kaos kaki

  // Menghitung jumlah masing-masing jenis kaos kaki
  for (const sock of word) {
    if (sockCounts[sock]) {
      pairs++; // Menambahkan 1 pasang jika menemukan kaos kaki yang sama
      sockCounts[sock] = 0; // Mengatur kembali jumlah kaos kaki jenis tersebut menjadi 0
    } else {
      sockCounts[sock] = 1;
    }
  }

  return pairs;
}

console.log(sockMerchant([1, 1, 3, 3, 5, 5, 5, 5]));
console.log(sockMerchant([1, 8, 3, 3, 5, 5, 5]));
