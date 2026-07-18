//✅
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

const [n,k] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

a.sort((a,b) => a-b);
b.sort((a,b) => b-a);

for (let i = 0; i < k; i++){
  if (a[i] >= b[i]){
    break;
  }
  [a[i],b[i]] = [b[i],a[i]];
}

let count = 0;
for (let i = 0; i < n; i++){
  count = count + a[i];
}

console.log(count);