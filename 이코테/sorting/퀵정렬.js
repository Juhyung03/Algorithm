//🔁
function quickSort(arr, start, end){
  if (start >= end) return;

  let pivot = arr[start];
  let left = start + 1;
  let right = end;

  while (left <= right){
    while (left <= end && arr[left] <= pivot){
      left++;
    }
    while (right > start && arr[right] >= pivot){
      right--;
    }
    if (left > right){
      [arr[start], arr[right]] = [arr[right], arr[start]];
    }else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  quickSort(arr, start, right-1);
  quickSort(arr, right+1, end);
}

const arr = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

quickSort(arr, 0, arr.length - 1);
console.log(arr);
