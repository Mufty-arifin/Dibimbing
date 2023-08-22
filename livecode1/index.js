//1

// const countData = (arr, searchValue) => {
//     // tulis code di sini
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       //console.log(arr[i]);
//       if (arr[i] === searchValue) {
//         count++;
//       }
//     }
//     return count;
//   };
  
//   let data_array = [
//     1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1,
//   ];
//   console.log(countData(data_array, 5)); // output: 6


//2
// const countManual = (arr) => {
//     // tulis code di sini
//     let count = 0
//     // for (let i = 0; i >= 0; i++) {
//     //   if (arr[i] === undefined) {
//     //     break;
//     //   }  
//     //   count++;
//     // }
//   let i = 0;
//     while (i >= 0) {
//       if (arr[i] === undefined) {
//         break;
//       }  
//       count++;
//     }
//     return count;
//   }
  
//   let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
//   console.log(countManual(data_array)); // output : 21


//3
// const filterData = (arr, searchValue) => {
//     // tulis code di sini
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === searchValue) {
//         result.push(arr[i])
//       }
      
//     }
//     return result
//   }
  
//   let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
//   console.log(filterData(data_array, 5));  // output: [ 5, 5, 5, 5, 5, 5 ] (ada 6 kali)


//4

// const filterGrade7 = (dataStudent) => {
//     // sesuaikan
//     let result = []
//     for (let i = 0; i < dataStudent.length; i++) {
//       //console.log(dataStudent[i].grade);
//       if (dataStudent[i].grade > 7) {
//         result.push(dataStudent[i])
//       }
//     }
//     return result
//   };
  
//   let filteredStudents = filterGrade7(students);
//   console.log(filteredStudents);
  