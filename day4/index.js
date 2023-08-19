// let nilai = 78;

// if (nilai > 85) {
//   console.log("A");
// } else if (nilai > 75) {
//   console.log("B");
// } else {
//   console.log("C");
// }
// // Switch Case

// let nomorBulan = 13;
// let stringBulan = "";

// switch (nomorBulan) {
//   case 1:
//     stringBulan = "Januari";
//     break;
//   case 2:
//     stringBulan = "Februari";
//     break;
//   case 3:
//     stringBulan = "Maret";
//     break;
//   case 4:
//     stringBulan = "April";
//     break;
//   case 5:
//     stringBulan = "Mei";
//     break;
//   case 6:
//     stringBulan = "Juni";
//     break;
//   case 7:
//     stringBulan = "Juli";
//     break;
//   case 8:
//     stringBulan = "Agustus";
//     break;
//   case 9:
//     stringBulan = "September";
//     break;
//   case 10:
//     stringBulan = "Oktober";
//     break;
//   case 11:
//     stringBulan = "November";
//     break;
//   case 12:
//     stringBulan = "Desember";
//     break;
//   default:
//     stringBulan = "Yang Anda Masukkan Salah";
//     break;
// }
// console.log(stringBulan);

// let username = "Lalaa";
// let password = "Mufty";

// // if (
// //     username &&
// //     password &&
// //     username.length >=5 &&
// //     password.length >= 5
// // ) {
// //   console.log("login berhasil");
// // }else{
// //     console.log("login gagal");
// // }

// // if (username && password) {
// //   if (username.length >= 5 && password.length >= 5) {
// //     console.log("Login berhasil");
// //   }
// //   console.log("periksa");
// // } else {
// //   console.log("login gagal");
// // }

// // if (username?.length >= 5 && password?.length >= 5) {
// //   console.log("login berhasil");
// // } else {
// //   console.log("login gagal");
// // }

// // Regex
// if (username && password.length > 4 && password.match('[A-Z]')) {
//     console.log("Login Berhasil!!");
// } else {
//     console.log("Periksa kembali username dan password anda!");
// }

// let result;

// for (let i = 0; i < 6; i++) {
//     result = i+1
//     console.log(typeof("angka " + result));
// }

// const person = {
//     name: "Lala",
//     age: 20,
//     profession: "developer"
// }

// for (let key in person) {
//  console.log(`${key} : ${person[key]}`);

//     }

// Latihan

// let n = 5;
// let output = "";

// for (let i = 1; i <= n; i++) {
//   console.log((output += "*"));
// }

/** 
1. Buatkan sebuah function bandingkanAngka untuk menyelesaikan tase case dibawah :
TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
*/
// No 1
function bandingkanAngka(angka1, angka2) {
  if (angka2 > angka1) {
    return true;
  } else if (angka2 < angka1) {
    return false;
  } else {
    return -1;
  }
}
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

/**
2. Buatkan sebuah function Asterik agar keluaran yang dihasilkan seperti dibawah :

*
**
***
****
*****

 */

// No 2
function asterik(a) {
  let output = "";
  for (let i = 0; i < a; i++) {
    console.log(output += "*");
  }
}
asterik(5);
