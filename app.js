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

// Ex 031

// Ex 032

// Ex 033

// Ex 034

// Ex 035

// Ex 036

// Ex 037

// Ex 038

// Ex 039

// Ex 040

// Ex 041

// Ex 042

// Ex 043

// Ex 044

// Ex 045

// Ex 046

// Ex 047

// Ex 048

// Ex 049

// Ex 050

// Ex 051

// Ex 052

// Ex 053

// Ex 054

// Ex 055

// Ex 056

// Ex 057

// Ex 058

// Ex 059