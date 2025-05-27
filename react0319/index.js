/* let fruit = "apple";

switch (fruit){
    case "apple":{
        console.log("사과");
        break;
    }

    case "banana":{
        console.log("바나나");
        break;
    }

    default:{
        console.log("우리가 찾는 과일이 아님");
    }
}*/

/* for (let i = 1; i <= 100; i++) {
    console.log(i);
} */

/* for (let idx = 1; idx <= 10; idx++) {
    if (idx % 2 === 0) { 
      continue;
    }
    console.log(idx);
} */

/* function getArea() {
    let width = 10;
    let height = 20;
    let area = width * height;
    console.log(area);
}
getArea(); */

/* function getArea(width, height) {
    let area = width * height;
    console.log(area);
}
  
getArea(10, 20); */

/* function getArea(width, height) {
    let area = width * height;
    return area;
}
let result = getArea(10, 20);
console.log(result); */

//일반적으로 함수는 함수를 선언한 후 함수 호출문을 사용용
//호이스팅 : 함수 호출문 뒤에 함수 선언문을 써도 된다

/* function greeting() {
    function greetingWithName(name) {
      console.log(`hello! ${name}`);
    }
  
    let name = "이정환";
    greetingWithName(name);
}

greeting(); */

/* let greeting = function () {
    console.log("hello");
};
  
greeting(); */

/* function greetFunc() {
  console.log("hello");
}

greetFunc();

let greeting = greetFunc;
greeting(); */

/* function parentFunc(callBack) { // 매개변수 callBack에는 함수 childFunc이 저장
    console.log("parent");
    callBack();
  }
  
  function childFunc() {
    console.log("child");
  }
  
  parentFunc(childFunc); */

/* function repeat(count) { // ①
    for (let idx = 0; idx < count; idx++) {
      console.log(idx + 1);
    }
}
repeat(5); */

/* function repeat(count) {
    for (let idx = 0; idx < count; idx++) {
      console.log(idx + 1);
    }
}
  
function repeatDouble(count) {
    for (let idx = 0; idx < count; idx++) {
      console.log((idx + 1) * 2);
    }
}
  
repeatDouble(5); */

/* function repeat(count, callBack) {
    for (let idx = 0; idx < count; idx++) {
      callBack(idx + 1);
    }
}
  
function origin(count) {
    console.log(count);
}
  
repeat(5, origin); */

/* function repeat(count, callBack) {
    for (let idx = 0; idx < count; idx++) {
      callBack(idx + 1);
    }
}
  
function origin(count) {
    console.log(count);
}
  
function double(count) {
    console.log(count * 2);
}
  
repeat(5, double); */

/* function repeat(count, callBack) {
    for (let idx = 0; idx < count; idx++) {
      callBack(idx + 1);
    }
}
  
const double = function (count) {
    console.log(count * 2);
};
  
repeat(5, double); */

/* let greeting = (name) => `hello ${name}`;
const greetingText = greeting("이정환");

console.log(greetingText); */

/* let greeting = (name) => {
    let greetingText = `hello ${name}`;
    return greetingText;
};
  
console.log(greeting("이정환")); */

/* let isConfirm = true;

function confirm(onYes, onNo) {
  if (isConfirm) onYes();
  else onNo();
}

confirm(
  () => console.log("승인"),
  () => console.log("거부")
); */

/* let person = {
    name: "이정환",
    age: 25,
    "like cat": true
};
  
const personName = person.name; 
const personAge = person["age"];  
  
console.log(personName); 
console.log(personAge);
console.log(person); */

/* let person = {
    name: "이정환",
    age: 25,
    "like cat": true
};

person.gender = "male";
person["nickname"] = "winterlood";

console.log(person.gender);
console.log(person["nickname"]);
console.log(person);
delete person.age;
console.log(person); */

/* //프로퍼티를 추가
function addProperty(obj, key, value) {
    obj[key] = value;
}

let obj = {}; //빈 객체 생성

addProperty(obj, "a", 1);
addProperty(obj, "b", 2);
addProperty(obj, "c", 3);

console.log(obj); */