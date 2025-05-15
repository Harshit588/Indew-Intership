function sum(num) {
  if (num > 0) {
    return num + sum(num - 1);
  } else {
    return 0;
  }
}
console.log(sum(5));
