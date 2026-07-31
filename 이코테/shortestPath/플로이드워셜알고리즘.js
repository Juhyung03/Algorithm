//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

const INF = 1e9;

let inputIdx = 0;

//노드의 개수(n) 및 간선의 개수(m)를 입력받기
const n = parseInt(input[inputIdx++]);
const m = parseInt(input[inputIdx++]);

//2차원 배열(그래프 표현)을 만들고, 모든 값을 무한으로 초기화
const graph = Array.from({length: n+1}, () => Array(n+1).fill(INF));

//자기 자신에서 자기 자신으로 가는 비용은 0으로 초기화
for (let a = 1; a <= n; a++){
  for (let b =1; b <= n; b++){
    if ( a===b ){
      graph[a][b] = 0;
    }
  }
}

//각 간선에 대한 정보를 입력받아, 그 값으로 초기화
for (let i = 0; i < m; i++){
  const [a,b,c] = input[inputIdx++].trim().split(" ").map(Number);
  //a에서 b로 가는 비용은 c라고 설정
  graph[a][b] = c;
}

//점화식에 따라 플로이드 워셜 알고리즘 수행
for (let k = 1; k <= n; k++){
  for (let a = 1; a <= n; a++){
    for (let b = 1; b <= n; b++){
      graph[a][b] = Math.min(graph[a][b], graph[a][k]+graph[k][b]);
    }
  }
}

//수행된 결과를 출력
for (let a = 1; a <= n; a++){
  let row = [];
  for ( let b = 1; b <= n; b++){
    //도달 할 수 없는 경우 INFINITY라고 출력
    if (graph[a][b] === INF){
      row.push("INFINITY");
    } else{
      row.push(graph[a][b]);
    }
  }
  console.log(row.join(" "));
}