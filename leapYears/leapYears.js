var leapYears = function(year) {
  if (year % 4 == 0 && !(year % 100 == 0 && !(year % 400 == 0))) {
    return true;
  } else {
    return false;
  }
}

module.exports = leapYears

console.log(1600 % 4 == 0 && !(1600 %100 == 0 && !(1600 % 400 == 0)))
