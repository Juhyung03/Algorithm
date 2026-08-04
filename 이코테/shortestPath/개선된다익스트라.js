//🔁🔁
const INF = 1e9;

//최소 힙 구현
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
function dijkstra(start, graph, n){
  const distance = Array(n+1).fill(INF);
    const pq = new PriorityQueue();

    distance[start] = 0;
    pq.push([0, start]); //[거리, 노드]

    while (!pq.isEmpty()){
      const [dist, now] = pq.pop();

      //이미 더 짧은 경로를 알고 있으면 무시
      if (dist > distance[now]){
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