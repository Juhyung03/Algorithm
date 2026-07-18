//✅
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");
//입력받기
const n = input[0]
const array = input.slice(1).map(Number);
//내림차순 정렬
array.sort((a,b) => b-a);
//하나씩 출력하기
for(let i = 0; i < n; i++){
  process.stdout.write(array[i]+" ");
}