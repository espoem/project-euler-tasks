/* <p>The following iterative sequence is defined for the set of positive integers:</p>
<p class="margin_left"><var>n</var> → <var>n</var>/2 (<var>n</var> is even)<br /><var>n</var> → 3<var>n</var> + 1 (<var>n</var> is odd)</p>
<p>Using the rule above and starting with 13, we generate the following sequence:</p>
<div class="center">13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>
<p>It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.</p>
<p>Which starting number, under one million, produces the longest chain?</p>
<p class="note"><b>NOTE:</b> Once the chain starts the terms are allowed to go above one million.</p> */

let longestChain = 0;
let startingNum = 0;

for (let i = 1; i < 1000000; i++) {
  let currentNum = i;
  let chainLength = 1;

  while (currentNum !== 1) {
    if (currentNum % 2 === 0) {
      currentNum = currentNum / 2;
    } else {
      currentNum = 3 * currentNum + 1;
    }
    chainLength++;
  }

  if (chainLength > longestChain) {
    longestChain = chainLength;
    startingNum = i;
  }
}

console.log(startingNum);
