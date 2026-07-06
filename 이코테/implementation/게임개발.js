//🔁
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

//현재 몇 번째 줄을 읽고 있는지 추적하는 인덱스
let idx = 0;

//N, M을 공백으로 구분하여 입력받기
const [n, m] = input[idx++].split(" ").map(Number);

//현재 캐릭터의 위치와 방향을 입력받기
let [x, y, direction] = input[idx++].split(" ").map(Number);

//방문 여부를 기록하는 배열
const d = Array.from({length: n}, () => Array(m).fill(0));
d[x][y] = 1; // 현재 위치 방문 처리

//전체 맵 정보를 입력받기
const array = [];
for (let i = 0; i < n; i++){
  array.push(input[idx++].split(" ").map(Number));
}

//북, 동, 남, 서 방향 정의
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

//왼쪽으로 회전
function turnLeft(){
  direction -= 1;
  if (direction === -1){
    direction = 3;
  }
}

//시뮬레이션 시작
let count = 1; // 방문한 칸의 수
let turnTime = 0; // 회전 횟수

while (true){
  //왼쪽으로 회전
  turnLeft();
  let nx = x + dx[direction];
  let ny = y + dy[direction];

  //회전한 이후 정면에 가보지 않은 칸이 존재하는 경우 이동
  if (d[nx][ny] == 0 && array[nx][ny] ===0){
    d[nx][ny] = 1;
    x = nx;
    y = ny;
    count += 1;
    turnTime = 0;
    continue;
  }else{
    //회전한 이후 정면에 가보지 않은 칸이 없거나 바다인 경우
    turnTime += 1;
  }

  //네 방향 모두 갈 수 없는 경우
  if (turnTime === 4){
    nx = x - dx[direction];
    ny = y - dy[direction];
    //뒤로 갈 수 있다면 이동하기
    if (array[nx][ny] === 0){
      x = nx;
      y = ny;
    }else {
      //뒤가 바다로 막혀있는 경우
      break;
    }
    turnTime = 0;
  }
}

console.log(count);