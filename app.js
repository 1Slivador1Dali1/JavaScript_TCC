'use strict';

// Ex 007

// let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!');

// console.log(40 + 8 + 23 - 10);

// Ex 008

// console.log('Jonas');
// console.log(23);

// let firstName = 'Jonas';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// Ex 009

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// Ex 010

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990; // нельзя преопределять const

// // const job; // const нужно инициализирровать с самого начала при объявлении

// var job = 'prorammer'; // var плохая практика так как устарел и может запутать
// job = 'teacher';

// Ex 011

// const now = 2037;
// const ageJones = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJones, ageSarah);

// Ex 012

// Ex 013 - coding challenge #1

// let markH = 1.69;
// let markW = 78;

// let johnH = 1.95;
// let johnW = 92;

// let bmiM = markW / markH ** 2;
// let bmiJ = johnW / johnH ** 2;

// let markHignerBMI = bmiM > bmiJ;

// console.log(bmiM);
// console.log(bmiJ);
// console.log(markHignerBMI)

// markH = 1.88;
// markW = 95;

// johnH = 1.76;
// johnW = 85;

// bmiM = markW / markH ** 2;
// bmiJ = johnW / johnH ** 2;

// markHignerBMI = bmiM > bmiJ;

// console.log(bmiM);
// console.log(bmiJ);
// console.log(markHignerBMI)

// Ex 014

// Ex 015

// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('🚗');
// }
// else {
//     console.log('😒');
// }

// Ex 016 - coding challenge #2

// let markH = 1.69;
// let markW = 78;

// let johnH = 1.95;
// let johnW = 92;

// let bmiM = markW / markH ** 2;
// let bmiJ = johnW / johnH ** 2;

// let markHignerBMI = bmiM > bmiJ;

// console.log(bmiM);
// console.log(bmiJ);
// console.log(markHignerBMI)

// if (markHignerBMI) {
//     console.log(`Mark BMI ${Math.floor(bmiM)} > John BMI ${Math.floor(bmiJ)}`);
// }

// markH = 1.88;
// markW = 95;

// johnH = 1.76;
// johnW = 85;

// bmiM = markW / markH ** 2;
// bmiJ = johnW / johnH ** 2;

// markHignerBMI = bmiM > bmiJ;

// console.log(bmiM);
// console.log(bmiJ);
// console.log(markHignerBMI)

// if (markHignerBMI) {
//     console.log(`Mark BMI > John BMI`);
// }
// else {
//     console.log(`Mark BMI ${Math.floor(bmiM)} < John BMI ${Math.floor(bmiJ)}`);
// }

// Ex 017

// Ex 018

// Ex 019

// const age = '18';
// if (age == 18) { // == Проверяет значение === проверяет значение и тип
//     console.log('😤');
// }
// else {
//     console.log('🧓')
// }

// Ex 020

// Ex 021

// Ex 022 - coding challenge #3

// const dolphinsScores = 96 + 108 + 89;
// const middleDolphinsScores = dolphinsScores / 3;

// const koalasScores = 88 + 91 + 110;
// const middleKoalasScores = koalasScores / 3;

// if (middleDolphinsScores > middleKoalasScores) {
//     console.log('Победили Дельфины');
// }
// else if (middleDolphinsScores < middleKoalasScores) {
//     console.log('Победили Коалы');
// }
// else {
//     console.log('Ничья!');
// }

// const dolphinsScores = (97 + 112 + 101) / 3;
// const koalasScores = (109 + 95 + 123) / 3;

// if (dolphinsScores > koalasScores && dolphinsScores >= 100) {
//     console.log('Победили Дельфины');
// }
// else if (dolphinsScores < koalasScores && koalasScores >= 100) {
//     console.log('Победили Коалы');
// }
// else if (dolphinsScores === koalasScores || dolphinsScores && koalasScores < 100) {
//     console.log('Ничья!');
// }

// Ex 023

// const day = 'monday';

// switch (day) {
//     case 'monday':
//         console.log('Plan');
//         break;

//     default:
//         console.log('No!');
//         break;
// }

// Ex 024

// Ex 025

// const age = 23;
// const drink = age >= 18 ? 'wine' : 'water'; // Тернарный оператор
// console.log(drink);

