// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindromeProduct() {
  let largest = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= i; j--) {
      const product = i * j;
      if (product <= largest) {
        break;
      }
      if (isPalindrome(product)) {
        largest = product;
      }
    }
  }
  return largest;
}

function isPalindrome(n) {
  let str = n.toString();
  return str === str.split("").reverse().join("");
}

console.log(largestPalindromeProduct());
