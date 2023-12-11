// Soal:
// Buatlah fungsi bernama addMatrices yang menerima dua parameter berupa 
// matriks dua dimensi. Fungsi ini harus mengembalikan hasil penjumlahan
// kedua matriks tersebut. Pastikan untuk memeriksa apakah kedua matriks
// memiliki ukuran yang sama sebelum dilakukan penjumlahan.

/*
Expected Output:
[
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10]
]
*/

// Jawaban:
function addMatrices(matrix1, matrix2) {
    //write your code here
      // Periksa apakah kedua matriks memiliki dimensi yang sama
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        return "Kedua matriks harus memiliki dimensi yang sama untuk penjumlahan";
    }

    // Inisialisasi matriks hasil dengan nilai nol
    const hasil = [];

    // Lakukan penjumlahan matriks
    for (let i = 0; i < matrix1.length; i++) {
        hasil[i] = [];
        for (let j = 0; j < matrix1[0].length; j++) {
            hasil[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return hasil;
    
};

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrix2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

console.log(addMatrices(matrix1, matrix2));