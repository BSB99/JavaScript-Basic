
function First(A) {
    let result = A.reduce((a,b) => a+b);
    return Math.round(result / A.length);
}
const Rank = [50, 100, 50, 75];
console.log(First(Rank));

function Clock(B) {
    let time = B.split(':');

    return [`${time[0]}시`, `${time[1]}분`, `${time[2]}초`];

}

const Now = "19:07:22";
console.log(Clock(Now));

function err(C) {
    let result = "";

    for (let i of C) {
        if (i === i.toUpperCase()) {
            result += i.toLowerCase();
        } else result += i.toUpperCase();
    };
    
    let TwoResult = result.split(" ");
    const Answer = [];

    for (let j of TwoResult) {
        let len = j.length;
        if (j.slice(0, len / 2) === j.slice(len / 2, len)) {
            Answer.push(j.slice(0, len / 2));
        } else Answer.push(j);
    }
    return Answer.join(' ');

}
console.log(err('oh! vERY nICEnICE dAY'));

function Choose(D) {
    const Company = {
        "삼성": [],
        "애플": [],
        "한성": [],
        "레노버": [],
        "엘지": [],
        "이수스": [],
        "기타": [],
    };
    const d = D.split(" ");

    for (let i of d) {
        const number = parseInt(i / 1000);
        switch (number) {
            case 1:
                Company.삼성.push(i);
                break;
            case 2:
                Company.애플.push(i);
                break;
            case 3:
                Company.한성.push(i);
                break;
            case 4:
                Company.레노버.push(i);
                break;
            case 5:
                Company.엘지.push(i);
                break;
            case 6:
                Company.이수스.push(i);
                break;
            default:
                Company.기타.push(i);
        };
    };
    return Company;
};
console.log(Choose("5532 5342 8329 2632 5849 3213 1002"));

const Test = [2, 4];
Test[0] += Test[0];
console.log(Test[0]);

function Word(W) {
    const WordReverse = [];
    W = W.split(" ").reverse();
    for (let i of W) {
        WordReverse.push(i);
    };
    return WordReverse.join(" ");
};

console.log(Word('this is a test'));

function solution(clothes) {
    const obj = {};
    let result = 1;
    
    for (let i = 0; i < clothes.length; i++) {
        obj[clothes[i][1]] = obj[clothes[i][1]] + 1;
    };    
    
    for (let value in obj) {
        result *= obj[value];
    };
    
    return result - 1;
};

