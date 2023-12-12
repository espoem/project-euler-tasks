/* <p>Let d(<i>n</i>) be defined as the sum of proper divisors of <i>n</i> (numbers less than <i>n</i> which divide evenly into <i>n</i>).<br />
If d(<i>a</i>) = <i>b</i> and d(<i>b</i>) = <i>a</i>, where <i>a</i> ≠ <i>b</i>, then <i>a</i> and <i>b</i> are an amicable pair and each of <i>a</i> and <i>b</i> are called amicable numbers.</p>
<p>For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.</p>
<p>Evaluate the sum of all the amicable numbers under 10000.</p> */

const sumOfAmicableNumbers = () => {
  const divisorsSum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
    return sum;
  };
  let sum = 0;
  for (let i = 1; i < 10000; i++) {
    const a = divisorsSum(i);
    const b = divisorsSum(a);
    if (b === i && a !== b) {
      sum += i;
    }
  }
  return sum;
};

const result = sumOfAmicableNumbers();
console.log(result, result === 31626);
