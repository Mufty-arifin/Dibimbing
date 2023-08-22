// const buah = ["jeruk", "pisang", "semangka", "jambu", "nangka"];
// // buah.push("semangka")
// const pisangsemangka = buah.slice(1, 3);
// console.log(pisangsemangka);

// let result = [];
// for (let i = 0; i < buah.length; i++) {
//   //console.log(buah[i]);
//   if (buah[i] === "semangka") {
//     result.push(buah[i]);
//   } else if (buah[i] === "jambu") {
//     result.push(buah[i]);
//   }
// }
// console.log(result);

// let searchValue = "kesemek"
// let output;
// for (let i = 0; i < buah.length; i++) {
//     //console.log(arr[i]);
//     if (buah[i] === searchValue) {
//       output = true
//     }else{
//         output = false
//     }
//   }
// console.log(output);

// const siswa = [
//   { nama: "lala", kelas: "1A" },
//   { nama: "jordan", kelas: "2A" },
//   { nama: "beti", kelas: "3A" },
//   { nama: "okta", kelas: "4A" },
//   { nama: "belia", kelas: "5A" },
// ];

// // split manual
// let cari = "lala,1A";
// let outputSeacrh = [];
// let string = "";

// for (let i = 0; i < cari.length; i++) {
//   if (cari[i] !== ",") {
//     string += cari[i];
//   } else {
//     outputSeacrh.push(string);
//     string = "";
//   }
// }
// outputSeacrh.push(string);
// console.log(outputSeacrh);

// const matrix = [
//   [-3, -7, -2],
//   [-9, -1, -6],
//   [-4, -5, -8],
// ];

// let result = matrix[0][0];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     if (matrix[i][j] > result) {
//       result = matrix[i][j];
//     }
//   }
// }

// console.log(result);


// method

// const guru = {
//     nama: "Lala",
//     usia: 27
// }
// const siswa = {
//     nama: "Tini",
//     usia: 9
// }

// function sayHi() {
//     console.log(`Hallo nama saya ${this.nama}`);
// }

// guru.sayHi = sayHi;
// siswa.sayHi = sayHi;

// guru.sayHi()
// siswa.sayHi()



// class object

// const siswa1 = {
//     nama: "lala",
//     kelas: "3A",
//     showSiswa: function () {
//         console.log(`Nama: ${this.nama}, Kelas: ${this.kelas}`);
//     }
// }
// const siswa2 = {
//     nama: "tini",
//     kelas: "2C",
//     showSiswa: function () {
//         console.log(`Nama: ${this.nama}, Kelas: ${this.kelas}`);
//     }
// }

// function Siswa(nama, kelas) {
//     this.nama = nama;
//     this.kelas = kelas;
// }

// const today = new Date().getDate()

// const siswa3 = new Siswa("beti", "3E")

// console.log(siswa3);


// // hitung jumlah kata
// function  hitungJumlahKata(kalimat) {
//     let jum = 0
//     let result = []
//     for (let i = 0; i < kalimat.length; i++) {
//         console.log(kalimat[i]);
       
//     }
//     return jum
// }

// console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5


let menit = 88;

let jam = Math.floor(menit/60);
let sisaMenit = menit % 60
console.log(sisaMenit);
console.log(jam);

if (sisaMenit < 10) {
    console.log(jam + ":0" + sisaMenit);
}else{
    console.log(jam + ":" + sisaMenit);
}


let tes = false

console.log(!tes);