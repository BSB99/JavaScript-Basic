"use strict";

/*filter?
해당 배열의 모든 요소에 대하여 반복적으로
명시된 콜백 함수를 실행한 후,
그 결과값이 true인 요소들만을 새로운 
배열에 담아 반환.*/
const arr = [-10, 5, 100, -20, 40];
const lessTen = arr.filter((value) => {
    return value < 10;
});

console.log(lessTen);

/* filter를 이용하여 짝수 찾은 후에
map을 이용하여 X10 해주기 */
const arr5 = [1, 2, 2, 3, 4, 5];
const even = arr5.filter(val => val % 2 === 0).map(val => val * 10);
console.log(even);

/* Map?
해당 배열의 모든 요소에 대하여 반복적으로
명시된 콜백 함수를 실행한 후,
그 실행결과를 새로운 배열에 담아 반환.*/
const arr1 = [-10, 5, 100, -20, 40];
const map_ = arr1.map((value) => {
    return value < 10;
});

console.log(map_);

/* every?
해당 배열의 모든 요소에 대하여 반복적으로
명시된 콜백 함수를 실행한 후,
그 결과값이 모두 true일 때에만 true를 반환.*/
const arr2 = [-10, 5, 100, -20, 40];
const every_ = arr.every((value) => {
    return value < 10;
});

console.log(every_);

/* some?
해당 배열의 모든 요소에 대하여 반복적으로
명시된 콜백 함수를 실행한 후,
그 결과값이 하나라도 true이면 true를 반환.*/
const arr3 = [-10, 5, 100, -20, 40];
const some_ = arr.some((value) => {
    return value < 10;
});

console.log(some_);

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
const arr4 = [1, 2, 3, 4, 5];
const reduce_ = arr4.reduce((x, y, z) => {
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

/* for ..of? 현재 요소의 인덱스는 얻을 수
없고 값만 얻을 수 있다.*/
const apple = ['apple', 'banana'];

for (let fruits of apple) {
    console.log(fruits);
};

/* for ..in? */
for (let key in apple) {
    console.log(fruit[key]);
    //key 에는 0, 1이 차례로 들어간다.
};