// let drink2;

// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`Я люблю пить ${age >= 18 ? 'вино' : 'воду'}`);

// Ex 026 - coding challenge #4

// const bill = 40;
// const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

// console.log(`Билл заказал на ${bill}$ , чаевые составили ${tip}$ , и общий счет ${bill + tip}$`);

// Ex 027

// Ex 028

// Ex 029

// 'use strict'; Вводим в начале скрипта как строгий режим чтобы исключить ошибки и показать изх в консоли

// Ex 030

// function logger() {
//     console.log('Jonas')
// }

// logger(); // Пример вызова функции
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Сок из ${apples} яблок и ${oranges} апельсинов`;
//     return juice;
// }

// const juiceFresh = fruitProcessor(10, 2);
// console.log(juiceFresh);
// console.log(fruitProcessor(0, 10));

// Ex 031

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) { // При таком варианте не происходит всплытие
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age2);

// Ex 032

// const calcAge3 = birthYear => 2037 - birthYear; //Стрелочная функция
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonh'));

// Ex 033

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Сок из ${applePieces} долек яблок и ${orangePieces} долек апельсинов`;
//     return juice;
// }

// const fruitCoctaile = fruitProcessor(2, 3);
// console.log(fruitCoctaile);

// Ex 034

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} выйдет на пенсию через ${retirement} лет`;
//     }
//     else if (retirement < 0) {
//         return `${firstName} вышел на пенсию ${retirement * (-1)} года назад`;
//     }
//     else {
//         return `${firstName} выходит на пенсию сейчас`;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Huigy'));
// console.log(yearsUntilRetirement(1972, 'Huigy'));
// console.log(yearsUntilRetirement(1950, 'Huigy'));

// Ex 035 - coding challenge #5

// const calcAverage = (roundOne, roundTwo , roundThree) => (roundOne + roundTwo + roundThree) / 3;

// let dolphinesScores = calcAverage(44, 23, 71);
// let koalasScores = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphines, avgKoalas) {

//     if (avgDolphines >= 2 * avgKoalas) {
//         return console.log('Dolphines Win!');
//     }
//     else if (avgKoalas >= 2 * avgDolphines) {
//         return console.log('Koalas Win!');
//     }
//     else {
//         return console.log('No team wins...');
//     }
// }

// checkWinner(dolphinesScores, koalasScores);
// checkWinner(500, 200);

// Ex 036

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years2 = [1990, 1967, 2002, 2012];

// console.log(calcAge(years2[2]));

// Ex 037

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLenght = friends.push('Jay'); // добавить в конец массива
// console.log(friends);
// console.log(newLenght);

// friends.unshift('John'); // добавить в начало массива
// console.log(friends);

// friends.pop(); // удалить последний элемент в массиве
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // удалитьь начальный элеменнт в массиве
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); // -1 так как такого элемента нет в массиве

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23')); // false так как идет строгое равенство в том числе и по типу
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log('You have friend Steven');
// }

// Ex 038 - coding challenge #6

// function calcTip(money) {
//     if (money >= 50 && money <= 300) {
//         const tip = money * (15 / 100);
//         return tip;
//     }
//     else {
//         const tip = money * (20 / 100);
//         return tip;
//     }
// }

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
// }

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// const totals = bills.concat(tips);
// const totals2 = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips);
// console.log(totals);
// console.log(totals2);

// Ex 039

// const jonasArray = [
//     'Jonas',
//     'Schmedtman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]; // Массив
// console.log(jonasArray);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtman',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }; // Объект
// console.log(jonas);

// Ex 040

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtman',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const interestedIN = prompt() // ввести название элемента объекта
// // console.log(interestedIN);
// // console.log(jonas[interestedIN]);

// // if (jonas[interestedIN]) {
// //     console.log(jonas[interestedIN]);
// // }
// // else {
// //     console.log('Wrong request!');
// // }

// jonas.location = 'Portugal'; // добавление новых элементов в объект
// jonas['twitter'] = '@jonassschmedtman';
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Ex 041

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYeah) {
//     //     return 2037 - birthYeah;
//     // }

//     // calcAge: function() {
//     //     return 2037 - this.birthYeah;
//     // }

//     calcAge: function() {
//         this.age = 2037 - this.birthYeah;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     }
// };

// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));
// console.log(jonas.calcAge(jonas.birthYeah));

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // "Jonas is a 46-year old teacher, and he has a/no driver's license"

// // console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? 'a' : 'no'} driver's license`);

