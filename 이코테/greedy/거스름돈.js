//🔁✅
const n = 1260;
let count = 0;
let remain = n;

const coinTypes = [500, 100, 50, 10];

for (const coin of coinTypes){
  count += Math.floor(remain / coin);
  remain = remain % coin;
}

console.log('최소 동전의 개수: ', count)