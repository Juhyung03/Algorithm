//🔁
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");

//이진 탐색 소스코드 구현(반복문)
function binarySearch(array, target, start, end){
  while(start <= end){
    //중간점 계산 (소수점 이하 버림)
    const mid = Math.floor((start+end)/2);

    //찾은 경우 중간점 인덱스 반환
    if (array[mid] === target){
      return mid;
    } else if(array[mid] > target){
      //중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
      end = mid - 1;
    } else {
      //중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
      start = mid + 1;
    }
  }

  return null;
}

//n과 target 입력받기
const [n, target] = input[0].split(" ").map(Number);

//전체 원소 입력받기
const array = input[1].split(" ").map(Number);

//이진 탐색 수행 결과 출력
const result = binarySearch(array, target, 0, n-1);
if (result === null){
  console.log("원소가 존재하지 않습니다.");
} else {
  console.log(result+1);
}