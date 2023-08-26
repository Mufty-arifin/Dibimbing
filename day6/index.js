// //function
// //lodash

// function Siswa(nama, kelas) {
//     this.nama = nama;
//     this.kelas = kelas;
//     this.showSiswa = function () {
//         console.log(`Nama : ${this.nama}, Kelas: ${this.kelas}`);
//     };
// }

// const siswa1 = new Siswa("Mufty", "1A") 
// siswa1.showSiswa();

// // namaFunction();

// // function namaFunction() {
// //     console.log("ini");
// // }

// (function (val1, val2) {
//     let hasil = val1 * val2;
//     console.log(`Ini adalah hasil ${hasil}`);
// })
// (5, 2)

// function kali(val1, val2) {
//     const result = val1 * val2;
//     return result
// }
// console.log(kali(5, 6));

// function rupiah(val) {
//     return `Rp ${val},-`
// }
// console.log(rupiah("1.000.000"));



//1. Buatkan function palindrome untuk menyelesaikan tase case dibawah
// TEST CASES
function palindrome(kalimat) {
    kalimat = kalimat.toLowerCase()
    let newKalimat =''
    for (let i = 0; i < kalimat.length; i++) {
    newKalimat = kalimat[i] + newKalimat
    }
    if (newKalimat === kalimat) {
        return true
    }else {
        return false
    }
    //console.log(newKalimat);
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusaK')); // true
console.log(palindrome('mister')); // false

//2
function cariMean(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    //console.log(sum);
    var mean = Math.round(sum / arr.length);
    return mean;
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 8, 9, 5])); // 5
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7