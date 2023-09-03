// import React from "react";
// function namaFungsi(name) {
//     console.log("Nama saya adalah " + name);
// }
// namaFungsi("mufty");

// export default indexedDB;

// rest operator

// function cetakData(param1, param2, ...param3) {
//   // console.log(param1);
//   // console.log(param2);
//   // console.log(param3);

//   let result = {};

//   result.name = param1;
//   result.jenisKelamin = param2;
//   result.usia = param3[0];
//   result.alamat = param3[1];
//   result.status = param3[2];

//   console.log(result);
// }

// cetakData("mufty", "laki-laki", 25, "cianjur", "mahasiswa");


//spread Operator

const obj1 = { judul: "naruto", genre: "aksi", tahun: 1900 };
const obj2 = { judul: "onePiece", genre: "comedi", tahun: 2000 };
const obj3 = { judul: "conan", genre: "misteri", tahun: 1988 };

const merge = (...param) => ({
  ...param,
});

//menggabungkan
const komik = merge(obj1, obj2, obj3);
// console.log(result);

//mengambil semua judul
const judulArray = [];

for (const key in result) {
      if (result.hasOwnProperty(key)) {
            judulArray.push(result[key].judul);
          }
        }
        console.log(judulArray);
        
//mengurutkan berdasarkan tahun
const dataArray = Object.values(komik);
for (let i = 0; i < dataArray.length - 1; i++) {
    for (let j = 0; j < dataArray.length - i - 1; j++) {
      if (dataArray[j].tahun > dataArray[j + 1].tahun) {
        // Menukar posisi elemen jika tahunnya lebih besar
        const temp = dataArray[j];
        dataArray[j] = dataArray[j + 1];
        dataArray[j + 1] = temp;
      }
    }
  }

  const result = {};
for (let i = 0; i < dataArray.length; i++) {
  result[i] = dataArray[i];
}

console.log(result);








