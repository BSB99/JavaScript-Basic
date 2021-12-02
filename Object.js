'use strict';
const seung = {name : 'seung', age : 23};
console.log(seung);
// coding 할 때는 .을 이용하여 값을 받아온다.
console.log(seung.age);
// age의 값인 23을 key를 이용하여 값을 받아오고 싶을때
// 문자열로 가져오고 싶은 Value의 Key를 써주어야 한다.
// ※실시간으로 값을 받아오고 싶을때는 Key를 불러온다. 
console.log(seung['age']);

//Object 안에 값을 추가할수도
seung.hair = true;
console.log(seung);
console.log(seung.hair);

// 삭제할수도 있다.
delete seung.hair;
console.log(seung);

//이런식으로 Object를 만들지 말고,
const person1 = {name: 'jun', age: 23};
const person2 = {name: 'young', age: 23};
const person3 = {name: 'in', age: 23};

// 함수를 써가지고 Object를 만드는 것이 좋다.
function makePerson(name, age) {
    return {
        /*
        Key 이름과 Value의 이름이 똑같다면
        Value를 생략하여 쓸 수 있다. 
        name: name,
        age: age,*/
        name,
        age,
    };
};

const person4 = makePerson('seung', 23);
console.log(person4);

// Key in Object
console.log('name' in seung);
console.log('height' in seung);

// for (Key in Object)
for (let key in seung){
    console.log(key);
};

// for (value of iterable)
const array = [1,2,4,5];
for (let value of array) console.log(value);