function numberLadder(height) {
    for (let i = height; i >= 0; i--) {
        let output = '';
        for (let j = i; j >=1; j--) {
            
            output += j
        }
        console.log(output);
    }
}
numberLadder(5)