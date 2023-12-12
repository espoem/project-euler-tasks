/* <p>If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.</p>
<p>If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used? </p>
<br /><p class="note"><b>NOTE:</b> Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.</p> */

let countLetters = 0;
for (let i = 1; i <= 1000; i++) {
  let word = "";
  if (i === 1000) {
    word = "onethousand";
  } else if (i >= 100) {
    let h = Math.floor(i / 100);
    word += getDigitWord(h) + "hundred";
    let r = i % 100;
    if (r > 0) {
      word += "and" + getNumberWord(r);
    }
  } else {
    word = getNumberWord(i);
  }
  countLetters += word.length;
}

function getDigitWord(d) {
  switch (d) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
  }
  return "";
}

function getNumberWord(n) {
  if (n < 20) {
    switch (n) {
      case 10:
        return "ten";
      case 11:
        return "eleven";
      case 12:
        return "twelve";
      case 13:
        return "thirteen";
      case 14:
        return "fourteen";
      case 15:
        return "fifteen";
      case 16:
        return "sixteen";
      case 17:
        return "seventeen";
      case 18:
        return "eighteen";
      case 19:
        return "nineteen";
    }
    return getDigitWord(n);
  } else {
    let t = Math.floor(n / 10);
    let d = n % 10;
    let word = "";
    switch (t) {
      case 2:
        word = "twenty";
        break;
      case 3:
        word = "thirty";
        break;
      case 4:
        word = "forty";
        break;
      case 5:
        word = "fifty";
        break;
      case 6:
        word = "sixty";
        break;
      case 7:
        word = "seventy";
        break;
      case 8:
        word = "eighty";
        break;
      case 9:
        word = "ninety";
        break;
    }
    if (d > 0) {
      word += getDigitWord(d);
    }
    return word;
  }
}

const result = countLetters;
console.log(result, result === 21124);
