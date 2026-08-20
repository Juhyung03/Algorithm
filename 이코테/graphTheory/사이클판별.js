const parent = Array.from({length: n+1}, (_,i) => i);

function find(x){
  if (parent[x] === x){
    return x;
  }
  return parent[x] = find(parent[x]);
}

function union(a, b){
  a = find(a);
  b = find(b);

  if (a !== b){
    parent[b] = a;
  }
}

//모든 간선을 확인
for (const [a,b] of edges){
  //a와 b가 이미 같은 집합이라면
  //연결했을 때 사이클이 만들어짐
  if (find(a) === find(b)){
    console.log("사이클 존재");
    break;
  }

  //서로 다른 집합이라면 연결
  union(a,b);
}