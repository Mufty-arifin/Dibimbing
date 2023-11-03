// soal

// buatlah program dengan nama function unique_in_order untuk menghilangkan karakter yang berulang menjadi tepat 1 karakter unik namun tetap mempertahankan urutan aslinya
// program ini case sensitive sehingga perbedaan huruf antara huruf kapital dan tidak kapital dianggap karakter yang berbeda

// Contoh :
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Expected Output:
// ['A', 'B', 'C', 'D', 'A', 'B']
// ['A', 'B', 'C', 'c', 'A', 'D']
// [1,2,3]

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting

// Jawaban
const uniqueInOrder =  (iterable) => {
    // write your code here
    if (!Array.isArray(iterable)) {
        // Jika input bukan array, ubah menjadi array
        iterable = Array.from(iterable);
      }
    
      const uniqueArray = [];
    
      for (let i = 0; i < iterable.length; i++) {
        // Cek apakah elemen saat ini sama dengan elemen sebelumnya
        if (i === 0 || iterable[i] !== iterable[i - 1]) {
          uniqueArray.push(iterable[i]);
        }
      }
    
      console.log( uniqueArray);
      
}

uniqueInOrder('AAAABBBCCDAABBB')  
uniqueInOrder('ABBCcAD')            
uniqueInOrder([1,2,2,3,3])          

// hint -> unique in order (permainan index dan push/pop suatu array)