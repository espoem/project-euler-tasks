/* <p>The sum of the squares of the first ten natural numbers is,</p>
$$1^2 + 2^2 + ... + 10^2 = 385$$
<p>The square of the sum of the first ten natural numbers is,</p>
$$(1 + 2 + ... + 10)^2 = 55^2 = 3025$$
<p>Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is $3025 - 385 = 2640$.</p>
<p>Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</p> */

// Solution 1
const sumOfSquares = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
};

const squareOfSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum * sum;
};

const differenceBetweenSumOfSquaresAndSquareOfSum = (n) =>
  squareOfSum(n) - sumOfSquares(n);

console.log(differenceBetweenSumOfSquaresAndSquareOfSum(100));

// Solution 2
const sumOfSquares2 = (n) => {
  return (n * (n + 1) * (2 * n + 1)) / 6;
};

const squareOfSum2 = (n) => {
  return Math.pow((n * (n + 1)) / 2, 2);
};

const difference = (n) => {
  return squareOfSum2(n) - sumOfSquares2(n);
};

const result = difference(100);
console.log(result, result === 25164150);
