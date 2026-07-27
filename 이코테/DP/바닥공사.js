//🔁
//입력받기
//핵심: 왼쪽부터 채워 나간다고 가정하고, 오른쪽 끝 조각 하나만 보자!
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

const n = Number(input[0]);

const d = new Array(n+1).fill(0);

d[1] = 1;
d[2] = 3;

for ( let i = 3; i <= n; i++){
  d[i] = (d[i-1] + d[i-2]*2) % 796796;
}

console.log(d[n]%796796);