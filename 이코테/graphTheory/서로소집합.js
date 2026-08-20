//각 노드의 부모를 저장하는 배열
//처음에는 자기 자신이 부모
const parent = Array.from ({ length: n+1}, (_, i) => i);

//x가 속한 집합의 대표를 찾는 함수
function find(x){
  //자기 자신이 부모라면 -> 루트 노드
  if (parent[x] === x){
    return x;
  }

  //경로압축
  //부모를 따라가서 루트를 찾음
  return parent[x] = find(parent[x]);
}

// 두 집합을 하나로 합치는 함수
function union(a, b){
  //a의 루트를 찾음
  a = find(a);
  //b의 루트를 찾음
  b = find(b);

  //두 루트가 다르다면 서로 다른 집합
  if( a !== b){
    //b의 루트를 a의 밑으로 연결
    parent[b] = a;
  }
}