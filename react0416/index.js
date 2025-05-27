//filter 함수

/* let arr = [
    { name: "이종원", hobby: "축구" },
    { name: "이정환", hobby: "영화" },
    { name: "신다민", hobby: "축구" },
    { name: "김효빈", hobby: "노래" }
];

let filteredArr = arr.filter(
    (item) => item.hobby === "축구"
);

console.log(filteredArr); */

/* let arr = [1, 2, 3, 4];
let newArr = arr.map(
    (item) => item * 3
);

console.log(newArr); */

/* let arr = [
    { name: "이종원", hobby: "축구" },
    { name: "이정환", hobby: "영화" },
    { name: "신다민", hobby: "축구" },
    { name: "김효빈", hobby: "노래" }
];

let newArr = arr.map(
    (item) => item.name
);

console.log(newArr); */

//sort 함수 : 디폴트값 오름차순

/* let arr = ["b", "a", "c"];

arr.sort(); //오름차순

console.log(arr); */

/* function compare(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
}

let arr = [10, 5, 3];
arr.sort(compare);

console.log(arr); */

//join

/* let arr = ["안녕", "나는", "이정환"];

console.log(arr.join());
console.log(arr.join("-")); */

//reduce

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((acc, item) => acc + item, 0);

console.log(result);