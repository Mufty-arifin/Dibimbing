// Soal:
// Terdapat suatu kumpulan string yang yang susunan kalimat nya terbalik
// Tugas teman teman adalah mengubah kalimat tersebut menjadi kalimat yang benar

// "drow olleh"  menjadi "Hello word."
// "eko atad" menjadi menjadi "Data oke."
// "gnitset tinu" menjadi "Unit testing."

// Tidak boleh langsung print expected output

// Expected Output:

// Hello word. true
// Data oke. true
// Unit testing. true

// NOTE : Berikan comment penjelasan pada baris kdoe yang menurut anda penting
// gunakan perulangan/kode lain dan array untuk menampung kata

// Jawaban:function unitTest(input, output) {
function unitTest(input, output) {
  console.log(input, output === input);
}
function reverse(str) {
  /** 
   * // Reverse Manual
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
     */

  const reversedStr = str.split("").reverse().join(""); // reverse str

  const capitalizedStr =
    reversedStr.charAt(0).toUpperCase() + reversedStr.slice(1); // uppercase huruf indeks 0

  return capitalizedStr + ".";
}

unitTest(reverse("drow olleh"), "Hello word.");
unitTest(reverse("eko atad"), "Data oke.");
unitTest(reverse("gnitset tinu"), "Unit testing.");
