//🔁
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

const [n,m] = input[0].split(" ").map(Number);

//부모 테이블 초기화
const parent = Array.from({length: n+1}, (_,i) => i);

//특정 원소가 속한 집합의 루트 노드 찾기
function findParent(x){
  if (parent[x] != x){
    parent[x] = findParent(parent[x]);
  }

  return parent[x];
}

//두 원소가 속한 집합을 합치기
function unionParent(a,b){
  a = findParent(a);
  b = findParent(b);

  if ( a < b){
    parent[b] = a;
  }else {
    parent[a] = b;
  }
}

//연산 수행
const result = [];

for (let i = 1; i <= m; i++){
  const [oper, a, b] = input[i].split(" ").map(Number);

  if (oper === 0){
    unionParent(a,b);
  }else if (oper === 1){
    if (findParent(a) === findParent(b)){
      result.push("YES");
    }else{
      result.push("NO");
    }
  }
}

console.log(result.join("\n"));