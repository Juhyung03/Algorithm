//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

let inputIndex = 0;

function nextInt() {
  return parseInt(input[inputIndex++], 10);
}

// 무한을 의마하는 값으로 10억 설정
const INF = 1e9;

//노드의 개수(n), 간선의 개수(m) 입력받기
const n = nextInt();
const m = nextInt();

//시작 노드 번호 입력받기
const start = nextInt();

//각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트 만들기
const graph = Array.from({length: n+1}, () => []);

//방문한 적이 있는지 체크하는 목적의 리스트 만들기
const visited = new Array(n+1).fill(false);

//최단 거리 테이블을 모두 무한으로 초기화
const distance = new Array(n+1).fill(INF);

//모든 간선 정보 입력받기
for ( let i = 0; i < m; i++){
  const a = nextInt();
  const b = nextInt();
  const c = nextInt();
  //a번 노드에서 b번 노드로 가는 비용이 c라는 의미
  graph[a].push([b,c]);
}

//방문하지 않은 노드 중에서, 가장 최단 거리가 짧은 노드의 번호를 반환
function getSmallestNode(){
  let minValue = INF;
  let index = 0; //가장 최단 거리가 짧은 노드(인덱스)

  for (let i =1; i <= n; i++){
    if (distance[i] < minValue && !visited[i]) {
      minValue = distance[i];
      index = i;
    }
  }
  return index;
}

function dijkstra(startNode) {
  // 시작 노드에 대해서 초기화
  distance[startNode] = 0;
  visited[startNode] = true;

  for (const j of graph[startNode]) {
    distance[j[0]] = j[1];
  }

  // 시작 노드를 제외한 전체 n - 1개의 노드에 대해 반복
  for (let i = 0; i < n - 1; i++) {
    // 현재 최단 거리가 가장 짧은 노드를 꺼내서, 방문 처리
    const now = getSmallestNode();
    visited[now] = true;

    // 현재 노드와 연결된 다른 노드를 확인
    for (const j of graph[now]) {
      const cost = distance[now] + j[1];
      // 현재 노드를 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우
      if (cost < distance[j[0]]) {
        distance[j[0]] = cost;
      }
    }
  }
}

//다익스트라 알고리즘 수행
dijkstra(start);

//모든 노드로 가기 위한 최단 거리를 출력
for (let i =1; i <= n; i++){
  if (distance[i] === INF){
    console.log("INFINITY");
  } else{
    console.log(distance[i]);
  }
}