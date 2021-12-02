'use strict';

/* 
JS에서 비동기를 간편하게 처리하도록 도와주는 Object이다.

정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 실행이 되었다면,
성공의 메세지와 함께 처리된 결과값을 전달.
기능을 수행하다가 오류가 발생하면 에러를 전달한다.

상태: 오퍼레이션이 수행중일 때 pending상태 ->
수행이 끝났을 때에는 fulfiled 상태 or 오류가 생겼다면 rejected 상태

Producer VS Consumer

Producer : 원하는 기능을 수행해서 해당하는 데이터를 만들어낸다.
Consumer : 원하는 데이터를 소비한다.
*/

// Producer
// Promise를 새로 만들었을 때에는, executor 라는 함수가 자동적으로 실행이 된다.
// Promise에서 resolve, reject를 파라미터로 선언해주는 것이 executor이다.
// resolve -> 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달.
// reject -> 기능을 수행하다가 문제가 생기면 호출한다.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
       // 성공했을때
       resolve('seung');
       // 실패했을때
       // reject(new Error('No Network'));
    }, 2000);
});

// Consumer : then, catch, finally를 이용하여 값을 받아올 수 있다.
promise
    // 성공했을 때 then을 이용하여 출력
    .then(value => console.log(value))
    // 실패했을 때 catch를 이용하여 출력
    .catch(error => console.log(error))
    // 성공하든 실패하든 상관없이 기능을 넣고 싶을 때 사용
    .finally(() => console.log('finally'));

// Promise chaining
const fectNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1),1000);
});

fectNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num -1), 1000);
        });
    })
    .then(num => console.log(num));

const first = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('시작'), 1000);
    });
const middle = one =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`${one} => 중간`)), 1000);
        // setTimeout(() => resolve(`${one} => 중간`), 1000);
    });
const last = two =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${two} => 끝`), 1000);
    });

first()
    // 함수로 값을 한가지만 받아서 그대로 전달하는 경우에는 간단하게 줄일수가 있다.
    .then(middle)
    // middle 과정에서 error가 발생을 했다면
    // return 값인 '다시 시작'으로 대체하여 다음 함수로 넘어간다. 
    .catch(error => {
        return '다시 시작';
    })
    // .then(one => middle(one))
    .then(last)
    // .then(two => last(two))
    .then(console.log)
    // .then(three => console.log(three));
    .catch(console.log);