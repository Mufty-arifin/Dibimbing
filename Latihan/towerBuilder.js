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
   // Initialize an empty array to store each floor of the tower
   const tower = [];

   // Outer loop for each floor of the tower
   for (let i = 0; i < n; i++) {
       // Inner loop for spaces before the stars on each floor
       let spaces = '';
       for (let j = 0; j < n - i - 1; j++) {
           spaces += ' ';
       }

       // Inner loop for the stars on each floor
       let stars = '';
       for (let k = 0; k < 2 * i + 1; k++) {
           stars += '*';
     
        }

       // Combine spaces and stars for each floor and push it to the tower array
       tower.push(spaces + stars);
   }

   // Return the tower as a string with each floor separated by a newline
   return tower.join('\n');

}

console.log(towerBuilder(3))