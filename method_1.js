"use strict";

// 대문자로 바꿔주는 메서드
let str = "Hello";
console.log(str.toUpperCase()); // HELLO
console.log(str[1].toUpperCase()); // E

// 소문자로 바꿔주는 메서드
console.log(str.toLowerCase()); // hello

// 원하는 자리에서 소수점을 반올림 할 수 있는 메서드
let n = 1.23456;
console.log(n.toFixed(2)); // 1.23

// 찾는 문자열이 어느위치에 있나 알려주는 메서드
let str1 = "Who are are you?";
console.log(str1.indexOf("are", 5)); // 8

// 찾는 단어가 문자안에 있나 확인하는 메서드
console.log(str1.includes("you")); // True

// 0 번째 위치 이후엔 Who가 없어 false
console.log(str1.includes('Who', 1)); // False

// 부분 문자열 추출
console.log(str1.slice(0, 5)); // Who a
console.log(str1.slice(4)); //are are you?

// 끝에서 4번째부터 시작
console.log(str1.slice(-4)); //you?

// 끝에서 4번째부터 시작해 끝에서 1번째 위치까지 
console.log(str1.slice(-4, -2)); //yo

const ucFirst = ((st) => {
    return st[0].toUpperCase() + st.slice(1);
});

console.log(ucFirst("abc"));





