//🔁
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf-8").trim.split("\n");

//n,m 입력받기
const [n, m] = input[0].split(" ").map(Number);

//칸의 값 입력받기
const graph = input.slice(1).map((row) => row.split("").map(Number));

//상, 하, 좌, 우
const dx = [-1,1,0,0]
const dy = [0,0,-1,1];

//bfs 함수
function bfs(x,y){
  const queue = [];
  queue.push([x,y]);

  let front = 0; //큐의 맨 앞 인덱스 , shift는 모든 원소를 한 칸씩 앞으로 당겨야 하기 때문에 front 인덱스를 증가시키는 방식을 사용

  while (front < queue.length){
    //조건문: queue가 비지 않을 때까지 반복
    const [x,y] = queue[front++];

    //네 방향 확인
    for (let i = 0; i < 4; i++){
      const nx = x + dx[i];
      const ny = y + dy[i];

      //범위를 벗어나면 무시
      if (nx < 0 || ny < 0 || nx >= n || ny >= m){
        continue;
      }

      //괴물있는 부분이면 무시
      if (graph[nx][ny] === 0){
        continue;
      }

      //처음 방문한 길이라면
      if (graph[nx][ny] === 1){
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx,ny]);
      }
    }
  }

  //도착 지점까지의 최단 거리
  return graph[n-1][m-1];

}

console.log(bfs(0,0));