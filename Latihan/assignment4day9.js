// SOAL 1
/* 
===========
Deep Sum
===========

[INSTRUCTION]
buatlah program untuk menjumlahkan setiap bilangan yang ada didalam array multi dimensi:
- jika didalam array tidak memiliki nilai maka program akan mengembalikan pesan "No number"

[EXAMPLE]
untuk contoh inputan dan keluaran bisa dilihat Test Case dibawah

[RULE]
1. dilarang menggunakan map(), forEach(), filter()
2. dilarang menggunakan regex
*/

function deepSum(arr) {
  let count = 0;
  if (arr.length === 0) {
    return "No Number";
  }
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count += deepSum(arr[i]);
    } else {
      count += arr[i];
    }
  }
  return count;
}

//TEST CASE
console.log(
  deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3],
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90],
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10],
    ],
  ])
); // 316

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
    [[3, 5, 1], [1, 5, 3], [1]],
    [[2]],
  ])
); // 156

console.log(
  deepSum([
    [20, 10, 5, 1],
    [5, 6, 7, 8],
    [2, 5, 9, 14],
  ])
); // 92

console.log(deepSum([])); // No number
// SOAL 2
/* 
  ===========
  Search Like
  ===========
  
  [INSTRUCTION]
  buatlah program yang dapat mencari kata yang mirip katanya pada 
  suatu array yang berisi string. pada program ini terdapat 2 parameter
  - data yaitu array yang berisi string yang akan dibandingkan dengan keyword
  - keyword adalah kata kunci yang akan dibandingkan dengan data
  
  [EXAMPLE]
  searchLike(["katak","moto","mata","ata halilintar","atta"],"ata")
  data = ["katak","moto","mata","ata halilintar","atta"]
  keword = "ata"
  
  step nya : 
  1. "katak" dengan "ata" ada kemiripan karena "katak" mengandung kata "ata"
  masukkan katak "katak" ke dalam array baru 
  2. "moto" dengan "ata" tidak ada kemiripan karena kata "moto" tidak
  mengandung kata "ata"
  3. dst ...
  
  sehingga , hasil akhirnya adalah : 
  output : [ 'katak', 'mata', 'ata halilintar' ]
  
  [RULE]
  1. dilarang menggunakan indexOf(), find(), filter()
  2. hanya boleh menggunakan push()
  3. dilarang menggunakan regex
  */

function searchLike(data, keyword) {
  // your code here
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    let keywordIndex = 0;
    let match = false;

    for (let i = 0; i < element.length; i++) {
      if (element[i] === keyword[keywordIndex]) {
        keywordIndex++;
        if (keywordIndex === keyword.length) {
          match = true;
        }
      } else {
        keywordIndex = 0;
      }
    }

    if (match) {
      result.push(element);
    }
  }

  return result;
}

console.log(
  searchLike(["katak", "moto", "mata", "ata halilintar", "atta"], "ata")
); //[ 'katak', 'mata', 'ata halilintar' ]
console.log(searchLike(["nababan", "gaban", "ban", "nabab"], "naban")); // []

// */

// SOAL 3
/* 
  ===========
  Graduates
  ===========
  
  [INSTRUCTION]
  buatlah program untuk menampilkan data para peserta yang dinyatakan lulus:
  - kriteria kelulusan dengan nilai minimal 75
  - hasil yang ditampilkan dikelompokan berdasarkan kelas yang sama
  
  [EXAMPLE]
  untuk contoh inputan dan keluaran bisa dilihat Test Case dibawah
  
  [RULE]
  1. dilarang menggunakan indexOf(), find(), filter()
  2. hanya boleh menggunakan push()
  3. dilarang menggunakan regex
  */

function graduates(students) {
  // Code disini
  let outputStudent = {};

  for (let i = 0; i < students.length; i++) {
    //console.log(students[i]);
    let student = students[i];
    if (student.score >= 75) {
      if (!outputStudent[student.class]) {
        outputStudent[student.class] = [];
      }
      outputStudent[student.class].push({
        name: student.name,
        score: student.score,
      });
    }
  }

  return outputStudent;
}

//  TEST CASE
console.log(
  graduates([
    {
      name: "Naruto",
      score: 90,
      class: "ninja",
    },
    {
      name: "Pikacu",
      score: 85,
      class: "pokemon",
    },
    {
      name: "Gara",
      score: 74,
      class: "ninja",
    },
    {
      name: "Meow",
      score: 78,
      class: "pokemon",
    },
  ])
);

