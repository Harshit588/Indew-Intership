function printAsc(n, i = 1) {
  if (i > n) return;
  console.log(i);
  printDesc(n, i);
}

function printDesc(n, i) {
  if (i >= n) return;
  printAsc(n, i + 1);
  console.log(i);
}

let n = 3;
printAsc(n);
