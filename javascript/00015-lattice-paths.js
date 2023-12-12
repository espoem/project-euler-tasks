/* <p>Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.</p>
<div class="center">
<img src="project/images/p015.png" class="dark_img" alt="" /></div>
<p>How many such routes are there through a 20×20 grid?</p> */

// solution
// In this particular problem, the number of routes through a 20x20 grid can be thought of as the number of ways to choose the 20 rightward moves out of a total of 40 moves (20 rightward moves and 20 downward moves). The order in which the moves are made does not matter, so we are looking for the number of combinations of moves, which is why we use the binomial coefficient.

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function binomialCoefficient(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

const result = binomialCoefficient(40, 20);
console.log(result, result === 137846528820);
