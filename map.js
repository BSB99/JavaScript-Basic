"use strict";

// map? 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);

const ASCII = Array.prototype.map;

const a = ASCII.call('Hello World', x => x.charCodeAt(0));

console.log(a);