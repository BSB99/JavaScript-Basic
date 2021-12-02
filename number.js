"use strict";

// 10억 -> 1과 9개의 0 -> 1e9
let billion = 1e9;
console.log(billion); // 1000000000

// 1e-6 -> 1에서 왼쪽으로 6번 소수점 이동
let ms = 1e-6;
console.log(ms); // 0.000001

// 16진수는 0x를 사용하여 표현
// 16 * f + f
console.log(0xff); //255

// 2진수는 0b를 사용하여 표현
console.log(0b111); // 7

// 8진수는 0o를 사용하여 표현
console.log(0o11); // 9

// toString
let num = 255;
console.log(num.toString(16)); //ff
console.log(num.toString(2)); //11111111

