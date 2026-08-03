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