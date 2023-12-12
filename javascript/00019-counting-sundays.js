// <p>You are given the following information, but you may prefer to do some research for yourself.</p>
// <ul><li>1 Jan 1900 was a Monday.</li>
// <li>Thirty days has September,<br />
// April, June and November.<br />
// All the rest have thirty-one,<br />
// Saving February alone,<br />
// Which has twenty-eight, rain or shine.<br />
// And on leap years, twenty-nine.</li>
// <li>A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.</li>
// </ul><p>How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?</p>

function countSundays() {
  let sundays = 0;
  let day = 2; // 1 Jan 1901 was a Tuesday

  for (let year = 1901; year <= 2000; year++) {
    for (let month = 1; month <= 12; month++) {
      if (day === 0) {
        sundays++;
      }
      switch (month) {
        case 2:
          day = year % 4 === 0 ? (day + 29) % 7 : (day + 28) % 7;
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          day = (day + 30) % 7;
          break;
        default:
          day = (day + 31) % 7;
      }
    }
  }

  return sundays;
}

const result = countSundays();
console.log(result, result === 171);
