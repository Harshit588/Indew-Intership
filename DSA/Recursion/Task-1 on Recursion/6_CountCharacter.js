function countCharacter(str, char, index = 0, count = 0) {
  if (str.length <= index) {
    return count;
  }
  if (str[index] === char) {
    count++;
  }
  return countCharacter(str, char, index + 1, count);
}

const str = "hello world";
const char = "l";

console.log(
  `${char} is Presented in ${str} :: ${countCharacter(str, char)} times`
);
