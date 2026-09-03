//🔁
function topologicalSort(n, edges){
  const graph = Array.from({length: n+1}, () => []);
  const indegree = Array(n+1).fill(0);

  for (const [from,to] of edges){
    graph[from].push(to);
    indegree[to]++;
  }

  const queue = [];

  for (let i =1; i <= n; i++){
    if (indegree[i] === 0){
      queue.push(i);
    }
  }

  const result = [];

  while (queue.length > 0){
    const current = queue.shift();
    result.push(current);
    
    for ( const next of graph[current]){
      indegree[next]--;

      if (indegree[next] === 0){
        queue.push(next);
      }
    }
  }

  if (result.length !== n){
    return [];
  }
  return result;
}