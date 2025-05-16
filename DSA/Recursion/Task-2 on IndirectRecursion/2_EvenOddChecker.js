// function evenNum(num) {
//   if (num < 0) {
//     console.log("Please Give a Valid Integer");
//   }

//   if (num > 0) {
//     if (num % 2 === 0) {
//       console.log(`Num ${num} is Even Number`);
//       oddNum(num - 1);
//     } else {
//       oddNum(num);
//     }
//   }
// }

// function oddNum(num) {
//   if (num > 0) {
//     if (num % 2 !== 0) {
//       console.log(`Num ${num} is Odd Number`);
//       evenNum(num - 1);
//     } else {
//       evenNum(num);
//     }
//   }
// }

// let num = 10;
// evenNum(num);

function isEven(n) {
  if (n < 0) {
    console.log("Please Give valid Integer");
    return;
  }
  if (n === 0) return true;
  return isOdd(n - 1);
}

function isOdd(n) {
  if (n === 0) return false;
  return isEven(n - 1);
}

console.log(isEven(10));
