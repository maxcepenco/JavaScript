// "use strict";

// function logger() {
//     console.log(`My name is Max`);
// }

// logger()

// function fruitProccessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juce = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juce;
// }

// const appleJuce = fruitProccessor(5, 0)
// console.log(appleJuce)

// const applesOrangesIuise = fruitProccessor(5, 3)
// console.log(applesOrangesIuise);

// // --------------Способ 1-------------//
// function calcAge1(birthYear) {
//     return 2024 - birthYear;
// }

// const myAge = calcAge1(1993);
// console.log(myAge);

// // ---------------------------------//

// // --------------Способё2--------------//
// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear
// }
// const age2 = calcAge2(1996)
// // ------------------------------------//

// console.log(myAge, age2)

// // ----------------Способ 3---------------------//
// const calcAge3 = birthYear => 2024 - birthYear;
// const age3 = calcAge3(1993);
// console.log(age3);

// const yearePension = (birthYear, FirstNAme) => {
//     const age = 2024 - birthYear;
//     const restr = 65 - age;
//     return `${FirstNAme} retires in ${age} `
// }

// ----------------Данные------------

// let randomLoc = Math.floor(Math.random() * 5);
// let location1 = randomLoc;
// let location2 = location1 + 1;
// let location3 = location2 + 1;

// let guess = 0;
// let hits = 0;
// let isSunc = false;
// let guesses = 0;

// while (isSunc == false) {
//   let guess = window.prompt("Введиет координаты от 0 до 6");
//   if (guess < 0 || guess > 6) {
//     window.alert("Вы ввели недопустимые значения");
//   } else {
//     guesses = guesses + 1;
//     if (guess == location1 || guess == location2 || guess == location3) {
//       hits = hits + 1;
//       window.alert("Есть");
//     } else {
//       window.alert("Не попал");

//     }
//     if (hits == 3) {
//       isSunc = true;
//       alert("Ты победил");
//     }
//   }
// }

// let stats = `У тебя ${guesses} попадания`;
// window.alert(stats);

// function barck(name, weight) {
//   if (name > 20) {
//     console.log(name + "soy Woof");
//   } else {
//     console.log(name + "woof");
//   }
// }

// barck("Robert", 12);
// barck("spot", 23);
// barck("spike", 43);

// function whatsShallIWear(temp) {
//   if (temp < 60) {
//     console.log("Wear a jacket");
//   } else if (temp < 70) {
//     console.log("wear a ship");
//   } else {
//     console.log("wear t-ship");
//   }
// }

// whatsShallIWear(50);
// whatsShallIWear(80);
// whatsShallIWear(60);

// function dogYears(dogName, age) {
//   let yars = age * 7;
//   console.log(`${dogName} is ${yars} years old`);
// }
// var myDog = "Fido";
// dogYears(myDog, 14);

// function makeTea(cups, tea) {
//   console.log(`brewing ${cups} cups of ${tea}`);
// }
// var guesta = 3;
// makeTea(guesta, "Yearl Grey");

// function secret() {
//   console.log(`The  secret  of life is 42`);
// }
// secret();

// function speak(kind) {
//   var defaultSound = " ";
//   if (kind == "dog") {
//     window.alert("Woof");
//   } else if (kind == "cat") {
//     window.alert("Meow");
//   } else {
//     window.alert(defaultSound);
//   }
// }
// let pet = prompt("Enter a type of per: ");
// speak(pet);

// function calculateArea(r) {
//   let area;
//   if (r <= 0) {
//     return 0;
//   } else {
//     area = Math.PI * r * r;
//     return area;
//   }
// }

// // let radius = 5.2;
// // calculateArea(radius);
// // theArea = calculateArea(radius);
// // console.log(`The area is ${theArea}:`)

// let x = 32;
// let y = 42;
// let radius = 5;

// let centetrX = 0;
// let centerY = 0;
// let width = 600;
// let heght = 400;

// function setup(width, heght) {
//   centerY = width / 2;
//   centerY = heght / 2;
// }

