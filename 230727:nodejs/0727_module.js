// 1. 하나의 모듈 파일에 여러개 만들기

const a = "a 변수";
const b = "b 변수";
const c = "20";

// module.exports = { a, b };

// 2. 하나의 모듈 파일에 하나 만들기

// function connect() {
//   return a + b;
// }

// module.exports = connect;

// 3. 분해할당

// key와 value의 값 넣어짐
module.exports = { a: a, b: b, age: c };
// 윗 줄을 풀어 써보면
// {
//   // key 와 value의 값
//   //   a: "a 변수";
//   //   b: "b 변수";

// }
