// 입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

// N, M, K 입력
let [n, m, k] = input[0].split(" ").map(Number);

// N개의 수 입력
let data = input[1].split(" ").map(Number);

// 오름차순 정렬
data.sort((a,b) => a - b);

let first = data[n-1];
let second = data[n-2];

let result = 0;

if (first === second) {
  result = first * m;
}else {
  let  num = 0;

  for (let i = 0; i < m; i++){
    if (num < k){
      result += first;
      num += 1;
    } else {
      result += second;
      num = 0;
    }
    
  }
}

console.log(result);
