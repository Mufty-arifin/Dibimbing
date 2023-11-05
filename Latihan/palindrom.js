const checkPalindrom = (data) =>{
   
    // Hapus spasi dan ubah string menjadi huruf kecil untuk perbandingan yang tidak peka huruf besar-kecil
    const formattedString = data.replace(/\s/g, '').toLowerCase();
    
    // Membalikkan string yang diformat dan membandingkannya dengan string asli yang diformat
    return formattedString === formattedString.split('').reverse().join('');
}


console.log(checkPalindrom("kasur rusak"))
console.log(checkPalindrom("saya makan"))