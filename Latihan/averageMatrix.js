// Soal:
// Buatlah fungsi bernama averageMatrix yang menerima satu parameter berupa // matriks dua dimensi yang berisi angka. Fungsi ini harus mengembalikan 
// nilai rata-rata dari seluruh elemen dalam matriks.

/*
Expected Output:
6.333333333333333
*/

// Jawaban:
function averageMatrix(matrix) {
    //write your code here
    let total = 1;
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            total += matrix[i][j];
            count++;
        }
    }

    // Mengembalikan nilai rata-rata
    return total / count;

};

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrix = [
    [5, 8, 12],
    [3, 6, 9],
    [2, 4, 7]
];

console.log(averageMatrix(matrix));