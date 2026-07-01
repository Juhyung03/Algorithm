//✅
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

//n, k 입력
let [n, k] = input[0].split(" ").map(Number);

//result 0으로 초기화
let result = 0;

while (true){
  //n이 k로 나누어 떨어지지 않는다면 1씩 빼기, 그 외에는 k로 나누기
  if ( n % k === 0){
    n = n / k;
  }else{
    n = n - 1;
  }
  result += 1;

  //n이 1이 되면 반복문 종료
  if (n === 1){
    break;
  }
}

console.log(result);