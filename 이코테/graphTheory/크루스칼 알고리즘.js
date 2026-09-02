//🔁
function kruskal(n, edges){
  edges.sort((a,b) => a[2] - b[2]);

  const parent = Array.from({length: n+1}, (_,i) => i);

  function find(x){
    if (parent[x] ===x){
      return x;
    }
    return parent[x] = find(parent[x]);
  }

  function union(a,b){
    a = find(a);
    b = find(b);

    if (a === b){
      return false;
    }

    parent[b] = a;
    return true;
  }

  let cost = 0;
  let count = 0;

  for (const [a,b,weight] of edges){
    if (union(a,b)){
      cost += weight;
      count++;

      if (count === n-1){
        break;
      }
    }
  }
  return cost;
}