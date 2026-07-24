//🔁
const d = new Array(100).fill(0);

d[1] = 1;
d[2] = 1;
const n = 99;

//피보나치 함수 반복문으로 구현 (보텀업 다이나믹 프로그래밍)
for (let i = 3; i <= n; i++){
  d[i] = d[i-1] + d[i-2];
}

console.log(d[n]);