// Soal:
// Cek Apakah pasangan kata berikut adalah anagram atau bukan
// contoh:
// listen --- silent// true
// The Eyes ---- They See// true
// sun --- moon// false

// expected output berdasarkan soal:
// true
// true 
// false
// Tidak boleh langsung print expected output
// Note : Berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban:
// write your code here
function isAnagram(str1, str2) {
    // Remove spaces and convert strings to lowercase
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();
  
    // Check if the lengths of the strings are different
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Convert both strings to arrays and sort them
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
  
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
  }

// Output
console.log(isAnagram("listen","silent")) 
console.log(isAnagram("The Eyes","They See")) 
console.log(isAnagram("sun","moon")) 