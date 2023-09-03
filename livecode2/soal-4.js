function pasanganTerbesar(number) {
  // lengkapi kode berikut
  //const numStr = number.toString(); // konvert dari number ke string

  let maxPair = 0;
  //let temp = numStr.length;

  for (let i = 0; i < number.length - 1; i++) {
    const pair = parseInt(number[i] + number[i + 1]);
    if (pair > maxPair) {
      maxPair = pair;
    }
  }

  return maxPair;
}

console.log(pasanganTerbesar("641573")); // 73
console.log(pasanganTerbesar("12783456")); // 83
console.log(pasanganTerbesar("910233")); // 91
console.log(pasanganTerbesar("71856421")); // 85
console.log(pasanganTerbesar("7981829399")); // 99
