//🔁
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...array);

function cutting(cuttingsize){
  let result = 0;

  for ( let i = 0; i < array.length; i++){
    const totalsize = array[i] - cuttingsize;

    if (totalsize > 0){
      result = result + totalsize;
    }
  }

  return result;  
}

let result = 0;

function binarySearch(start, end){
  while ( start <= end) {
    const mid = Math.floor((start + end) / 2);

    const size = cutting(mid);

    if (size >= m){
      //떡의 양이 충분한 경우 -> 일단 현재 mid를 정답 후보로 저장하고, 더 높게 잘라본다.
      result = mid;
      start = mid + 1;
    } else {
      //떡의 양이 부족한 경우 -> 더 낮게 자른다.
      end = mid - 1;
    }
  }
}

const maxHeight = binarySearch(start, end);
console.log(maxHeight);