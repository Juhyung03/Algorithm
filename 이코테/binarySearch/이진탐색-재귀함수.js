//🔁
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

//이진 탐색 소스코드 구현 (재귀 함수)
function binarySearch(array, target, start, end){
  if (start > end){
    return null;
  }

  //중간점 계산 (소수점 이하 버림)
  const mid = Math.floor((start + end) / 2);

  //찾은 경우 중간점 인덱스 반환
  if (array[mid] === target){
    return mid;
  } else if (array[mid] > target){
    return binarySearch(array, target, start, mid - 1);
  } else{
    return binarySearch(array, target, mid + 1, end);
  }
}

//n(원소의 개수)과 target(찾고자 하는 값)을 입력받기
const [n, target] = input[0].split(" ").map(Number);

//전체 원소 입력받기
const array = input[1].split(" ").map(Number);

//이진 탐색 수행 결과 출력
const result = binarySearch(array, target, 0, n-1);
if (result === null){
  console.log("원소가 존재하지 않습니다.");
}else{
  console.log(result+1);
}