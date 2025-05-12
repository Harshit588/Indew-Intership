const arr1 = [1, 3, 5, 3, 2, 6];
const arr2 = [10, 30, 50, 30, 12, 60];

let newArr = [];
let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    newArr.push(arr1[i]);
    i++;
  } else {
    newArr.push(arr2[j]);
    j++;
  }
}

while (i < arr1.length) {
  newArr.push(arr1[i]);
  i++;
}
while (j < arr2.length) {
  newArr.push(arr2[j]);
  j++;
}
console.log(newArr);
