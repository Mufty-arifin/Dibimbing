/**
 * Anagram : Membandingkan 2 buah string apakah tersusun/dibentuk dari huruf yang sama atau tidak
 */

const checkAnagram = (kata1, kata2) => {
  // lengkapi code
  let temp1 = kata1.split("");
  let temp2 = kata2.split("");

  
  temp1.sort();
  temp2.sort();
  //console.log(temp1, temp2);
  for (let i = 0; i < temp1.length; i++) {
    //console.log(temp1[i]);
    if (temp1[i] !== temp2[i]) {
      return `"${kata1}" & "${kata2}" => false`;
    }
  }
  return `"${kata1}" & "${kata2}" => true`;
};

let kata_1 = "kamu";
let kata_2 = "muka";
let kata_3 = "maka";
let kata_4 = "kaum";

console.log(checkAnagram(kata_1, kata_2)); // "kamu" & "muka" => true
console.log(checkAnagram(kata_1, kata_3)); // "kamu" & "maka" => false
console.log(checkAnagram(kata_2, kata_3)); // "muka" & "maka" => false
console.log(checkAnagram(kata_1, kata_4)); // "kamu" & "kaum" => true
