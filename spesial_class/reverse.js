// function reverse(kalimat) {
//   const words = kalimat.split(" "); // Membagi kalimat menjadi kata-kata
 
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 3) {
//       words[i] = words[i].split("").reverse().join(""); // Memutar kata jika lebih dari 3 huruf
//     }
//   }
//   const kalimatTerbalik = words.join(" "); // Menggabungkan kata-kata menjadi kalimat baru
//   return kalimatTerbalik;
// }

// const kalimat = "sky so blue";
// const kalimatTerbalik = reverse(kalimat);
// console.log(kalimatTerbalik);

function reverse(kalimat) {
    const words = kalimat.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 3) {
            words[i] = words[i].split("").reverse().join("");
        }
    }

    console.log(words.join(" "));
}

reverse("sky so blue"); // Output: "sky so eulb"