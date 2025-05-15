function reverseStringHelper(str, index) {
  if (index < 0) return "";
  console.log(index);

  return str[index] + reverseStringHelper(str, index - 1);
}

function reverseString(str) {
  return reverseStringHelper(str, str.length - 1);
}

let str = "Hello";
console.log(`Reverse of ${str} is :: ${reverseString(str)}`);
