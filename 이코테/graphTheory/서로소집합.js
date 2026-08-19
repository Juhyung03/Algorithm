const parent = Array.from ({ length: n+1}, (_, i) => i);

function find(x){
  if (parent[x] === x){
    return x;
  }

  return parent[x] = find(parent[x]);
}

function union(a, b){
  a = find(a);
  b = find(b);

  if( a !== b){
    parent[b] = a;
  }
}