//🔁
// 입력받기
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 첫 번째 줄: 도시 개수 N, 통로 개수 M, 시작 도시 C
const [n, m, c] = input[0].split(" ").map(Number);

// 인접 리스트 생성
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  if (!input[i]) continue;
  const [x, y, z] = input[i].split(" ").map(Number);
  graph[x].push({ to: y, cost: z });
}

// 최소힙 구현
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this._bubbleUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    if (this.size() === 0) return null;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._sinkDown();
    return min;
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].cost <= this.heap[index].cost) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  _sinkDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < length && this.heap[leftChildIndex].cost < this.heap[smallest].cost) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < length && this.heap[rightChildIndex].cost < this.heap[smallest].cost) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

// 다익스트라 최단 거리 알고리즘
const distance = Array(n + 1).fill(Infinity);
distance[c] = 0;

const pq = new MinHeap();
pq.push({ node: c, cost: 0 });

while (pq.size() > 0) {
  const { node: now, cost: currentCost } = pq.pop();

  if (distance[now] < currentCost) continue;

  for (const edge of graph[now]) {
    const newCost = currentCost + edge.cost;
    if (newCost < distance[edge.to]) {
      distance[edge.to] = newCost;
      pq.push({ node: edge.to, cost: newCost });
    }
  }
}

let count = 0;
let maxDistance = 0;

for (let i = 1; i <= n; i++) {
  if (distance[i] !== Infinity && i !== c) {
    count++;
    maxDistance = Math.max(maxDistance, distance[i]);
  }
}

// 결과 출력 (공백 구분)
console.log(`${count} ${maxDistance}`);