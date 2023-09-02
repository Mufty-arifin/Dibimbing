//Class
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         let result = `Hello, my name is ${this.name} and I am ${this.age} years old.`

//     return result
//     }
// }
// const person1 = new Person("Alice", 25).greet();
// const person2 = new Person("Bob", 30);

// // person1.greet();
// person2.greet();

// console.log("class", person1);

/*

OOP Concepts
1. Encapsulation
2. Inheritance
3. Polymophism
4. Abstraction

*/

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} mengeluarkan suara.`);
//   }
// }
// // Inheritance
// class Dog extends Animal {
//   a() {
//     console.log(`${this.name} menggonggong: Woof! Woof!`);
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log(`${this.name} mengeong: Meow! Meow!`);
//   }
// }

// const dog = new Dog("Buddy");
// const cat = new Cat("Kitty");

// dog.speak();
// cat.speak();

//Polymophism

// class Shape {
//   area() {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }
//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }
// }

// const shapes = [new Circle(5), new Rectangle(4, 6)];

// shapes.forEach((shape) => {
//   console.log(`Area of shapes: ${Math.floor(shape.area())}`);
// });

// encapsulation

class BankAccount {
    constructor(accountNumber, balance) {
        this._accountNumber = accountNumber;
        this._balance = balance;
    }

    get accountNumber(){
        return this._accountNumber;
    }

    get balance(){
        return this._balance;
    }

    deposit(amount){
        if (amount > 0) {
            this._balance += amount;
            console.log(`${amount} deposit. New balance: ${this._balance}`);
        }
    }

    withdraw(amount){
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`${amount} withdraw. New balance: ${this._balance}`);
        }else{
            console.log("Insufficient funds.");
        }
    }
}

const account = new BankAccount("123456789", 1000);

console.log(`Account number: ${account.accountNumber}`);
console.log(`Balance: ${account.balance}`);

account.deposit(500);
account.withdraw(200);

// abastraction

class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    throw new Error("This method should be overridden.");
  }

  stop() {
    throw new Error("This method should be overridden.");
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.name} engine started.`);
  }
  stop() {
    console.log(`${this.name} engine stopped.`);
  }
}

class Bicycle extends Vehicle {
  start() {
    console.log(`${this.name} pedaling...`);
  }
  stop() {
    console.log(`${this.name} stopped pedaling.`);
  }
}

const car = new Car("BMW");
const bicycle = new Bicycle("BMX");

car.start();
car.stop();

bicycle.start();
bicycle.stop();

// class Kalkulator {
//   constructor(bil1, bil2) {
//     this.bil1 = bil1;
//     this.bil2 = bil2;
//   }
//   perkalian() {
//     console.log(this.bil1 * this.bil2);
//     // return this.bil1 * this.bil2;
//   }
//   pengurangan() {
//     console.log(this.bil1 - this.bil2);
//     // return this.bil1 - this.bil2;
//   }
// }
// const perhitungan1 = new Kalkulator(20, 9);

// perhitungan1.pengurangan();
// perhitungan1.perkalian();

