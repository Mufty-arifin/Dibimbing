/*
Expected Output:
[ 'A', 'B', 'C', 'D', 'F', 'G' ]
[ 'R', 'O', 'A', 'Q', 'P' ]
*/

// Jawaban:
function removeDuplicates(str) {
  //write your code here
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let duplikat = false;
    for (let j = 0; j < result.length; j++) {
      if (str[i] === result[j]) {
        duplikat = true;
      }
    }
    if (!duplikat) {
      result.push(str[i]);
    }
  }

  return result;
}

console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"));
console.log(removeDuplicates("RRRRROOOAAQPPP"));
