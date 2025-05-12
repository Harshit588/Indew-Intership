const arr1 = [1, 3, 5, 3, 2, 6];
const arr2 = [10, 30, 50, 30, 12, 60];

let newArr = [];

for (let i = 0; i < arr1.length; i++) {
  newArr.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
  newArr.push(arr2[i]);
}

console.log(newArr);
