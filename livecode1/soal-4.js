/**
 * Filter Array
 * 
 * Diberikan data berupa array object, lalu lakukan filter untuk menampilkan data yang memiliki grade diatas 7
 * 
 * Hanya boleh menggunakan looping for (tidak boleh menggunakan method filter)
 */

students = [
  {name:"Andi",grade:7.5},
  {name:"Ardi",grade:9},
  {name:"Ahmad",grade:7},
  {name:"Anang",grade:6},
  {name:"Amir",grade:8}
];

/*

expected output:

[
  { name: 'Andi', grade: 7.5 },
  { name: 'Ardi', grade: 9 },
  { name: 'Amir', grade: 8 }
]

*/

const filterGrade7 = (dataStudent) => {
  // sesuaikan
  let result = []
  for (let i = 0; i < dataStudent.length; i++) {
    //console.log(dataStudent[i].grade);
    if (dataStudent[i].grade > 7) {
      result.push(dataStudent[i])
    }
  }
  return result
};

let filteredStudents = filterGrade7(students);
console.log(filteredStudents);


