//🔁
//입력받기
const fs = require('fs');
const input = fs.readFileSync(0,"utf8").trim().split("\n");

//n, m입력받기
const [n, m] = input[0].split(" ").map(Number);

//N개의 행, M개의 열로 이루어진 2차원 배열 입력
const graph = input.slice(1).map((row) => row.split("").map(Number));

//dfs 함수
// 재귀 호출은 연결된 모든 0을 방문하여 1로 바꾸기 위한 것
// 반환값은 맨 처음 dfs(i, j)를 호출한 곳에서만 의미를 가진다.
function dfs(x,y){
  //범위를 벗어나면 종료
  if (x < 0 || x >= n || y < 0 || y >= m){
    return false;
  }

  //현재 위치가 0이면 방문
  if (graph[x][y] === 0){
    graph[x][y] = 1;

    //상,좌,하,우 탐색
    dfs(x-1, y);
    dfs(x, y-1);
    dfs(x+1, y);
    dfs(x, y+1);

    return true;
  }else{
    //현재 위치가 1이면 false 반환
    return false;
  }
}

//모든 위치에서 DFS 수행
let result = 0;

for (let i = 0; i< n; i++){
  for (let j = 0; j < m; j++){
    if (dfs(i,j)){
      result++;
    }
  }
}

console.log(result);