// {
//   ninja: [
//     { name: 'Naruto', score: 90 }
//   ],
//   pokemon: [
//     { name: 'Pikacu' , score: 85 },
//     { name: 'Meow', score: 78 }
//   ]
// }

console.log(
  graduates([
    {
      name: "Naruto",
      score: 100,
      class: "ninja",
    },
    {
      name: "Zoro",
      score: 76,
      class: "onepiece",
    },
    {
      name: "Kakashi",
      score: 92,
      class: "ninja",
    },
    {
      name: "Luffi",
      score: 71,
      class: "onepiece",
    },
    {
      name: "Pikacu",
      score: 80,
      class: "pokemon",
    },
  ])
);

// {
//   ninja: [
//     { name: 'Naruto', score: 100 },
//     { name: 'Kakashi', score: 92 }
//   ],
//   onepiece: [
//     { name: 'Zoro', score: 76 },
//   ],
//   pokemon: [
//     { name: 'Pikacu', score: 80 }
//   ]
// }

console.log(graduates([])); //{}

// SOAL 4
// /*
//   ===========
//   Shopping Time
//   ===========

//   [INSTRUCTION]
//   Toko X menjual beberapa barang yang bisa anda beli, daftar barangnya adalah sebagai berikut
const priceList = [
  ["Sepatu Stacattu", 1500000],
  ["Baju Zoro", 500000],
  ["Baju H&N", 250000],
  ["Sweater Uniklooh", 175000],
  ["Casing Handphone", 50000],
];
//   tugas anda adalah membuat program untuk menentukan barang apa saja yang bisa dibeli bedasarkan uang yang user miliki.
//   - price list barang sudah ditentukan
//   - program akan menerima 2 parameter, yaitu member id dan uang
//   - hasil keluaran akan menampilkan 4 properti, yaitu:
//     . memberId
//     . money
//     . listPurchased
//     . changeMoney
//   - pada properti listPurchased akan menampung barang2 yang bisa dibeli sesuai dengan jumlah uang yang di punyai
//   - changeMoney minimal 0 dan tidak boleh minus
//   - jika member tidak ada maka Toko X akan menampilkan respon "Mohon maaf, toko X hanya berlaku untuk member saja"
//   - jika saldo tidak cukup maka akan menampilkan pesan "Mohon maaf, uang tidak cukup"

//   [EXAMPLE]
//   untuk contoh inputan dan keluaran bisa dilihat Test Case dibawah

