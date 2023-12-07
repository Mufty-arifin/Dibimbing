/* 

Buatlah fungsi untuk menghitung perolehan medali dari setiap negara 
  
  NOTE: berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
*/

function perolehan_medali(arr_medali) {
    let result = {};

    // Iterasi melalui array medali
    for (let i = 0; i < arr_medali.length; i++) {
      // Mendapatkan nama negara dan jenis medali dari array
      let [negara, medali] = arr_medali[i];
    
      // Mengecek apakah negara sudah ada dalam objek result
      if (!result[negara]) {
        // Jika belum, inisialisasi dengan nilai awal
        result[negara] = { emas: 0, perak: 0, perunggu: 0 };
      }
    
      // Menambahkan medali sesuai jenisnya
      result[negara][medali] += 1;
    }
    
    // Mengubah hasil akhir menjadi array yang sesuai dengan expected output
    let finalResult = [];
    for (let negara in result) {
      finalResult.push({
        negara: negara,
        emas: result[negara]['emas'],
        perak: result[negara]['perak'],
        perunggu: result[negara]['perunggu'],
      });
    }
    
    // Sorting logic based on criteria
    finalResult.sort((a, b) => {
      if (b.emas !== a.emas) {
        return b.emas - a.emas; // Sort by gold medals
      } else if (b.perak !== a.perak) {
        return b.perak - a.perak; // Sort by silver medals
      } else if (b.perunggu !== a.perunggu) {
        return b.perunggu - a.perunggu; // Sort by bronze medals
      } else {
        return a.negara.localeCompare(b.negara); // Sort alphabetically by country code
      }
    });
    
    return finalResult;

  /* 
  Note : Apabila ada tim memiliki jumlah medali emas sama, 
  pertimbangan berikutnya adalah jumlah medali perak, 
  kemudian jumlah medali perunggu. Jika dua negara memiliki jumlah medali emas, perak, dan perunggu sama, 
  maka menentukan urutan mereka dalam tabel perolehan medali Olimpiade adalah dengan menggunakan abjad kode negara.
  */
}

let data_medali = [
    ['Indonesia', 'emas'],
    ['India', 'perak'],
    ['Korea Selatan', 'emas'],
    ['India', 'perak'],
    ['India', 'emas'],
    ['Indonesia', 'perak'],
    ['Indonesia', 'emas'],
    ['India', 'perunggu']
  
];

console.log(perolehan_medali(data_medali));

/* 
   
   Expected Output:
   [
       { negara: "Indonesia", emas: 2, perak: 1, perunggu: 0 },
       { negara: "India", emas: 1, perak: 2, perunggu: 1 },
       { negara: "Korea Selatan", emas: 1, perak: 0, perunggu: 0 },
   ]
   
   */
