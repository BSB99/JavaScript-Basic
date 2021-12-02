'use strict';
/* reduce?
해당 배열의 모든 요소를 하나의 값으로
줄이기 위해, 두 개의 인수를 전달받는
콜백 함수를 실행한다. 이때 명시된 콜백 함수에
배열의 첫 번째 요소와 두 번째 요소를 인수로
전달하고 실행, 그 결과 반환된 결과값과 세 번째
요소를 다시 인수로 전달 후 실행.
이러한 동작을 반복하여 모든 배열 요소를
인수로 전달하고, 마지막으로 반환된 결과값을
반환. */
const initalValue = 100;
const arr = [1, 2, 3, 4, 5];
const reduce_ = arr.reduce((x, y, z) => {
    // initalValue를 설정하지 않으면 배열의 첫번째 값
    console.log(`${x}`);
    // 현재 처리할 값.
    console.log(`${y}`);
    // 처리할 현재 요소의 인덱스.
    // initalValue를 설정하면 0부터 시작
    console.log(`${z}`);
    console.log("");
    return x + y;
}, initalValue);

console.log(reduce_);

/* reduce() 함수를 이용하여 fruit 리스트에
있는 과일 별 수량을 계산하여 object로 반환*/
const fruit = ['apple', 'grape', 'banana', 'apple', 'orange', 'grape', 'apple', 'orange'];

const result = fruit.reduce((object, currentValue) => {
    if (!object[currentValue]) {
        object[currentValue] = 0;
    }
    object[currentValue]++;
    console.log(object[currentValue]);
    return object;
}, {});
console.log(result);

/* reduce 함수를 이용하여 1~8까지의 수 중
짝수를 찾아낸 후 찾아낸수 * 10을 하여
acc에 push */
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const result1 = arr1.reduce((acc, val) => {
    if (val % 2 === 0) {
        acc.push(val * 10);
    }
    return acc;
}, []);
console.log(result1);

/* reduce 함수를 이용하여 sum이라는 집합
안에 들어있는 value의 값을 더한다. */
let initialValue = 0;
const sum = [{ x: 1 }, { x: 2 }, { x: 3 }]
const sum1 = sum.reduce(function (tot, el) {
    return tot + el.x;
}, initialValue);
console.log(sum1);

// reduce와 indexOf 함수를 이용하여 중복제거
const arr2 = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'd', 'e', 'f'];
const result2 = arr2.reduce((accmulator, currentValue) => {
    if (accmulator.indexOf(currentValue) === -1) {
        accmulator.push(currentValue);
    }
    return accmulator;
}, []);
console.log(result2);

