function factorial(number) {
  var factorial = 1;
  for (var i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

var result = factorial(10);
console.log(result);