// function computeDistancion(x1, y1, x2, y2) {
//   let dx = x1 - x2;
//   let dy = y1 - y2;
//   let d2 = dx * dx + dy * dy;
//   let d = Math.sqrt(d2);
//   return d;
// }

// setup(width, heght);
// let area = CirecleAria(radius);
// let distace = computeDistancion(x, y, centetrX, centerY);
// window.alert(`Area ${area}`);
// window.alert(`Distace ${distace}`);

// function makePhrases() {}

// let words1 = ["24/7", "multi-tire", "B-to-B", "win"];
// let words2 = ["empowerd", "value", "oriented"];
// let words3 = ["proces", "solution", "strategi"];

// let rend1 = Math.floor(Math.random() * words1.length);
// let rend2 = Math.floor(Math.random() * words2.length);
// let rend3 = Math.floor(Math.random() * words3.length);

// let phrase = words1[rend1] + " " + words2[rend2] + " " + words3[rend3];
// window.alert(phrase);

// let score = [40, 50, 30, 50, 40, 60, 70, 40, 50];
// let bestSolution = [];

// for (let i = 0; i < score.length; i++) {
//     outpot = `solution ${i} score:${score[i]}`;
//     console.log(outpot);
//     if (score[i] > heighScore) {
//         heighScore = score[i];
//     }
//     console.log(heighScore);
// }

// for (let i = 0; i < score.length; i++) {
//     if (score[i] == heighScore) {
//         bestSolution.push(i);
//     }
// }
// console.log("best solution:" + bestSolution);

// // let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// // let hasBubbleGum = [false, false, false, true];
// // for (i = 0; i < hasBubbleGum.length; i++) {
// //   if (hasBubbleGum[i]) {
// //     console.log(products[i] + " contains bubble gum");
// //   }
// // }

// function printAndGetHeightScore(score) {
//     let outpot;
//     let heighScore = 0;
//     for (let i = 0; i < score.length; i++) {
//         outpot = `solution ${i} score:${score[i]}`;
//         console.log(outpot);
//         if (score[i] > heighScore) {
//             heighScore = score[i];
//         }
//     }
//     return heighScore
// }

// heighScore = printAndGetHeightScore(score)
// console.log("Bubbles tests: " + score.length)

// function getBestResults(score, highScore) {
//      let bestSolutions = score[i];
//     for (var i = 0; i < scores.length; i++) {
//         if (score[i] === highScore) {
//             bestSolutions.push[i];
//         }
//     }
//     return bestSolution;
// }

// let bestSolutions = getBestResults(score, highScore);

// // let highScore = printAndGetHighScore(scores);
// // console.log("Bubbles tests: " + scores.length);
// // console.log("Highest bubble score: " + highScore);
// // console.log("Solutions with the highest score: " + bestSolutions);

// // function getMostCostEfectiveSolution(score, cost, highScore){
// //     let cost = 100;
// //     let index ;
// //     for( i = 0;i< scores.length;i++ ){
// //         if (score[i] > highScore){

// //         }
// //     }
// // }
//  const car = {
//     make: "Ford",
//     medel: "Mustsng",
//     year: 1968,
//     color:'red',
//     passagers:2,
//     mileage: 1050,

// };
// let cady = {

//     make:'GM motors',
//     model:"cadilac",
//     years:1958,
//     convertible:false,
//     passagers: 5,
//     color:'grey',
//     mileage: 12500
// };

// let dog = {
//     name: 'Figo',
//     weight: 20.5,
//     age: 4,
//     breed: 'mixed',
//     activity:true,

// }

// let bark ;
// if (dog.weight>20){
//     bark = 'Woof,Woof';
// } else{
//     bark = 'woof, woof'
// }

// let speak = ` ${dog.name} + ${dog.activity}`

// function requal(car){
//     if ( car.milage > 20000){
//         return false;
//     } else if (car.years > 2000) {
//         return false;
//     }

//     return true
// }

