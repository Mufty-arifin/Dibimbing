// Soal:
// Count The Vowels
//hitung jumlah huruf vokal pada string
// expected output :
// 9
// 6

let vowels = ["a", "i", "u", "e", "o"]; // vokal

// Tidak boleh langsung print expected output
// Berikan comment penjelasan pada baris kode yang dirasa penting
// CLUE : Gunakan perulangan dan pengkondisian

// Jawaban:
function countVowels(str, vowels) {
  // write your code here

  let count = 0;
  str = str.toLowerCase(); //Mengubah string menjadi huruf kecil agar perbandingan dengan huruf vokal
  
  for (let i = 0; i < str.length; i++) {
    // Memeriksa apakah karakter adalah huruf vokal
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) { 
        count++;
      }
    }
  }
  return count;
}

console.log(countVowels("Selamat Pagi Duniaa!!", vowels));
console.log(countVowels("Aku suka ngoding", vowels));
//7
function vowelsAndConsonants(s) {
  const vowels = 'aeiou';
  let vowelString = '';
  let consonantString = '';

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelString += s[i];
    } else {
      consonantString += s[i];
    }
  }

  return vowelString + consonantString;
}

console.log(vowelsAndConsonants("javascriptloops"));
/**
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s  
*/ 