'use strict';

{
const fruits = ['apple', 'banana', 'mango'];
let result = fruits.join(' ');
console.log(result);
console.log(result.split(' ', 1));
}

{
const array = [1, 2, 3, 4, 5];
console.log(array.reverse());
}

{
const array = [1, 2, 3, 4, 5]
console.log(array.slice(2)); // 3, 4, 5
console.log(array);// 1, 2, 3, 4, 5

console.log(array.splice(0,2));// 1, 2
console.log(array); // 3, 4, 5 
}

{
class Student {
    constructor(name, age, study, score){
        this.name = name,
        this.age = age,
        this.study = study,
        this.score = score
    };
};

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{ // score가 90점인 학생찾기.
    const result = students.find((Student) => Student.score === 90);
    console.log(result);
}

{ // study가 true인 것들로만 하여 배열로 만들기. 
    const result = students.filter((student) => student.study);
    console.log(result);
}

{ // students 배열에서 점수만 출력하기.
    const result = students.map((student) => student.score);
    console.log(result);
}

{ // score가 한명이라도 50점 이하면은 True 출력
    const result = students.some((student) => student.score < 50);
    console.log(result);

// 모두의 점수가 50점 이하면은 True 
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
}

{ // 학생들의 점수를 더하여 평균 출력
    const result = students.reduce((prev, curr) => {
       console.log("-----------");
       console.log(prev);
       console.log(curr);
       return prev + curr.score;
    }, 0);
    console.log(result / students.length);
}

{   // 학생들의 점수를 문자열로 바꾸어 출력
    const result = students.map((student) => student.score).join();
    console.log(result);
}

{   // 학생들의 점수 중 50점 이상인 것들만 문자열로 바꾸어 출력 
    const result = students.map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}

{   // 학생들의 점수를 정렬하고 문자열로 출력
    const result = students.map((student) => student.score)
    .sort()
    .join();
    console.log(result);
}

}