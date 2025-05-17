//  What is indirect recursion ?
// Ans => The indirect Recursion is a type of recursion in which a function calls another function, which in turn calls the first function again. This creates a cycle of function calls between two or more functions. Indirect recursion can be useful for breaking down complex problems into smaller, more manageable pieces, and it can also help to improve code readability and maintainability.
//  Example of Indirect Recursion
// 1. Function A calls function B
// 2. Function B calls function A

// how does it differ from direct recursion?
// Ans => In direct recursion, a function calls itself directly, while in indirect recursion, a function calls another function that eventually leads back to the original function.
// Direct recursion is typically simpler and easier to understand, while indirect recursion can be more complex and harder to follow. However, both types of recursion can be useful in different situations, depending on the problem being solved.

//  Example of Indirect Recursion
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
// Output:
// A : 10
// B : 10
// A : 9
// B : 9
// A : 8 generat all at once
// B : 8
// A : 7
// B : 7
// ...
// ...
// ...
// A : 1
// B : 1
// A : 0
// B : 0
