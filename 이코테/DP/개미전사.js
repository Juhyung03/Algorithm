//🔁
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

const n = Number(input[0]);
const array = input[1].split(" ").map(Number);
//n개의 창고에 대한 DP 테이블 초기화 (0으로 채움)
const d = new Array(n).fill(0);
//1번째 창고까지 고려했을 때 최댓값은 1번째 창고의 값 자체
d[0] = array[0];
//2번째 창고까지 고려했을 때 최댓값은 1번째와 2번째 중 더 큰 값
d[1] = Math.max(array[0], array[1]);
//i번째 창고를 안 턴 경우, 바로 전 단계의 최댓값을 유지
//i번째 창고를 턴 경우, 2칸 전 최댓값 + 현재 창고 식량
for ( let i = 2; i < n; i++ ){
  d[i] = Math.max( d[i-1], d[i-2]+ array[i]);
}
//마지막 창고까지 고려했을 때 얻을 수 있는 식량의 최댓값 출력
console.log(d[n-1]);
