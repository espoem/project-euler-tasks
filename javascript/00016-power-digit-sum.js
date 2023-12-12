// <p>2<sup>15</sup> = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.</p>
// <p>What is the sum of the digits of the number 2<sup>1000</sup>?</p>

let num = BigInt(2 ** 1000);
let sum = 0;
for (let digit of num.toString()) sum += parseInt(digit);

const result = sum;
console.log(result, result === 1366);
