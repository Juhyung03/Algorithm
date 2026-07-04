//🔁
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

//N 입력
let n = Number(input[0]);

//count 변수 초기화
let count = 0;

//각 시, 분, 초를 for문을 통하여 string으로 바꾸어서 합친 문자열에 "3"이 하나라도 포함된 경우 count 증가
for (let i=0; i<=n; i++){
  for (let j=0; j<60; j++){
    for (let k=0; k<60; k++){
      if ((String(i) + String(j) + String(k)).includes("3")){
        count+=1;
      }
    }
  }
}

console.log(count);

