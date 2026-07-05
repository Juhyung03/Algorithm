//🔁
let n = 1260;
let count = 0;

const coinTypes = [500, 100, 50, 10];

for (const coin of coinTypes){
  let num = Math.floor(n / coin);
  count += num;
  n = n - (num * coin);
  console.log(num)
}

console.log('최소 동전의 개수: ', count)