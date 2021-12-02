'use strict';
/* 
class와 object를 붕어빵에 비유하면
class는 붕어빵을 만들기위한 틀이고,
object는 붕어빵의 맛의 종류이다.
*/ 

class Person {
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    };

    // methods
    // this.name -> 생성된 이름.
    speak() {
        console.log(`${this.name}: hello!`);
    };
};
// new라는 메소드를 이용하여 새로운 생성자를 만든다.
const seung = new Person('seung', 23);
seung.speak();

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };
    //get -> 값을 return
    // return 값을 filed에 있는 값과 동일하게
    // 입력을 하면 set 메소드에서 무한루프가 발생하여
    // error가 발생하므로 get, set에 있는 값은 바꿔주어야 한다.
    get age() {
        return this._age;
    };
    //set -> 값을 설정하기 때문에 값을 가져와야한다.
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be nagative');
        // }
        this._age = value < 0 ? 0 : value;
    }
};

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// class를 선언할때 constructor를 선언하지 않고,
// class를 만들수가 있다.
// 최신버전이라 호환되는 브라우저가 별로없다.
class Experiment {
    publicField = 2; //값을 변경할수도 있고 삭제할수도 있다.
    #privateField = 1; // 값을 변경할수도 읽을수도 삭제또한 하지 못한다.
};

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


//? object를 호출할라고 할 때, 같은 값이 있다면
//? static을 이용하여 간단하게 표현이 가능하다.
class Article {
    static publisher = 'Dream';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    };

    static printPublisher() {
        console.log(Article.publisher);
    };
};
const number = new Article(2);
Article.printPublisher();

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    };

    draw() {
        console.log(`drawing ${this.color} color!`);
    };

    getArea() {
        return this.width * this.height;
    };
};
// Rectangle 이라는 class를 새로 만들어 
// Shape라는 class의 값들을 상속을 받아오고 싶으면
// extends 라는 키워드를 사용하여 받아오게 한다.
class Rectangle extends Shape {};

// Shape에서 상속받은 메소드를 가져와 재정의 해서
// 쓸 수 있는데 이것을 Overiding이라 한다.
class Triangle extends Shape {
    // Overriding 한 메소드는 부모 class에 있는
    // 값을 가져오지 않는다.
    draw() {
        console.log('This is Triangle');
        // 하지만 super라는 함수를 이용하면
        // 부모 class에있는 draw 값이 호출이 된다.
        super.draw();
    };

    getArea() {
        return (this.width * this.height) / 2;
    };
};

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(30, 30, 'red');
triangle.draw();
console.log(rectangle.getArea());

// rectangle 이라는 object가 
// Rectangle 이라는 class를 이용하여 만들어졌기 때문에 True
console.log(rectangle instanceof Rectangle);
// false
console.log(triangle instanceof Rectangle);