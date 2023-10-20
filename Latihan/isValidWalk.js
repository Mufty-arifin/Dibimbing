// Soal:
// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones --
// everytime you press the button it sends you an array of one-letter strings representing directions to walk
// (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).

// cartesius
//             north
//               x
//               |
//               |
//               |
//  west   ------o------y  east
//               |
//               |
//               |
//             south

// Expeceted Output :
// true
// false
// false
// false

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang penting
// CLUE : Manfaatkan perulangan dan pengkondisian

// Jawaban:
function isValidWalk(walk) {
    // Periksa apakah jalannya tepat 10 langkah
    if (walk.length !== 10) {
      return false;
    }
    
    // Inisialisasi penghitung untuk setiap arah
    let north = 0;
    let south = 0;
    let east = 0;
    let west = 0;
    
    // Hitung jumlah tiap arah perjalanan
    for (let direction of walk) {
      switch (direction) {
        case 'n':
          north++;
          break;
        case 's':
          south++;
          break;
        case 'e':
          east++;
          break;
        case 'w':
          west++;
          break;
        default:
          return false;
      }
    }
    
    // Periksa apakah jumlah arah 'n' dan 's', serta arah 'e' dan 'w' sama
    return north === south && east === west;
  }

  console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
  