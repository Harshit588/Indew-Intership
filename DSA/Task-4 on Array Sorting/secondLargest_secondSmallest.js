let arr = [7, 1, 2, 6, 4, 3, 5];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      continue;
    } else {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log("Second Largest Number is :: " + arr[arr.length - 2]);
console.log("Second Smallest Number is :: " + arr[1]);
