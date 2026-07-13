//🔁
const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

for (let i = 0; i < array.length; i++){
  //가장 작은 원소의 인덱스
  let minIndex = i

  for (let j = i+1; j < array.length; j++){

    if (array[minIndex] > array[j]){
      minIndex = j 
    }
  }

  //swap
  [array[minIndex], array[i]] = [array[i], array[minIndex]];
}

console.log(array);