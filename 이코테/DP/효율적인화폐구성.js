//🔁
//입력받기
//핵심: 이전 금액을 만드는 최적의 정답이 이미 구해져 있기 때문에 , (목적 금액 - 동전) 위치의 정답에 동전 1개만 더한다
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

const [n,m] = input[0].split(" ").map(Number);
const array = input.slice(1).map(Number);

//DP 테이블을 충분히 큰 값을 초기화
const d = new Array(m+1).fill(10001);
//0원을 만드는 데 필요한 화폐 개수는 0개
d[0] = 0;
//DP 데이블 갱신
for (let i = 1; i <= m; i++) {
  for (let coin of array) {
    if (i >= coin && d[i - coin] !== 10001) {
      d[i] = Math.min(d[i], d[i - coin] + 1);
    }
  }
}

if ( d[m] === 10001 ){
  console.log(-1);
}else{
  console.log(d[m]);
}
