/* const arr = [1, 2, 3]; //배열 객체 생성
console.log(arr.length); // 객체 명

const arr2 = [1, 2, 3, 4];
console.log(arr2.length); */

/* const arr = [1, 2, 3];
console.log(arr.length);
arr.push(5); //배열 요소 추가

console.log(arr); */

/* //함수도 객체이며 함수는 값으로 표현할 수 있다다
function myFunction() {
    console.log("hi");
}
myFunction(); //함수 호출
console.log(myFunction.name); //객체명, 프로퍼티. name 은 함수의 이름을 저장 */

/* let person = {
    name: "이정환"
};

let man = person;

console.log(man);
console.log(person);
console.log(man === person);

man.age = 25;
console.log(man);
console.log(person); */

/* let person = {
    name: "이정환"
};

let man = {
    name: "이정환"
};

console.log(man === person); */

/* let func1 = () => {
    console.log("func");
};

let func2 = () => {
    console.log("func");
};

console.log(func1 === func2);
let func3 = func1
console.log(func1 === func3); */

/* let arr = [1, 2, 3, 4];

for (let idx = 0; idx < 4; idx++) {
  console.log(arr[idx]);
} */

/* let food = ["짜장면", "피자", "치킨"];

for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
} */

/* let food = ["짜장면", "피자", "치킨"];

for (let item of food) {
  console.log(item);
} */

/* let person = {
    name: "이정환",
    age: 25,
    location: "경기도"
};

const keyArr = Object.keys(person); //Object.keys 메서드는 인수로 전달한 객체에서 프로퍼티의 key만 배열로 만들어 반환합니다.
console.log(keyArr);

for (let key of keyArr) {
  console.log(key);
}

for (let key of keyArr) {
    let value = person[key];
    console.log(key, value);
} */

/* let person = {
    name: "이정환",
    age: 25,
    location: "경기도"
};

const valueArr = Object.values(person);

for (let value of valueArr) {
    console.log(value);
} */
    
/* let person = {
    name: "이정환",
    age: 25,
    location: "경기도"
};

for (let key in person) {
    const value = person[key];
    console.log(key, value);
} */

/* let arr = [1, 2, 3];
let [one, two, three] = arr;

console.log(one, two, three) */

function func({ name, age, location }) {
    console.log(name, age, location);
}

let person = {
    name: "이정환",
    age: 25,
    location: "경기도"
};

func(person);