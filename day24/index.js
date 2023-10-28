// Callback

// const halo = (nama) => {
//     alert(`Hallo, ${nama}`)
// };

// const tampilkanPesan = (callback) => {
//     const nama = prompt('Siapa nama kamu');
//     callback(nama);
// };

// tampilkanPesan(halo);

const students = [
  { name: "John", age: 12 },
  { name: "Jane", age: 13 },
  { name: "Joe", age: 14 },
];
// students.map(student => console.log(student.name))

// const printHi = () => {
//     console.log('hi');
// }

// const printHello = () => {
//     console.log('Hello');
// }

// const printGoodbye = () => {
//     console.log('Goodbye');
// }

// printHi();
// setTimeout(printHello, 10000);
// printGoodbye()

// const add = (x, y, callback) => {
//     setTimeout(() => {
//         callback(x + y)
//     }, 2000)
// }

// const makeMeal = (meal, callback) => {
//    alert(`preparing ${meal}`);
//    callback();
// }

// makeMeal('lunch', () => {
//    alert('finished the meal');
// })

// Promise

// const datingPromise = new Promise((resolve, reject) => {
//   //resolve('ketemuan di bioskop')
//   reject("tidak ketemuan di bioskop");
// });

// datingPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log(datingPromise);

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise
//   .then(function()  {
//     console.log("success 1");
//   })

//   .then(function()  {
//     console.log("success 2");
//   })
//   .then(function() {
//     console.log("success 3");
//   })
//   .catch(function() {
//     console.log("error 1");
//   })
//   .then(function() {
//     console.log("success 4");
//   })

// function job(state) {
//     return new Promise(function (resolve, reject) {
//       if (state) {
//         resolve('Success');
//       } else {
//         reject('Error');
//       }
//     });
//   }
  
//   let promise = job(true);
  
//   promise
//     .then(function(data)  {
//       console.log(data);
//       return job(false);
//     })
  
//     .catch(function(error) {
//       console.log(error);
//       return 'Error caught'
//     })
//     .then(function(data) {
//       console.log(data);
//       return job(true);
//     })
//     .catch(function(error) {
//         console.log(error);
    
//       })
 
//asyncawit


const cobaPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("success");
      }, 2000);
    });
  };
  
  const promise = cobaPromise();
  // console.log(promise);

const datePromise = () => {
    return new Promise((resolve, reject) => {
      const waktu = 5000;
      if (waktu < 5000) {
        setTimeout(() => {
          resolve("Jalan");
        }, waktu);
      } else {
        reject({ status: false, code: 400, message: "kelamaan, date batal!!!" });
      }
    });
  };
const handleDateAsync = async () => {
    try {
      const value = await datePromise();
      console.log(value);
    } catch (error) {
      console.log(error.message);
    }
  };

const delay1Sec = async (input) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    return input;
  };

const run = async () => {
    // const result1 = await delay1Sec(1);
    // console.log(result1);
    // const result2 = await delay1Sec(2);
    // console.log(result2);
    // const result3 = await delay1Sec(3);
    // console.log(result3);
    // const result4 = await delay1Sec(4);
    // console.log(result4);
    // const result5 = await delay1Sec(5);
    // console.log(result5);
    const results = await Promise.all([
      delay1Sec(1),
      delay1Sec(2),
      delay1Sec(3),
      delay1Sec(4),
      delay1Sec(5),
    ]);
    console.log(results);
  };
  
  run();
  