/* 

butalah output dari contoh berikut 
manfaatkan perulangan while dan for untuk membuat segitiga
manfaatkan array

contoh tower 3 lantai
      *  
     *** 
    *****
  
  EXPECTED OUTPUT :
       *
      ***
     ***** 
    ******* 
   *********
  ***********
  
  NOTE: berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
*/

function towerBuilder(n) {
  const tower = [];

  for (let i = 0; i < n; i++) {
    // Perulangan untuk spasi pada setiap lantai
    let spaces = "";
    for (let j = 0; j < n - i - 1; j++) {
      spaces += " ";
    }

      // Perulangan untuk bintang pada setiap lantai
    let stars = "";
    for (let k = 0; k < 2 * i + 1; k++) {
      stars += "*";
    }

     // Gabungkan spasi dan bintang untuk setiap lantai dan masukkan ke dalam array menara
    tower.push(spaces + stars);
  }

  // Kembalikan menara sebagai string dengan setiap lantai dipisahkan oleh baris baru
  return tower.join("\n");
}

console.log(towerBuilder(6));
console.log(towerBuilder(3));