//🔁
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

//N, M 입력
let [n, m] = input[0].split(" ").map(Number);

//N개의 행, M개의 열로 이루어진 2차원 배열 입력
let data = input.slice(1).map((row) => row.split(" ").map(Number));

//각 행마다 가장 작은 수를 넣을 n개의 배열 minArr 생성
let minArr = new Array(n).fill(0);
//input 값보다 큰 수로 초기화
let result = 10001;

for (let i=0; i < n; i++){
  //각 행에서 가장 작은 수 찾기
  for (let j=0; j < m; j++){
    if (data[i][j] < result){
      result = data[i][j];
    }
  }
  //각 행에서 가장 작은 수를 minArr에 넣기
  minArr[i] = result;
  result = 10001;
}

//minArr에서 가장 큰 수 찾기
const max = Math.max(...minArr);
console.log(max);