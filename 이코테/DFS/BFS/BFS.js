//🔁✅
function bfs(graph, start, visited){
  //큐 생성
  const queue = [start];

  //시작 노드 방문 처리
  visited[start] = true;

  //큐가 빌 때까지 반복
  while(queue.length > 0){
    //큐에서 하나 꺼내기
    const v = queue.shift();
    process.stdout.write(v+" ");

    //현재 노드와 연결된 노드 확인
    for (const node of graph[v]){
      if (!visited[node]){
        queue.push(node);
        visited[node] = true;
      }
    }
  }
}

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = new Array(9).fill(false);

bfs(graph, 1, visited);
