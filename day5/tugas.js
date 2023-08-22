// // 1. Buatkan function konversiMenit menyelesaikan tase case dibawah
function konversiMenit(detik) {
  let jam = Math.floor(detik / 60);
  let sisaDetik = detik % 60;

  if (sisaDetik < 10) {
    sisaDetik = "0" + sisaDetik;
  }

  return jam + ":" + sisaDetik;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// // 2. Buatkan function hitungJumlahKata dari test case berikut
function hitungJumlahKata(kalimat) {
    let countKata = 0
    let readKata = false

    for (let i = 0; i < kalimat.length; i++) {
        //console.log(kalimat[i]);
        if (kalimat[i] !== ' ' && !readKata) {
          countKata++
          readKata = true
        }else if (kalimat[i] === ' ') {
            readKata = false
        }
    }
    return countKata
}
// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

// 3. Buatkan function pasanganTerbesar menyelesaikan tase case dibawah
function pasanganTerbesar(num) {
  const numStr = num.toString(); // konvert dari number ke string
  let maxPair = 0; // Initialize the maximum pair
  let temp = numStr.length - 1;

  //console.log(temp);
  for (let i = 0; i < temp; i++) {
    const pair = parseInt(numStr[i] + numStr[i + 1]);
    // console.log(pair);
    if (pair > maxPair) {
      maxPair = pair;
    }
  }

  return maxPair;
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

//4. Buatkan function targetTerdekat dari test case berikut
function targetTerdekat(arr) {
  let oIndex = 0;
  let xIndices = [];
  let minDistance = arr.length;

  // Find index of "o" and indices of "x" characters
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      oIndex = i;
    } else if (arr[i] === "x") {
      xIndices.push(i);
    }
  }
  //console.log(xIndices);

  // Calculate minimum distance
  for (let xIndex of xIndices) {
    let distance = xIndex > oIndex ? xIndex - oIndex : oIndex - xIndex;
    if (distance < minDistance) {
      minDistance = distance;
    }
  }

  if (oIndex === -1 || xIndices.length === 0) {
    return 0;
  }

  return minDistance;
}
// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x","x","x"])); // 2
