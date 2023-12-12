/* <p>A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:</p>
<p class="center">012   021   102   120   201   210</p>
<p>What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?</p> */

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

const findPermutation = (n) => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = "";
  let remaining = n - 1;

  for (let i = 9; i >= 0; i--) {
    let f = factorial(i);
    let index = Math.floor(remaining / f);
    remaining = remaining % f;
    result += digits[index];
    digits.splice(index, 1);
  }

  return result;
};

const result = findPermutation(1000000);
console.log(result, result === "2783915460"); // Output: 2783915460
