'use strict';
const Name = {
    sk : {name : 'seung', age : 23},
    sk1 : {name : 'young', age : 23},
};
const Test = [10,15,20,25];
let sum = 0;
let Tsum = 0;
 
for (let key in Name){
    const personObj = Name[key];  
    console.log(personObj.name);
};

for (let num of Test) sum += num;
console.log(sum);

Test.forEach((number) => console.log(number));

Test.forEach((num) => Tsum += num);
console.log(Tsum);

let Thsum = Test.reduce((one, next) => one + next);
console.log(Thsum);

function re(n) {
    if (n <= 1) {
        return n;
    } else {
        return n + re(n-1);
    }
}
console.log(re(10))

function fibonacci(x) {
    if (x >= 2) {
        fibonacci(x);
    } else {
        return fibonacci(x-1) + fibonacci(x-2);
    }
};

console.log(5);
