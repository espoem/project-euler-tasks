/* <p><i>n</i>! means <i>n</i> × (<i>n</i> − 1) × ... × 3 × 2 × 1</p>
<p>For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,<br />and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.</p>
<p>Find the sum of the digits in the number 100!</p> */

function factorialSum(n) {
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  let sum = 0;
  while (result > 0) {
    sum += Number(result % 10n);
    result = result / 10n;
  }
  return sum;
}

const result = factorialSum(100);
console.log(result, result === 648);
