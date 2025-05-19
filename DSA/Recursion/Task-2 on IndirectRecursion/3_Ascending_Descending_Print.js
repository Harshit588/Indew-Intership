function printAsc(num, i = 1) {
  if (i > num) return;
  console.log(i);
  printDesc(num, i);
}

function printDesc(num, i) {
  if (i >= num) return;
  printAsc(num, i + 1);
  console.log(i);
}

let num = 3;
printAsc(num);
