/* <p>A Pythagorean triplet is a set of three natural numbers, <var>a</var> &lt; <var>b</var> &lt; <var>c</var>, for which,</p>
<div class="center"> <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup></div>
<p>For example, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.</p>
<p>There exists exactly one Pythagorean triplet for which <var>a</var> + <var>b</var> + <var>c</var> = 1000.<br />Find the product <var>abc</var>.</p> */

function pythagoreanTripletProduct(sum) {
  for (let a = 1; a < sum / 3; a++) {
    for (let b = a + 1; b < (sum - a) / 2; b++) {
      let c = sum - a - b;
      if (a * a + b * b === c * c) {
        return a * b * c;
      }
    }
  }
}

const result = pythagoreanTripletProduct(1000);
console.log(result, result === 31875000); // 200 * 375 * 425
