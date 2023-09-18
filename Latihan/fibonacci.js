// Soal: 
// Seorang Coder diminta untuk mensolve suatu baris deret bilangan  
// deret bilangan tersebut adalah 0,1,1,2,3,5,8,13,21,......
// dari pola yang ada buatlah fungsi yang dapat menampilkan deret bilangan hingga 20 bilangan
// clue: menggunakan perulangan

/*
Expected Output
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
6765
*/

// Tidak boleh langsung print expected output
// berikan comment penjelasan pada baris kode yang dianggap penting

// Jawaban:

function fibonacci(n){
    // write your code here
     // Inisialisasi array untuk menyimpan deret Fibonacci
     let temp = [];
    
     // Membuat deret Fibonacci
     for (let i = 0; i <= n; i++) {
         if (i <= 1) {
             // Jika indeks 0 atau 1, maka nilainya adalah dirinya sendiri (0 atau 1)
             temp.push(i);
         } else {
             // Untuk indeks lebih dari 1, nilai adalah jumlah dua angka sebelumnya
             temp.push(temp[i - 1] + temp[i - 2]);
         }
     }
     
     // Mencetak setiap angka dalam deret Fibonacci
     for (let i = 0; i <= n; i++) {
         console.log(temp[i]);
     }
}

fibonacci(20)