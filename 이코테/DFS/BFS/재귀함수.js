//
//반복적으로 구현한 n!
function factorialIterative(n){
  let result = 1;
  for (let i = 1; i <=n ; i++){
    result = result * i;
  }
  return result;
}

//재귀적으로 구현한 n!
function factorialRecursive(n){
  //n이 1 이하이면 1을 반환
  if (n <=1 ){
    return 1;
  }
  return n * factorialRecursive(n-1);
}

console.log('반복적으로 구현:', factorialIterative(5));
console.log('재귀적으로 구현:', factorialRecursive(5));