/* let food = ["짜장면", "피자", "치킨"];

console.log(food[0]); 
console.log(food[1]); 
console.log(food[2]);  */

/* let food = ["짜장면", "피자", "치킨"];

food[2] = "파스타"; 
food[3] = "레몬"; 

console.log(food); */

/* let varA;

if (varA) {
  console.log("값이 있음");
} else {
  console.log("값이 없음");
} */

/* function calcA() {
  console.log("a");
  return false;
}

function calcB() { // 어차피 calcA가 false라 호출되지 않음
  console.log("b");
  return true;
}

console.log(calcA() && calcB()); */

/* function calcA() {
  console.log("a");
  return undefined; //null, undefined = falsy
}

function calcB() {
  console.log("b");
  return true;
}

console.log(calcA() && calcB()); */

/* function getName(person) {
  if (person !== undefined) {
    return person.name;
  } else {
    return "매개변수가 객체가 아닙니다.";
  }
}

let person;
let name = getName(person);

console.log(name); */

/* function calcA() {
  console.log("a");
  return true;
}

function calcB() {
  console.log("b");
  return false;
}

console.log(calcA() || calcB()); */

/* const name = "이정환" || undefined;

console.log(name); */

const varA = 0;
const varB = "이정환";

const resultA = varA || varB; 
const resultB = varA ?? varB; 

console.log(resultA);
console.log(resultB);