/*
  Pada array, dapat dilakukan pengambilan sebagian data dari index tertentu sampai index tertentu
  Terdapat fungsi bawaan javascript "slice" untuk melakukan hal tersebut

  cobalah untuk membuat custom function yang seperti slice

*/

const customSlice = (arr, start, end) => {
  // tulis code di sini
  if (start < 0) {
    start = 0;
  }

  if (end > arr.length) {
    end = arr.length - 1;
  }

  if (end < start) {
    end = start;
  }
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(arr[i]);
  }

  return result;
};

let data = [
  "nol",
  "satu",
  "dua",
  "tiga",
  "empat",
  "lima",
  "enam",
  "tujuh",
  "delapan",
  "sembilan",
  "sepuluh",
];
console.log(customSlice(data, 1, 5)); // [ 'satu', 'dua', 'tiga', 'empat', 'lima' ]
console.log(customSlice(data, 3, 20)); // [ 'tiga', 'empat', 'lima' , 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh' ]
console.log(customSlice(data, 0, 3)); // [ 'nol', 'satu', 'dua', 'tiga' ]
