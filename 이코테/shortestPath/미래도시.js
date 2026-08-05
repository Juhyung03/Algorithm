//🔁
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [n,m] = input[0].split(" ").map(Number);

const INF = 1e9;

const graph = Array.from({length: n+1}, () => []);

for (let i = 1; i <= m; i++){
  const [a, b] = input[i].split(" ").map(Number);

  //양방향
  graph[a].push([b,1]);
  graph[b].push([a,1]);
}

// x: 최종 목적지 K: 경유지
const [x, k] = input[m+1].split(" ").map(Number);

//최소 힙
class PriorityQueue {
  constructor(){
    this.heap = [];
  }

  push(item){
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp(){
    let index = this.heap.length - 1;

    while(index > 0){
      const parent = Math.floor((index-1) / 2);

      if (this.heap[parent][0] <= this.heap[index][0]){
        break;
      }

      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];

      index = parent;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return root;
  }

  heapifyDown() {
    let index = 0;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smallest = index;

      if (
        left < this.heap.length &&
        this.heap[left][0] < this.heap[smallest][0]
      ) {
        smallest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right][0] < this.heap[smallest][0]
      ) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

//다익스트라
function dijkstra(start){
  const distance = Array(n+1).fill(INF);
  const pq = new PriorityQueue();

  distance[start] = 0;
  pq.push([0, start]);

  while (!pq.isEmpty()){
    const[dist, now] = pq.pop();

    if (distance[now] < dist){
      continue;
    }

    for (const [next, cost] of graph[now]){
      const newCost = dist + cost;

      if (newCost < distance[next]){
        distance[next] = newCost;
        pq.push([newCost, next]);
      }
    }
  }
  return distance;
}
//1 -> 모든 곳
const dist1 = dijkstra(1);

//k -> 모든 곳
const distK = dijkstra(k);

const result = dist1[k] + distK[x];

console.log(result >= INF ? -1 : result);



