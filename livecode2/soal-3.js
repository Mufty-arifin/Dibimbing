function tukar_besar_kecil(text) {
  // lengkapi kode berikut
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      result += text[i].toLowerCase();
    } else {
      result += text[i].toUpperCase();
    }
  }
  return result;
}

console.log(tukar_besar_kecil("Hello World")); // "hELLO wORLD"
console.log(tukar_besar_kecil("I aM aLAY")); // "i Am Alay"
console.log(tukar_besar_kecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukar_besar_kecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukar_besar_kecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"


let array = [10, 12, 17];

let resutFiltered = array.filter((val) => {
  return val % 2 === 0
});
console.log(resutFiltered);

let resultModified = array.map((val) => {
  return val + 5;
})
console.log(resultModified);