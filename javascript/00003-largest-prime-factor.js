// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(number) {
  let prime = 2;
  while (number > 1) {
    while (number % prime === 0) {
      number /= prime;
    }
    prime = prime === 2 ? 3 : prime + 2;
  }
  return prime - 2;
}

console.log(largestPrimeFactor(600851475143) === 6857);
