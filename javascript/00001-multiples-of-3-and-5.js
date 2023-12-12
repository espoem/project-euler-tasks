// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const sumOfMultiplesBelow = (limit) => {
  const sum = (n) => (n * (n + 1)) / 2;
  const sumOfMultiples = (limit_, multiple) =>
    multiple * sum(Math.floor((limit_ - 1) / multiple));

  return (
    sumOfMultiples(limit, 3) +
    sumOfMultiples(limit, 5) -
    sumOfMultiples(limit, 15)
  );
};

console.log(sumOfMultiplesBelow(1000) === 233168);
