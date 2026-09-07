//🔁
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

const [V, E] = input[0].split(" ").map(Number);

//부모 테이블
const parent = Array.from({length: V + 1}, (_, i) => i);

//특정 원소의 루트 찾기
function findParent(x) {
  if (parent[x] !== x){
    parent[x] = findParent(parent[x]);
  }

  return parent[x];
}

//두 원소가 속한 집합 합치기
function unionParent(a, b){
  a = findParent(a);
  b = findParent(b);

  if (a < b){
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

//모든 간선 저장
const edges = [];
let result = 0;

for (let i = 1; i <= V; i++){
  parent[i] = i;
}

//간선 정보 입력
for (let i = 1; i <= E; i++){
  const [a, b, cost] = input[i].split(" ").map(Number);

  edges.push([cost, a, b]);
}

//비용 기준 오름차순 정렬
edges.sort((a,b) => a[0] - b[0]);

//MST에 포함되는 간선 중 가장 큰 비용
let last = 0;

//간선을 하나씩 확인
for (const edge of edges){
  const [cost, a, b] = edge;

  //사이클이 발생하지 않는 경우에만 선택
  if (findParent(a) !== findParent(b)){
    unionParent(a,b);

    result += cost;
    last = cost;
  }
}

//가장 큰 간선을 제거하면 두 개의 마을로 분할
console.log(result - last);