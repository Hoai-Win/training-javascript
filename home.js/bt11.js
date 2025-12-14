function format1(n, currency) {
  return currency + n.toFixed(2).replace(/./g, function(c, i, a) {
    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
  });
}

function format2(n, currency) {
  return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}


var numbers = [1, 12, 123, 1234, 12345, 123456, 1234567, 12345.67];

for (var i = 0; i < numbers.length; i++) {
 console.log(format1(numbers[i], '£ '));
}

for (var i = 0; i < numbers.length; i++) {
 console.log(format2(numbers[i], 'vnd '));
}
