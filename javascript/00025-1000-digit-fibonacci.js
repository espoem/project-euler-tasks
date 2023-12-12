/* <p>The Fibonacci sequence is defined by the recurrence relation:</p>
<blockquote>F<sub><i>n</i></sub> = F<sub><i>n</i>−1</sub> + F<sub><i>n</i>−2</sub>, where F<sub>1</sub> = 1 and F<sub>2</sub> = 1.</blockquote>
<p>Hence the first 12 terms will be:</p>
<blockquote>F<sub>1</sub> = 1<br />
F<sub>2</sub> = 1<br />
F<sub>3</sub> = 2<br />
F<sub>4</sub> = 3<br />
F<sub>5</sub> = 5<br />
F<sub>6</sub> = 8<br />
F<sub>7</sub> = 13<br />
F<sub>8</sub> = 21<br />
F<sub>9</sub> = 34<br />
F<sub>10</sub> = 55<br />
F<sub>11</sub> = 89<br />
F<sub>12</sub> = 144</blockquote>
<p>The 12th term, F<sub>12</sub>, is the first term to contain three digits.</p>
<p>What is the index of the first term in the Fibonacci sequence to contain 1000 digits?</p> */

function findFibonacciIndexWith1000Digits() {
  let index = 2;
  let prev = BigInt(1);
  let current = BigInt(1);

  while (String(current).length < 1000) {
    let next = prev + current;
    prev = current;
    current = next;
    index++;
  }

  return index;
}

const result = findFibonacciIndexWith1000Digits();
console.log(result, result === 4782);
