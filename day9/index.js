//Searching
//Sorting
//Callback & Promise
//Sorting

//Searching
// function linearSearch(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

// const numbers = [10, 5, 8, 2, 9];
// const targetNumber = 8;

// const foundIndex = linearSearch(numbers, targetNumber);
// console.log(foundIndex);

// const buah = ["apel", "jambu", "mangga", "jeruk"];
// const cari = "apel";
// if (buah.indexOf(cari) >= 0) {
//     console.log("ada");
// }else{
//     console.log("tidak ada");
// }

// const temp = buah.find((item) => item === cari);

// console.log(temp);

// const temp = buah.includes(cari);

// console.log(temp);
// if (temp) {
//     console.log(`Buah ${cari} ada di dalam array`);
// }

// const angka = [5, 6, 7, 1, 9, 2];

// const tempAngka = angka.filter(item => item <= 5);

// console.log(tempAngka);

// sorting

function bubbleSort(arr) {
  const n = arr.length;
  //console.log(n);
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
const numbers = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(numbers);
console.log(numbers);

const angka = [1, 3, 5, 7, 0, 2, 4, 6, 8, 10, 100]
angka.sort((a, b) => a - b)

console.log(angka);

//callback

// function transaksi(saldo, harga) {
//     let sisaSaldo = saldo - harga;
//     console.log(sisaSaldo);
// }

// function beli(harga, saldo, callback) {
//   callback( saldo, harga)
//     //console.log(sisaSaldo);
// }

// beli(2000, 10000, transaksi)


setTimeout(() => {
    console.log("anggur");
}, 1000);

setTimeout(() => {
    console.log("jeruk");
}, 2000);

setTimeout(() => {
    console.log("apel");
}, 200);

let obj = {
    saldo: 10000,
    kopi: 2000,
    gula: 3000,
    susu: 2000
}
function transaksi(ob) {
    let sisaSaldo = ob.saldo - ob.kopi
console.log(sisaSaldo);
}
function beli (object, transaksi) {
    transaksi(object);
}

async function fwtchFakeUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data =  await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}