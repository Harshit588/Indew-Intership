function functionSub(num) {
  if (num >= 0) {
    console.log(`A : ${num}`);
    functionDiv(num - 1);
  }
}

function functionDiv(num) {
  if (num > 1) {
    console.log(`B : ${num}`);
    functionSub(Math.floor(num / 2));
  }
}

functionSub(10);
