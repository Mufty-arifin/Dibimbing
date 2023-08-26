function palindrome(kalimat) {
    kalimat = kalimat.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    for (let i = 0; i < kalimat.length; i++) {
        if(kalimat[i] != kalimat[kalimat.length - (i+1)]) {
            return false
        }else{
            return true
        }
        
    }
    
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur.rusaK/')); // true
console.log(palindrome('mister')); // false


//2
function cariMean(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    //console.log(sum);
    var mean = Math.round(sum / arr.length);
    return mean;
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 8, 9, 5])); // 5
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7