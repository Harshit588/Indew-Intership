const reverseArray = (arr, i, j) => {
  if (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return reverseArray(arr, i + 1, j - 1);
  } else {
    return arr;
  }
};

let arr = [10, 20, 30, 40, 50];
console.log(reverseArray(arr, 0, arr.length - 1));
