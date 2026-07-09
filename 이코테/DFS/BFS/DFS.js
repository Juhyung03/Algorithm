//🔁
//DFS 함수 정의
function dfs(graph, v, visited){
  //현재 노드 방문 처리
  visited[v] = true;

  //현재 노드 출력
  process.stdout.write(v+" ");

  //현재 노드와 연결된 다른 노드 재귀 방문
  for (let i of graph[v]){
    if (!visited[i]){
      dfs(graph, i, visited);
    }
  }
}

//각 노드가 연결되 정보를 리스트 자료형으로 표현
let graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7]
];

//방문 정보 리스트
let visited = Array(9).fill(false);

//DFS 호출
dfs(graph, 1, visited);