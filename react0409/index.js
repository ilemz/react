/* let arrA = [1, 2, 3];
let arrB = [...arrA, 4, 5, 6];
let arrC = [...arrB, 7, 8, 9];

console.log(arrB);
console.log(arrC); */

/* let objA = {
    a: 1,
    b: 2
};

let objB = {
    ...objA,
    c: 3,
    d: 4
};

let objC = {
    ...objA,
    c: 3,
    d: 4
};

console.log(objB);
console.log(objC); */

/* function func(a, b, c) {
    console.log(a, b, c);
}

let arr = [1, 2, 3];
func(...arr); */

/* function func(...rest) {
  console.log(rest);
}

func(1, 2, 3, 4); */

/* function func(param, ...rest) {
    console.log(param);
    console.log(rest);
}

func(1, 2, 3, 4); */

/* let food = ["짜장면", "피자", "치킨"];
const newLength = food.push("탕수육", "라자냐");

console.log(food);
console.log(`새로운 배열의 길이: ${newLength}`); */

/* let food = ["짜장면", "피자", "치킨"];
const removedItem = food.pop();

console.log(removedItem);
console.log(food); */

/* let food = ["짜장면", "피자", "치킨"];
const removedItem = food.shift();

console.log(removedItem);
console.log(food); */

/* let food = ["짜장면", "피자", "치킨"];
const newLength = food.unshift("갈비찜");

console.log(food);
console.log(`새로운 배열의 길이: ${newLength}`); */

/* const arr = [1, 2, 3];
//const sliced = arr.slice(0, 2);
const sliced = arr.slice(1); //1부터 끝까지

console.log(arr);
console.log(sliced); */

/* const arr = [5, 3, 1, 2, 8];

console.log(arr.slice(-1)); //인덱스 -1부터 끝까지
console.log(arr.slice(-2)); //인덱스 -2부터 끝까지
console.log(arr.slice(-3)); //인덱스 -3부터 끝까지
console.log(arr.slice(-4)); //인덱스 -4부터 끝까지
console.log(arr.slice(-5)); //인덱스 -5부터 끝까지 */

/* let arrA = [1, 2];
let arrB = [3, 4];
let arrC = arrA.concat(arrB);

console.log(arrC);
console.log(arrA); */

/* let arrA = [1, 2];
let arrB = { a: 1, b: 2 };
let arrC = arrA.concat(arrB);

console.log(arrC); */

/* function cb(item, idx) {
    console.log(`${idx}번째 요소: ${item}`);
}

const arr = [1, 2, 3, 4, 5];
arr.forEach(cb); */

/* //100~105번째 줄 코드를 화살표 형식으로 바꾼 것 
const arr = [1, 2, 3, 4, 5];
arr.forEach((item, idx) => {
    console.log(`${idx}번째 요소: ${item}`);
}); */

/* let arr = [1, 3, 5, 7, 1];

console.log(arr.indexOf(1, 0)); //0 //1이라는 값을 인덱스 0번째 부터 찾겠다 
console.log(arr.indexOf(1, 2)); //4 //1이라는 값을 인덱스 2번째 부터 찾겠다 
console.log(arr.indexOf(5, 4)); //-1( == 찾을 수 없음) //5이라는 값을 인덱스 4번째 부터 찾겠다 */

function determine(item, idx, arr) {
    if (item % 2 === 0) {
      return true;
    } else {
      return false;
    }
}

let arr = [1, 3, 5, 6, 8];
let index = arr.findIndex(determine);

console.log(index);