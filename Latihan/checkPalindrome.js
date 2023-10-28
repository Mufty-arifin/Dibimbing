// Palindrom merupakan istilah pada sebuah kata atau kalimat yang apabila dibalik, maka menghasilkan kalimat atau kata yang sama
// Contoh : 
// "tebet" apabila urutannya dibalik, maka hasilnya "tebet". Maka "tebet" merupakan sebuah palindrom
// Kamu adalah seorang programmer yang diminta untuk membuat program pengecekan apakah sebuah kalimat atau kata merupakan palindrom
// Buatlah fungsi checkPalindrom yang akan mengembalikan nilai boolean true atau false.

// "kasur ini rusak" -> palindrom -> true
// "pop kultur" -> bukan palindrom -> false
// "radar" -> palindrom -> true
// "kasur" -> bukan palindrom -> false
// "hulahup" -> bukan palindrom -> false

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang dirasa penting

// Expected output:
// false
// true


const checkPalindrom = (data) =>{
    // write your code here
    // Hapus spasi dan ubah string menjadi huruf kecil untuk perbandingan yang tidak peka huruf besar-kecil
    const formattedString = data.replace(/\s/g, '').toLowerCase();
    
    // Membalikkan string yang diformat dan membandingkannya dengan string asli yang diformat
    return formattedString === formattedString.split('').reverse().join('');
}


console.log(checkPalindrom("kasur"))
console.log(checkPalindrom("radar"))

