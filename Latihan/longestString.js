// soal:
// Tidak boleh langsung print expected output
// carilah string paling panjang dari array berikut

const arr = [
  "this random text.",
  "He drank life before spitting it out.",
  "There's a reason that roses have thorns.",
  "He waited for the stop sign to turn to a go sign.",
  "Karen believed all.",
];
// expected output berupa string :
// He waited for the stop sign to turn to a go sign

// NOTE : Berikan comment penjelasan fungsi kode pada baris kode yang dirasa penting

// jawaban
const longestString = (arr) => {
  // write your code here
  let longest = ""; // Buat variabel untuk menyimpan string terpanjang

  // for
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
        longest = arr[i]
    }
    
  }

  //foreach
  
//   arr.forEach((str) => {
//     // Periksa panjang string saat ini
//     if (str.length > longest.length) {
//       // Jika lebih panjang, perbarui nilai string terpanjang
//       longest = str;
//     }
//   });

  return longest; // Mengembalikan string terpanjang
};

console.log(longestString(arr));
