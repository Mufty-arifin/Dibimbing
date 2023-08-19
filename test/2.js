const sameArray = (arr1, arr2) => {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i])
        for (let j = 0; j < arr2.length; j++) {
            console.log(arr2[j])
            if (arr1[i] === arr2[j]) {
                result.push(arr2[j])
            }
            
        }
        
    } 
    // for (const i of arr1) {
    //     console.log(`i = ${i}`)
    //     for (const j of arr2 ) {
    //         console.log(`j = ${j}`)
    //         if (i === j) {
    //             result.push(i)
    //         }
    //     }
    // }
    return result
}

console.log(sameArray([1, 2, 3, 4], [3, 4, 5, 6])); 
// console.log(sameArray([3, 5, 0, 1], [3]));
// console.log(sameArray([], [3, 4, 1, 2])); 
// console.log(sameArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
// console.log(sameArray([], []));