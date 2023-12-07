/* 

Buatlah fungsi kalkulasi poin

Input merupakan sebuah array of number yang di representasikan sebagai variable arr dan terdiri dari N yang merupakan panjang array yang akan diikuti element array di bawahnya

findTotal merupakan sebuah fungsi yang akan mencetak jumlah poin berdasarkan:
1. Tambah 2 poin untuk setiap bilangan genap
2. Tambah 3 poin untuk setiap bilangan ganjil, kecuali bilangan "7"
3. Tambah 6 poin untuk setiap bilangan "7" muncuk di dalam array

return boolean false jika tidak ada

Contoh 1 :
input : findTotal([1,2,3])
output: 8

Contoh 2 :
input : findTotal([4,7])
output: 8

Testcase 1
input : findTotal([1,2,3,4,5,6,7])
output: 21

Testcase 2
input : findTotal([27,37,47,57])
output: 12
  
  NOTE: berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const findTotal = (arr) => {
  // Inisialisasi variabel untuk menyimpan total poin
  let totalPoints = 0;

  for (let i = 0; i < arr.length; i++) {
    // Periksa apakah elemen saat ini genap
    if (arr[i] % 2 === 0) {
      // Jika genap, tambahkan 2 poin ke total
      totalPoints += 2;
    } else if (arr[i] % 2 !== 0 && arr[i] !== 7) {
      // Jika ganjil dan tidak sama dengan 7, tambahkan 3 poin ke total
      totalPoints += 3;
    } else if (arr[i] === 7) {
      // Jika sama dengan 7, tambahkan 6 poin ke total
      totalPoints += 6;
    }
  }

  // Kembalikan total poin jika lebih besar dari 0, jika tidak kembalikan false
  return totalPoints > 0 ? totalPoints : false;
};

console.log(findTotal(arr));