//   [RULE]
//   1. dilarang menggunakan indexOf(), find(), filter()
//   2. hanya boleh menggunakan push()
//   3. dilarang menggunakan regex
//   */
function shoppingTime(memberId, money) {
  // you can only write your code here!
  if (!memberId) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
  let listPurchased = [];
  let priceListMurah = [...priceList];
  let changeMoney = money ? money : 0;
  for (var i = 0; i < priceList.length - 1; i++) {
    for (var j = 0; j < priceList.length - i - 1; j++) {
      if (priceListMurah[j][1] > priceListMurah[j + 1][1]) {
        var temp = priceListMurah[j];
        priceListMurah[j] = priceListMurah[j + 1];
        priceListMurah[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < priceListMurah.length; i++) {
    if (priceListMurah[i][1] <= changeMoney) {
      listPurchased.push(priceListMurah[i][0]);
      changeMoney -= priceListMurah[i][1];
    }
  }
  return listPurchased.length === 0
    ? "Mohon maaf, uang tidak cukup"
    : {
        memberId: memberId,
        money: money,
        listPurchased: listPurchased,
        changeMoney: changeMoney,
      };
}
// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
// { memberId: '1820RzKrnWn08',
//   money: 2475000,
//   listPurchased:
//    [ 'Sepatu Stacattu',
//      'Baju Zoro',
//      'Baju H&N',
//      'Sweater Uniklooh',
//      'Casing Handphone' ],
//   changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
// { memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//   [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); // Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

// SOAL 5
/**
  ===========
  Shopping Time
  ===========
  
  [INSTRUCTION]
  Sebuah guild dalam game memiliki beberapa anggota, dari berbagai jenis class dan level
  sebuah fungsi getGuildMemberInfo akan menerima daftar member dari guild tesebut
  fungsi tersebut akan menampilkan jumlah member, rata-rata level anggota dan
  daftar member per-class yang levelnya diatas rata-rata
  
    contoh:
    - input:
      [{
        name: 'antonio',
        level: 90,
        class: 'Knight'
      },
      {
        name: 'banderaz',
        level: 90,
        class: 'Priest'
      },
      {
        name: 'cecile',
        level: 99,
        class: 'Knight'
      },
      {
        name: 'dominique',
        level: 92,
        class: 'Hunter'
      },
      {
        name: 'eric',
        level: 92,
        class: 'Priest'
      },
      {
        name: 'fernandez',
        level: 91,
        class: 'Knight'
      }]
    - output:
    {
     totalMember: 6,​​​​​
  ​​​​​   averageLevel: 92,​​​​​
  ​​​​​   Knight: [ { name: 'cecile', level: 99 } ],​​​​​
  ​​​​​   Priest: [ { name: 'eric', level: 92 } ],​​​​​
  ​​​​​   Hunter: [ { name: 'dominique', level: 92 } ]
    }​​​​​
  
  PENJELASAN
  jumlah total level member adalah 90 + 90 + 99 + 92 + 92 + 91 = 554
  totalMember didapat dari jumlah member yaitu 6 orang
  averageLevel didapat dari total level member/total member yang dibulakan ke bawah 554/6 = 92
  sehingga untuk Top masing-masing class adalah member dengan class tersebut yang levelnya diatas atau sama dengan 92
  jika tidak ada class tersebut yang diatas atau sama dengan rata-rata maka top class tidak ditampilkan
  
  RULES:
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .map(), .filter() dan .reduce()
  - DILARANG MENGGUNAKAN SPREAD SYNTAX
  */

function getGuildMemberInfo(members) {
  // your code here
  if (members.length === 0) {
    return "invalid data";
  }

  let totalLevel = 0;
  let result = { totalMember: members.length, averageLevel: 0 };

  for (let i = 0; i < members.length; i++) {
    totalLevel += members[i].level;
  }

  result.averageLevel = Math.round(totalLevel / members.length);

  for (let i = 0; i < members.length; i++) {
    if (members[i].level >= result.averageLevel) {
      if (result[members[i].class]) {
        result[members[i].class].push({
          name: members[i].name,
          level: members[i].level,
        });
      } else {
        result[members[i].class] = [
          { name: members[i].name, level: members[i].level },
        ];
      }
    }
  }

  return result;
}

// //]));
console.log(
  getGuildMemberInfo([
    { name: "cecile", level: 99, class: "Knight" },
    { name: "goblin", level: 95, class: "Knight" },
    { name: "bearus", level: 88, class: "Knight" },
    { name: "ernest", level: 92, class: "Priest" },
    { name: "brian", level: 89, class: "Priest" },
    { name: "dominique", level: 92, class: "Hunter" },
    { name: "hemogoblin", level: 93, class: "Hunter" },
    { name: "alexa", level: 90, class: "Hunter" },
  ])
);
/**
    output
    {
      totalMember: 8,​​​​​
    ​​​​​  averageLevel: 92,​​​​​
    ​​​​​  Knight: [ { name: 'cecile', level: 99 }, { name: 'goblin', level: 95 } ],​​​​​
    ​​​​​  Priest: [ { name: 'ernest', level: 92 } ],​​​​​
    ​​​​​  Hunter: [ { name: 'dominique', level: 92 },​​​​​ { name: 'hemogoblin', level: 93 } ]
    }​​​​​
     */
console.log(
  getGuildMemberInfo([
    { name: "indah", level: 85, class: "Assasint" },
    { name: "juminten", level: 92, class: "Blacksmith" },
    { name: "kumar", level: 95, class: "Wizard" },
    { name: "lili", class: "Priest", level: 99 },
    { name: "munaroh", class: "Blacksmith", level: 95 },
  ])
);
/**
     output:
    ​​​​​{
      totalMember: 5,​​​​​
    ​​​​​  averageLevel: 93,​​​​​
    ​​​​​  Blacksmith: [ { name: 'munaroh', level: 95 } ],​​​​​
    ​​​​​  Wizard: [ { name: 'kumar', level: 95 } ],​​​​​
    ​​​​​  Priest: [ { name: 'lili', level: 99 } ]
    }​​​​​
     */
console.log(getGuildMemberInfo([])); // invalid data
