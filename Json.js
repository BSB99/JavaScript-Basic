"use strict";

/*
JSON?
JavaScript Object Notation

Server 와 Client를 연결시켜줄수있다.
*/

// ※ Object -> Json
// stringify(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'code',
    color: 'black',
    size: null,
    // Date라는 Obj이다.
    birthDate: new Date(),
    // 함수는 오브젝트 안에 들어있는 함수가 아니기 때문에
    // JSON으로 출력하면 포함되지 않는다.
    jump: () => {
        console.log(`${this.name} can jump`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

// 오브젝트에서 원하는 값만 JSON으로 출력할수도 있다.
json = JSON.stringify(rabbit, ["name", 'color']);
console.log(json);

// 오브젝트에서 value 값을 바꾸어서 JSON으로 출력하고 싶을 때 가능.
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === "name"? 'toto' : value;
});
console.log(json);

// ※Json -> 
console.clear()
const obj = JSON.parse(json, (key, value) => {
    // console.log(`key : ${key}, value : ${value}`);
    // return value;
    return key === 'birthDate' ? new Date(value) : value
});
console.log(obj);

// rabbit을 Json으로 변환 할 때 jump 함수를 가져오지 못하였음으로
// Json을 Object로 바꾸었을 때에도 jump 함수는 실행되지 않는다. 
//obj.jump();

console.log(rabbit.birthDate.getDate());

/* 
const obj = JSON.parse(json);
obj를 json으로 변환 할때 birthDate라는 Key값에서
Value인 New Date()에 있는 함수를 가져온다.
하지만 json을 obj로 변환 할 때 가져온 함수의 값은
문자열로 바뀌므로 며칠인지 출력해주는 getDate() 함수는 error가
발생한다는 것이다.       
console.log(obj.birthDate.getDate());

그러므로 json을 obj로 변환해주는 과정에서
birthDate라는 값의 value를 new Date(value)로
바꾸어 주어야 한다.
*/
console.log(obj.birthDate.getDate());

