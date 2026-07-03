//✅
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

//N 입력
let n = Number(input[0]);

//이동 계획서 입력받기
let plan = input[1].split(" ");

//현재 위치 초기화
let x = 1;
let y = 1;

//이동 방향에 따라 위치 계산
for (let i=0; i < plan.length; i++){
  if (plan[i] === 'R' && y != n){
    y+=1;
  } else if (plan[i] === 'L' && y != 1){
    y-=1;
  } else if (plan[i] === 'U' && x != 1){
    x-=1;
  }else if (plan[i] === 'D' && x != n){
    x+=1;
  } 
}

//최종 위치 출력
console.log(x,y);

