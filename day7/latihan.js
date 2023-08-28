function balikKata(str) {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    temp = str[i] + temp;
  }
  return temp;
}

console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS

function dashWord(str, num) {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    temp += str[i];

    if ((i + 1) % num === 0 && i !== str.length - 1) {
      temp += "-";
    }
  }
  return temp;
}

// TEST CASES
console.log(dashWord("Semangat!", 3)); // Sem-ang-at!
console.log(dashWord("Uzumaki Naruto", 2)); // Uz-um-ak-i -Na-ru-to
console.log(dashWord("081234567890", 4)); // 0812-3456-7890
console.log(dashWord("Indonesia Hebat", 10)); // Indonesia -Hebat
console.log(dashWord("Love Coding", 1)); // L-o-v-e- -C-o-d-i-n-g
