"use strict";
//NOTE:declaration
let tab1;
tab1 = [2, 3, 4, 5];
//generic function
function getItems(items) {
    return new Array().concat(items);
}
function add(num1, num2) {
    return num1 + num2;
}
function optional(str, str0, strz) {
    return strz ? str + str0 + strz : str + str0;
}
function addD(num0, num1, ...numT) {
    return num0 + num1 + numT.reduce((a, b) => a + b, 0);
}
const sub = (num1, num3) => num1 - num3;
const multi = function (num1, num2, num3 = 10) {
    return num1 * num2 * num3;
};
console.log(add(2, 4));
console.log(sub(2, 198));
console.log(optional("KPIDIBA ", "David"));
console.log(addD(2, 3, 56, 75, 43, 23, 456, 6, 77, 54, 44, 2344, 5, 667));
console.log(addD(0, 0, ...tab1));
console.log(getItems(tab1));