// console.log(jonas.getSummary());

// Ex 042 - coding challenge #7

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     weight: 78,
//     height: 1.69,
//     calcBMI : function() {
//         return Math.round(this.weight / (this.height ** 2));
//         // this.bmi = this.weight / this.height ** 2;
//         // return this.bmi;
//     }
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     weight: 92,
//     height: 1.95,
//     calcBMI : function() {
//         return Math.round(this.weight / (this.height ** 2));
//         // this.bmi = this.weight / this.height ** 2;
//         // return this.bmi;
//     }
// }

// console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is ${john.calcBMI() > mark.calcBMI() ? 'higer' : 'not higer'} than ${mark.firstName}'s (${mark.calcBMI()})`);

// Ex 043

// for (let i = 1; i <= 10; i++) {
//     console.log(`Повторение номер: ${i}`);
// }

// Ex 044

// const jonasArray = [
//     'Jonas',
//     'Schmedtman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for( let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     // types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for( let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break

// for( let i = 0; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// for( let i = 0; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] === 'number') break;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// Ex 045

// const jonasArray = [
//     'Jonas',
//     'Schmedtman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const reverseJonasArray = [];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     reverseJonasArray.push(jonasArray[i]);
// }

// console.log(reverseJonasArray);
// console.log(jonasArray.reverse());

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----------- Старт упражнения ${exercise}`);

//     for (let repetition = 1; repetition <= 5; repetition++){
//         console.log(`Повторение ${repetition}`);
//     }
// }

// Ex 046

// let rep = 1;

// while (rep <= 10) {
//     console.log(`Повторение номер ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// while (dice !== 6) {
//     console.log(dice);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Число равно 6 цикл остановлен`)
// }

// Ex 047 - coding challenge #8

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// const calcAverage = function(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage([30, 203, 323]));
// console.log(calcAverage(totals));

// Ex 048

// Ex 049

// Ex 050

// const x = 23;

// if (x === 23) console.log('23');

// const calcAge = birthYear => 2037 - birthYear;
// console.log();

// Ex 051

// Ex 052

// Ex 053

// Ex 054

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [8, -5, -8, 1, 4];
// const allTemp = temperatures1.concat(temperatures2);

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const cutTemp = temps[i];
//     if (typeof cutTemp !== 'number') continue;

//     if (cutTemp > max) max = cutTemp;
//     if (cutTemp < min) min = cutTemp;
//   }

//   console.log(
//     `Максимальная температура : ${max}
//     \nМинимальная температура : ${min}`
//   );
//   return max - min;
// };

// console.log(allTemp);
// const amplitude = calcTempAmplitude(allTemp);
// console.log(`Амплитуда температур : ${amplitude}`);

// Ex 055

// Ex 056

// const measureKelvin = function () {
//     const measurement = {
//       type: 'temp',
//       unit: 'celsius',
//       value: Number(prompt('Градусы в цельсиях:')),
//     };
  
//     const kelvin = measurement.value + 273;
//     return kelvin;
//   };
  
//   console.log(measureKelvin());

// Ex 057 - coding challenge #9

// Мое решение

// const printForecast = function (temps) {
//   for (let i = 0; i < temps.length; i++) {
//     const temp = temps[i];
//     let day = i + 1;
//     console.log(`... ${temp} in ${day} day`);
//   }
// };

// const tempArrayOne = [17, 21, 23];
// const tempArrayTwo = [12, 5, -5, 0, 4];

// printForecast(tempArrayOne);
// printForecast(tempArrayTwo);

// Решение автора

const tempArrayOne = [17, 21, 23];
const tempArrayTwo = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
  let str = '... ';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}^C in ${i + 1} days ... `;
  }
  console.log(str);
};

printForecast(tempArrayOne);
printForecast(tempArrayTwo);

// Ex 058

// Ex 059

// Ex 060

// Ex 061

// Ex 062

// Ex 063

// Ex 064

// Ex 065

// Ex 066

// Ex 067

// Ex 068

// Ex 069
