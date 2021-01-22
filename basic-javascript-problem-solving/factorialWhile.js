function factorial(num) {
  var factorial = 1;
  var i = 1;
  while (i <= num) {
    factorial = factorial * i;
    i++;
  }
  return factorial;
}
var result = factorial(10);
console.log(result);
