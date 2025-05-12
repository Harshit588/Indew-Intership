let arr = [0, 1, 0, 2, 0, 1, 0, 2, 1, 1, 0];

let zeros = 0;
let ones = 0;
let twos = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    zeros++;
  } else if (arr[i] === 1) {
    ones++;
  } else {
    twos++;
  }
}

for (let i = 0; i < arr.length; i++) {
  if (i < zeros) {
    arr[i] = 0;
  } else if (i < zeros + ones) {
    arr[i] = 1;
  } else {
    arr[i] = 2;
  }
}

console.log("0 :: " + zeros);
console.log("1 :: " + ones);
console.log("2 :: " + twos);

console.log(arr);
