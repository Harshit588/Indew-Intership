function checkFront(s, i, j) {
  if (i >= j) return true;

  if (s[i] !== s[j]) return false;
  return checkBack(s, i + 1, j - 1);
}
function checkBack(s, i, j) {
  if (i >= j) return true;
  if (s[i] !== s[j]) return false;
  return checkFront(s, i + 1, j - 1);
}

function isPalindrome(s) {
  s = s.toLowerCase();
  return checkFront(s, 0, s.length - 1);
}

const str = "mdam";
const result = isPalindrome(str);
if (result) {
  console.log(`"${str}" is a palindrome :: Yes`);
} else {
  console.log(`"${str}" is a palindrome :: NO`);
}
