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

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years2 = [1990, 1967, 2002, 2012];

console.log(calcAge(years2[2]));

// Ex 037

// Ex 038 - coding challenge #6

// Ex 039

// Ex 040

// Ex 041

// Ex 042 - coding challenge #7

// Ex 043

// Ex 044

// Ex 045

// Ex 046

// Ex 047 - coding challenge #8

// Ex 048

// Ex 049

// Ex 050

// Ex 051

// Ex 052

// Ex 053

// Ex 054

// Ex 055

// Ex 056

// Ex 057 - coding challenge #9

// Ex 058

// Ex 059