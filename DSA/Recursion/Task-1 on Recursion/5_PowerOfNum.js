function PowerOfNum(num, pow) {
  if (pow === 0) {
    return 1;
  } else {
    return num * PowerOfNum(num, pow - 1);
  }
}

let num = 2;
let power = 3;
console.log(`${num} Power of ${power} is :: ${PowerOfNum(num, power)}`);
