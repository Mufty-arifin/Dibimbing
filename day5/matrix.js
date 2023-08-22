const matrix = [
    [-3, -7, -2],
    [-9, -1, -6],
    [-4, -5, -8],
  ];
  
  let result = matrix[0][0];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > result) {
        result = matrix[i][j];
      }
    }
  }
  
  console.log(result);