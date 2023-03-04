"use strict";
//Declaration des variables
let age;
let mame;
let isValid = false;
let emptList;
let numbList;
let c;
//functions
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num1, num2];
}
//any
let departement;
//initialisation des variables
emptList = ["david", "florento", "KPIDIBA"];
numbList = [1, 2, 34, 56, 46, 12];
mame = "david";
mame = mame.toUpperCase();
age = 23;
departement = "123";
//initiallisation de functions
swapNumbs = swapNumbers(12, 34);
//advanced string functions
emptList = emptList.filter((value) => value.length > 5);
let username = emptList.find((value) => value === "florento");
numbList = numbList.filter((value) => value > 35);
let sum = numbList.reduce((acc, value) => acc + value);
//affichage des variables
console.log(mame);
console.log(emptList);
console.log(numbList);
console.log(username);
console.log(sum);
console.log(swapNumbs[0]);
console.log(departement);
