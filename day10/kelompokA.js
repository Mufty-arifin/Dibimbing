//1

/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
   console.log(firstInteger + (+secondInteger))
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    
    console.log(firstDecimal + (+secondDecimal))
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);
}

//3

/*
 * Create the function factorial here
 */
 function factorial(n){
      if (n === 0 || n === 1) {
        return 1;
    } else {
        let hasil = 1;
        for (let i = 2; i <= n; i++) {
            hasil *= i;
        }
        return hasil;
    }
 }

//5
function getGrade(score) {
    let grade;
    // Write your code here
    if( score > 25 && score <= 30){
        grade = 'A'
    }else if(score  > 20 && score <= 25){
        grade = 'B'
    }else if(score  > 15 && score <= 20){
        grade = 'C'
    }else if(score  > 10 && score <= 15){
        grade = 'D'
    }else if(score  > 5 && score <= 10){
        grade = 'E'
    }else if(score > 0 && score <= 5){
        grade = 'F'
    }
    return grade;
}

//7
function vowelsAndConsonants(s) {
   let vowels = ['a', 'i', 'u', 'e', 'o']

    for (let v of s) {
        if (vowels.includes(v)) {
           console.log(v);
        }
    }
    for (const v of s) {
        if (!vowels.includes(v)) {
            console.log(v);
         }
    }

    console.log(vowelsOutput + consonantsOutput);
}
    

//9
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    perimeter() {
      let sum = 0;
      for (let i = 0; i < this.sides.length; i++) {
        sum += this.sides[i];
      }
      return sum;
    }
  }

// 11
function modifyArray(nums) {
    const modifiedArray = [];
   
   for (let i = 0; i < nums.length; i++) {
       if (nums[i] % 2 === 0) {
           modifiedArray.push(nums[i] * 2);
       } else {
           modifiedArray.push(nums[i] * 3); 
       }
   }
   
   return modifiedArray;
}