// let taxi = {
//     make: 'VW',
//     model:'Passat',
//     years:2001,
//     color: 'blue',
//     passagers: 4,
//     convertibly:false,
//     milage:10000
// };

// requal(taxi);

// let worthAlook = requal(taxi);

// if ( worthAlook ) {
//     console.log("You gotta check out this " + taxi.make + " " + taxi.model)
// } else {
//     console.log("You should really pass on the " + taxi.make + " " + taxi.model)
// }

// function getSecret(file, secretPassward) {
//   file.opened = file.opened + 1;
//   if (secretPassward == file.password) {
//     return file.contents;
//   } else {
//     return "Invalid password!No secret for you";
//   }
// }

// function SetSecret(file, secretPassward, secret) {
//   if (secretPassward == file.password) {
//     file.opened = 0;
//     file.contents = secret;
//   }
// }

// let superSecretFile = {
//   level: "classified",
//   opened: 0,
//   password: 2,
//   contents: "Dr. Evel's next meeting is in Detroit",
// };

// let secret = getSecret(superSecretFile, 2);
// console.log(secret);

// SetSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
// secret = getSecret(superSecretFile, 2);
// console.log(secret);

// let fiat = {
//   make: "fiat",
//   model: "500",
//   year: 1957,
//   color: "Medium BLue",
//   passenger: 2,
//   convertible: false,
//   mileage: 88000,
//   started: false,
//   start: function () {
//     started = true;
//   },
//   stop: function () {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       window.alert("Zoom zoom");
//     } else {
//       window.alert("You need to start the engine first");
//     }
//   },
// };

// fiat.start();
// fiat.drive();
// console.log(fiat.start);
// console.log(fiat.drive);
// console.log(fiat.stop);

// let eingtBall = {
//   index: 0,
//   advice: ["yes", "no", "maybe", "not a chanel"],
//   shake: function () {
//     this.index = this.index + 1;
//     if (this.index >= this.advice.length) {
//       this.index = 0;
//     }
//   },

//   look: function () {
//     return this.advice[this.index];
//   },
// };

// eingtBall.shake();

// console.log(eingtBall.look);

// let cady = {
//   make: "GM",
//   model: "Caddilac",
//   year: 1955,
//   color: "tan",
//   passaengers: 5,
//   convertible: false,
//   mileage: 12892,
//   starded: false,
//   start: function () {
//     this.starded = true;
//   },
//   stop: function () {
//     this.starded = false;
//   },
//   drive: function () {
//     if (this.starded) {
//       alert(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };

// let chery = {
//   make: "Chery",
//   model: "Bel Air",
//   year: 1957,
//   color: "red",
//   passengeres: 2,
//   convertible: false,
//   mileage: 1021,
//   started: false,
//   start: function () {
//     this.started = true;
//   },

//   stop: function () {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       alert(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };

// let taxi = {
//   make: "Webville Motors",
//   model: "Taxi",
//   year: 1955,
//   color: "yesllow",
//   passaengers: 4,
//   convertible: false,
//   starded: false,
//   start: function () {
//     this.starded = true;
//   },
//   drive: function () {
//     this.starded = false;
//   },
//   stop: function () {
//     if (this.starded) {
//       alert(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };

// cady.start();
// cady.drive();
// cady.stop();

// chery.start();
// chery.drive();
// chery.stop();

// taxi.start();
// taxi.drive();
// taxi.stop();

let fiat = {
  make: "fiat",
  model: "500",
  year: 1958,
  color: "red",
  passaengers: 2,
  convertible: false,
  started: false,
  fuel: 0,
  start: function () {
    if (this.fuel > 0){
        this.started = true;
    } else {
        window.alert("The car is on empty, fill up before starting!")
    }
  },

  stop: function () {
    this.started = false;
  },

  drive: function () {
    if (this.started ) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " goes zoom zoom!");
        this.fuel = this.fuel - 1;
      } else {
        window.alert("Uh oh, out of fuel.");
        this.stop();
      }
    } else {
      window.alert("You need to start the engine first.");
    }
  },

  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
  },
};

fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();
