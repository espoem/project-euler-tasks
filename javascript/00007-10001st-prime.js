// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function nthPrime(n) {
  let count = 0;
  let num = 2;

  while (count !== n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(nthPrime(10001) === 104743);
