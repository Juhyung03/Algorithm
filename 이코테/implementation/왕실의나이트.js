//✅✨
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

//위치 입력받기
let position = String(input[0]);

//입력받은 위치 앞자리는 col, 뒷자리는 row에 할당
let col = position[0];
let row = position[1];

//colMap을 통해 숫자로 변환
let colMap = { a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8};

//x, y 좌표에 각각 row, colMap(col) 할당
let x = Number(row);
let y = colMap[col];

//나이트가 이동할 수 있는 8가지 방향 정의
const steps = [[-2,-1],[-2,1],[2,-1],[2,1],[-1,2],[1,2],[-1,-2],[1,-2]];

//8가지 방향에 대하여 각 위치로 이동이 가능한지 확인
let count = 0;
for (let [dx, dy] of steps) {
  let nx = x + dx;
  let ny = y + dy;
  if (nx >=1 && nx <=8 && ny >=1 && ny <=8){
    count+=1;
  }
}

console.log(count);