//🔁
const array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

//모든 범위를 포함하는 배열 선언 (모든 값은 0으로 초기화)
const count = Array(Math.max(...array) + 1).fill(0);

//각 데이터에 해당하는 인덱스의 값 증가
for (let i = 0; i < array.length; i++){
  count[array[i]]++;
}

//리스트에 기록된 정렬 정보 확인
for (let i = 0; i < count.length; i++){
  for (let j = 0; j < count[i]; j++){
    process.stdout.write(i+" ");
  }
}