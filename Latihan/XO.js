/*

Cek apakah terdapat 'o' dan 'x' dengan jumlah yang sama dalam string
method harus mengembalikan nilai boolean
program tidak case sensitive. (huruf kapital tidak berpengaruh)
String dapat mengandung semua char (tidak hanya 'x' atau 'o')

contoh input dan expected output:
XO("oooxx") => false
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // apabila tidak ada 'x' dan 'o' di dalam string maka program akan mengembalikan nilai true
*/


const XO = (str) => {
    let countX = 0
    let countO = 0
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase(); // Convert to lowercase
        if (char === 'x') {
            countX++
        } else if (char === 'o') {
            countO++
        }
    }
    return countX === countO
}

console.log(XO("oooxx"))
console.log(XO("xooxx"))
console.log(XO("ooxXm"))
console.log(XO("zpzpzpp"))