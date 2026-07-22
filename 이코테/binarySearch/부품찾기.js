//✅
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

const n = Number(input[0]);
const arrayN = input[1].split(" ").map(Number);
const m = Number(input[2]);
const arrayM = input[3].split(" ").map(Number);

arrayN.sort((a,b) => a-b);

function binarySearch(array, target, start, end){
  while( start <= end){
    const mid = Math.floor((start + end) / 2);

    if ( array[mid] === target){
      return mid;
    }else if ( array[mid] > target){
      end = mid - 1;
    }else{
      start = mid + 1;
    }
  }
  return null;
}

for ( let i of arrayM ){
  const result = binarySearch(arrayN, i, 0, n-1);

  if (result != null){
    process.stdout.write("yes"+" ");
  }else{
    process.stdout.write("no"+" ");
  }
}