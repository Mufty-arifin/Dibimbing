function trainSeating(args){
    // your code is here
    let output = {}
    for (let i = 0; i < args.length; i++) {
        const gerbongs = args[i].gerbong
        const temp = {nama: args[i].nama, seat: args[i].seat}
        //console.log(args[i].gerbong === "VVIP");
        if(!output[gerbongs]){
            output[gerbongs] = [temp]
        }else{
            output[gerbongs].push(temp)
        }
    }
    return output
}

console.log(trainSeating([
  { nama: "Goku", gerbong: "VVIP", seat: 'A1' },
  { nama: "Vegeta", gerbong: "VIP", seat: 'V1' },
  { nama: "Sasuke", gerbong: "VVIP", seat: 'A2' },
  { nama: "Naruto", gerbong: "Regular", seat: 'R1' },
  { nama: "Sakura", gerbong: "Regular", seat: 'R3' },
  { nama: "Luffy", gerbong: "VIP", seat: 'V2' },
  { nama: "Zoro", gerbong: "VVIP", seat: 'A666' },
  { nama: "Nami", gerbong: "VIP", seat: 'V6' },
]));
/*
Output :
{
  VVIP:
  [ { nama: 'Goku', seat: 'A1' },
    { nama: 'Sasuke', seat: 'A2' },
    { nama: 'Zoro', seat: 'A666' } ],
  VIP:
  [ { nama: 'Vegeta', seat: 'V1' },
    { nama: 'Luffy', seat: 'V2' },
    { nama: 'Nami', seat: 'V6' } ],
  Regular:
    [ { nama: 'Naruto', seat: 'R1' },
      { nama: 'Sakura', seat: 'R3' } ]
}
*/